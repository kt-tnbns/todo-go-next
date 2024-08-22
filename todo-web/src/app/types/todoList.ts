export type TodoResponse = {
  id: number;
  title: string;
  completed: boolean;
};

export type UpdateTodoCompletedRequest = {
  id: number;
  completed: boolean;
};
