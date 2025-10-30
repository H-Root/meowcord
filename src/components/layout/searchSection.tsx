"use client";
import { Search } from "lucide-react";
import { ChangeEvent } from "react";
import { useSearchParams, useRouter } from "next/navigation";
function SearchSection() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams.toString());
    const s = e.target.value;
    if (s.length > 0) {
      params.set("search", e.target.value);
    } else {
      params.delete("search");
    }

    router.push(`?${params.toString()}`);
  };
  return (
    <div className="p-4 !w-full">
      <form
        action=""
        className="border border-accent-foreground flex items-center bg-muted rounded-lg p-2 gap-2"
      >
        <Search size={18} className="text-muted-foreground" />
        <input
          type="text"
          placeholder="Search"
          className="w-full outline-0"
          onChange={handleSearch}
        />
      </form>
    </div>
  );
}

export default SearchSection;
