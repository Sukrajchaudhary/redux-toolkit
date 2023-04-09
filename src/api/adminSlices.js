import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// Define a service using a base URL and expected endpoints

export const adminApi = createApi({
    reducerPath: 'admin',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/' }),
    endpoints: (builder) => ({
        // getAccoutn is just like hooks
        getAccounts: builder.query({
            query: () => `account`,
            providesTags: ['account'],
        }),
        addAccounts: builder.mutation({
            query: (amount, id) => ({
                url: 'account',
               transformResponse:(response)=>response.sort((a,b)=>b.amount-a.amount),
                method: 'POST',
                body: { amount, id }
            }),
            invalidatesTags: ['account'],
        }),
        deleteAccounts: builder.mutation({
            query: (id) => ({
                url: `account/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['account'],
        }),
        updateAccounts: builder.mutation({
            query: ({ id, amount }) => ({
                url: `account/${id}`,
                method: 'PATCH',
                body: { amount }
            }),
            invalidatesTags: ['account'],
        }),
    }),
})

export const { useGetAccountsQuery, useAddAccountsMutation, useDeleteAccountsMutation, useUpdateAccountsMutation } = adminApi