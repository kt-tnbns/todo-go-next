import { envService } from "@/app/EnvService";
import { useGetAPI, usePutAPI } from "@/app/hooks/useQuery";
import {
  TodoResponse,
  UpdateTitleTodoRequest,
  UpdateTodoStatusRequest,
} from "@/app/types/todoList";

const TodoURL = {
  GET_TODO_LIST: `${envService.getBackendUrl()}/todo-list`,
  PUT_TODO_LIST: `${envService.getBackendUrl()}/todo-list`,
  PUT_TODO_LIST_STATUS: `${envService.getBackendUrl()}/todo-list-status`,
};

export const useGetTodoList = () =>
  useGetAPI<TodoResponse[]>(TodoURL.GET_TODO_LIST);

export const usePutTodoList = () =>
  usePutAPI<UpdateTitleTodoRequest>(TodoURL.PUT_TODO_LIST);

export const usePutTodoListStatus = () =>
  usePutAPI<UpdateTodoStatusRequest>(TodoURL.PUT_TODO_LIST_STATUS);
