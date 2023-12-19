import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { FiXCircle } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";
import BriImage from '../assets/bri.svg'
import DanaImage from '../assets/dana.svg'
import BcaImage from '../assets/bca.svg'
import GopayImage from '../assets/gopay.svg'
import OvoImage from '../assets/ovo.svg'
import PaypalImage from '../assets/paypal.svg'
import { Link } from 'react-router-dom';

const CheckoutProduct = () => {
    return (
        <>
            <Navbar className="bg-black"/>
            <main className="flex flex-col h-fit px-24 mb-16 pt-24">
                <h1 className="text-4xl font-medium text-gray-900 tracking-wide py-10">Payment <span className="text-yellow-900">Details</span></h1>
                {/* <!-- column-1 --> */}
                <div className="flex flex-1 h-fit flex-row gap-3">
                    <div className="flex flex-col flex-1 gap-4">
                        <div className="flex flex-row justify-between items-center">
                            <span className="text-xl font-semibold tracking-wide">Your Order</span>
                            <button className="flex flex-row h-10 text-sm justify-center items-center gap-2 border border-orange-500 bg-orange-500 rounded-md hover:borde-orange-500 active:scale-95 transition:all duration-300 cursor-pointer">
                                <div className="flex pl-2 items-center"><FiPlus className='w-4' /></div>
                                <div className="flex flex-1 pr-2 items-center"><span>Add Menu</span></div>
                            </button>
                        </div>
                        {/* <!-- product-card-1 --> */}
                        <div className="flex flex-row h-fit bg-gray-100 gap-5">
                            <div className="flex bg-[url('../assets/fav-img-4.jpg')] h-48 aspect-square bg-cover bg-center"></div>
                            <div className="flex flex-col flex-1 self-center gap-3">
                                <span className="w-fit text-xs text-white font-semibold bg-red-700 px-2 py-1 rounded-full">FLASH SALE!</span>
                                <span className="font-semibold tracking-wide">Cappuccino</span>
                                <div className="flex flex-row items-center gap-2 divide-x-2 divide-gray-300">
                                    <span className="text-sm text-gray-600">2pcs</span>
                                    <span className="text-sm text-gray-600 pl-2">Regular</span>
                                    <span className="text-sm text-gray-600 pl-2">Ice</span>
                                    <span className="text-sm text-gray-600 pl-2">Door Delivery</span>
                                </div>
                                <div className="flex flex-row gap-3 items-center">
                                    <span className="self-center text-xs text-red-700"><del>IDR 25.000,-</del></span>
                                    <span className="text-base text-orange-500">IDR 10.000,-</span>
                                </div>
                            </div>
                            <div className="flex w-fit justify-center items-center px-8">
                                <FiXCircle className='text-red-700' />
                            </div>
                        </div>
                        {/* <!-- product-card-2 --> */}
                        <div className="flex flex-row h-fit bg-gray-100 gap-5">
                            <div className="flex bg-[url('../assets/fav-img-5.jpg')] h-48 aspect-square bg-cover bg-center"></div>
                            <div className="flex flex-col flex-1 self-center gap-3">
                                <span className="w-fit text-xs text-white font-semibold bg-red-700 px-2 py-1 rounded-full">FLASH SALE!</span>
                                <span className="font-semibold tracking-wide">Espresso</span>
                                <div className="flex flex-row items-center gap-2 divide-x-2 divide-gray-300">
                                    <span className="text-sm text-gray-600">2pcs</span>
                                    <span className="text-sm text-gray-600 pl-2">Regular</span>
                                    <span className="text-sm text-gray-600 pl-2">Hot</span>
                                    <span className="text-sm text-gray-600 pl-2">Dine In</span>
                                </div>
                                <div className="flex flex-row gap-3 items-center">
                                    <span className="self-center text-xs text-red-700"><del>IDR 25.000,-</del></span>
                                    <span className="text-base text-orange-500">IDR 10.000,-</span>
                                </div>
                            </div>
                            <div className="flex w-fit justify-center items-center px-8">
                            <FiXCircle className='text-red-700' />
                            </div>
                        </div>
                        
                        <span className="text-xl font-semibold tracking-wide">Payment Info & Delivery</span>

                        <form action="" className="flex flex-col gap-5">
                            <label htmlFor="email" className="flex flex-col gap-1">
                                <span className="font-semibold text-lg">Email</span>
                                <div className="flex flex-row items-center border h-10 border-black rounded px-2 gap-2">
                                    <div>
                                        <FiMail />
                                    </div>
                                    <input className="flex-1 outline-none" id="email" type="email" name="email" />
                                </div>
                            </label>
                            <label htmlFor="fullname" className="flex flex-col gap-1">
                                <span className="font-semibold text-lg">Full Name</span>
                                <div className="flex flex-row items-center border h-10 border-black rounded px-2 gap-2">
                                    <div>
                                        <FiUser />
                                    </div>
                                    <input className="flex-1  outline-none" id="fullname" type="text" name="fullname" />
                                </div>
                            </label>
                            <label htmlFor="address" className="flex flex-col gap-1">
                                <span className="font-semibold text-lg">Address</span>
                                <div className="flex flex-row items-center border h-10 border-black rounded px-2 gap-2">
                                    <div>
                                        <FiMapPin />
                                    </div>
                                    <input className="flex-1 outline-none" id="address" type="address" name="address" />
                                </div>
                            </label>
                            <div className="flex flex-col gap-1">
                                <span className="font-semibold text-lg">Delivery</span>
                                <div className="flex flex-row items-center gap-8">
                                    <div className="flex flex-1 justify-center items-center h-10 border border-gray-500 rounded-md hover:border hover:border-orange-500 active:scale-95 transition:all duration-300 cursor-pointer">Dine In</div>
                                    <div className="flex flex-1 justify-center items-center h-10 border border-gray-500 rounded-md hover:border hover:border-orange-500 active:scale-95 transition:all duration-300 cursor-pointer">Door Delivery</div>
                                    <div className="flex flex-1 justify-center items-center h-10 border border-gray-500 rounded-md hover:border hover:border-orange-500 active:scale-95 transition:all duration-300 cursor-pointer">Pick Up</div>
                                </div>
                            </div>

                        </form>

                    </div>

                    <div className="flex flex-col flex-1 gap-4">
                        <div className="flex h-10 items-center">
                            <span className="text-xl font-semibold tracking-wide">Total</span>
                        </div>
                        <div className="flex flex-col max-w-lg w-full bg-gray-100">
                            <div className="flex flex-col p-3 gap-5">
                                <div className="flex flex-row justify-between ">
                                    <span className="font-semibold text-gray-800">Order</span>
                                    <span className="font-semibold">IDR 20.000</span>
                                </div>
                                <div className="flex flex-row justify-between ">
                                    <span className="font-semibold text-gray-800">Delivery</span>
                                    <span className="font-semibold">IDR 0</span>
                                </div>
                                <div className="flex flex-row justify-between ">
                                    <span className="font-semibold text-gray-800">Tax</span>
                                    <span className="font-semibold">IDR 4000</span>
                                </div>
                                <hr />
                                <div className="flex flex-row justify-between ">
                                    <span className="font-semibold text-gray-800">Sub Total</span>
                                    <span className="font-semibold">IDR 24.000</span>
                                </div>
                                <Link to={'/history-order'} className="flex h-10 text-sm justify-center items-center border border-orange-500 bg-orange-500 rounded-md hover:borde-orange-500 active:scale-95 transition:all duration-300 cursor-pointer"><button id="checkout-button" >Checkout</button></Link>
                                <span className="font-thin text-sm tracking-wide">We Accept</span>
                                <div className="flex flex-row">
                                    <div className="flex flex-1 justify-start items-center"><img src={BriImage} alt="" /></div>
                                    <div className="flex flex-1 justify-center items-center"><img src={DanaImage} alt="" /></div>
                                    <div className="flex flex-1 justify-center items-center"><img src={BcaImage} alt="" /></div>
                                    <div className="flex flex-1 justify-center items-center"><img src={GopayImage} alt="" /></div>
                                    <div className="flex flex-1 justify-center items-center"><img src={OvoImage} alt="" /></div>
                                    <div className="flex flex-1 justify-end items-center"><img src={PaypalImage} alt="" /></div>
                                </div>
                                <span className="font-thin text-sm tracking-wide">*Get Discount if you pay with Bank Central Asia</span>

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

export default CheckoutProduct