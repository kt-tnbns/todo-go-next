import { useGetAPI } from "@/app/hooks/useQuery";
import { TodoResponse } from "@/app/types/todoList";

export const useTodoListState = () => {
  const { data: todoList, isLoading: isTodoListLoading } = useGetAPI<
    TodoResponse[]
  >("http://localhost:8080/todo-list");

  return { todoList, isTodoListLoading };
};
