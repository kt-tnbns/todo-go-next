import { useGetAPI } from "@/app/hooks/useQuery";
import { TodoResponse } from "@/app/types/todoList";

export const useHomePageState = () => {
  const { data: todoList } = useGetAPI<TodoResponse[]>(
    "http://localhost:8080/todo-list"
  );
  return { todoList };
};
