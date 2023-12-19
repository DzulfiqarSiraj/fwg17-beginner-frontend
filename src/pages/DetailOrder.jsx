import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { FiUser } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";
import { FiPhoneCall } from "react-icons/fi";
import { FiCreditCard } from "react-icons/fi";
import { FiTruck } from "react-icons/fi";
import { FiLoader } from "react-icons/fi";

const DetailOrder = () => {
    return (
        <>
            <Navbar className='bg-black' />
            {/* <!-- main --> */}
            <main className="flex flex-col h-fit px-24 mb-16 pt-24">
                <h1 className="text-4xl font-medium text-gray-900 tracking-wide pt-10">Order <span className="font-bold">#12345-09893</span></h1>
                <span className="text-sm text-gray-500 pt-2 pb-10">21 March 2023 at 10.30 AM</span>
                {/* <!-- column-1 --> */}
                <div className="flex flex-1 h-fit flex-row-reverse gap-3">
                    <div className="flex flex-col flex-1 gap-4">
                        <div className="flex flex-row justify-between items-center">
                            <span className="text-xl font-semibold tracking-wide">Your Order</span>
                        </div>
                        {/* <!-- product-card-1 --> */}
                        <div className="flex flex-row h-fit bg-gray-100 gap-5">
                            <div className="flex bg-[url('../assets/fav-img-1.jpg')] h-48 aspect-square bg-cover bg-center"></div>
                            <div className="flex flex-col flex-1 self-center gap-3">
                                <span className="w-fit text-xs text-white font-semibold bg-red-700 px-2 py-1 rounded-full">FLASH SALE!</span>
                                <span className="font-semibold tracking-wide">Coffee Parfaits</span>
                                <div className="flex flex-row items-center gap-2 divide-x-2 divide-gray-300">
                                    <span className="text-sm text-gray-600">2pcs</span>
                                    <span className="text-sm text-gray-600 pl-2">Regular</span>
                                    <span className="text-sm text-gray-600 pl-2">Ice</span>
                                    <span className="text-sm text-gray-600 pl-2">Dine In</span>
                                </div>
                                <div className="flex flex-row gap-3 items-center">
                                    <span className="self-center text-xs text-red-700"><del>IDR 40.000</del></span>
                                    <span className="text-base text-orange-500">IDR 20.000</span>
                                </div>
                            </div>
                        </div>
                        {/* <!-- product-card-1 --> */}
                        <div className="flex flex-row h-fit bg-gray-100 gap-5">
                            <div className="flex bg-[url('../assets/fav-img-2.jpg')] h-48 aspect-square bg-cover bg-center"></div>
                            <div className="flex flex-col flex-1 self-center gap-3">
                                <span className="w-fit text-xs text-white font-semibold bg-red-700 px-2 py-1 rounded-full">FLASH SALE!</span>
                                <span className="font-semibold tracking-wide">Affogato</span>
                                <div className="flex flex-row items-center gap-2 divide-x-2 divide-gray-300">
                                    <span className="text-sm text-gray-600">2pcs</span>
                                    <span className="text-sm text-gray-600 pl-2">Regular</span>
                                    <span className="text-sm text-gray-600 pl-2">Ice</span>
                                    <span className="text-sm text-gray-600 pl-2">Dine In</span>
                                </div>
                                <div className="flex flex-row gap-3 items-center">
                                    <span className="self-center text-xs text-red-700"><del>IDR 40.000</del></span>
                                    <span className="text-base text-orange-500">IDR 20.000</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col flex-1 gap-4">
                        <span className="text-xl font-semibold tracking-wide">Order Information</span>

                        <div className="flex flex-col w-full">
                            <div className="flex flex-col p-3 gap-5">
                                <div className="flex flex-row justify-between">
                                    <div className="flex flex-row gap-2">
                                        <div><FiUser /></div>
                                        <span className="font-medium text-gray-800">Full Name</span>
                                    </div>
                                    <span className="font-semibold">Ghaluh Wizard Anggoro</span>
                                </div>
                                <hr />
                                <div className="flex flex-row justify-between">
                                    <div className="flex flex-row gap-2">
                                        <div><FiMapPin /></div>
                                        <span className="font-medium text-gray-800">Address</span>
                                    </div>
                                    <span className="font-semibold">Griya Bandung indah</span>
                                </div>
                                <hr />
                                <div className="flex flex-row justify-between">
                                    <div className="flex flex-row gap-2">
                                        <div><FiPhoneCall /></div>
                                        <span className="font-medium text-gray-800">Phone</span>
                                    </div>
                                    <span className="font-semibold">082116304338</span>
                                </div>
                                
                                <div className="flex flex-row justify-between">
                                    <div className="flex flex-row gap-2">
                                        <div><FiCreditCard /></div>
                                        <span className="font-medium text-gray-800">Payment Method</span>
                                    </div>
                                    <span className="font-semibold">Cash</span>
                                </div>
                                <hr />
                                <div className="flex flex-row justify-between">
                                    <div className="flex flex-row gap-2">
                                        <div><FiTruck /></div>
                                        <span className="font-medium text-gray-800">Shipping</span>
                                    </div>
                                    <span className="font-semibold">Dine In</span>
                                </div>
                                <hr />
                                <div className="flex flex-row justify-between">
                                    <div className="flex flex-row gap-2">
                                        <div><FiLoader /></div>
                                        <span className="font-medium text-gray-800">Status</span>
                                    </div>
                                    <span className="text-sm font-semibold bg-green-100 text-green-600 px-3 py-1 box-border rounded-full">Done</span>
                                </div>
                                <hr />
                                <div className="flex flex-row justify-between">
                                    <span className="font-medium text-gray-800">Total Transaksi</span>
                                    <span className="font-semibold text-orange-500">IDR 40.000</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </main>
            {/* <!-- /main --> */}
            <Footer />
        </>
    )
}

export default DetailOrder