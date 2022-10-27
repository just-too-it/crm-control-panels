import React from "react";
import { NewsProps } from "components/News/News.types";
import { SidebarProps } from "components/Sidebar/Sidebar.types";
import { CalendarIcon, FinanceIcon, HomeIcon, LogoutIcon, MapIcon, ProfileIcon, SearchIcon, SettingsIcon, TablesIcon, WidgetIcon } from "components/icons";
import { SidebarItemProps } from "components/Sidebar/SidebarItem/SidebarItem.types";
import { PagesLinks } from "./pagesLinks";

const sidebarItemsSubmenu: SidebarItemProps[] = [
    {
        title: 'Настройки профиля',
        icon: <ProfileIcon width={28} height={32} stroke={'#1C1C1E'}/>,
        link: ''
    },
    {
        title: 'Управление финансами',
        icon: <FinanceIcon width={32} height={32} fill={'#1C1C1E'}/>,
        link: ''
    }
]

export const sidebarItems: SidebarItemProps[] = [
    {
        title: 'Главная',
        icon: <HomeIcon width={32} height={32} fill={'#1C1C1E'}/>,
        link: PagesLinks.HOME_PAGE
    },
    {
        title: 'Поиск адресов',
        icon: <SearchIcon width={32} height={32} fill={'#000000'}/>,
        link: PagesLinks.ADDRESS_PAGE
    },
    {
        title: 'Таблицы',
        icon: <TablesIcon width={32} height={32} fill={'#1C1C1E'}/>,
        link: ''
    },
    {
        title: 'Календарь',
        icon: <CalendarIcon width={32} height={32} fill={'#1C1C1E'}/>,
        link: ''
    },
    {
        title: 'Карты',
        icon: <MapIcon width={25} height={32} fill={'#1C1C1E'}/>,
        link: ''
    },
    {
        title: 'Виджеты',
        icon: <WidgetIcon width={32} height={30} fill={'#1C1C1E'}/>,
        link: ''
    },
    {
        title: 'Настройки',
        icon: <SettingsIcon width={32} height={34} fill={'#1C1C1E'}/>,
        isSubmenu: true,
        submenu: sidebarItemsSubmenu
    },
    {
        title: 'Выход',
        icon: <LogoutIcon width={32} height={30} fill={'#000000'}/>,
        link: ''
    }
]

