import { useRef } from "react";
import { Button } from "../components/Button";
import { AccountInput } from "../components/AccountInput";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ClickSpark from "../animations/ClickSpark";

export function Signup() {
    const navigate = useNavigate();

    const usernameRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();

    async function signup() {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;

        if (!username || !password) {
            toast.error("Please fill in all fields");
            return;
        }

        if (username.length < 3) {
            toast.error("Username must be at least 3 characters");
            return;
        }

        if (password.length < 6) {
            toast.error("Password must be at least 6 characters");
            return;
        }

        try{
            await axios.post(BACKEND_URL + "/api/v1/signup", {
                username,
                password
            })
            toast.success("Account created successfully")
            navigate("/signin")
        } catch (error) {
            if(axios.isAxiosError(error)){
                toast.error(error.response?.data?.message || "Failed to create account")
            } else {
                toast.error("An unexpected error occured")
            }
        }
    }
   
    return(        
        <ClickSpark sparkColor='#fff' sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}>
            <div className="bg-[#1c1c1c] text-white">
                <div className="h-screen w-screen flex justify-center items-center">
                    <div className="min-w-48 ">
                        <div className="text-2xl font-medium">
                            Welcome to Synapse
                        </div>
                        <div className="text-sm text-center pb-3">A second brain for your daily tasks</div>
                        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                        <div className="flex flex-col">
                            <span className="text-white/70 font-sans text-[14px] my-1">Username</span>
                            <AccountInput reference={usernameRef} placeholder="Enter your username..." type={"text"} />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-white/70 font-sans text-[14px] my-1">Password</span>
                            <AccountInput reference={passwordRef} placeholder="Enter your password..." type={"password"} />
                        </div>
                        <div className="flex justify-center pt-4">
                            <Button onClick={() =>{signup() }} loading={false} variant="primary" text="Sign up" fullWidth={true} />
                        </div>
                        <div className="py-4 text-xs">
                            Already have an account? 
                            <button onClick={() => {navigate('/signin')}} className="text-blue-400"> Signin</button>
                        </div>
                    </div>
                </div>
            </div>
        </ClickSpark>
    );
}