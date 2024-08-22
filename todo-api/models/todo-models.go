package models

type TodoList struct {
	ID        int    `json:"id"`
	Title     string `json:"title"`
	Completed bool   `json:"completed"`
}

type UpdateCompleted struct {
	ID        int  `json:"id"`
	Completed bool `json:"completed"`
}
