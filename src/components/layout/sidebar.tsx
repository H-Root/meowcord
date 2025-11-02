import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuItem,
	SidebarSeparator,
} from "@/components/ui/sidebar";

import UserSidebarItem from "./user-sidebar-item";
import CommandDialogDemo from "./CommandDialogDemo";
import SideBarFooterSection from "./sideBarFooterSection";
import data from "@/db.json";

export function AppSidebar() {
	const items = data
		.map((d) => {
			const initials = d.first_name.charAt(0) + d.last_name.charAt(0);
			const url = `/${d.id}`;
			const item = { ...d, url: url, initials: initials };
			return item;
		})
		.filter((t) => t.status !== "pending");

	return (
		<Sidebar>
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<CommandDialogDemo items={items} />
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarSeparator className="!ml-auto !w-[93%]" />
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupContent>
						<SidebarMenu>
							{items.map((item) => (
								<UserSidebarItem key={item.id} {...item} />
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
			<SideBarFooterSection />
		</Sidebar>
	);
}
