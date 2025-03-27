import { useLoginMutation } from "@/store/endpoints/auth-endpoints";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function useLogin(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const [login, res] = useLoginMutation();
    const router = useRouter();
    
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await login({ email, password }).unwrap();

      const accessToken = response?.data?.accessToken;

      if (accessToken) {
        localStorage.setItem("token", accessToken);
        document.cookie = `token=${accessToken};path=/`;

        router.push("/dashboard/home");
      } else {
        console.log("No accessToken in response:", response);
      }
    } catch {
      throw new Error("ERROR");
    }
  };

  return {...res, email, setEmail, password, setPassword, handleSubmit}

}