// types.ts
export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}

export interface ProductsResponse {
  products: Product[];
}

export interface Product {
  id: string | number;
  name: string;
  description: string;
  categoryId: string;
  unitPrice: number;
  thumbnail: string[];
  quantity:number
}

export interface ShopsResponse {
  stores: Shop[];
}

export interface Shop {
  id: string | number;
  image?: string;
  name: string;
  address: string;
  description: string;
}

export interface GenericResponse<T> {
  products: any[];
  data: T;
  status: number;
  message: string;
}
