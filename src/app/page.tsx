import FriendItems from "@/components/layout/friendsItems";
import SearchSection from "@/components/layout/searchSection";
import React from "react";
import data from "@/db.json";
import Header from "@/components/layout/header";
type FriendsSearchParams = {
  search: string;
  sta?: "all" | "online" | "pending";
};
const home = async ({
  searchParams,
}: {
  searchParams: Promise<FriendsSearchParams>;
}) => {
  const { search } = (await searchParams) || "";
  const { sta } = (await searchParams) || null;
  let items;
  if (!sta) {
    items = data
      .map((d) => {
        const initials = d.first_name.charAt(0) + d.last_name.charAt(0);
        const url = `/${d.id}`;
        const item = { ...d, url: url, initials: initials };
        return item;
      })
      .filter((u) => u.status === "online");
  } else if (sta === "all") {
    items = data
      .map((d) => {
        const initials = d.first_name.charAt(0) + d.last_name.charAt(0);
        const url = `/${d.id}`;
        const item = { ...d, url: url, initials: initials };
        return item;
      })
      .filter((u) => u.status !== "pending");
  } else {
    items = data
      .map((d) => {
        const initials = d.first_name.charAt(0) + d.last_name.charAt(0);
        const url = `/${d.id}`;
        const item = { ...d, url: url, initials: initials };
        return item;
      })
      .filter((u) => u.status === sta);
  }
  if (search) {
    items = data
      .map((d) => {
        const initials = d.first_name.charAt(0) + d.last_name.charAt(0);
        const url = `/${d.id}`;
        const item = { ...d, url: url, initials: initials };
        return item;
      })
      .filter((u) => u.first_name.toLowerCase().startsWith(search));
  }
  return (
    <>
      <Header />
      <SearchSection />
      <div className=" p-4 space-y-4">
        <p className="text-muted-foreground capitalize font-medium">
          {!sta ? "Online" : sta === "all" ? "All Friends" : "Pending"} -{" "}
          {items!.length}
        </p>
        <ul className="py-1 *:border-t mr-2">
          {items.map((u) => (
            <FriendItems key={u.username} {...u} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default home;
