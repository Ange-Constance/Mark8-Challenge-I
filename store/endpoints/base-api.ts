import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiURL="https://api.mark8.awesomity.rw";

export const baseQuery = fetchBaseQuery({
    baseUrl: apiURL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  });
  
export const baseApi = createApi({
    reducerPath:"base-api",
    baseQuery,
    endpoints:()=>({})
})