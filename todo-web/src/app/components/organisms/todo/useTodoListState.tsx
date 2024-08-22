import { useGetTodoList } from "@/app/Api/todoApi";
import { TodoResponse } from "@/app/types/todoList";

export const useTodoListState = () => {
  const { data: todoList, isLoading: isTodoListLoading } = useGetTodoList();

  return { todoList, isTodoListLoading };
};
