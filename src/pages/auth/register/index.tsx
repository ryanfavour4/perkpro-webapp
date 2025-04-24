import { useState } from "react";
import { Link } from "react-router-dom";
import authIllustration from "@/assets/images/logo-dark.png";
import Logo from "@/components/svg/logo";
import Input from "@/components/input";
import Mail from "@/components/svg/mail";
import Checkbox from "@/components/checkbox";
import { IInputState } from "@/components/input/useInput";
import UserAdd from "@/components/svg/user-add";
import CustomerSupport from "@/components/svg/customer-support";
import Select from "@/components/select";
import PhoneInput from "react-phone-input-2";
import Phone from "@/components/svg/phone";

export default function Register() {
    const [fullname, setFullname] = useState<IInputState>({ value: "" });
    const [email, setEmail] = useState<IInputState>({ value: "" });
    const [phone, setPhone] = useState<IInputState>({ value: "" });
    const [accountType, setAccountType] = useState({ value: "" });
    const [password, setPassword] = useState<IInputState>({ value: "" });
    const [confirmPassword, setConfirmPassword] = useState<IInputState>({
        value: "",
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(fullname);
    };

    return (
        <>
            <div className="relative min-h-screen bg-light-300">
                <div className="container px-4 py-4 md:px-0">
                    <div className="mx-auto flex w-fit flex-col items-center justify-center md:mx-0">
                        <Logo className="h-full max-h-16 w-full max-w-48" />
                    </div>
                </div>

                <div className="container py-8 md:py-16">
                    <div className="grid md:grid-cols-12">
                        <div className="col-span-7 flex flex-col items-center justify-center">
                            <form
                                onSubmit={handleSubmit}
                                className="h-fit min-h-96 w-full rounded-xl bg-opacity-10 bg-[5px,5px] bg-clip-padding px-4 backdrop-blur-md backdrop-filter md:max-w-lg md:border-2 md:border-text/25 md:bg-[linear-gradient(rgba(var(--light-300),.50),rgba(var(--light-200),.50)100%),url('../assets/noise.png')] md:px-8 md:py-10 md:shadow-md md:shadow-text/15"
                            >
                                <div className="mb-4 flex flex-col items-center justify-center gap-2 text-center">
                                    <h3 className="text-2xl font-bold text-dark">
                                        Register
                                    </h3>
                                    <p>Register to start using PerkPro</p>
                                </div>

                                <div className="mt-12 flex flex-col gap-4">
                                    <Input
                                        type={"fullname"}
                                        name={"fullname"}
                                        placeholder="Full Name"
                                        state={fullname}
                                        setState={setFullname}
                                        icon={<UserAdd className="h-6 w-6" />}
                                    />
                                    <Input
                                        type={"email"}
                                        name={"email"}
                                        placeholder="Email Address"
                                        state={email}
                                        setState={setEmail}
                                        icon={<Mail className="h-6 w-6" />}
                                    />
                                    <div className="flex input-field py-0 items-center px-0 pr-2.5 hover:border-primary-100 -outline-offset-2 hover:ring-2">
                                        <PhoneInput
                                            placeholder="Phone Number"
                                            value={phone.value}
                                            onChange={(phone) =>
                                                setPhone({ value: phone })
                                            }
                                            inputClass="!w-full !h-10 !border-none"
                                            containerClass="w-full !outline-none !border-0"
                                        />
                                        <Phone className="h-6 w-6" />
                                    </div>
                                    <Select
                                        state={accountType}
                                        setState={setAccountType}
                                        name="accountType"
                                        placeholder="Account Type"
                                        options={[
                                            {
                                                label: "Tenant",
                                                value: "tenant",
                                            },
                                            {
                                                label: "Landlord/Agent",
                                                value: "landlord-agent",
                                            },
                                        ]}
                                    />
                                    <Input
                                        type={"password"}
                                        name={"password"}
                                        placeholder="Password"
                                        state={password}
                                        setState={setPassword}
                                    />
                                    <Input
                                        type={"password"}
                                        name={"confirmPassword"}
                                        placeholder="Confirm Password"
                                        state={confirmPassword}
                                        setState={setConfirmPassword}
                                    />
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-1">
                                            <Checkbox className="h-4 w-4" />
                                            <p className="text-sm">
                                                Remember me
                                            </p>
                                        </div>
                                    </div>

                                    <button className="btn-primary mt-6">
                                        Register
                                    </button>
                                    <p>
                                        Already have an account with us?{" "}
                                        <Link
                                            to={"/choose-account-type"}
                                            className="cursor-pointer text-primary"
                                        >
                                            Login
                                        </Link>{" "}
                                    </p>

                                    <div className="mt-12 flex flex-col items-center justify-center gap-2 text-sm">
                                        <div className="flex w-full items-center justify-center gap-2 text-dark">
                                            <hr className="w-1/4" />
                                            Contact support
                                            <hr className="w-1/4" />
                                        </div>
                                        <div className="flex gap-2">
                                            <button
                                                type="button"
                                                className="btn"
                                            >
                                                <CustomerSupport className="h-8 w-8 text-primary-100" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="relative col-span-5 hidden items-center justify-center md:flex">
                            <img
                                src={authIllustration}
                                className="w-4/5 animate-float"
                                alt="authentication"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
