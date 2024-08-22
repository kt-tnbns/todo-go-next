import { useGetTodoList } from "@/app/api/todoApi";
import { TodoResponse } from "@/app/types/todoList";

export const useTodoListState = () => {
  const {
    data: todoList,
    isLoading: isTodoListLoading,
    refetch: refetchTodoList,
  } = useGetTodoList();

  return { todoList, isTodoListLoading, refetchTodoList };
};
