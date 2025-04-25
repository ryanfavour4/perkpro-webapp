import { MiniMapComponent } from "@/components/map";
import LoveHeartFill from "@/components/svg/love-heart-fill";
import Star from "@/components/svg/star";
import NotificationPane from "@/layout/notification-pane";
import SideNavbar from "@/layout/side-navbar";
import TopNavbar from "@/layout/top-navbar";
import { useNavigate } from "react-router-dom";
import listingHouse2 from "@/assets/images/listing-house-2.png";
import AtmCard from "@/components/svg/atm-card";
import ChatFill from "@/components/svg/chat-fill";

export default function PropertyDetails() {
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
                            <PropertyDetailsMainContent />
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
                    <PropertyDetailsMainContent />
                </div>

                {/* BOTTOM TAB BAR */}
                {/* <BottomTabbar /> */}
            </section>

            {/*  */}
        </div>
    );
}

export function PropertyDetailsMainContent() {
    const navigate = useNavigate();

    return (
        <>
            <div className="pb-10 pt-5">
                {/* Hero */}
                <div className="">
                    <div className="mb-4 bg-primary-100/25 rounded-full self-start m-auto px-5 py-1.5 w-fit">
                        <p className="text-xs text-center w-fit text-dark">
                            For Rent
                        </p>
                    </div>

                    <img
                        className="w-[100%] object-center h-60 md:h-72 shadow border border-dark-50/25 rounded-xl object-cover"
                        src={listingHouse2}
                    />
                    <div className="mt-8 flex flex-row justify-between mb-2">
                        <div>
                            <p className="text-xl font-[600] mb-2">
                                4 Bedroom {`\n`}Duplex
                            </p>
                            <p className="">Lekki Ajah, Lagos</p>
                        </div>
                        <div className="text-right">
                            <p className="text-sm text-right">Price</p>
                            <p className="my-1.5 text-right text-lg font-[600]">
                                ₦150k
                            </p>
                            <p className="text-right text-xs">Per Night</p>
                        </div>
                    </div>
                    <div className="border-2 w-[60%] border-dark-50/25 rounded-full mb-4" />

                    {/* Section 1 */}
                    <div>
                        <p className="text-base text-primary-100 font-semibold mb-2">
                            Property Description:
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor
                        </p>
                    </div>

                    {/* Section 2 */}
                    <div className="mt-6 flex flex-row gap-4">
                        <div className="w-1/2">
                            <p className="text-base text-primary-100 font-semibold mb-2">
                                Features:
                            </p>
                            <div>
                                <p className="list-disc">• Parking Space</p>
                                <p>• Maximum Security</p>
                                <p>• 24hrs Electricity Electric</p>
                                <p>• Fence Access to</p>
                                <p>• Major Roads etc...</p>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <p className="text-base text-primary-100 font-semibold mb-2">
                                Map:
                            </p>
                            <div className="mr-3.5 border-2 border-primary-100 rounded-md overflow-hidden h-36">
                                <MiniMapComponent />
                            </div>
                        </div>
                    </div>

                    {/* Section 3 */}
                    <div className="mt-6 flex flex-row gap-4">
                        <div className="w-1/2">
                            <p className="text-base text-primary-100 font-semibold mb-2">
                                Rent Package:
                            </p>
                            <div>
                                <p className="list-disc">
                                    • Furnished Apartment
                                </p>
                                <p>• Personal Balcony</p>
                                <p>• Cross ventilation</p>
                                <p>• AC fitted</p>
                                <p>• POP</p>
                                <p>• Tiled floor finish</p>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <p className="text-base text-primary-100 font-semibold mb-2">
                                Agent/Landord:
                            </p>
                            <div>
                                <p className="list-disc">• 20+ happy tenants</p>
                                <p>• Neutral stance</p>
                                <p>• 21+ properties sold</p>
                                <div className="flex flex-row items-center mt-2">
                                    <Star
                                        className={"text-3xl text-[#ffc107]"}
                                    />
                                    <Star
                                        className={"text-3xl text-[#ffc107]"}
                                    />
                                    <Star
                                        className={"text-3xl text-[#ffc107]"}
                                    />
                                    <Star
                                        className={"text-3xl text-[#ffc107]"}
                                    />
                                    <Star
                                        className={"text-3xl text-[#ffc107]"}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section 4 */}
                    <div className="mt-6">
                        <p className="text-base text-primary-100 font-semibold mb-2">
                            Miscellaneous:
                        </p>
                        <div className="flex items-center flex-row gap-4">
                            <button
                                onClick={() =>
                                    navigate("/property/pay-property")
                                }
                                className="btn text-light bg-error text-sm w-fit text-nowrap px-6"
                            >
                                Report Property
                            </button>

                            <button
                                onClick={() =>
                                    navigate("/property/pay-property")
                                }
                                className="btn-primary text-sm w-fit text-nowrap px-6"
                            >
                                Apply for Rent Finance
                            </button>
                        </div>
                    </div>

                    {/* Section 5 */}
                    <div className="mt-6 border-t border-dark-50/25 pt-6 pb-10 flex items-center flex-row flex-wrap gap-4">
                        <button
                            onClick={() => navigate("/property/pay-property")}
                            className="btn text-light text-sm flex items-center gap-2 px-7 bg-dark w-fit"
                        >
                            <p>Pay for property</p>
                            <AtmCard className="h-6 w-6" />
                        </button>

                        <button className="btn-primary w-fit aspect-square flex items-center justify-center">
                            <LoveHeartFill className="text-lg text-light" />
                        </button>

                        <button
                            onClick={() => navigate("/property/pay-property")}
                            className="btn-primary text-light text-sm flex items-center gap-2 px-7 w-fit"
                        >
                            <p>Chat with seller</p>
                            <ChatFill className="h-6 w-6" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
