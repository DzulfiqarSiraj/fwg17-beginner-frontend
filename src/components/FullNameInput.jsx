import { FiUser } from "react-icons/fi";

const FullNameInput = () => {

    return (
        <label htmlFor="fullname" className="flex flex-col gap-2">
            <span className="font-semibold text-lg">Full Name</span>
            <div className="flex flex-row items-center border h-14 border-gray-300 rounded-lg px-4 gap-4">
                <div>
                    <FiUser className="text-gray-500" />
                </div>
                <input className="flex-1 outline-none placeholder:text-sm placeholder:text-gray-500" id="fullname" type="text" name="fullname" placeholder="Enter Your Full Name" autoComplete="on"/>
            </div>
        </label>
    )
}

export default FullNameInput