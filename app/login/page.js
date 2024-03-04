"use client";
import { logIn } from "@/redux/features/auth-slice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Login() {
  const dispatch = useDispatch();
  const [userName, setUsername] = useState("hello");
  const handleLeft = () => {
    console.log("hello");
    console.log(dispatch(logIn(userName)));
  };
  const username = useSelector((state) => state.authReducer.value.username);
  console.log("test", username);
  const handleRight = () => {};
  return (
    <main className="min-h-screen flex justify-center bg-white">
      <button className=" text-black" onClick={handleLeft}>
        1
      </button>
      <button className=" text-black" onClick={handleRight}>
        1
      </button>
    </main>
  );
}
