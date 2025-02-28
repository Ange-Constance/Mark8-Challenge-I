"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { AiOutlineMail, AiFillLock } from "react-icons/ai";
import { BsArrowRight, BsEye } from "react-icons/bs";
import { useLoginMutation } from "@/store/endpoints/auth-endpoints";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isLoading, error }] = useLoginMutation();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await login({ email, password }).unwrap();

      const accessToken = response?.data?.accessToken;

      if (accessToken) {
        localStorage.setItem("token", accessToken);
        router.push("/home");
      } else {
        console.log("No accessToken in response:", response);
      }
    } catch (err) {
      throw new Error("ERROR");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 bg-[url('/product-bg.png')] bg-cover bg-center">
      <div className="bg-gray-50 flex flex-col lg:flex-row w-full max-w-6xl shadow-lg rounded-lg overflow-hidden">
        <div className="w-full lg:w-1/2 bg-gray-100 flex flex-col py-8 px-8 lg:px-12">
          <img
            src="/logo.png"
            alt="Mark8 Logo"
            width={48}
            height={48}
            className="mb-4"
          />
          <div className="mt-20">
            <h1 className="text-2xl font-bold text-gray-700">Mark8</h1>
            <p className="text-gray-500 mb-8">By Awesomity Lab</p>
          </div>
          <p className="text-sm text-gray-400 mt-auto">© 2024 Awesomity Lab</p>
        </div>

        <div className="w-full lg:w-1/2 bg-white p-8 lg:p-12">
          <h2 className="text-xl text-gray-700 mb-4 font-bold">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-6 relative">
              <label className="flex items-center text-sm text-gray-500 mb-2 font-medium">
                Email
              </label>
              <AiOutlineMail className="absolute left-3 top-11 text-[#C1CF16]" />
              <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            <div className="mb-6 relative">
              <label className="flex items-center text-sm text-gray-500 mb-2 font-medium">
                Password
              </label>
              <AiFillLock className="absolute left-3 top-11 text-[#C1CF16]" />
              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <BsEye className="absolute right-3 top-11 text-black cursor-pointer" />
            </div>

            {error && (
              <p className="text-red-500 text-sm">
                {(error as any)?.data?.message || "Login failed"}
              </p>
            )}

            <div className="flex flex-row items-center justify-between">
              <div className="text-right text-sm mb-4">
                <a
                  href="#"
                  className="text-black hover:underline font-semibold underline"
                >
                  Forgot Password?
                </a>
              </div>
              <button
                type="submit"
                className="w-[125px] py-3 bg-[#C1CF16] text-black rounded-lg shadow hover:bg-green-600 transition font-semibold"
                disabled={isLoading}
              >
                {isLoading ? "Loading..." : "Login"}{" "}
                <BsArrowRight className="inline ml-2" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
