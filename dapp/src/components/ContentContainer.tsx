import TopNavigation from "./TopNavigation";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
// import { useState } from 'react';

const ContentContainer = () => {
  return (
    <div className="content-container">
      <TopNavigation />
      <div className="content-wrapper">
        <div className="content-list">
          <Post
            name="Ada"
            timestamp="one week ago"
            text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
          ipsum dolor sit amet consectetur adipisicing elit.`}
          />
          <Post
            name="Leon"
            timestamp="one week ago"
            text={`Lorem ipsum dolor. `}
          />
          <Post name="Jill" timestamp="5 days ago" text={`Lorem.`} />
          <Post
            name="Ellie"
            timestamp="4 days ago"
            text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. `}
          />
          <Post
            name="Chris"
            timestamp="4 days ago"
            text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
          ipsum dolor sit amet consectetur adipisicing elit.
          
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
          ipsum dolor sit amet consectetur adipisicing elit.`}
          />
          <Post
            name="Claire"
            timestamp="2 days ago"
            text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. `}
          />
          <Post
            name="Albert"
            timestamp="22 hours ago"
            text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. ☺️ `}
          />
          <Post
            name="Rebecca"
            timestamp="3 hours ago"
            text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit.`}
          />
          <Post
            name="H.U.N.K"
            timestamp="Just now"
            text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
          ipsum dolor sit amet consectetur adipisicing elit.`}
          />
        </div>
        <BottomBar />
      </div>
    </div>
  );
};

const BottomBar = () => (
  <div className="bottom-bar">
    <input
      type="text"
      placeholder="Enter message..."
      className="bottom-bar-input"
    />
    <SendIcon />
  </div>
);

interface PostProps {
  name: string;
  timestamp: string;
  text: string;
}

const Post = ({ name, timestamp, text }: PostProps) => {
  return (
    <div className={"post"}>
      <div className="avatar-wrapper">
        <img
          src={`https://avatars.dicebear.com/api/open-peeps/2.svg`}
          alt=""
          className="avatar"
        />
      </div>

      <div className="post-content">
        <p className="post-owner">
          {name}
          <small className="timestamp">{timestamp}</small>
        </p>
        <p className="post-text">{text}</p>
      </div>
    </div>
  );
};

const SendIcon = () => (
  <PaperAirplaneIcon className="text-orange dark:shadow-lg mx-2 dark:text-primary w-12 h-12" />
);

export default ContentContainer;
