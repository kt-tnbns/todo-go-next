import { useTodoListCardState } from "@/app/components/molecules/todoListCard/useTodoListCardState";
import { TodoMode } from "@/app/enum/todo";
import { TodoResponse } from "@/app/types/todoList";
import {
  Box,
  Button,
  Checkbox,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

type TodoListCardProps = {
  todo: TodoResponse;
  refetchTodoList: () => void;
};

export const TodoListCard = ({ todo, refetchTodoList }: TodoListCardProps) => {
  const { id, title, completed } = todo;
  const {
    handleOnCheck,
    handleOnEdit,
    handleOnCancel,
    isViewMode,
    handleTitleChange,
    handleOnUpdate,
  } = useTodoListCardState(refetchTodoList, title);
  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{ boxShadow: 2, padding: 2, borderRadius: 2 }}
      gap={2}
    >
      <Stack direction="row" alignItems="center">
        <Checkbox checked={completed} onChange={(e) => handleOnCheck(e, id)} />
        {isViewMode ? (
          <Typography
            sx={{
              textDecoration: completed ? "line-through" : "none",
            }}
          >
            {title}
          </Typography>
        ) : (
          <TextField defaultValue={title} onChange={handleTitleChange} />
        )}
      </Stack>
      {isViewMode ? (
        <Box display="flex" gap={2}>
          <Button variant="outlined" onClick={handleOnEdit}>
            Edit
          </Button>
          <Button variant="contained" color="error">
            Delete
          </Button>
        </Box>
      ) : (
        <Box display="flex" gap={2}>
          <Button variant="outlined" onClick={handleOnCancel}>
            Cancel
          </Button>
          <Button variant="contained" onClick={() => handleOnUpdate(id)}>
            Update
          </Button>
        </Box>
      )}
    </Box>
  );
};
