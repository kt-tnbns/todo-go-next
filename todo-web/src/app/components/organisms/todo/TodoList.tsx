import { Loading } from "@/app/components/loading/Loading";
import { TodoListCard } from "@/app/components/molecules/TodoListCard";
import { useTodoListState } from "@/app/components/organisms/todo/useTodoListState";
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
        <TodoListCard key={id} {...rest} />
      ))}
    </Box>
  );
};
