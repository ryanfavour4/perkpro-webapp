import Input from "@/components/input";
import ArrowLeft from "@/components/svg/arrow-left";
import ChevronRight from "@/components/svg/chevron-right";
import Logo from "@/components/svg/logo";
import MenuRight from "@/components/svg/menu-right";
import MenuRightClose from "@/components/svg/menu-right-close";
import NotificationBell from "@/components/svg/notification-bell";
import SearchMicroscope from "@/components/svg/search-microscope";
import UserCircle from "@/components/svg/user-circle";
import { useTheme } from "@/context/theme";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DashboardSquaresFill from "@/components/svg/dashboard-squares-fill";
import HelpInfoFill from "@/components/svg/help-info-fill";
import LogoutDoorFill from "@/components/svg/logout-door-fill";
import LoveHeartFill from "@/components/svg/love-heart-fill";
import HomeFill from "@/components/svg/home-fill";
import UptrendLine from "@/components/svg/uptrend-line";
import CalenderScheduleFill from "@/components/svg/calender-schedule-fill";
import ChatFill from "@/components/svg/chat-fill";
import NotificationBellFill from "@/components/svg/notification-bell-fill";

const generalLinks = [
    {
        path: "/support",
        icon: <HelpInfoFill className="text-lg" />,
        title: "Support",
        isActive: false,
    },
    {
        path: "/login/#",
        icon: <LogoutDoorFill className="text-lg" />,
        title: "Logout",
        isActive: false,
    },
];

const menuLinks = [
    {
        path: "/tenant/home",
        icon: <DashboardSquaresFill className="text-xl" />,
        title: "Home",
        isActive: false,
    },
    {
        path: "/search",
        icon: <SearchMicroscope className="text-xl" />,
        title: "Search",
        isActive: false,
    },
    {
        path: "/tenant/schedules",
        icon: <CalenderScheduleFill className="text-xl" />,
        title: "Schedules",
        isActive: false,
    },
    {
        path: "/tenant/notification",
        icon: <NotificationBellFill className="text-xl" />,
        title: "Notification",
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

export default function TopNavbar({ title }: { title?: string }) {
    const navigate = useNavigate();
    const { theme } = useTheme();
    const [sideMenuOpen, setSideMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(
        window.matchMedia("(max-width: 768px)").matches
    );

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.matchMedia("(max-width: 768px)").matches);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            {/* top nav */}
            <header
                className={`px-2 py-4 md:border-b md:px-0 ${theme === "dark" ? "md:bg-light-200" : "md:bg-light"}`}
            >
                <div className="container">
                    <div className="flex w-full items-center justify-between gap-4">
                        {title && isMobile ? (
                            <button
                                className={`btn w-fit p-1.5`}
                                onClick={() => navigate(-1)}
                            >
                                <ArrowLeft className="text-xl" />
                            </button>
                        ) : (
                            <button
                                onClick={() => setSideMenuOpen(!sideMenuOpen)}
                                className="btn inline w-fit p-1.5 md:hidden"
                            >
                                <MenuRight className="text-3xl" />
                            </button>
                        )}

                        {title && isMobile ? (
                            <h4 className="flex items-center justify-center text-base font-semibold capitalize">
                                {title}
                            </h4>
                        ) : (
                            <Link to={"/"}>
                                <div className="mx-auto flex w-fit flex-col items-center justify-center md:mx-0 md:w-full md:flex-row md:gap-4">
                                    <Logo className="h-full max-h-11 w-full max-w-28" />
                                </div>
                            </Link>
                        )}

                        <div className="flex items-center justify-between gap-10 md:w-1/2">
                            <div className="hidden w-full max-w-sm md:inline">
                                <Input
                                    type="text"
                                    name="search"
                                    onKeyDown={() => navigate("/search")}
                                    autoComplete="on"
                                    className="!rounded-[4rem]"
                                    state={{ value: "" }}
                                    setState={(value) => console.log(value)}
                                    icon={
                                        <SearchMicroscope className="h-6 w-6" />
                                    }
                                />
                            </div>

                            <Link
                                className="btn relative ml-auto hidden w-fit p-1.5 md:inline"
                                to={"/notifications"}
                            >
                                <NotificationBell className="text-3xl" />
                                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-xs text-white">
                                    2
                                </span>
                            </Link>

                            <Link
                                className="btn inline w-fit p-1.5"
                                to={"/profile"}
                            >
                                <UserCircle className="text-3xl md:text-4xl" />
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            {/* SIDE MENU SLIDE NAV */}
            <div
                onClick={() => setSideMenuOpen(!sideMenuOpen)}
                className={`fixed inset-0 z-10 bg-dark/25 backdrop-blur-sm md:hidden ${sideMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                <div
                    onClick={(e) => e.stopPropagation()}
                    className="flex h-full w-3/4 flex-col gap-4 overflow-y-auto bg-gradient-to-tr from-light to-light px-2 pb-16 pt-6"
                >
                    <div className="mb-4 flex items-center justify-between">
                        <div className="flex w-full items-center">
                            <Logo className="h-full max-h-16 w-full max-w-28" />
                        </div>

                        <button
                            onClick={() => setSideMenuOpen(!sideMenuOpen)}
                            className="btn inline w-fit p-1.5 md:hidden"
                        >
                            <MenuRightClose className="text-3xl" />
                        </button>
                    </div>

                    {menuLinks.map((link) => (
                        <Link
                            key={link.title}
                            to={link.path}
                            className={`flex items-center gap-6 rounded-lg px-3 py-4 text-dark hover:bg-accent/10 ${link.isActive ? `bg-accent/25 text-text` : `bg-transparent text-text hover:bg-primary/25`}`}
                        >
                            {link.icon} <p>{link.title}</p>
                            <ChevronRight className="ml-auto text-xl" />
                        </Link>
                    ))}

                    <hr />

                    {generalLinks.map((link) => (
                        <Link
                            key={link.title}
                            to={link.path}
                            className={`flex items-center gap-6 rounded-lg px-3 py-4 text-dark hover:bg-accent/10 ${link.isActive ? `bg-accent/25 text-text` : `bg-transparent text-text hover:bg-primary/25`}`}
                        >
                            {link.icon} <p>{link.title}</p>
                            <ChevronRight className="ml-auto text-xl" />
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}
