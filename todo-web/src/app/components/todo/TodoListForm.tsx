import { TodoResponse } from "@/app/types/todoList";
import { Checkbox, Stack, Typography } from "@mui/material";

type TodoListFormProps = Omit<TodoResponse, "id">;

export const TodoListForm = (todo: TodoListFormProps) => {
  const { title, completed } = todo;
  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{ boxShadow: 2, padding: 2, borderRadius: 2 }}
      gap={2}
    >
      <Checkbox checked={completed} />
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
