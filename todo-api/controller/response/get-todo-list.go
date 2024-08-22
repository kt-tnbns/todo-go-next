package response

import (
	"context"
	"log"
	"todo-api/models"

	"github.com/gofiber/fiber/v2"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

func GetTodoList(app *fiber.App, collection *mongo.Collection) {
	cursor, err := collection.Find(context.Background(), bson.D{})
	if err != nil {
		log.Fatal(err)
	}

	var todoList []models.TodoList
	if err = cursor.All(context.Background(), &todoList); err != nil {
		log.Fatal(err)
	}

	app.Get("/todo-list", func(c *fiber.Ctx) error {
		return c.JSON(todoList)
	})
}
