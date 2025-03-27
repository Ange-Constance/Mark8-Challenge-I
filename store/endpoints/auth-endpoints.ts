import { GenericResponse, LoginRequest, LoginResponse } from "../types";
import { baseApi } from "./base-api";

export const authEndpoints = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        login: builder.mutation<GenericResponse<LoginResponse>, LoginRequest>({
            query:(DTO)=>({
                url:"/auth/login",
                method:"POST",
                body: DTO
            })
        })
    })
})

export const {useLoginMutation} = authEndpoints