import { FiPhone } from "react-icons/fi";

const PhoneNumberInput = () => {
    return (
        <label htmlFor="phone" className="flex flex-col gap-2">
        <span className="font-semibold text-lg">Phone Number</span>
        <div className="flex flex-row items-center border h-14 border-gray-300 rounded-lg px-4 gap-4">
            <div>
                <FiPhone  className="text-gray-500" />
            </div>
            <input className="flex-1 outline-none placeholder:text-sm placeholder:text-gray-500" id="phone" type="text" name="phone" placeholder="Enter Your Phone Number" autoComplete="on"/>
        </div>
    </label>
    )
}

export default PhoneNumberInput