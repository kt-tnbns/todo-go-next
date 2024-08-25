import { envService } from "@/app/EnvService";
import {
  useDeleteAPI,
  useGetAPI,
  usePostAPI,
  usePutAPI,
} from "@/app/hooks/useQuery";
import {
  TodoResponse,
  UpdateTitleTodoRequest,
  UpdateTodoStatusRequest,
} from "@/app/types/todoList";

const TodoURL = {
  GET_TODO_LIST: `${envService.getBackendUrl()}/todo-list`,
  POST_TODO_LIST: `${envService.getBackendUrl()}/todo-list`,
  PUT_TODO_LIST: (id: number) =>
    `${envService.getBackendUrl()}/todo-list/${id}`,
  PUT_TODO_LIST_STATUS: (id: number) =>
    `${envService.getBackendUrl()}/todo-list-status/${id}`,
  DELETE_TODO_LIST: (id: number) =>
    `${envService.getBackendUrl()}/todo-list/${id}`,
};

export const useGetTodoList = () =>
  useGetAPI<TodoResponse[]>(TodoURL.GET_TODO_LIST);

export const usePostTodoList = () =>
  usePostAPI<UpdateTitleTodoRequest>(TodoURL.POST_TODO_LIST);

export const usePutTodoList = (id: number) =>
  usePutAPI<UpdateTitleTodoRequest>(TodoURL.PUT_TODO_LIST(id));

export const usePutTodoListStatus = (id: number) =>
  usePutAPI<UpdateTodoStatusRequest>(TodoURL.PUT_TODO_LIST_STATUS(id));

export const useDeleteTodoList = (id: number) =>
  useDeleteAPI<UpdateTitleTodoRequest>(TodoURL.DELETE_TODO_LIST(id));
