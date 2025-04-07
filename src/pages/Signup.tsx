import { useRef } from "react";
import { Button } from "../components/Button";
import { AccountInput } from "../components/AccountInput";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ClickSpark from "../animations/ClickSpark";

export function Signup() {
    const usernameRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();
    const navigate = useNavigate();

    const notify = () => toast("Account created");

    async function signup() {
        const username = usernameRef.current?.value;
        console.log(usernameRef.current)
        const password = passwordRef.current?.value;
        await axios.post(BACKEND_URL + "/api/v1/signup", {
            username,
            password
        })
        navigate("/signin")
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
                            <Button onClick={() =>{signup(); notify() }} loading={false} variant="primary" text="Sign up" fullWidth={true} />
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