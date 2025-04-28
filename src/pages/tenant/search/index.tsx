import Checkbox from "@/components/checkbox";
import Input from "@/components/input";
import Select from "@/components/select";
import DollarSign from "@/components/svg/dollar-sign";
import Location from "@/components/svg/location";
import TwinBed from "@/components/svg/twin-bed";
import NotificationPane from "@/layout/notification-pane";
import SideNavbar from "@/layout/side-navbar";
import TopNavbar from "@/layout/top-navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Search() {
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
                            <SearchMainContent />
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
                    <SearchMainContent />;
                </div>

                {/* BOTTOM TAB BAR */}
                {/* <BottomTabbar /> */}
            </section>

            {/*  */}
        </div>
    );
}

export function SearchMainContent() {
    const [activeTab, setActiveTab] = useState("Buy");

    const tabs = [
        { name: "Buy", component: <BuySearchForm /> },
        { name: "Land", component: <LandSearchForm /> },
        { name: "Rent", component: <RentSearchForm /> },
        { name: "Shortlet", component: <ShortletSearchForm /> },
    ];
    return (
        <div className="px-4 bg-light-100 py-4">
            <div className="pb-10">
                {/* Section 1 */}
                <div>
                    <p className="text-lg font-semibold mb-2 text-center">
                        Search for your preferred property
                    </p>
                </div>

                <div className="px-3 py-3 rounded-md flex flex-col mt-2">
                    <div>
                        {/* Form Tabs */}
                        <div className="rounded-md border grid grid-cols-4 mb-5 items-center justify-between overflow-hidden">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.name}
                                    onClick={() => setActiveTab(tab.name)}
                                    className={`py-2 ${
                                        activeTab === tab.name &&
                                        "bg-primary-100 font-bold rounded-lg"
                                    }  ${activeTab === tab.name ? "bg-primary-100" : "bg-transparent"}`}
                                >
                                    <p
                                        style={{
                                            color:
                                                activeTab === tab.name
                                                    ? "white"
                                                    : "black",
                                        }}
                                    >
                                        {tab.name}
                                    </p>
                                </button>
                            ))}
                        </div>

                        {/* Render Selected Form */}
                        <div>
                            {
                                tabs.find((tab) => tab.name === activeTab)
                                    ?.component
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function BuySearchForm() {
    const navigate = useNavigate();
    const [location, setLocation] = useState({ value: "" });
    const [type, setType] = useState({ value: "" });
    const [bedrooms, setBedrooms] = useState({ value: "" });
    const [minPrice, setMinPrice] = useState({ value: "" });
    const [maxPrice, setMaxPrice] = useState({ value: "" });
    const [typeList] = useState([
        { label: "Bungalow", value: "bungalow" },
        { label: "Mansion", value: "mansion" },
        { label: "Terrace", value: "terrace" },
        { label: "Duplex", value: "duplex" },
        { label: "Penthouse", value: "penthouse" },
        { label: "Villa", value: "villa" },
        { label: "Apartment", value: "apartment" },
        { label: "Townhouse", value: "townhouse" },
    ]);

    return (
        <div className="border shadow rounded-lg h-full px-2.5 py-4 md:max-w-md mx-auto">
            <div className="flex flex-col gap-4">
                <Input
                    setState={setLocation}
                    state={location}
                    name="location"
                    placeholder="Enter a state or locality or area"
                    type="text"
                    icon={<Location className="text-2xl" />}
                />
                <Select
                    name="type"
                    options={typeList}
                    placeholder="Type"
                    setState={setType}
                    state={type}
                />
                <Input
                    setState={setBedrooms}
                    state={bedrooms}
                    name="bedrooms"
                    placeholder="Bedrooms"
                    type="number"
                    icon={<TwinBed className="text-3xl" />}
                />
                <Input
                    setState={setMinPrice}
                    state={minPrice}
                    name="minPrice"
                    placeholder="Minimum Price"
                    type="amount"
                    icon={<DollarSign className="text-2xl" />}
                />
                <Input
                    setState={setMaxPrice}
                    state={maxPrice}
                    name="maxPrice"
                    placeholder="Maximum Price"
                    type="amount"
                    icon={<DollarSign className="text-2xl" />}
                />

                <button
                    className="btn-primary"
                    onClick={() => navigate("/search/results")}
                >
                    Search
                </button>
            </div>
        </div>
    );
}

export function LandSearchForm() {
    const navigate = useNavigate();
    const [location, setLocation] = useState({ value: "" });
    const [size, setSize] = useState({ value: "" });
    const [purpose, setPurpose] = useState({ value: "" });
    const [minPrice, setMinPrice] = useState({ value: "" });
    const [maxPrice, setMaxPrice] = useState({ value: "" });
    const [sizeList] = useState([
        { label: "300", value: "300 SQM" },
        { label: "500", value: "500 SQM" },
        { label: "700", value: "700 SQM" },
        { label: "1000", value: "1000 SQM" },
    ]);
    const [landPurposeList] = useState([
        { label: "farming", value: "farming" },
        { label: "residential", value: "residential" },
        { label: "commercial", value: "commercial" },
        { label: "industrial", value: "industrial" },
        { label: "institutional", value: "institutional" },
    ]);

    return (
        <div className="border shadow rounded-lg h-full px-2.5 py-4 md:max-w-md mx-auto">
            <div className="flex flex-col gap-4">
                <Input
                    setState={setLocation}
                    state={location}
                    name="location"
                    placeholder="Enter a state or locality or area"
                    type="text"
                    icon={<Location className="text-2xl" />}
                />
                <Select
                    name="size"
                    options={sizeList}
                    placeholder="Size"
                    setState={setSize}
                    state={size}
                />
                <Select
                    name="purpose"
                    options={landPurposeList}
                    placeholder="Purpose"
                    setState={setPurpose}
                    state={purpose}
                />
                <Input
                    setState={setMinPrice}
                    state={minPrice}
                    name="minPrice"
                    placeholder="Minimum Price"
                    type="amount"
                    icon={<DollarSign className="text-2xl" />}
                />
                <Input
                    setState={setMaxPrice}
                    state={maxPrice}
                    name="maxPrice"
                    placeholder="Maximum Price"
                    type="amount"
                    icon={<DollarSign className="text-2xl" />}
                />

                <button
                    className="btn-primary"
                    onClick={() => navigate("/search/results")}
                >
                    Search
                </button>
            </div>
        </div>
    );
}

export function RentSearchForm() {
    const navigate = useNavigate();
    const [location, setLocation] = useState({ value: "" });
    const [type, setType] = useState({ value: "" });
    const [bedrooms, setBedrooms] = useState({ value: "" });
    const [minPrice, setMinPrice] = useState({ value: "" });
    const [maxPrice, setMaxPrice] = useState({ value: "" });
    const [typeList] = useState([
        { label: "Bungalow", value: "bungalow" },
        { label: "Mansion", value: "mansion" },
        { label: "Terrace", value: "terrace" },
        { label: "Duplex", value: "duplex" },
        { label: "Penthouse", value: "penthouse" },
        { label: "Villa", value: "villa" },
        { label: "Apartment", value: "apartment" },
        { label: "Townhouse", value: "townhouse" },
    ]);

    return (
        <div className="border shadow rounded-lg h-full px-2.5 py-4 md:max-w-md mx-auto">
            <div className="flex flex-col gap-4">
                <Input
                    setState={setLocation}
                    state={location}
                    name="location"
                    placeholder="Enter a state or locality or area"
                    type="text"
                    icon={<Location className="text-2xl" />}
                />
                <Select
                    name="type"
                    options={typeList}
                    placeholder="Type"
                    setState={setType}
                    state={type}
                />
                <Input
                    setState={setBedrooms}
                    state={bedrooms}
                    name="bedrooms"
                    placeholder="Bedrooms"
                    type="number"
                    icon={<TwinBed className="text-3xl" />}
                />
                <Input
                    setState={setMinPrice}
                    state={minPrice}
                    name="minPrice"
                    placeholder="Minimum Price"
                    type="amount"
                    icon={<DollarSign className="text-2xl" />}
                />
                <Input
                    setState={setMaxPrice}
                    state={maxPrice}
                    name="maxPrice"
                    placeholder="Maximum Price"
                    type="amount"
                    icon={<DollarSign className="text-2xl" />}
                />

                <button
                    className="btn-primary"
                    onClick={() => navigate("/search/results")}
                >
                    Search
                </button>
            </div>
        </div>
    );
}

export function ShortletSearchForm() {
    const navigate = useNavigate();
    const [location, setLocation] = useState({ value: "" });
    const [type, setType] = useState({ value: "" });
    const [bedrooms, setBedrooms] = useState({ value: "" });
    const [minPrice, setMinPrice] = useState({ value: "" });
    const [maxPrice, setMaxPrice] = useState({ value: "" });
    const [typeList] = useState([
        { label: "Bungalow", value: "bungalow" },
        { label: "Mansion", value: "mansion" },
        { label: "Terrace", value: "terrace" },
        { label: "Duplex", value: "duplex" },
        { label: "Penthouse", value: "penthouse" },
        { label: "Villa", value: "villa" },
        { label: "Apartment", value: "apartment" },
        { label: "Townhouse", value: "townhouse" },
    ]);

    return (
        <div className="border shadow rounded-lg h-full px-2.5 py-4 md:max-w-md mx-auto">
            <div className="flex flex-col gap-4">
                <Input
                    setState={setLocation}
                    state={location}
                    name="location"
                    placeholder="Enter a state or locality or area"
                    type="text"
                    icon={<Location className="text-2xl" />}
                />
                <Select
                    name="type"
                    options={typeList}
                    placeholder="Type"
                    setState={setType}
                    state={type}
                />
                <Input
                    setState={setBedrooms}
                    state={bedrooms}
                    name="bedrooms"
                    placeholder="Bedrooms"
                    type="number"
                    icon={<TwinBed className="text-3xl" />}
                />
                <Input
                    setState={setMinPrice}
                    state={minPrice}
                    name="minPrice"
                    placeholder="Minimum Price"
                    type="amount"
                    icon={<DollarSign className="text-2xl" />}
                />
                <Input
                    setState={setMaxPrice}
                    state={maxPrice}
                    name="maxPrice"
                    placeholder="Maximum Price"
                    type="amount"
                    icon={<DollarSign className="text-2xl" />}
                />

                <div className="flex flex-col gap-1.5">
                    <p className="font-semibold">Purpose of Rent</p>

                    <div className="flex justify-between items-center text-sm">
                        <span className="flex items-center">
                            <Checkbox />
                            <p>House Party</p>
                        </span>

                        <span className="flex items-center">
                            <Checkbox />
                            <p>Meeting</p>
                        </span>

                        <span className="flex items-center">
                            <Checkbox />
                            <p>Relaxation</p>
                        </span>
                    </div>
                </div>

                <button
                    className="btn-primary"
                    onClick={() => navigate("/search/results")}
                >
                    Search
                </button>
            </div>
        </div>
    );
}
