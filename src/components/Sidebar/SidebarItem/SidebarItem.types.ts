import { ReactNode } from "react";

export type SidebarItemProps = {
    icon: ReactNode;
    title: string;
    link?: string;
    isSubmenu?: boolean;
    submenu?: SidebarItemProps[];
}