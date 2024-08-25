package main

import (
	"todo-api/controller"
	"todo-api/controller/request"
	"todo-api/controller/response"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"go.mongodb.org/mongo-driver/mongo"
)

func main() {
	collection, _ := controller.DBConnext()
	app := createApp()
	handleRequests(app, collection)
}

func createApp() *fiber.App {
	app := fiber.New()
	app.Use(cors.New())
	return app
}

func handleRequests(app *fiber.App, collection *mongo.Collection) {
	response.GetTodoList(app, collection)
	request.PutTodoList(app, collection)
	request.PutTodoListStatus(app, collection)
	request.DeleteTodoList(app, collection)
	request.PostTodoList(app, collection)
	app.Listen(":8080")
}
