import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "@/api/hooks/useAuth";
import Logo from "@/components/svg/logo";
import OTPInput from "react-otp-input";

export default function VerificationCode() {
  const { isSuccess } = useLogin();
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/reset-password");
  };

  useEffect(() => {
    if (isSuccess) navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

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
          <div className="">
            <div className="col-span-7 flex flex-col items-center justify-center">
              <form
                onSubmit={handleSubmit}
                className="h-fit min-h-96 w-full rounded-xl bg-opacity-10 bg-[5px,5px] bg-clip-padding px-4 backdrop-blur-md backdrop-filter md:max-w-lg md:border-2 md:border-text/25 md:bg-[linear-gradient(rgba(var(--light-300),.50),rgba(var(--light-200),.50)100%),url('../assets/noise.png')] md:px-8 md:py-10 md:shadow-md md:shadow-text/15"
              >
                <div className="mb-4 flex flex-col items-center justify-center gap-2 text-center">
                  <h3 className="text-2xl font-bold text-dark">Verify Code</h3>
                  <p>We sent a verification code via Email to testmail@gmail.com</p>
                </div>

                <div className="mt-12 flex flex-col justify-between gap-4">
                  <OTPInput
                    value={code}
                    onChange={setCode}
                    numInputs={6}
                    renderInput={({
                      className = "input-field mx-auto aspect-square h-12 !w-12 rounded-full bg-transparent text-center",
                      ...rest
                    }) => <input className={className} {...rest} />}
                  />

                  <div className="flex items-center justify-center py-2">
                    <p className="cursor-pointer px-3 py-3 text-dark-300">23:59</p>
                  </div>

                  <button className="btn-primary mt-6">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
