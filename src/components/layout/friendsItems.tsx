"use client";

import { BiSolidMessageRounded } from "react-icons/bi";
import { SlOptionsVertical } from "react-icons/sl";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
type Props = {
  first_name: string;
  last_name: string;
  image: string;
  url: string;
  initials: string;
  status: string;
};
const FriendItems = ({
  first_name,
  last_name,
  image,
  initials,
  url,
  status,
}: Props) => {
  return (
    <li className="px-2 py-3 rounded-lg hover:bg-muted">
      <Link href={url} className="flex items-center justify-between">
        <div className="flex items-center gap-3">
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
          <div className="flex flex-col justify-center">
            <p className="font-medium">{first_name + " " + last_name}</p>
            <span className="text-xs text-muted-foreground">
              {status === "online"
                ? "Online"
                : status === "offline"
                ? "Offline"
                : "Pending"}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4 text-muted-foreground">
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="bg-background p-2 hover:bg-background rounded-full flex items-center justify-center">
                <BiSolidMessageRounded className="size-4.5 text-muted-foreground" />
              </div>
            </TooltipTrigger>
            <TooltipContent className="bg-background border">
              <p className="text-black">Message</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="!outline-0">
                <TooltipTrigger asChild>
                  <div className="bg-background p-2 hover:bg-background rounded-full flex items-center justify-center">
                    <SlOptionsVertical className="size-4.5 text-muted-foreground" />
                  </div>
                </TooltipTrigger>
              </DropdownMenuTrigger>
              <DropdownMenuContent side="left">
                <DropdownMenuGroup className="space-y-1.5">
                  <DropdownMenuItem>Start video call</DropdownMenuItem>
                  <DropdownMenuItem>Start voice call</DropdownMenuItem>
                  <DropdownMenuItem variant="destructive">
                    Remove Friend
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            <TooltipContent className="bg-background border">
              <p className="text-black">More</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </Link>
    </li>
  );
};

export default FriendItems;
