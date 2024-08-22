import { Loading } from "@/app/components/Loading/Loading";
import { TodoListForm } from "@/app/components/Todo/TodoListForm";
import { useTodoListState } from "@/app/components/Todo/useTodoListState";
import { Box } from "@mui/material";
import React from "react";

export const TodoList = () => {
  const { todoList, isTodoListLoading } = useTodoListState();
  return isTodoListLoading ? (
    <Loading />
  ) : (
    <Box
      p={2}
      display="flex"
      flexDirection="column"
      gap={2}
      sx={{
        borderRadius: 2,
        boxShadow: 2,
        backgroundColor: "background.paper",
      }}
    >
      {todoList?.map(({ id, ...rest }) => (
        <TodoListForm key={id} {...rest} />
      ))}
    </Box>
  );
};
