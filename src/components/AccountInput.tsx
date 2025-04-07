/* eslint-disable @typescript-eslint/no-explicit-any */
interface InputProps { 
    placeholder: string
    type: string
    reference?: any
}

export function AccountInput({placeholder, reference, type}: InputProps) {
    return <div>
        <input ref={reference} placeholder={placeholder} type={type} className="px-3 w-[240px] text-[14px] bg-[#303030] text-white p-2 border border-white/10 rounded-md outline-none ring-2 ring-blue-500/0 focus:ring-blue-500" ></input>
    </div>
}