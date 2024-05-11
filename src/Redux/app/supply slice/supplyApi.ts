import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const supplyApi = createApi({
    reducerPath : 'supplyApi',
    baseQuery : fetchBaseQuery({
        baseUrl : 'http://localhost:5001'
    }),
    tagTypes : [ 'supplies'] ,
    endpoints : (builder) => ({

        getAllSupplies : builder.query({
            query : () => '/supplies',
            providesTags : ['supplies']
        }
        ),

        getSingleSupply : builder.query({
            query : (id) => `/supplies/${id}`
        }),

        addNewSupply : builder.mutation({
            query : (data) => ({
                url : '/dashboard/create-supply',
                method : 'POST', 
                body : data ,
            }),
            invalidatesTags : ['supplies']
        }),

        deleteSupply : builder.mutation({
            query : (id) => ({
                url : `/dashboard/delete-supply/${id}`,
                method : 'DELETE'
            }),
            invalidatesTags : ['supplies']
        }) 
    })
})


export const {useGetAllSuppliesQuery, useGetSingleSupplyQuery, useAddNewSupplyMutation, useDeleteSupplyMutation} = supplyApi