package response

import (
	"net/http"
	"todo-api/controller/response/mock"
	"todo-api/utils"
)

func GetTodoList(w http.ResponseWriter, r *http.Request) {
	todoList := mock.ExampleTodoList
	utils.EncodeToJSON(w, r, todoList)
}
