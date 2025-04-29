import ListThreeLines from "@/components/svg/list-three-lines";
import MoreDotVertical from "@/components/svg/more-dot-vertical";
import SideNavbar from "@/layout/side-navbar";
import TopNavbar from "@/layout/top-navbar";
import { useState } from "react";

export default function Chats() {
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
                            <div className="col-span-10">
                                <ChatsMainContent />
                            </div>
                            {/*  */}
                        </div>
                    </div>
                </main>

                {/* MOBILE div */}
                <section className="container block px-2 md:hidden pb-5">
                    <div className="col-span-7">
                        <ChatsMainContent />
                    </div>

                    {/* BOTTOM TAB BAR */}
                    {/* <BottomTabbar /> */}
                </section>

                {/*  */}
            </div>
        </>
    );
}

export function ChatsMainContent() {
    const [listOpen, setListOpen] = useState(true);

    return (
        <>
            {/* <!-- component --> */}
            <div className="relative flex h-[calc(100vh)] overflow-hidden border-2 border-primary-100/25">
                {/* <!-- Sidebar --> */}
                <div
                    className={`lg:w-1/4 bg-white border-r border-gray-300 lg:relative w-full absolute z-10 top-0 bottom-0 lg:translate-x-0 ${listOpen ? "translate-x-0" : "-translate-x-full"}`}
                >
                    {/* <!-- Sidebar Header --> */}
                    <header className="p-2.5 border-b border-light-100 flex justify-between items-center bg-primary-100 text-white">
                        <h1 className="text-lg font-semibold">Chat Web</h1>
                        <div className="relative">
                            <button className="btn p-1 ring-light-100">
                                <MoreDotVertical className="text-2xl text-light-100" />
                            </button>
                            {/* <!-- Menu Dropdown --> */}
                            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg hidden">
                                <ul className="py-2 px-3">
                                    <li>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-gray-800 hover:text-gray-400"
                                        >
                                            Option 1
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-gray-800 hover:text-gray-400"
                                        >
                                            Option 2
                                        </a>
                                    </li>
                                    {/* <!-- Add more menu options here --> */}
                                </ul>
                            </div>
                        </div>
                    </header>

                    {/* <!-- Contact List --> */}
                    <div className="overflow-y-auto h-screen p-3 mb-9 pb-20">
                        {/* CHAT LIST USERS */}
                        <div
                            onClick={() => setListOpen(!listOpen)}
                            className="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md"
                        >
                            <img
                                src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                                alt="User Avatar"
                                className="size-8 rounded-full bg-primary-100 border-2 border-primary-100 mr-3"
                            />
                            <div className="flex-1">
                                <h2 className="font-semibold">Alice</h2>
                                <p className="text-text/75 ellipsis">
                                    That pizza place was amazing! We should go
                                    again sometime. 🍕
                                </p>
                                <small className="ml-auto block mt-1 text-xs text-dark-50 text-right">
                                    2 Days ago
                                </small>
                            </div>
                        </div>

                        {/* CHAT LIST USERS */}
                        <div
                            onClick={() => setListOpen(!listOpen)}
                            className="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md"
                        >
                            <img
                                src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                                alt="User Avatar"
                                className="size-8 rounded-full bg-primary-100 border-2 border-primary-100 mr-3"
                            />
                            <div className="flex-1">
                                <h2 className="font-semibold">Alice</h2>
                                <p className="text-text/75 ellipsis">
                                    That pizza place was amazing! We should go
                                    again sometime. 🍕
                                </p>
                                <small className="ml-auto block mt-1 text-xs text-dark-50 text-right">
                                    2 Days ago
                                </small>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Main Chat Area --> */}
                <div className="flex-1 relative">
                    {/* <!-- Chat Header --> */}
                    <header className="bg-dark-50 p-3 text-light flex items-center gap-3">
                        <button
                            onClick={() => setListOpen(!listOpen)}
                            className="btn p-1 w-fit text-light-100 text-2xl lg:hidden"
                        >
                            <ListThreeLines />
                        </button>
                        <h1 className="text-lg font-semibold">Alice</h1>
                    </header>

                    {/* <!-- Chat Messages --> */}
                    <div className="h-screen overflow-y-auto p-4 pb-48">
                        {/* <!-- Incoming Message --> */}
                        <div className="flex mb-4 cursor-pointer">
                            <div className="w-9 h-9 rounded-full flex items-center justify-center mr-2">
                                <img
                                    src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                                    alt="User Avatar"
                                    className="w-8 h-8 rounded-full"
                                />
                            </div>
                            <div className="flex max-w-96 bg-white rounded-lg p-3 gap-3">
                                <p className="text-gray-700">
                                    Hey Bob, how's it going?
                                </p>
                            </div>
                        </div>

                        {/* <!-- Outgoing Message --> */}
                        <div className="flex justify-end mb-4 cursor-pointer">
                            <div className="flex max-w-96 bg-primary-100 text-white rounded-lg p-3 gap-3">
                                <p>
                                    Hi Alice! I'm good, just finished a great
                                    book. How about you?
                                </p>
                            </div>
                            <div className="w-9 h-9 rounded-full flex items-center justify-center ml-2">
                                <img
                                    src="https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                                    alt="My Avatar"
                                    className="w-8 h-8 rounded-full"
                                />
                            </div>
                        </div>

                        {/* <!-- Incoming Message --> */}
                        <div className="flex mb-4 cursor-pointer">
                            <div className="w-9 h-9 rounded-full flex items-center justify-center mr-2">
                                <img
                                    src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                                    alt="User Avatar"
                                    className="w-8 h-8 rounded-full"
                                />
                            </div>
                            <div className="flex max-w-96 bg-white rounded-lg p-3 gap-3">
                                <p className="text-gray-700">
                                    That book sounds interesting! What's it
                                    about?
                                </p>
                            </div>
                        </div>

                        {/* <!-- Incoming Message --> */}
                        <div className="flex mb-4 cursor-pointer">
                            <div className="w-9 h-9 rounded-full flex items-center justify-center mr-2">
                                <img
                                    src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                                    alt="User Avatar"
                                    className="w-8 h-8 rounded-full"
                                />
                            </div>
                            <div className="flex max-w-96 bg-white rounded-lg p-3 gap-3">
                                <p className="text-gray-700">
                                    That book sounds interesting! What's it
                                    about?
                                </p>
                            </div>
                        </div>

                        {/* <!-- Outgoing Message --> */}
                        <div className="flex justify-end mb-4 cursor-pointer">
                            <div className="flex max-w-96 bg-primary-100 text-white rounded-lg p-3 gap-3">
                                <p>
                                    It's about an astronaut stranded on Mars,
                                    trying to survive. Gripping stuff!
                                </p>
                            </div>
                            <div className="w-9 h-9 rounded-full flex items-center justify-center ml-2">
                                <img
                                    src="https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                                    alt="My Avatar"
                                    className="w-8 h-8 rounded-full"
                                />
                            </div>
                        </div>
                    </div>

                    {/* <!-- Chat Input --> */}
                    <footer className="bg-white border-t border-dark-50 p-4 absolute bottom-0 w-full">
                        <div className="flex items-center">
                            <input
                                type="text"
                                placeholder="Type a message..."
                                className="w-full p-2 py-3 rounded-md border border-gray-400 focus:outline-none focus:border-primary-100"
                            />
                            <button className="bg-primary-100 text-white px-4 py-3 rounded-md ml-2">
                                Send
                            </button>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );
}
