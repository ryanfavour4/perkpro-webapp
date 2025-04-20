import { JSX } from "react";
import { Link, useLocation } from "react-router-dom";

type TLink = {
    link: {
        path: string;
        icon: JSX.Element;
        title: string;
        isActive: boolean;
    };
};

export default function SideMenuItem({ link }: TLink) {
    const { pathname } = useLocation();

    const isActive = (() => {
        // check if the current path is related to the current menu path and not just the default path, eg: the path can be "/videos" or "/videos/create" you can return true, but if the path is just "/" or "/dashboard" alone without anything added in front, which is the default path then return false
        if (link.path && link.path !== "/") {
            if (pathname.includes(link.path)) return true;
            return false;
        }
        // check if the current path is just "/" or "/dashboard" alone without anything added in front, which is the default path
        if (link.path === "/" && pathname === "/") return true;
    })();

    return (
        <>
            <Link
                to={link.path}
                className={`relative flex items-center gap-3 overflow-hidden rounded-xl px-2 py-2 ${isActive ? `bg-light text-primary` : `bg-transparent text-light hover:bg-light/75`}`}
            >
                <span
                    className={`rounded-lg border p-1.5 ${isActive ? "border-primary bg-primary text-white" : "border-2 border-light text-light"}`}
                >
                    {link.icon}{" "}
                </span>

                <p>{link.title}</p>

                {isActive && (
                    <span className="absolute -right-[5%] h-6 w-6 rounded-full bg-primary" />
                )}
            </Link>
        </>
    );
}
