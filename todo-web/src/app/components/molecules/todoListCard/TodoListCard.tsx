import { useTodoListCardState } from "@/app/components/molecules/todoListCard/useTodoListCardState";
import { TodoResponse } from "@/app/types/todoList";
import { Checkbox, Stack, Typography } from "@mui/material";

type TodoListCardProps = Omit<TodoResponse, "id">;

export const TodoListCard = (todo: TodoListCardProps) => {
  const { title, completed } = todo;
  const { handleOnCheck } = useTodoListCardState();
  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{ boxShadow: 2, padding: 2, borderRadius: 2 }}
      gap={2}
    >
      <Checkbox checked={completed} onChange={handleOnCheck} />
      <Typography
        sx={{
          textDecoration: completed ? "line-through" : "none",
        }}
      >
        {title}
      </Typography>
    </Stack>
  );
};
