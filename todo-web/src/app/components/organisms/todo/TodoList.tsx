import { EmptyState } from "@/app/components/atoms/empty-state/EmptyState";
import { Loading } from "@/app/components/atoms/loading/Loading";
import { TodoListCard } from "@/app/components/molecules/todoListCard/TodoListCard";
import { useTodoListState } from "@/app/components/organisms/todo/useTodoListState";
import { Box, Button, Stack, TextField } from "@mui/material";
import React from "react";

export const TodoList = () => {
  const {
    todoList,
    isTodoListLoading,
    isAdding,
    refetchTodoList,
    handleOnAdd,
    handleOnChange,
    handleOnCancel,
    handleOnSubmit,
  } = useTodoListState();
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
      {todoList || isAdding ? (
        todoList?.map((todo) => (
          <TodoListCard
            key={todo.id}
            todo={todo}
            refetchTodoList={refetchTodoList}
          />
        ))
      ) : (
        <EmptyState />
      )}
      <Stack>
        {isAdding ? (
          <Stack gap={1}>
            <TextField onChange={handleOnChange} />
            <Stack direction="row" gap={1} justifyContent="end">
              <Button variant="outlined" onClick={handleOnCancel}>
                Cancel
              </Button>
              <Button variant="contained" onClick={handleOnSubmit}>
                Submit
              </Button>
            </Stack>
          </Stack>
        ) : (
          <Box display="flex" justifyContent="end">
            <Button variant="contained" onClick={handleOnAdd}>
              Add
            </Button>
          </Box>
        )}
      </Stack>
    </Box>
  );
};
