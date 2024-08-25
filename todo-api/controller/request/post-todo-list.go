package request

import (
	"context"
	"todo-api/models"

	"github.com/gofiber/fiber/v2"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func PostTodoList(app *fiber.App, collection *mongo.Collection) {
	app.Post("/todo-list", func(c *fiber.Ctx) error {
		var lastTodo models.TodoList

		opts := options.FindOne().SetSort(bson.D{{Key: "id", Value: -1}})
		err := collection.FindOne(context.Background(), bson.D{}, opts).Decode(&lastTodo)
		if err != nil && err != mongo.ErrNoDocuments {
			return c.Status(fiber.StatusInternalServerError).SendString(err.Error())
		}

		var todo models.TodoList
		if err := c.BodyParser(&todo); err != nil {
			return c.Status(fiber.StatusBadRequest).SendString(err.Error())
		}

		todo.ID = lastTodo.ID + 1
		todo.Completed = false

		result, err := collection.InsertOne(context.Background(), todo)

		if result.InsertedID == nil {
			return c.Status(fiber.StatusInternalServerError).SendString(err.Error())
		}
		if err != nil {
			return c.Status(fiber.StatusInternalServerError).SendString(err.Error())
		}

		return c.Status(fiber.StatusCreated).JSON(todo)
	})

}
