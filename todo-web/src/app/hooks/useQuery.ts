import axios, { AxiosRequestConfig } from "axios";
import { useMutation, useQuery, UseQueryResult } from "@tanstack/react-query";

const useGetAPI = <T>(
  url: string,
  queryKey?: string
): UseQueryResult<T, Error> => {
  return useQuery({
    queryKey: [queryKey || url],
    queryFn: async () => {
      const response = await axios.get<T>(url);
      if (!response.data) {
        throw new Error("Network response was not ok");
      }
      return response.data;
    },
  });
};
const usePostAPI = <T, TBody = Record<string, any>>(
  url: string,
  config?: AxiosRequestConfig<TBody>
) =>
  useMutation<T, Error, TBody>({
    mutationFn: async (body: TBody) => {
      const response = await axios.post<T>(url, body, config);
      if (!response.data) {
        throw new Error(
          `Network response was not ok. Status: ${response.status}`
        );
      }
      return response.data;
    },
  });

const usePutAPI = <T, TBody = Record<string, any>>(
  url: string,
  config?: AxiosRequestConfig<TBody>
) =>
  useMutation<T, Error, TBody>({
    mutationFn: async (body: TBody) => {
      const response = await axios.put<T>(url, body, config);
      if (!response.data) {
        throw new Error(
          `Network response was not ok. Status: ${response.status}`
        );
      }
      return response.data;
    },
  });

const useDeleteAPI = <T, TBody = Record<string, any>>(
  url: string,
  config?: AxiosRequestConfig<TBody>
) =>
  useMutation<T, Error, TBody>({
    mutationFn: async (body: TBody) => {
      const response = await axios.delete<T>(url, { data: body, ...config });
      if (!response.data) {
        throw new Error(
          `Network response was not ok. Status: ${response.status}`
        );
      }
      return response.data;
    },
  });

export { useGetAPI, usePostAPI, usePutAPI, useDeleteAPI };
