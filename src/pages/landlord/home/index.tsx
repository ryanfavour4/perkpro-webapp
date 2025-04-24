import SideNavbar from "@/layout/side-navbar";
import TopNavbar from "@/layout/top-navbar";

export default function Home() {
    return (
        <div className="min-h-screen bg-light-300">
            <TopNavbar />

            {/* DESKTOP VIEW */}
            <main className="mt-4 hidden w-full md:mt-0 md:block">
                <div className="mx-auto grid grid-cols-12 gap-5">
                    <div className="h-full min-h-screen overflow-y-auto md:col-span-3 lg:col-span-2">
                        <SideNavbar />
                    </div>
                    <div className="grid grid-cols-10 gap-5 overflow-hidden md:col-span-9 lg:col-span-10">
                        <div className="col-span-7">
                            <div className="my-5">
                                <h1 className="text-2xl font-bold text-light-900">
                                    Welcome back, John Doe
                                </h1>
                            </div>
                        </div>
                        {/*  */}
                        <div className="col-span-3">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Incidunt, tempore itaque? Veniam accusamus,
                            odit distinctio, id ratione tempora saepe libero
                            praesentium voluptatibus nostrum, beatae magnam
                            facere est. Nesciunt, voluptatum velit.
                        </div>
                    </div>
                </div>
            </main>

            {/* MOBILE VIEW */}
            <section className="container block px-2 md:hidden">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                excepturi quasi, ipsam quo maxime autem nisi eum soluta, iusto
                culpa numquam aliquid nemo vero, doloribus eveniet harum
                architecto! Earum, quasi?
            </section>

            {/*  */}
        </div>
    );
}
