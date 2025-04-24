import DashboardSquaresFill from "@/components/svg/dashboard-squares-fill";
import HelpInfoFill from "@/components/svg/help-info-fill";
import LogoutDoorFill from "@/components/svg/logout-door-fill";
import SideMenuItem from "./side-menu-item";
import LoveHeartFill from "@/components/svg/love-heart-fill";
import HomeFill from "@/components/svg/home-fill";
import UptrendLine from "@/components/svg/uptrend-line";
import CalenderScheduleFill from "@/components/svg/calender-schedule-fill";
import ChatFill from "@/components/svg/chat-fill";

export default function SideNavbar() {
    const menuLinks = [
        {
            path: "/tenant/home",
            icon: <DashboardSquaresFill className="text-xl" />,
            title: "Home",
            isActive: false,
        },
        {
            path: "/tenant/schedules",
            icon: <CalenderScheduleFill className="text-xl" />,
            title: "Schedules",
            isActive: false,
        },
        {
            path: "/tenant/wishlist",
            icon: <LoveHeartFill className="text-xl" />,
            title: "Wishlist",
            isActive: false,
        },
        {
            path: "/tenant/search-companies",
            icon: <HomeFill className="text-xl" />,
            title: "Search Companies",
            isActive: false,
        },
        {
            path: "/rent-finance",
            icon: <UptrendLine className="text-xl" />,
            title: "Rent Finance",
            isActive: false,
        },
        {
            path: "/tenant/chat",
            icon: <ChatFill className="text-lg" />,
            title: "Chat",
            isActive: false,
        },
    ];

    const generalLinks = [
        {
            path: "/support",
            icon: <HelpInfoFill className="text-lg" />,
            title: "Support",
            isActive: false,
        },
        {
            path: "/tenant/login/#",
            icon: <LogoutDoorFill className="text-lg" />,
            title: "Logout",
            isActive: false,
        },
    ];

    return (
        <div className={`h-full border-r pb-16 shadow bg-primary`}>
            <div className="flex max-h-svh flex-col gap-8 overflow-y-auto px-2 py-6">
                {/* MENU */}
                <div className="">
                    <h3 className="mb-5 text-light">MENU</h3>
                    {/* overflow */}
                    <div className="max-h-96 overflow-y-auto">
                        <div className="flex w-full flex-col gap-4">
                            {menuLinks.map((link) => (
                                <SideMenuItem key={link.title} link={link} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* GENERAL */}
                <div className="">
                    <h3 className="mb-5 text-light">GENERAL</h3>
                    {/* overflow */}
                    <div className="max-h-96 overflow-y-auto">
                        <div className="flex w-full flex-col gap-4">
                            {generalLinks.map((link) => (
                                <SideMenuItem key={link.title} link={link} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
