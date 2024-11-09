import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { LoginInputState, userLoginSchema } from "@/schema/userSchema";
import { Separator } from "@radix-ui/react-separator";
// import { Label } from "@radix-ui/react-label";
import { Loader2, LockKeyhole, Mail } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";

// typescript me ytpe define krne ke 2 tarika hota hai
// -- CLASS COMPONENTS
// interface LoginInputState {
//     email: string;
//     password: string;
// }
// interface LoginInputWithAge extends LoginInputState {
//     age: string;
// }

// -- FUNCTIONAL COMPONENTS
// type LoginInputState = {
//     email: string;         // ZOD replaced this
//     password: string;
//     // name: string;
// }

const Login = () => {
    const [input, setInput] = useState<LoginInputState>({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState<Partial<LoginInputState>>({});
    const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    }
    const loginSubmitHandler = (e: FormEvent) => {
        e.preventDefault();
        const result = userLoginSchema.safeParse(input);
        if (!result.success) {
            const fieldErrors = result.error.formErrors.fieldErrors;
            setErrors(fieldErrors as Partial<LoginInputState>);
            return;
        }
        console.log(input);
    }

    const loading = false;

    return (
        <div className="flex items-center justify-center min-h-screen">
            <form onSubmit={loginSubmitHandler} className="md:p-8 w-full max-w-md rounded-lg md:border border border-gray-200">
                {/* form hai, Katyayini */}
                <div className="mb-4">
                    <h1 className="font-bold text-2xl">Vindhu Bhojanam</h1>
                </div>
                <div className="mb-4">
                    <div className="relative">
                        {/* <Label>Email</Label> */}
                        <Input
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={input.email}
                            onChange={changeEventHandler}
                            className="pl-10 focus-visible:ring-1"
                        />
                        <Mail
                            className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none"
                        />
                        {
                            errors && <span className="text-xs text-red-500">{errors.email}</span>
                        }
                    </div>
                </div>
                <div className="mb-4">
                    <div className="relative">
                        {/* <Label>Email</Label> */}
                        <Input
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={input.password}
                            onChange={changeEventHandler}
                            className="pl-10 focus-visible:ring-1"
                        />
                        <LockKeyhole
                            className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none"
                        />
                        {
                            errors && <span className="text-xs text-red-500">{errors.password}</span>
                        }
                    </div>
                </div>
                <div className="mb-10">
                    {
                        loading
                            ?
                            (
                                <Button disabled className="w-full bg-orange hover:bg-hoverOrange">
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait</Button>
                            )
                            :
                            (
                                <Button type="submit" className="w-full bg-orange hover:bg-hoverOrange">Login</Button>
                            )    
                    }
                    <div className="mt-4">
                    <Link to="/forgot-password" className="hover:text-blue-500 hover:underline">Forget Password</Link>
                    </div>
                </div>
                <Separator />
                <p className="mt-2">
                    Don't have an account? {" "}
                    <Link to="/signup" className="text-blue-500 hover:underline">Sign up</Link>
                </p>
            </form>
        </div>
    )
}
export default Login;