import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarMenu,
} from "@/components/ui/sidebar";
import UserSidebarItem from "./user-sidebar-item";

const items = [
	{
		title: "Home",
		url: "#",
		avatar: "https://github.com/shadcn.png",
		initials: "CN",
	},
	{
		title: "Inbox",
		url: "#",
		avatar: "https://github.com/shadcn.png",
		initials: "CN",
	},
	{
		title: "Calendar",
		url: "#",
		avatar: "https://github.com/shadcn.png",
		initials: "CN",
	},
	{
		title: "Search",
		url: "#",
		avatar: "https://github.com/shadcn.png",
		initials: "CN",
	},
	{
		title: "Settings",
		url: "#",
		avatar: "https://github.com/shadcn.png",
		initials: "CN",
	},
];

export function AppSidebar() {
	return (
		<Sidebar>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupContent>
						<SidebarMenu>
							{items.map((item) => (
								<UserSidebarItem key={item.title} {...item} />
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
}
