"use client";
import { useSearchParams, useRouter } from "next/navigation";

import { FaUserFriends } from "react-icons/fa";

const Header = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const state = searchParams.get("sta") || null;
  const handleStatus = (status: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    if (status) {
      params.set("sta", status);
    } else {
      params.delete("sta");
    }
    router.push(`?${params.toString()}`);
  };
  return (
    <header className="text-black w-full h-fit p-4 flex items-center gap-4">
      <div className="flex items-center gap-2 text-muted-foreground">
        <FaUserFriends size={25} />
        <p className="font-semibold text-xl">Friends</p>
      </div>
      <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
      <ul className="flex items-center gap-4 *:font-semibold text-muted-foreground *:hover:bg-muted-foreground/20 *:cursor-pointer">
        <li
          className={`p-2 rounded-lg transition-all duration-200 ${
            !state ? "bg-muted-foreground/20" : ""
          }`}
          onClick={() => handleStatus(null)}
        >
          Online
        </li>
        <li
          onClick={() => handleStatus("all")}
          className={`${
            state?.includes("all") ? "bg-muted-foreground/20" : ""
          } p-2 rounded-lg transition-all duration-200`}
        >
          All
        </li>

        <li
          className={`p-2 rounded-lg transition-all duration-200 ${
            state?.includes("pending") ? "bg-muted-foreground/20" : ""
          }`}
          onClick={() => handleStatus("pending")}
        >
          Pending
        </li>
      </ul>
    </header>
  );
};
export default Header;
