import { SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { X } from "lucide-react";
import Link from "next/link";

type Props = {
	first_name: string;
	last_name: string;
	image: string;
	url: string;
	initials: string;
	status: string;
	id: string | number;
};

const UserSidebarItem = ({
	first_name,
	last_name,
	image,
	initials,
	url,
	status,
	id,
}: Props) => {
	return (
		<SidebarMenuItem
			key={id}
			className="user-menu-item cursor-pointer group/item"
		>
			<SidebarMenuButton className="gap-4" size={"lg"}>
				<Link
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
					{/* text-black */}
					<span
						className={
							"text-base text-muted-foreground group-hover/item:text-black"
						}
					>
						{first_name + " " + last_name}
					</span>
				</Link>
				{/*  */}
				<X
					className={
						"transition-all duration-200 cursor-pointer hidden opacity-0 group-hover/item:inline-block group-hover/item:opacity-100"
					}
				/>
			</SidebarMenuButton>
		</SidebarMenuItem>
	);
};

export default UserSidebarItem;
