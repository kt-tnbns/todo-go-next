import { useGetTodoList, usePostTodoList } from "@/app/api/todoApi";
import { useState } from "react";

export const useTodoListState = () => {
  const [isAdding, setIsAdding] = useState(false);
  const [title, setTitle] = useState<string>();
  const {
    data: todoList,
    isLoading: isTodoListLoading,
    refetch: refetchTodoList,
  } = useGetTodoList();

  const { mutateAsync: createTodoList } = usePostTodoList();

  const handleOnAdd = () => {
    setIsAdding(true);
  };

  const handleOnCancel = () => {
    setIsAdding(false);
  };

  const handleOnSubmit = () => {
    const req = { title };
    createTodoList(req, {
      onSuccess: () => {
        refetchTodoList();
      },
    });
    setIsAdding(false);
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setTitle(value);
  };

  return {
    todoList,
    isTodoListLoading,
    refetchTodoList,
    handleOnAdd,
    isAdding,
    handleOnCancel,
    handleOnSubmit,
    handleOnChange,
  };
};
