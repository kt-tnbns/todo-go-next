import { useTodoListCardState } from "@/app/components/molecules/todoListCard/useTodoListCardState";
import { TodoResponse } from "@/app/types/todoList";
import { Checkbox, Stack, Typography } from "@mui/material";

type TodoListCardProps = {
  todo: TodoResponse;
};

export const TodoListCard = ({ todo }: TodoListCardProps) => {
  const { id, title, completed } = todo;
  const { handleOnCheck } = useTodoListCardState();
  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{ boxShadow: 2, padding: 2, borderRadius: 2 }}
      gap={2}
    >
      <Checkbox checked={completed} onChange={(e) => handleOnCheck(e, id)} />
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
