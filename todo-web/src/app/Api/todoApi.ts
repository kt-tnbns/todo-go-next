import { envService } from "@/app/EnvService";
import { useGetAPI } from "@/app/hooks/useQuery";

const TodoURL = { GET_TODO_LIST: `${envService.getBackendUrl()}/todo-list` };

export const useGetTodoList = <T>() => useGetAPI<T>(TodoURL.GET_TODO_LIST);
