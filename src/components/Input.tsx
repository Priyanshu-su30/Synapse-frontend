/* eslint-disable @typescript-eslint/no-explicit-any */
interface InputProps { 
    placeholder: string; 
    reference?: any
}

export function Input({placeholder, reference}: InputProps){
    return (
        <div>
            <input ref={reference} placeholder={placeholder} type={"text"} className="m-2 w-[240px] text-[14px] dark:bg-[#303030] dark:text-white p-2 border dark:border-white/10 rounded-md outline-none ring-2 ring-blue-500/0 focus:ring-blue-500" ></input>
        </div>
    )
}