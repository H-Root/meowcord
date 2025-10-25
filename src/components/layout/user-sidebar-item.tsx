import React from "react";
import { SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

type Props = {
	title: string;
	url: string;
	avatar: string;
	initials: string;
};

const UserSidebarItem = ({ title, url, avatar, initials }: Props) => {
	return (
		<SidebarMenuItem key={title}>
			<SidebarMenuButton className="gap-4" size={"lg"} asChild>
				<a href={url}>
					<Avatar>
						<AvatarImage src={avatar} />
						<AvatarFallback>{initials}</AvatarFallback>
					</Avatar>
					<span className="text-base">{title}</span>
				</a>
			</SidebarMenuButton>
		</SidebarMenuItem>
	);
};

export default UserSidebarItem;
