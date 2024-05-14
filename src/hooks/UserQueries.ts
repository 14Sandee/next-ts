import { UseQueryResult, useQuery } from "@tanstack/react-query";
import axios from "axios";

const getUsers = async <T = any,>(id?: number): Promise<T> => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id ?? ''}`);
    return response.data;
};

const userKey = (id?: number) => ["users", id];

export const useUserQuery = <T = any,>(id?: number): UseQueryResult<T> => {
    return useQuery({
        queryKey: userKey(id),
        queryFn: () => getUsers(id),
        enabled: id ? !!id : true,
    });
};