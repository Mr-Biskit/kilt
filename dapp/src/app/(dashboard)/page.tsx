import ContentContainer from "@/components/ContentContainer";
import ChatBar from "@/components/ChatBar";
import SideBar from "@/components/SideBar";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="flex">
      <SideBar />
      <ChatBar />
      <ContentContainer />
    </div>
  );
};

export default page;
