import { useNavigate } from "react-router-dom";
import ShieldCheck from "../svg/shield-check";
import listingHouse1 from "@/assets/images/listing-house-1.jpg";

type props = {
    data: {
        image?: string;
        title?: string;
        price?: string | number;
        location?: string;
        specs?: string;
        parking?: string | boolean;
        garden?: string | boolean;
        security?: string | boolean;
        electricity?: string | boolean;
        date?: string;
        link?: string;
        id?: string;
    };
};

// eslint-disable-next-line react-refresh/only-export-components
export const MockHouseCardData = [
    {
        image: listingHouse1,
        title: "Morning",
        price: 966622,
        location: "Suite 82",
        specs: "Total",
        parking: true,
        garden: false,
        security: false,
        electricity: false,
        date: "8/8/2024",
        link: "/",
        id: "7bbf:40d7:9349:2361:a554:f66a:3f30:7929/89",
    },
    {
        image: listingHouse1,
        title: "Chive",
        price: 614100,
        location: "6th Floor",
        specs: "database",
        parking: false,
        garden: true,
        security: false,
        electricity: false,
        date: "4/30/2024",
        link: "/",
    },
    {
        image: listingHouse1,
        title: "Petterle",
        price: 412605,
        location: "1st Floor",
        specs: "definition",
        parking: true,
        garden: true,
        security: false,
        electricity: false,
        date: "6/4/2024",
        link: "/",
        id: "9cfd:3c1f:f6c3:9194:2780:43f1:46f4:8d80/52",
    },
    {
        image: listingHouse1,
        title: "Scott",
        price: 136898,
        location: "PO Box 17551",
        specs: "5th generation",
        parking: true,
        garden: true,
        security: false,
        electricity: false,
        date: "3/7/2025",
        link: "/",
        id: "d8c:a8a2:a917:aa90:3158:c53e:bdc2:3657/49",
    },
    {
        image: listingHouse1,
        title: "Hansons",
        price: 833449,
        location: "PO Box 60839",
        specs: "next generation",
        parking: false,
        garden: true,
        security: false,
        electricity: false,
        date: "8/2/2024",
        link: "/",
        id: "f650:f930:8386:c968:4e42:d789:a06f:464/59",
    },
    {
        image: listingHouse1,
        title: "Pankratz",
        price: 224962,
        location: "Apt 135",
        specs: "Integrated",
        parking: false,
        garden: true,
        security: false,
        electricity: false,
        date: "10/4/2024",
        link: "/",
    },
    {
        image: listingHouse1,
        title: "Hanson",
        price: 827480,
        location: "7th Floor",
        specs: "flexibility",
        parking: false,
        garden: true,
        security: true,
        electricity: false,
        date: "8/22/2024",
        link: "/",
    },
    {
        image: listingHouse1,
        title: "Autumn Leaf",
        price: 814279,
        location: "PO Box 94482",
        specs: "Centralized",
        parking: false,
        garden: true,
        security: false,
        electricity: true,
        date: "3/25/2025",
        link: "/",
        id: "6308:c776:f93f:1310:2c2d:cf40:10bf:fbea/36",
    },
    {
        image: listingHouse1,
        title: "Reindahl",
        price: 530575,
        location: "10th Floor",
        specs: "hybrid",
        parking: true,
        garden: false,
        security: false,
        electricity: true,
        date: "8/20/2024",
        link: "/",
        id: "bdf0:8eab:55a5:cc89:8b61:3a08:ad26:1870/105",
    },
    {
        image: listingHouse1,
        title: "Arizona",
        price: 833209,
        location: "Apt 159",
        specs: "Customizable",
        parking: true,
        garden: false,
        security: false,
        electricity: true,
        date: "10/26/2024",
        link: "/",
        id: "2a4f:3c00:5af5:d207:ca4f:f443:112c:aae7/84",
    },
];

export default function HomeHouseCards({ data }: props) {
    const { image, title, specs } = data;
    const navigate = useNavigate();

    return (
        <div className="p-2 border rounded-xl min-w-52 mx-2">
            <div className="relative">
                <img
                    className="rounded-lg h-36 w-full object-cover"
                    src={image || listingHouse1}
                />
                <p className="text-xs py-px rounded-full w-fit px-4 bg-light-100 absolute top-1 right-1">
                    2 hours ago
                </p>
            </div>
            <div className="p-1.5 mt-1.5 flex flex-col gap-2">
                <p className="font-semibold text-sm">
                    {title || "Ikoyi, Leki"}⚡
                </p>
                <p className="font-semibold">{specs || "2 Bedroom bungalow"}</p>
                <div className="flex flex-row gap-3 items-center">
                    <ShieldCheck className="text-dark-50 text-2xl h-6 w-6" />
                    <ShieldCheck className="text-dark-50 text-2xl h-6 w-6" />
                    <ShieldCheck className="text-dark-50 text-2xl h-6 w-6" />
                    <ShieldCheck className="text-dark-50 text-2xl h-6 w-6" />
                </div>
                <button
                    onClick={() =>
                        navigate(
                            "/property-details/" +
                                (data.id && +data?.id.split("/")[0])
                        )
                    }
                    className="btn-primary text-sm"
                >
                    Inspect Property
                </button>
            </div>
        </div>
    );
}
