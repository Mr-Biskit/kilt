import { useState } from "react";
import {
  PlusIcon,
  ArrowRightIcon,
  ArrowDownLeftIcon,
} from "@heroicons/react/24/solid";

const topics = ["tailwind-css", "react"];
const questions = ["jit-compilation", "purge-files", "dark-mode"];
const random = ["variants", "plugins"];

const ChatBar = () => {
  return (
    <div className="channel-bar shadow-lg">
      <ChatBlock />
      <div className="channel-container"></div>
    </div>
  );
};

const ChatBlock = () => (
  <div className="channel-block">
    <h5 className="channel-block-text">Chats</h5>
  </div>
);

export default ChatBar;
