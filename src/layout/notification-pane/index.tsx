import NotificationBellFill from "@/components/svg/notification-bell-fill";

export default function NotificationPane() {
    return (
        <>
            <h3 className="pt-4 font-semibold text-lg border-b pb-3">
                Notification
            </h3>

            <h2 className="text-sm text-text/75 leading-normal pt-5 ">
                YESTERDAY
            </h2>
            <div className="w-full p-3 mt-2 bg-light border rounded-lg shadow hover:scale-[1.01] cursor-pointer flex">
                <div className="focus:outline-none w-8 h-8 aspect-square border rounded-full border-grey flex items-center justify-center">
                    <NotificationBellFill className="w-5 h-5 text-primary" />
                </div>
                <div className="pl-3">
                    <p className="text-sm leading-tight">
                        A property you added to your wishlist has been rented
                        out. <span className="text-primary">Click to div</span>
                    </p>
                    <p className="focus:outline-none text-xs leading-3 pt-1 text-gray-500">
                        2 hours ago
                    </p>
                </div>
            </div>
            <div className="w-full p-3 mt-2 bg-light border rounded-lg shadow hover:scale-[1.01] cursor-pointer flex">
                <div className="focus:outline-none w-8 h-8 aspect-square border rounded-full border-grey flex items-center justify-center">
                    <NotificationBellFill className="w-5 h-5 text-primary" />
                </div>
                <div className="pl-3">
                    <p className="text-sm leading-tight">
                        A property you added to your wishlist has been rented
                        out. <span className="text-primary">Click to div</span>
                    </p>
                    <p className="focus:outline-none text-xs leading-3 pt-1 text-gray-500">
                        2 hours ago
                    </p>
                </div>
            </div>
            <div className="w-full p-3 mt-2 bg-light border rounded-lg shadow hover:scale-[1.01] cursor-pointer flex">
                <div className="focus:outline-none w-8 h-8 aspect-square border rounded-full border-grey flex items-center justify-center">
                    <NotificationBellFill className="w-5 h-5 text-primary" />
                </div>
                <div className="pl-3">
                    <p className="text-sm leading-tight">
                        A property you added to your wishlist has been rented
                        out. <span className="text-primary">Click to div</span>
                    </p>
                    <p className="focus:outline-none text-xs leading-3 pt-1 text-gray-500">
                        2 hours ago
                    </p>
                </div>
            </div>
        </>
    );
}
