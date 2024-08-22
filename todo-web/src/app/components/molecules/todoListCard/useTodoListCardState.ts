import { usePutTodoList } from "@/app/Api/todoApi";

export const useTodoListCardState = () => {
  const { mutate } = usePutTodoList();

  const handleOnCheck = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    const req = { id, completed: event.target.checked };
    mutate(req, {
      onSuccess: () => {},
      onError: () => {},
    });
  };
  return { handleOnCheck };
};
