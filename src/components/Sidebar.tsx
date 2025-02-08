import { DocumentIcon } from "../icons/DocumentIcon";
import { LinksIcon } from "../icons/LinksIcon";
import { Logo } from "../icons/Logo";
import { TagsIcon } from "../icons/TagsIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import LogoutButton from "./Logout";
import { SidebarItem } from "./SidebarItem";
import Switch from "./ThemeToggle";

export function Sidebar() {
    return (
    <div className="h-screen bg-white  w-72 fixed left-0 top-0 pl-6 dark:bg-black-200 dark:text-white">
        <div className="flex text-2xl pt-8 items-center ">
            <div className="pr-2 text-purple-600">
                <Logo />
            </div>
            Brainly
            <div className="pl-8 pt-3">
                <Switch/>

            </div>
        </div>
        <div className="pt-8 pl-4 ">
            <SidebarItem text="Twitter" icon={<TwitterIcon />} />
            <SidebarItem text="Youtube" icon={<YoutubeIcon />} />
            <SidebarItem text="Document" icon={<DocumentIcon />} />
            <SidebarItem text="Link" icon={<LinksIcon />} />
            <SidebarItem text="Tag" icon={<TagsIcon />} />
        </div>
        <div className="pl-4 pt-60 ">            
            <div>
                <LogoutButton/>
            </div>

        </div>
    </div>
    );
}