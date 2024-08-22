import { usePutTodoList } from "@/app/api/todoApi";

export const useTodoListCardState = (refetchTodoList: () => void) => {
  const { mutate } = usePutTodoList();

  const handleOnCheck = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    const req = { id, completed: event.target.checked };
    mutate(req, {
      onSuccess: refetchTodoList,
      onError: () => {},
    });
  };
  return { handleOnCheck };
};
