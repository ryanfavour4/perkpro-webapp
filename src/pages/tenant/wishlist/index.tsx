import NotificationPane from "@/layout/notification-pane";
import SideNavbar from "@/layout/side-navbar";
import TopNavbar from "@/layout/top-navbar";
import emptyBoxGif from "@/assets/images/empty-box-web.gif";
import { useNavigate } from "react-router-dom";
import { abbreviateNumber } from "@/utils/format-number";
import listingHouse1 from "@/assets/images/listing-house-1.jpg";
import atmCardIcon from "@/assets/images/atm-card-icon.png";

export default function Wishlist() {
    return (
        <div className="min-h-screen bg-light-300">
            <TopNavbar />

            {/* DESKTOP div */}
            <main className="mt-4 hidden w-full md:mt-0 md:block">
                <div className="mx-auto grid grid-cols-12 gap-5">
                    <div className="h-full min-h-screen overflow-y-auto md:col-span-3 lg:col-span-2">
                        <SideNavbar />
                    </div>
                    <div className="grid grid-cols-10 gap-5 overflow-hidden md:col-span-9 lg:col-span-10 pb-5">
                        <div className="col-span-7">
                            <WishlistMainContent />
                        </div>
                        {/*  */}
                        <div className="col-span-3 border-l-2 px-2">
                            <NotificationPane />
                        </div>
                    </div>
                </div>
            </main>

            {/* MOBILE div */}
            <section className="container block px-2 md:hidden pb-5">
                <div className="col-span-7">
                    <WishlistMainContent />
                </div>

                {/* BOTTOM TAB BAR */}
                {/* <BottomTabbar /> */}
            </section>

            {/*  */}
        </div>
    );
}

export function WishlistMainContent() {
    return (
        <>
            <div className="flex flex-col gap-4 overflow-y-auto pt-6">
                <WishListCard />
                <WishListCard />
                <WishListCard />
                <WishListCard />
            </div>

            <div className="flex flex-1 items-center justify-center flex-col">
                <img
                    src={emptyBoxGif}
                    className="size-56 rounded-lg object-cover"
                />

                <p className="text-center">You currently have no wishlist</p>
            </div>
        </>
    );
}

export const WishListCard = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-light-100 hover:bg-light-200 border border-dark-100/25  p-4 rounded-lg flex flex-row gap-3 justify-between">
            <div>
                <img
                    src={listingHouse1}
                    className="w-40 h-36 rounded-lg object-cover"
                />
            </div>
            <div className="flex flex-col gap-1 flex-wrap text-wrap w-[75%]">
                <h4
                    onClick={() => navigate("/tenant/property-details")}
                    className="text-lg font-semibold text-primary-100 flex-wrap text-wrap w-fit self-start"
                >
                    2 Bedroom Bungalow Building
                </h4>
                <p className="">Obalende, Lagos</p>
                <div className="bg-primary-100 rounded-full self-start px-3.5">
                    <p className="text-sm text-center text-light-100 w-fit">
                        For Rent
                    </p>
                </div>
                <div className="flex flex-row justify-between">
                    <div>
                        <h4 className="font-medium capitalize text-lg">
                            ₦{abbreviateNumber(50000000)}
                        </h4>
                        <p className="text-[12px]">Per Annum</p>
                    </div>
                    <span
                        onClick={() => navigate("/property/pay-property")}
                        className="bg-primary-100 py-2 self-start px-3 rounded-md mr-3"
                    >
                        <img
                            className="w-5 h-5 object-contain"
                            src={atmCardIcon}
                            alt="Image"
                        />
                    </span>
                </div>
            </div>
        </div>
    );
};
