package main

import (
	"todo-api/controller/response"

	"github.com/gin-gonic/gin"
)

func main() {
	router := createRouter()
	handleRequests(router)
}

func createRouter() *gin.Engine {
	router := gin.Default()
	router.Use(func(c *gin.Context) {
		c.Writer.Header().Add("Access-Control-Allow-Origin", "*")
		c.Next()
	})
	return router
}

func handleRequests(router *gin.Engine) {
	response.GetTodoList(router)
}
