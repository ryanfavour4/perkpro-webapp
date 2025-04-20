import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "@/api/hooks/useAuth";
import authIllustrationLight from "@/assets/auth-illustration-light.png";
import Logo from "@/components/svg/logo";
import Input from "@/components/input";
import Mail from "@/components/svg/mail";
import Checkbox from "@/components/checkbox";
import GoogleLogoColoured from "@/components/svg/google-logo-coloured";
import { IInputState } from "@/components/input/useInput";

export default function Login() {
  const { isSuccess, mutate } = useLogin();
  const [email, setEmail] = useState<IInputState>({ value: "" });
  const [password, setPassword] = useState<IInputState>({ value: "" });
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(password);
    mutate({
      email: email.value,
      password: password.value,
    });
  };

  return (
    <>
      <div className="relative min-h-screen bg-light-300">
        <div className="absolute left-0 top-0 -z-0 hidden h-96 w-96 animate-pulse rounded-full bg-[radial-gradient(circle,rgba(var(--primary),0.6),rgba(var(--accent),0.3))] blur-3xl backdrop-blur-3xl transition-all md:inline" />
        <div className="absolute -bottom-24 right-0 z-0 hidden h-96 w-96 animate-float rounded-full bg-[radial-gradient(circle,rgba(var(--primary),0.6),rgba(var(--accent),0.3))] blur-3xl backdrop-blur-3xl transition-all md:inline" />

        <div className="container px-4 py-4 md:px-0">
          <div className="mx-auto flex w-fit flex-col items-center justify-center md:mx-0 md:ml-auto">
            <Logo className="h-full max-h-10 w-full max-w-40" />
            <p className="font-nico-moji text-sm font-bold text-dark md:text-2xl">APEX 2.0</p>
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
                  <h3 className="text-2xl font-bold text-dark">Welcome Back</h3>
                  <p>
                    Apex 2.0: Your All-in-One AI-Powered Crypto Investment Hub - Trade Smarter,
                    Safer, and in Real-Time.
                  </p>
                </div>

                <div className="mt-12 flex flex-col gap-4">
                  <Input
                    type={"email"}
                    name={"email"}
                    placeholder="Email Address"
                    state={email}
                    setState={setEmail}
                    icon={<Mail className="h-6 w-6" />}
                  />
                  <Input
                    type={"password"}
                    name={"password"}
                    placeholder="Password"
                    state={password}
                    setState={setPassword}
                  />
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Checkbox className="h-4 w-4" />
                      <p className="text-sm">Remember me</p>
                    </div>
                    <Link to={"/forgot-password"} className="text-sm text-primary">
                      Forgot password?
                    </Link>
                  </div>

                  <button className="btn-primary mt-6">Login</button>
                  <p>
                    Don't have an account ?{" "}
                    <Link to={"/register"} className="cursor-pointer text-primary">
                      Register
                    </Link>{" "}
                  </p>

                  <div className="mt-12 flex flex-col items-center justify-center gap-2 text-sm">
                    <div className="flex w-full items-center justify-center gap-2 text-dark">
                      <hr className="w-1/4" />
                      Or Sign In With
                      <hr className="w-1/4" />
                    </div>
                    <div className="flex gap-2">
                      <button type="button" className="btn">
                        <GoogleLogoColoured className="h-8 w-8" />
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div className="relative col-span-5 hidden items-center justify-center md:flex">
              <img
                src={authIllustrationLight}
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
