package models

type TodoList struct {
	ID        int    `json:"id"`
	Title     string `json:"title"`
	Completed bool   `json:"completed"`
}

type UpdateStatus struct {
	ID        int  `json:"id"`
	Completed bool `json:"completed"`
}

type UpdateTitleTodoList struct {
	ID    int    `json:"id"`
	Title string `json:"title"`
}
