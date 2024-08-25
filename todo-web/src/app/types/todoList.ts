export type TodoResponse = {
  id: number;
  title: string;
  completed: boolean;
};

export type UpdateTodoStatusRequest = {
  id: number;
  completed: boolean;
};

export type UpdateTitleTodoRequest = {
  id: number;
  title: string;
};
