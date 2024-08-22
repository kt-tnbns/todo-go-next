import { envService } from "@/app/EnvService";
import { useGetAPI, usePutAPI } from "@/app/hooks/useQuery";
import { TodoResponse, UpdateTodoCompletedRequest } from "@/app/types/todoList";

const TodoURL = {
  GET_TODO_LIST: `${envService.getBackendUrl()}/todo-list`,
  PUT_TODO_LIST: `${envService.getBackendUrl()}/todo-list`,
};

export const useGetTodoList = () =>
  useGetAPI<TodoResponse[]>(TodoURL.GET_TODO_LIST);

export const usePutTodoList = () =>
  usePutAPI<UpdateTodoCompletedRequest>(TodoURL.PUT_TODO_LIST);
