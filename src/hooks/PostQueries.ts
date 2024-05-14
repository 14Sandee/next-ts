import { UseQueryResult, useQuery } from "@tanstack/react-query";
import axios from "axios";

const getPosts = async <T = any,>(id?: number): Promise<T> => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id ?? ''}`);
    return response.data;
};

const postKey = (id?: number) => ["posts", id];

export const usePostQuery = <T = any,>(id?: number): UseQueryResult<T> => {
    return useQuery({
        queryKey: postKey(id),
        queryFn: () => getPosts(id),
        enabled: id ? !!id : true,
    });
};