import { useGetTodoList } from "@/app/api/todoApi";

export const useTodoListState = () => {
  const {
    data: todoList,
    isLoading: isTodoListLoading,
    refetch: refetchTodoList,
  } = useGetTodoList();

  return { todoList, isTodoListLoading, refetchTodoList };
};
