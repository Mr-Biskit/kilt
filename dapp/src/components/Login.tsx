"use client";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const router = useRouter();

    const handleLogin = async () => {
        const res = await fetch("http://localhost:8000/api/v1/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: email }),
        });
        const data = await res.json(); // later we can get user here
        router.push("/chat");
    };
    return (
        <div className="flex flex-col justify-center items-center gap-2">
            <h1 className="text-3xl">Login</h1>
            <div className="flex gap-2 items-center">
                <label htmlFor="email" className="text-xl text-blue-600">
                    Email
                </label>
                <input
                    className="border-2 border-blue-600 rounded-md p-2"
                    type="text"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <button
                className="border-2 border-blue-600 px-3  "
                onClick={handleLogin}
            >
                Login
            </button>
        </div>
    );
};

export default Login;
