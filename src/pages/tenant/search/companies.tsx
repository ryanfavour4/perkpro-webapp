import Input from "@/components/input";
import pwanLogo from "@/assets/images/pwan-logo.png";
import landweyLogo from "@/assets/images/landwey-logo.png";
import sweetcoysLogo from "@/assets/images/sweetcoys-logo.png";
import NotificationPane from "@/layout/notification-pane";
import SideNavbar from "@/layout/side-navbar";
import TopNavbar from "@/layout/top-navbar";
import SearchMicroscope from "@/components/svg/search-microscope";

export default function SearchCompanies() {
    return (
        <>
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
                                <SearchCompaniesMainContent />
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
                        <SearchCompaniesMainContent />;
                    </div>

                    {/* BOTTOM TAB BAR */}
                    {/* <BottomTabbar /> */}
                </section>

                {/*  */}
            </div>
        </>
    );
}

export function SearchCompaniesMainContent() {
    return (
        <>
            {" "}
            {/* Search Input Section */}
            <div className="px-4 bg-light-100 py-5">
                <Input
                    type={"text"}
                    placeholder="Search Companies"
                    name={"search"}
                    state={{ value: "" }}
                    setState={(e) => console.log(e)}
                    icon={<SearchMicroscope className="text-2xl" />}
                />
            </div>
            {/* Scrollable Content */}
            <div className="flex-1 px-4">
                <div className="h-svh overflow-y-auto mt-4">
                    <h4 className="text-lg font-semibold mb-4">
                        Featured Companies:
                    </h4>
                    <div className="flex flex-wrap flex-row gap-6">
                        {[sweetcoysLogo, pwanLogo, landweyLogo].map(
                            (logo, index) => (
                                <div
                                    key={index}
                                    className="md:size-48 size-32 bg-light-100 shadow p-3 rounded-lg border overflow-hidden border-dark-50/25 flex flex-col items-center justify-center"
                                >
                                    <img
                                        className="size-24 md:size-36 aspect-square object-contain"
                                        src={logo}
                                    />
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
