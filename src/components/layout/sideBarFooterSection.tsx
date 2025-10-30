"use client";

import { Headphones, Mic, Settings } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { SidebarFooter, SidebarMenu, SidebarMenuItem } from "../ui/sidebar";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

function SideBarFooterSection() {
  return (
    <>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem className="hover:bg-accent/20 w-full">
            <div className="border p-2 rounded-lg flex items-center justify-between gap-2">
              <Button
                variant={"ghost"}
                className="font-normal text-accent-foreground hover:bg-accent-foreground/10 flex items-center px-1 pr-2 py-6 rounded-sm gap-3"
              >
                <div className="relative w-fit">
                  <Avatar className="rounded-full">
                    <AvatarImage alt="cn" src="https://github.com/shadcn.png" />
                    <AvatarFallback className="rounded-full">cn</AvatarFallback>
                  </Avatar>
                  <span className="-bottom-0.5 -right-0.5 absolute size-3 rounded-full border-2 border-background bg-gray-400" />
                </div>
                <div className="text-left flex flex-col justify-center">
                  <p className="font-medium">UserName</p>
                  <span className="text-xs text-muted-foreground">
                    invisible
                  </span>
                </div>
              </Button>
              <div className="w-full text-sm flex items-center justify-evenly gap-3">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant={"ghost"}
                      className="w-fit !p-1 bg-transparent hover:bg-muted rounded-lg flex items-center justify-center"
                    >
                      <Mic className="size-4.5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className="bg-background border border-accent-foreground/30">
                    <p className="text-black">Mute</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant={"ghost"}
                      className="bg-transparent !p-1 hover:bg-muted rounded-lg flex items-center justify-center"
                    >
                      <Headphones className="size-4.5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className="bg-background border border-accent-foreground/30">
                    <p className="text-black">Deafen</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant={"ghost"}
                      className="bg-transparent !p-1 hover:bg-muted rounded-lg flex items-center justify-center"
                    >
                      <Settings className="size-4.5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className="bg-background border border-accent-foreground/30">
                    <p className="text-black">Settings</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </>
  );
}

export default SideBarFooterSection;
