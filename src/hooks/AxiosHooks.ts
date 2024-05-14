import { DefinedInitialDataOptions, QueryKey, UseQueryResult, useQuery } from '@tanstack/react-query'
import axios, { AxiosResponse } from 'axios'
import React from 'react'

export const useAxiosGet = <T = any,>(key: QueryKey, method: string, options?: DefinedInitialDataOptions<T, Error, T, QueryKey>): UseQueryResult<T> => {
    const queryResult = useQuery<T>({
        queryKey: key,
        queryFn: () => axios.get(method).then((res) => res.data),
        ...options
    })
    return { ...queryResult }
}