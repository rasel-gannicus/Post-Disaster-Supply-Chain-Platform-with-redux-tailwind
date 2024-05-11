import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const supplyApi = createApi({
    reducerPath : 'supplyApi',
    baseQuery : fetchBaseQuery({
        baseUrl : 'http://localhost:5001'
    }),
    endpoints : (builder) => ({
        getAllSupplies : builder.query({
            query : () => '/supplies'
        })
    })
})


export const {useGetAllSuppliesQuery} = supplyApi