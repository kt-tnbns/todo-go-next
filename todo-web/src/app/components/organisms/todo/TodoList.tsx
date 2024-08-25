import { Loading } from "@/app/components/atoms/loading/Loading";
import { TodoListCard } from "@/app/components/molecules/todoListCard/TodoListCard";
import { useTodoListState } from "@/app/components/organisms/todo/useTodoListState";
import { Box, Button } from "@mui/material";
import React from "react";

export const TodoList = () => {
  const { todoList, isTodoListLoading, refetchTodoList } = useTodoListState();
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
      {todoList?.map((todo) => (
        <TodoListCard
          key={todo.id}
          todo={todo}
          refetchTodoList={refetchTodoList}
        />
      ))}
    </Box>
  );
};
