import { useTheme } from "@/context/theme";
import SideNavbar from "@/layout/side-navbar";
import TopNavbar from "@/layout/top-navbar";

export default function Home() {
    const { theme } = useTheme();
    console.log(theme);

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
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Nam maiores totam ratione necessitatibus
                            architecto officia illum excepturi nostrum rem
                            nulla, fuga, laudantium nihil nesciunt reprehenderit
                            dignissimos ipsam odit saepe aspernatur.
                        </div>
                        {/*  */}
                        <div className="col-span-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Temporibus pariatur suscipit debitis natus
                            adipisci labore voluptas deleniti, sit, similique,
                            aperiam minus in magnam sunt eum! Dolorum
                            exercitationem doloribus voluptatibus harum.
                        </div>
                    </div>
                </div>
            </main>

            {/* MOBILE VIEW */}
            <section className="container block px-2 md:hidden">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod,
                laudantium quasi ratione reiciendis id voluptates corporis
                molestias ex blanditiis dolorum? Adipisci ab tempora nostrum.
                Consequuntur impedit incidunt inventore doloremque dignissimos.
                {/* BOTTOM TAB BAR */}
                {/* <BottomTabbar /> */}
            </section>

            {/*  */}
        </div>
    );
}
