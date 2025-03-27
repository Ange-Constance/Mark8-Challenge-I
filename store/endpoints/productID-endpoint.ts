
import { GenericResponse,ProductsResponse } from "../types";
import { baseApi } from "./base-api";

const productIdEndpoints = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getRecentProductsId: builder.query<GenericResponse<ProductsResponse>, string>({
            query: (id) => ({
                url: `/products/${id}`, 
            }),
          }),

    })
})

export const {useGetRecentProductsIdQuery} = productIdEndpoints