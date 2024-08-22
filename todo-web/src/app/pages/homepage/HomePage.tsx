import { TodoList } from "@/app/components/todo/TodoList";
import { useHomePageState } from "@/app/pages/homepage/useHomePageState";
import { Box, Typography } from "@mui/material";
import React from "react";

export const HomePage = () => {
  return (
    <Box>
      <TodoList />
    </Box>
  );
};
