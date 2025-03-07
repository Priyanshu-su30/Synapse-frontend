/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./Input";
import { BACKEND_URL } from "../config";
import axios from "axios";

export enum ContentType {
    Youtube = "youtube",
    Twitter = "twitter",
    Document = 'document',
    Link = "link",
    Tag = 'tag'
}

interface CreateContentModalProps {
    open: boolean;
    onClose: () => void; // Define the type for onClose
}

// controlled component
export function CreateContentModal({ open, onClose }: CreateContentModalProps) {
    const titleRef = useRef<HTMLInputElement>();
    const linkRef = useRef<HTMLInputElement>();
    const [type, setType] = useState(ContentType.Youtube);

    async function addContent() {
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;

        await axios.post(`${BACKEND_URL}/api/v1/content`, {
            link,
            title,
            type
        }, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        })

        onClose();

    }

    return <div>
    
        {open && <div> 
            <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-60 flex justify-center z-40">
               
            </div>
            <div className="w-screen h-screen fixed top-0 left-0 flex justify-center z-50">
                <div className="flex items-center justify-center">
                    <span className="bg-white dark:bg-purple-600 opacity-100 p-4 rounded fixed z-50">
                        <div className="flex justify-end">
                            <div onClick={onClose} className="cursor-pointer">
                                <CrossIcon />
                            </div>
                        </div>

                        <div > 
                            <Input reference={titleRef} placeholder={"Title"} />
                            <Input reference={linkRef} placeholder={"Link"} />
                        </div>
                        <div>
                            <h1>Type</h1>
                            <div className="flex gap-1 justify-center pb-2 ">
                                <Button text="Youtube" variant={type === ContentType.Youtube ? "primary" : "secondary"} onClick={() => {
                                    setType(ContentType.Youtube)
                                }}></Button>
                                <Button text="Twitter" variant={type === ContentType.Twitter ? "primary" : "secondary"} onClick={() => {
                                    setType(ContentType.Twitter)
                                }}></Button>
                                <Button text="Document" variant={type === ContentType.Document ? "primary" : "secondary"} onClick={() => {
                                    setType(ContentType.Document)
                                }}></Button>
                                <Button text="Link" variant={type === ContentType.Link ? "primary" : "secondary"} onClick={() => {
                                    setType(ContentType.Link)
                                }}></Button>
                                <Button text="Tag" variant={type === ContentType.Tag ? "primary" : "secondary"} onClick={() => {
                                    setType(ContentType.Tag)
                                }}></Button>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <Button onClick={addContent} variant="primary" text="Submit" />
                        </div>
                    </span>
                </div>     
            </div>
        </div>}
    </div>

}
