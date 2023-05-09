import { useState } from "react";
import {
    PlusIcon,
    ArrowRightIcon,
    ArrowDownLeftIcon,
} from "@heroicons/react/24/solid";
import { useUser } from "@/contexts/userContext";

const topics = ["tailwind-css", "react"];
const questions = ["jit-compilation", "purge-files", "dark-mode"];
const random = ["variants", "plugins"];

const ChatBar = () => {
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
