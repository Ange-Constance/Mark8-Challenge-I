
import { GenericResponse, LoginRequest, LoginResponse, Product, ProductsResponse } from "../types";
import { baseApi } from "./base-api";

const authEndpoints = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getRecentProducts: builder.query<GenericResponse<ProductsResponse>, void>({
            query: () => ({
                url: "/products"}),
          }),
          getTopStores: builder.query<any[], void>({
            query: () => ({
                url: "/stores"
            }),
          }),
    })
})

export const {useGetRecentProductsQuery} = authEndpoints