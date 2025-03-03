
import { GenericResponse, LoginRequest, LoginResponse, Product, ShopsResponse } from "../types";
import { baseApi } from "./base-api";

const authEndpoints = baseApi.injectEndpoints({
  overrideExisting: true,
    endpoints:(builder)=>({
          getTopStores: builder.query<GenericResponse<ShopsResponse>, void>({
            query: () => ({
                url: "/store"
            }),
          }),
        
    })
    
})

export const {useGetTopStoresQuery} = authEndpoints