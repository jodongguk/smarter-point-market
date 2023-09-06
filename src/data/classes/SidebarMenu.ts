import type SidebarMenuItem from "./SidebarMenuItem";

export default class SidebarMenu {
	name: string;
    subMenus: Array<SidebarMenuItem>;
	link: string;
	icon: string | null = ''


	constructor({
		name,
        subMenus,
		link,
		icon,
	}: {
		name: string;
        subMenus: Array<SidebarMenuItem>;
		link: string;
		icon: string;

	}) {
        this.name = name;
        this.subMenus = subMenus;
		this.link = link;
		this.icon = icon;
	}
}
