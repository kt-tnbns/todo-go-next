import { TodoListForm } from "@/app/components/todo/TodoListForm";
import { useHomePageState } from "@/app/pages/homepage/useHomePageState";
import { TodoResponse } from "@/app/types/todoList";
import { Box, Typography } from "@mui/material";
import React from "react";

export const TodoList = () => {
  const { todoList } = useHomePageState();
  return (
    <Box
      sx={{
        p: 2,
        display: "flex",
        flexDirection: "column",
        gap: 2,
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
