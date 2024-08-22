package response

import (
	"todo-api/controller/response/mock"

	"github.com/gin-gonic/gin"
)

func GetTodoList(router *gin.Engine) {
	todoList := mock.ExampleTodoList
	router.GET("/todo-list", func(c *gin.Context) {
		c.JSON(200, todoList)
	})
	router.Run()
}
