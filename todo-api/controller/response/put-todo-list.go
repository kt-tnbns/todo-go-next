package response

import (
	"context"
	"todo-api/models"

	"github.com/gofiber/fiber/v2"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

func PutTodoList(app *fiber.App, collection *mongo.Collection) {
	app.Put("/todo-list", func(c *fiber.Ctx) error {
		var update models.UpdateCompleted
		if err := c.BodyParser(&update); err != nil {
			return c.Status(fiber.StatusBadRequest).SendString(err.Error())
		}

		filter := bson.D{{Key: "id", Value: update.ID}}
		updateCompleted := bson.D{
			{Key: "$set", Value: bson.D{
				{Key: "completed", Value: update.Completed},
			}},
		}

		result, err := collection.UpdateOne(context.Background(), filter, updateCompleted)
		if err != nil {
			return c.Status(fiber.StatusInternalServerError).SendString(err.Error())
		}

		if result.MatchedCount == 0 {
			return c.Status(fiber.StatusNotFound).SendString("Todo List not found")
		}

		return c.Status(fiber.StatusOK).SendString("Todo List updated successfully")
	})
}
