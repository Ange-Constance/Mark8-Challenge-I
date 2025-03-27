// services/storeEndpoints.ts
import { GenericResponse, ShopsResponse } from "../types";
import { baseApi } from "./base-api";

const storeEndpoints = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getRecentStores: builder.query<GenericResponse<ShopsResponse>, void>({
      query: () => "/store",
    }),
  }),
});

export const { useGetRecentStoresQuery } = storeEndpoints;
