import { FC } from "react";
import {
  PlusIcon,
  FireIcon,
  Cog6ToothIcon,
  UserGroupIcon,
  ChatBubbleLeftRightIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/solid";

interface SideBarProps {}

interface SideBarIconProps {
  icon: JSX.Element;
  text?: string;
}

const SideBar: FC<SideBarProps> = ({}) => {
  return (
    <div
      className="fixed top-0 left-0 h-screen w-16 flex flex-col
                      bg-white dark:bg-gray-900 shadow-lg justify-between items-center"
    >
      <div className="flex flex-col">
        <SideBarIcon icon={<FireIcon />} /> <SideBarIcon icon={<PlusIcon />} />
        <SideBarIcon icon={<UserGroupIcon />} />
        <SideBarIcon icon={<ChatBubbleLeftRightIcon />} />
        <Divider />
      </div>

      <div className="flex flex-col">
        <Divider />
        <SideBarIcon icon={<Cog6ToothIcon />} />
        <SideBarIcon icon={<ArrowRightOnRectangleIcon />} />
      </div>
    </div>
  );
};

const SideBarIcon = ({ icon, text = "tooltip 💡" }: SideBarIconProps) => (
  <div className="sidebar-icon group h-12 w-12">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;
