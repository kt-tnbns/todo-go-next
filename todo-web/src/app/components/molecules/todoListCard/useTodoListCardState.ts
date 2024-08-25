import {
  useDeleteTodoList,
  usePutTodoList,
  usePutTodoListStatus,
} from "@/app/api/todoApi";
import { TodoMode } from "@/app/enum/todo";
import { TodoResponse } from "@/app/types/todoList";
import { useState } from "react";

export const useTodoListCardState = (
  refetchTodoList: () => void,
  todo: TodoResponse
) => {
  const { id, title: initialTitle, completed } = todo;

  const { mutateAsync: updateTodoList } = usePutTodoList(id);
  const { mutateAsync: updateTodoListStatus } = usePutTodoListStatus(id);
  const { mutateAsync: deleteTodoList } = useDeleteTodoList(id);

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

  const handleOnUpdate = () => {
    const req = { title };
    updateTodoList(req, {
      onSuccess: () => {
        refetchTodoList();
        setMode(TodoMode.VIEW);
      },
    });
  };

  const handleOnCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    const req = { completed: event.target.checked };
    updateTodoListStatus(req, {
      onSuccess: refetchTodoList,
      onError: () => {},
    });
  };

  const handleOnConfirmDelete = () => {
    deleteTodoList(
      {},
      {
        onSuccess: refetchTodoList,
      }
    );
  };

  const handleOnDelete = () => {
    setMode(TodoMode.DELETE);
  };

  return {
    isViewMode,
    mode,
    title,
    handleOnCheck,
    handleOnEdit,
    handleOnCancel,
    handleOnUpdate,
    handleOnDelete,
    handleOnConfirmDelete,
    handleTitleChange,
  };
};
