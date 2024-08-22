package response

import (
	"todo-api/controller/response/mock"

	"github.com/gofiber/fiber/v2"
)

func GetTodoList(app *fiber.App) {
	todoList := mock.ExampleTodoList
	app.Get("/todo-list", func(c *fiber.Ctx) error {
		return c.JSON(todoList)
	})
}
