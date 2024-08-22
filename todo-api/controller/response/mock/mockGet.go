package mock

import (
	"todo-api/models"
)

var ExampleTodoList = []models.TodoList{
	{
		ID:        1,
		Title:     "Front-end",
		Completed: true,
	},
	{
		ID:        2,
		Title:     "Back-end",
		Completed: true,
	},
	{
		ID:        3,
		Title:     "Database",
		Completed: false,
	},
}
