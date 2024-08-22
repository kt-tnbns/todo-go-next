import { useMutation, useQuery, UseQueryResult } from "@tanstack/react-query";

const useGetAPI = <T>(
  url: string,
  queryKey?: string
): UseQueryResult<T, Error> => {
  return useQuery({
    queryKey: [queryKey || url],
    queryFn: async () => {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data: T = await response.json();
      return data;
    },
  });
};
const usePostAPI = <T>(url: string, config?: RequestInit) =>
  useMutation<T, Error, RequestInit>({
    mutationFn: async (requestInit: RequestInit = {}) => {
      const response = await fetch(url, {
        method: "POST",
        ...config,
        ...requestInit,
      });
      if (!response.ok) {
        throw new Error(
          `Network response was not ok. Status: ${response.status}`
        );
      }
      return (await response.json()) as T;
    },
  });

const usePutAPI = <T>(url: string, config?: RequestInit) =>
  useMutation<T, Error, RequestInit>({
    mutationFn: async (requestInit: RequestInit = {}) => {
      const response = await fetch(url, {
        method: "PUT",
        ...config,
        ...requestInit,
      });
      if (!response.ok) {
        throw new Error(
          `Network response was not ok. Status: ${response.status}`
        );
      }
      return (await response.json()) as T;
    },
  });

const useDeleteAPI = <T>(url: string, config?: RequestInit) =>
  useMutation<T, Error, RequestInit>({
    mutationFn: async (requestInit: RequestInit = {}) => {
      const response = await fetch(url, {
        method: "DELETE",
        ...config,
        ...requestInit,
      });
      if (!response.ok) {
        throw new Error(
          `Network response was not ok. Status: ${response.status}`
        );
      }
      return (await response.json()) as T;
    },
  });

export { useGetAPI, usePostAPI, usePutAPI, useDeleteAPI };
