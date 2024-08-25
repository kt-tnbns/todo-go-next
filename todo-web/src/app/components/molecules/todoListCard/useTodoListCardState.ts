import { usePutTodoList, usePutTodoListStatus } from "@/app/api/todoApi";
import { TodoMode } from "@/app/enum/todo";
import { useState } from "react";

export const useTodoListCardState = (
  refetchTodoList: () => void,
  initialTitle: string
) => {
  const { mutateAsync: updateTodoList } = usePutTodoList();
  const { mutateAsync: updateTodoListStatus } = usePutTodoListStatus();

  const [mode, setMode] = useState<TodoMode>(TodoMode.VIEW);
  const [title, setTitle] = useState(initialTitle);

  const isViewMode = mode === TodoMode.VIEW;

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleOnEdit = () => {
    setMode(TodoMode.EDIT);
  };

  const handleOnCancel = () => {
    setMode(TodoMode.VIEW);
    setTitle(initialTitle);
  };

  const handleOnUpdate = (id: number) => {
    const req = { id, title };
    updateTodoList(req, {
      onSuccess: () => {
        refetchTodoList();
        setMode(TodoMode.VIEW);
      },
    });
  };

  const handleOnCheck = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    const req = { id, completed: event.target.checked };
    updateTodoListStatus(req, {
      onSuccess: refetchTodoList,
      onError: () => {},
    });
  };

  return {
    handleOnCheck,
    isViewMode,
    handleOnEdit,
    handleOnCancel,
    handleOnUpdate,
    title,
    handleTitleChange,
  };
};
