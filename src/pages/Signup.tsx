import { useRef } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Logo } from "../icons/Logo";

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

    // return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
    //     <div className="bg-white rounded-xl border min-w-48 p-8">
    //         <Input reference={usernameRef} placeholder="Username" />
    //         <Input reference={passwordRef} placeholder="Password" />
    //         <div className="flex justify-center pt-4">
    //             <Button onClick={() =>{signup(); notify() }} loading={false} variant="primary" text="Sign up" fullWidth={true} />
    //         </div>
    //     </div>
    // </div>
    return(
        <>
        <div className="flex text-2xl w-screen  pt-6 pl-6">
            <div className="text-green-400">
                <Logo />
            </div>                        
            Synapse
        </div>
        <div className="h-screen w-screen  flex justify-center items-center">
            <div className="bg-white rounded-xl min-w-48 p-8">
                <div className="text-2xl font-medium">
                    Welcome to Synapse
                </div>
                <div className="text-center pb-3">A second brain for your daily tasks</div>
                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                <div className="">Username</div>
                <Input reference={usernameRef} placeholder="Username" />
                <div className="">Password</div>                
                <Input reference={passwordRef} placeholder="Password" />
                <div className="flex justify-center pt-4">
                    <Button onClick={() =>{signup(); notify() }} loading={false} variant="primary" text="Sign up" fullWidth={true} />
                </div>
            </div>
        </div>
    </>

    );
}