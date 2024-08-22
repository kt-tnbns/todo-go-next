package main

import (
	"todo-api/controller/response"

	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()
	handleRequests(app)
}

func handleRequests(app *fiber.App) {
	response.GetTodoList(app)
	app.Listen(":8080")
}
