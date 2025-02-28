export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
 
  accessToken:string
  refreshToken:string
 
}

export interface ProductsResponse{
  products: Product[]
}

export interface Product {
    id: string | number; 
    name: string;
    description: string;
    categoryId: string;
    unitPrice: number;
    thumbnail: string[];
   
  }

  export interface GenericResponse<T>{
    data:T
    status: number
    message: string
  }


  