import { useTheme } from "@/context/theme";
import SideNavbar from "@/layout/side-navbar";
import TopNavbar from "@/layout/top-navbar";
import demoHouse1 from "@/assets/images/demo-house-1.jpg";
import NotificationBellFill from "@/components/svg/notification-bell-fill";
import HomeHouseCards, {
    MockHouseCardData,
} from "@/components/home-house-cards";
import emptyBoxGif from "@/assets/images/empty-box-web.gif";
import pwanLogo from "@/assets/images/pwan-logo.png";
import { Link } from "react-router-dom";

export default function Home() {
    const { theme } = useTheme();
    console.log(theme);

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
                            <div className="my-5">
                                <h1 className="text-lg font-bold">
                                    Welcome, John Doe
                                </h1>

                                <div className="overflow-hidden items-center flex justify-between bg-gradient-to-b from-primary-100 to-primary-200 py-8 px-4 rounded-lg shadow-md mt-3 gap-4">
                                    <h2 className="text-xl font-bold text-light">
                                        Get affordable Properties on PerkPro
                                    </h2>

                                    <div className="w-1/2 flex flex-row justify-between relative h-full">
                                        <img
                                            className="w-48 h-24 object-cover relative rounded-lg -right-16 -top-5 rotate-6"
                                            src={demoHouse1}
                                        />
                                        <img
                                            className="w-48 h-24 object-cover relative rounded-lg right-0 -bottom-5 rotate-6"
                                            src={demoHouse1}
                                        />
                                    </div>
                                </div>
                            </div>

                            <NewPropertiesAround />
                            <PropertiesForRent />
                            <RealEstateCompaniesAndAgents />
                        </div>
                        {/*  */}
                        <div className="col-span-3 border-l-2 px-2">
                            <h3 className="pt-8 font-semibold text-lg border-b pb-3">
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
                                        A property you added to your wishlist
                                        has been rented out.{" "}
                                        <span className="text-primary">
                                            Click to div
                                        </span>
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
                                        A property you added to your wishlist
                                        has been rented out.{" "}
                                        <span className="text-primary">
                                            Click to div
                                        </span>
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
                                        A property you added to your wishlist
                                        has been rented out.{" "}
                                        <span className="text-primary">
                                            Click to div
                                        </span>
                                    </p>
                                    <p className="focus:outline-none text-xs leading-3 pt-1 text-gray-500">
                                        2 hours ago
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* MOBILE div */}
            <section className="container block px-2 md:hidden pb-5">
                <div className="col-span-7">
                    <div className="my-5">
                        <h1 className="text-lg font-bold">Welcome, John Doe</h1>

                        <div className="overflow-hidden items-center flex justify-between bg-gradient-to-b from-primary-100 to-primary-200 py-8 px-4 rounded-lg shadow-md mt-3 gap-1">
                            <h2 className="text-base font-semibold text-light">
                                Get affordable Properties on PerkPro
                            </h2>

                            <div className="flex flex-row justify-center items-center relative h-full">
                                <img
                                    className="w-48 h-24 object-cover relative rounded-lg -right-16 -top-5 rotate-6"
                                    src={demoHouse1}
                                />
                                <img
                                    className="w-48 h-24 object-cover relative rounded-lg left-0 -bottom-5 rotate-6"
                                    src={demoHouse1}
                                />
                            </div>
                        </div>
                    </div>

                    <NewPropertiesAround />
                    <PropertiesForRent />
                    <RealEstateCompaniesAndAgents />
                </div>

                {/* BOTTOM TAB BAR */}
                {/* <BottomTabbar /> */}
            </section>

            {/*  */}
        </div>
    );
}

export function NewPropertiesAround() {
    return (
        <>
            <div className="mt-16">
                <div className="border-b-2 border-primary-100 mb-5">
                    <div className="px-6 bg-primary-100 w-fit py-2 rounded-t-xl">
                        <h4 className="text-light-100 font-semibold text-sm">
                            New Properties around you
                        </h4>
                    </div>
                </div>

                {/* //TODO: New Properties around you */}
                <div className="flex justify-between gap-3 overflow-x-auto md:gap-6">
                    {MockHouseCardData?.length > 0 ? (
                        MockHouseCardData?.map((property) => (
                            <HomeHouseCards
                                key={property.id}
                                data={{ ...property }}
                            />
                        ))
                    ) : (
                        <div className="pb-6 flex-1 flex gap-3 flex-col justify-center items-center">
                            <img
                                src={emptyBoxGif}
                                style={{
                                    width: 200,
                                    height: 200,
                                }}
                            />
                            <p
                                className="text-base font-semibold"
                                style={{ marginTop: -35 }}
                            >
                                No Properties Found
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export function PropertiesForRent() {
    return (
        <>
            <div className="mt-16">
                <div className="border-b-2 border-dark-50 mb-5">
                    <div className="px-6 bg-dark-50 w-fit py-2 rounded-t-xl">
                        <h4 className="text-light-100 font-semibold text-sm">
                            Properties For Rent{" "}
                        </h4>
                    </div>
                </div>

                {/* //TODO: New Properties around you */}
                <div className="flex justify-between gap-3 overflow-x-auto md:gap-6">
                    {MockHouseCardData?.length > 0 ? (
                        MockHouseCardData?.map((property) => (
                            <HomeHouseCards
                                key={property.id}
                                data={{ ...property }}
                            />
                        ))
                    ) : (
                        <div className="pb-6 flex-1 flex gap-3 flex-col justify-center items-center">
                            <img
                                src={emptyBoxGif}
                                style={{
                                    width: 200,
                                    height: 200,
                                }}
                            />
                            <p
                                className="text-base font-semibold"
                                style={{ marginTop: -35 }}
                            >
                                No Properties Found
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export function RealEstateCompaniesAndAgents() {
    return (
        <>
            <div className="mt-16">
                <div className="border-b-2 border-dark-50 mb-5">
                    <div className="px-6 bg-dark-50 w-fit py-2 rounded-t-xl">
                        <h4 className="text-light-100 font-semibold text-sm">
                            Real Estate Companies/Agents{" "}
                        </h4>
                    </div>
                </div>

                {/* //TODO: New Properties around you */}
                <div className="flex justify-between gap-3 overflow-x-auto md:gap-6">
                    {MockHouseCardData?.length > 0 ? (
                        MockHouseCardData?.map(() => (
                            <div className="h-40 min-w-40 aspect-square mx-2 bg-light-100 shadow p-3 rounded-lg border overflow-hidden border-dark-50/25 flex flex-col items-center justify-center">
                                <img
                                    className="h-28 w-[7rem] aspect-square object-contain"
                                    src={pwanLogo}
                                />
                            </div>
                        ))
                    ) : (
                        <div className="pb-6 flex-1 flex gap-3 flex-col justify-center items-center">
                            <img
                                src={emptyBoxGif}
                                style={{
                                    width: 200,
                                    height: 200,
                                }}
                            />
                            <p
                                className="text-base font-semibold"
                                style={{ marginTop: -35 }}
                            >
                                No Properties Found
                            </p>
                        </div>
                    )}
                </div>

                <Link
                    className="btn text-sm font-normal mx-auto mt-5 text-center w-fit hover:shadow-none hover:border-none hover:ring-0"
                    to={"/"}
                >
                    Search for more Mompanies/Agents
                </Link>
            </div>
        </>
    );
}
