import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import { useRef, useState } from "react";

const VerifyEmail = () => {
    const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
    const inputRef = useRef<any[]>([]);
    // const inputRef = useRef<(HTMLInputElement | null)[]>([]);

    const loading = false;

    const handleChange = (index: number, value: string) => {
        if (/^[a-zA-Z0-9]$/.test(value) || value === "") {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            // Move to the next input field if a digit is entered
            if (value && index < otp.length - 1) {
                inputRef.current[index + 1].focus();
            }
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        // Move focus back on backspace if current input is empty
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputRef.current[index - 1].focus();
        }
    };

    return (
        <div className="flex items-center justify-center h-screen w-full">
            <div className="p-8 rounded-md w-full max-w-md flex flex-col gap-10 border border-gray-200">
                <div className="center">
                    <h1 className="font-extrabold text-2xl">Verify your email</h1>
                    <p className="text-sm text-gray-600">Enter the 6 digit code sent to your email address</p>
                </div>
                <form action="">
                    <div className="flex justify-between gap-2">
                        {otp.map((letter: string, idx: number) => (
                            <Input
                                key={idx}
                                ref={(element) => (inputRef.current[idx] = element)}
                                maxLength={1}
                                type="text"
                                value={letter}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(idx, e.target.value)}
                                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => handleKeyDown(idx, e)}
                                className="md:w-12 md:h-12 w-8 h-8 text-center text-sm md:text-2xl md:font-bold rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        ))}
                    </div>
                    {
                        loading 
                        ? <button disabled className="bg-organge hover:bg-hoverOrange mt-6 w-full">
                            <Loader2 className="mr-2 w-4 h-4 animate-spin"/>Please wait</button>
                        : (<button className="bg-organge hover:bg-hoverOrange mt-6 w-full">
                            Verify</button>)
                    }
                </form>
            </div>
        </div>
    );
};

export default VerifyEmail;
