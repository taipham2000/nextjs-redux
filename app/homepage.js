"use client";

import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

export default function HomePage() {
  const router = useRouter();
  const handleLogin = () => {
    router.push("/login");
  };
  const userName = useSelector((state) => state.authReducer.value.usename);
  console.log("test", userName);
  return <button onClick={handleLogin}>Login</button>;
}
