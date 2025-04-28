import NotificationPane from "@/layout/notification-pane";
import SideNavbar from "@/layout/side-navbar";
import TopNavbar from "@/layout/top-navbar";
import emptyBoxGif from "@/assets/images/empty-box-web.gif";

export default function Schedules() {
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
                            <SchedulesResultMainContent />
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
                    <SchedulesResultMainContent />
                </div>

                {/* BOTTOM TAB BAR */}
                {/* <BottomTabbar /> */}
            </section>

            {/*  */}
        </div>
    );
}

export function SchedulesResultMainContent() {
    return (
        <>
            <div className="flex flex-1 items-center justify-center flex-col">
                <img
                    src={emptyBoxGif}
                    className="size-56 rounded-lg object-cover"
                />

                <p className="text-center">
                    You currently have no scheduled events
                </p>
            </div>
        </>
    );
}
