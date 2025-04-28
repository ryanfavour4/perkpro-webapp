import NotificationPane from "@/layout/notification-pane";
import SideNavbar from "@/layout/side-navbar";
import TopNavbar from "@/layout/top-navbar";
import { useNavigate } from "react-router-dom";
import listingHouse1 from "@/assets/images/listing-house-1.jpg";
import loaderGif from "@/assets/images/loader.gif";
import nothingFoundGif from "@/assets/images/nothing-found.gif";

export default function SearchResult() {
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
                            <SearchResultMainContent />
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
                    <SearchResultMainContent />;
                </div>

                {/* BOTTOM TAB BAR */}
                {/* <BottomTabbar /> */}
            </section>

            {/*  */}
        </div>
    );
}

export function SearchResultMainContent() {
    return (
        <>
            <div className="px-4 bg-light-100 py-4">
                <div className="pb-10">
                    {/* Section 1 */}
                    <p className="text-lg font-semibold mb-2">Search Result:</p>

                    <div className="py-3 rounded-md flex flex-col mt-2 gap-5">
                        <HouseSearchResultCard />
                        <HouseSearchResultCard />
                    </div>
                </div>
            </div>
            <div className="hidden inset-0 flex-1 items-center justify-center fixed bg-white">
                <img
                    src={loaderGif}
                    className="size-56 rounded-lg object-cover"
                />
            </div>
            <div className="flex flex-1 items-center justify-center flex-col">
                <img
                    src={nothingFoundGif}
                    className="size-56 rounded-lg object-cover"
                />

                <p className="text-center">
                    Sorry, no property fits {`\n`} into your search {`\n`}
                    request at this time...
                </p>
            </div>
        </>
    );
}

export const HouseSearchResultCard = () => {
    const navigate = useNavigate();

    return (
        <div
            onClick={() => navigate("/property/single-sale-property-details")}
            className="bg-light-100 hover:bg-light-200 border border-dark-100/25 p-4 rounded-lg flex flex-row justify-between cursor-pointer hover:scale-[1.01]"
        >
            <div className="flex flex-col gap-2 flex-wrap text-wrap w-[60%]">
                <p className="text-lg font-semibold flex-wrap text-wrap w-fit self-start">
                    2 Bedroom Bungalow
                </p>
                <p className="">Obalende, Lagos</p>
                <p className="font-semibold">₦50,000,000</p>
            </div>
            <div className="">
                <img
                    src={listingHouse1}
                    className="w-32 h-24 rounded-lg object-cover"
                />
            </div>
        </div>
    );
};
