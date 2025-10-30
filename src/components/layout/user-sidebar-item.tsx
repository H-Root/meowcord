"use client";
import { SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { X } from "lucide-react";
import { useState } from "react";

type Props = {
  first_name: string;
  last_name: string;
  image: string;
  url: string;
  initials: string;
  status: string;
};

const UserSidebarItem = ({
  first_name,
  last_name,
  image,
  initials,
  url,
  status,
}: Props) => {
  const [hovered, setHovered] = useState(false);
  return (
    <SidebarMenuItem key={first_name} className="user-menu-item cursor-pointer">
      <SidebarMenuButton
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="gap-4"
        size={"lg"}
      >
        <a
          href={url}
          className="transition-all duration-200 w-full h-full flex items-center gap-4"
        >
          <div className="relative w-fit">
            <Avatar className="rounded-full border">
              <AvatarImage alt="cn" src={image} />
              <AvatarFallback className="rounded-full">
                {initials}
              </AvatarFallback>
            </Avatar>
            <span
              className={`-bottom-0.5 -right-0.5 absolute size-3 rounded-full border-2 border-background ${
                status === "online"
                  ? "bg-green-500"
                  : status === "offline"
                  ? "bg-gray-400"
                  : "bg-violet-500"
              }`}
            />
          </div>
          <span
            className={`text-base  ${
              hovered ? "text-black" : "text-muted-foreground"
            }`}
          >
            {first_name + " " + last_name}
          </span>
        </a>
        <X
          className={`transition-all duration-200 cursor-pointer  ${
            hovered ? "inline-block opacity-100" : "hidden opacity-0"
          }`}
        />
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
};

export default UserSidebarItem;
