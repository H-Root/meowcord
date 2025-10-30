"use client";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

import { Button } from "../ui/button";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Link from "next/link";
type Props = {
  id: number;
  first_name: string;
  last_name: string;
  image: string;
  url: string;
  initials: string;
  username: string;
  status: string;
};
function CommandDialogDemo({ items }: { items: Props[] }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const users = items.map((u) => u).filter((u) => u.status !== "pending");
  const visibleUsers = query ? users : users.slice(0, 3);
  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        className="w-full bg-muted-foreground hover:bg-muted-foreground/80 cursor-pointer"
      >
        Find of start conversation
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen} className="py-4">
        <Command
          filter={(value: string, search: string) => {
            const v = value.toString().toLowerCase();
            const s = search.toString().trim().toLowerCase();
            if (s) {
              return v.toLowerCase().includes(s) ? 1 : 0;
            }
            const index = users.findIndex(
              (u) =>
                `${u.first_name} ${u.last_name}`.toLowerCase() ===
                v.toLowerCase()
            );

            return index > -1 && index < 3 ? 1 : 0;
          }}
        >
          <CommandInput
            onValueChange={(value: string) => setQuery(value)}
            placeholder="where would you like to go?"
            className="text-xl border border-muted-foreground p-3 py-6 bg-muted-foreground/20"
          />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Results">
              {visibleUsers.map((u) => (
                <CommandItem
                  value={`${u.first_name} ${u.last_name}`}
                  key={u.username}
                >
                  <div className="px-2 rounded-lg hover:bg-muted">
                    <Link
                      href={u.url}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <div className="relative w-fit">
                          <Avatar className="rounded-full border">
                            <AvatarImage alt={u.initials} src={u.image} />
                            <AvatarFallback className="rounded-full">
                              {u.initials}
                            </AvatarFallback>
                          </Avatar>
                          <span
                            className={`-bottom-0.5 -right-0.5 absolute size-3 rounded-full border-2 border-background ${
                              u.status === "online"
                                ? "bg-green-500"
                                : u.status === "offline"
                                ? "bg-gray-400"
                                : "bg-violet-500"
                            }`}
                          />
                        </div>
                        <div className="flex flex-col justify-center">
                          <p className="font-medium">
                            {u.first_name + " " + u.last_name}
                          </p>
                          <span className="text-xs text-muted-foreground">
                            {u.status === "online"
                              ? "Online"
                              : u.status === "offline"
                              ? "Offline"
                              : "Pending"}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  );
}

export default CommandDialogDemo;
