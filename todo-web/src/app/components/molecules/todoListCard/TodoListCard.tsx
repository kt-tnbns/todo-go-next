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
import { Fragment, useMemo } from "react";

type TodoListCardProps = {
  todo: TodoResponse;
  refetchTodoList: () => void;
};

export const TodoListCard = ({ todo, refetchTodoList }: TodoListCardProps) => {
  const { title, completed } = todo;
  const {
    mode,
    handleOnCheck,
    handleOnEdit,
    handleOnCancel,
    handleTitleChange,
    handleOnUpdate,
    handleOnDelete,
    handleOnConfirmDelete,
  } = useTodoListCardState(refetchTodoList, todo);

  const EditButtonGroup = () => (
    <Fragment>
      <Button variant="outlined" onClick={handleOnCancel}>
        Cancel
      </Button>
      <Button variant="contained" onClick={handleOnUpdate}>
        Update
      </Button>
    </Fragment>
  );

  const DeleteButtonGroup = () => (
    <Fragment>
      <Button variant="outlined" onClick={handleOnCancel}>
        Cancel
      </Button>
      <Button variant="contained" onClick={handleOnConfirmDelete}>
        Confirm
      </Button>
    </Fragment>
  );

  const ViewButtonGroup = () => (
    <Fragment>
      <Button variant="outlined" onClick={handleOnEdit}>
        Edit
      </Button>
      <Button variant="contained" color="error" onClick={handleOnDelete}>
        Delete
      </Button>
    </Fragment>
  );

  const renderManageButtonGroup = useMemo(() => {
    switch (mode) {
      case TodoMode.VIEW:
        return <ViewButtonGroup />;
      case TodoMode.EDIT:
        return <EditButtonGroup />;
      default:
        return <DeleteButtonGroup />;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode]);

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
        {mode === TodoMode.EDIT ? (
          <TextField defaultValue={title} onChange={handleTitleChange} />
        ) : (
          <Fragment>
            <Checkbox checked={completed} onChange={(e) => handleOnCheck(e)} />
            <Typography
              sx={{
                textDecoration: completed ? "line-through" : "none",
              }}
            >
              {title}
            </Typography>
          </Fragment>
        )}
      </Stack>
      <Box display="flex" gap={2}>
        {renderManageButtonGroup}
      </Box>
    </Box>
  );
};
