package main

import (
	"fmt"
	"net/http"
	"todo-api/controller/response"
)

func main() {
	handleRequests()
}

func homePage(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "todo-api")
}

func handleRequests() {
	http.HandleFunc("/", homePage)
	http.HandleFunc("/todo-list", response.GetTodoList)
	http.ListenAndServe(":8080", nil)
}
