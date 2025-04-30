import EditPen from "@/components/svg/edit-pen";
import NotificationPane from "@/layout/notification-pane";
import SideNavbar from "@/layout/side-navbar";
import TopNavbar from "@/layout/top-navbar";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Profile() {
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
                                <ProfileMainContent />
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
                        <ProfileMainContent />
                    </div>

                    {/* BOTTOM TAB BAR */}
                    {/* <BottomTabbar /> */}
                </section>

                {/*  */}
            </div>
        </>
    );
}

export function ProfileMainContent() {
    const [editable, setEditable] = useState(false);
    return (
        <>
            <div className="py-5">
                <div className="py-1 bg-error/25 text-error text-sm text-center rounded">
                    <p>
                        Your Kyc is not complete.{" "}
                        <Link className="font-semibold" to={"/kyc"}>
                            CLICK HERE
                        </Link>
                    </p>
                </div>

                <div className="relative flex items-center justify-center size-16 md:size-24 mx-auto my-4">
                    <img
                        src=""
                        className="rounded-full bg-dark-50 aspect-square size-16 md:size-24"
                        alt=""
                    />
                    <button
                        onClick={() => setEditable(!editable)}
                        className="absolute -bottom-1 -right-1 btn-primary w-fit p-1"
                    >
                        <EditPen className="text-lg md:text-xl" />
                    </button>
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2.5">
                        <p className="text-sm">First Name</p>

                        <h4
                            contentEditable={editable}
                            onFocus={(e) => {
                                console.log(e);
                            }}
                            className="md:text-base border-b font-semibold py-1 px-1.5 border-primary-100"
                        >
                            John Doe
                        </h4>
                    </div>

                    <div className="flex flex-col gap-2.5">
                        <p className="text-sm">Last Name</p>

                        <h4
                            contentEditable={editable}
                            onFocus={(e) => {
                                console.log(e);
                            }}
                            className="md:text-base border-b font-semibold py-1 px-1.5 border-primary-100"
                        >
                            John Doe
                        </h4>
                    </div>

                    <div className="flex flex-col gap-2.5">
                        <p className="text-sm">Email</p>

                        <h4
                            contentEditable={editable}
                            onFocus={(e) => {
                                console.log(e);
                            }}
                            className="md:text-base border-b font-semibold py-1 px-1.5 border-primary-100"
                        >
                            John Doe
                        </h4>
                    </div>

                    <div className="flex flex-col gap-2.5">
                        <p className="text-sm">First Name</p>

                        <h4
                            contentEditable={editable}
                            onFocus={(e) => {
                                console.log(e);
                            }}
                            className="md:text-base border-b font-semibold py-1 px-1.5 border-primary-100"
                        >
                            John Doe
                        </h4>
                    </div>
                </div>

                <hr className="my-10 border-dark-50/25" />

                <div className="flex flex-col divide-y-2 border border-error rounded-md p-4">
                    <div className="flex md:flex-row flex-col justify-between gap-y-5 md:items-center w-full py-2.5">
                        <div className="flex gap-1 flex-col">
                            <h3 className="text-sm font-semibold">
                                Change Password
                            </h3>
                            <p className="text-xs">
                                <p className="text-xs">
                                    Change your password to your account. Please
                                    note once new password is set you will be
                                    prompted to log back in using your new
                                    password.
                                </p>{" "}
                            </p>
                        </div>
                        <button className="btn whitespace-nowrap w-fit text-light-100 bg-dark-50 py-2 text-xs">
                            Change Password
                        </button>
                    </div>
                    <div className="flex md:flex-row flex-col justify-between gap-y-5 md:items-center w-full py-2.5">
                        <div className="flex gap-1 flex-col">
                            <h3 className="text-sm font-semibold">
                                Delete Account
                            </h3>
                            <p className="text-xs">
                                Once you delete your, there is no going back.
                                Please be certain.
                            </p>
                        </div>
                        <button className="btn whitespace-nowrap w-fit text-light-100 bg-error py-2 text-xs">
                            Delete Account
                        </button>
                    </div>
                </div>
            </div>

            {editable && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
                    <div className="bg-white rounded-lg p-5">
                        <p className="text-center text-lg font-semibold">
                            Edit Profile
                        </p>

                        <div className="mt-5 grid grid-cols-2 gap-4">
                            <div className="flex flex-col gap-2.5">
                                <p className="text-sm">First Name</p>

                                <input
                                    type="text"
                                    className="md:text-base border-b font-semibold py-1 px-1.5 border-primary-100"
                                />
                            </div>

                            <div className="flex flex-col gap-2.5">
                                <p className="text-sm">First Name</p>

                                <input
                                    type="text"
                                    className="md:text-base border-b font-semibold py-1 px-1.5 border-primary-100"
                                />
                            </div>

                            <div className="flex flex-col gap-2.5">
                                <p className="text-sm">First Name</p>

                                <input
                                    type="text"
                                    className="md:text-base border-b font-semibold py-1 px-1.5 border-primary-100"
                                />
                            </div>

                            <div className="flex flex-col gap-2.5">
                                <p className="text-sm">First Name</p>

                                <input
                                    type="text"
                                    className="md:text-base border-b font-semibold py-1 px-1.5 border-primary-100"
                                />
                            </div>
                        </div>

                        <div className="mt-5 flex items-center justify-center gap-4">
                            <button
                                onClick={() => setEditable(false)}
                                className="btn-primary w-fit px-4 py-1.5"
                            >
                                Save
                            </button>
                            <button
                                onClick={() => setEditable(false)}
                                className="btn-secondary w-fit px-4 py-1.5"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
