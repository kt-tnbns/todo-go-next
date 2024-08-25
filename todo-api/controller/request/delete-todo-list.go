package request

import (
	"context"

	"github.com/gofiber/fiber/v2"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

func DeleteTodoList(app *fiber.App, collection *mongo.Collection) {
	app.Delete("/todo-list/:id", func(c *fiber.Ctx) error {
		id, err := c.ParamsInt("id")
		if err != nil {
			return c.Status(fiber.StatusBadRequest).SendString(err.Error())
		}

		filter := bson.D{{Key: "id", Value: id}}
		result, err := collection.DeleteOne(context.Background(), filter)
		if err != nil {
			return c.Status(fiber.StatusInternalServerError).SendString(err.Error())
		}

		if result.DeletedCount == 0 {
			return c.Status(fiber.StatusNotFound).SendString("Todo List not found")
		}

		return c.Status(fiber.StatusOK).SendString("Todo List deleted successfully")
	})
}
