"use client";
import { useState } from "react";
import {
    PlusIcon,
    ArrowRightIcon,
    ArrowDownLeftIcon,
} from "@heroicons/react/24/solid";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const topics = ["tailwind-css", "react"];
const questions = ["jit-compilation", "purge-files", "dark-mode"];
const random = ["variants", "plugins"];
const BASE_URL = axios.create({
    baseURL: "http://localhost:8000/api/v1",
});
async function getUsers() {
    const users = await BASE_URL.get("/user");
    return users;
}

const ChatBar = () => {
    console.log("ChatBar");
    const { data, isError, isLoading } = useQuery({
        queryKey: ["users"],
        queryFn: () => getUsers(),
    });
    console.log("users", data);
    return (
        <div className="channel-bar shadow-lg">
            <ChatBlock />
            <div className="channel-container">
                <p className="text-lg bg-gray-300 px-5 py-1 cursor-pointer">
                    Username
                </p>
            </div>
        </div>
    );
};

const ChatBlock = () => (
    <div className="channel-block">
        <h5 className="channel-block-text">Chats</h5>
    </div>
);

export default ChatBar;
