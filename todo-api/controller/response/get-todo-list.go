package response

import (
	"context"
	"todo-api/models"

	"github.com/gofiber/fiber/v2"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

func GetTodoList(app *fiber.App, collection *mongo.Collection) {
	app.Get("/todo-list", func(c *fiber.Ctx) error {
		// Query the database for the latest data
		cursor, err := collection.Find(context.Background(), bson.D{})
		if err != nil {
			return c.Status(fiber.StatusInternalServerError).SendString(err.Error())
		}
		defer cursor.Close(context.Background())

		var todoList []models.TodoList
		if err = cursor.All(context.Background(), &todoList); err != nil {
			return c.Status(fiber.StatusInternalServerError).SendString(err.Error())
		}

		// Return the latest data as JSON
		return c.JSON(todoList)
	})
}
