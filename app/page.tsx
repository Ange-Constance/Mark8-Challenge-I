"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Login from "./login/app";
import "./globals.css";

export default function HomePage() {
  const router = useRouter();

  // useEffect(() => {
  //   router.push("/login");
  // }, [router]);

  return <Login />;
}
