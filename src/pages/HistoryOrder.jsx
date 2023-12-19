import { Link } from "react-router-dom";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { FaCircleChevronRight } from "react-icons/fa6"
import { FiCalendar } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";
import { FaMugHot } from "react-icons/fa6";
import { FaCalendar } from "react-icons/fa6";
import { FaRepeat } from "react-icons/fa6";
import { FaArrowsSpin } from "react-icons/fa6";
import MessageIcon from "../assets/icon/message-icon.svg"

const HistoryOrder = () => {
    return (
        <>
            <Navbar className="bg-black"/>

            {/* <!-- main --> */}
            <main className="flex flex-col h-fit px-24 pt-24">
                <div className="flex flex-row items-center py-10 gap-5">
                    <h1 className="text-4xl font-medium text-gray-900 tracking-wide">History Order</h1>
                    <div className="flex justify-center items-center aspect-square h-9 bg-gray-200">2</div>
                </div>
                {/* <!-- column-1 --> */}
                <div className="flex flex-1 h-fit flex-row gap-3">
                    <div className="flex flex-col flex-1 gap-4">
                        <div className="flex flex-row justify-between items-center gap-4 mb-4">
                            <div className="flex flex-row flex-1 items-center bg-gray-300 h-14 box-border p-2 gap-4">
                                <div className="flex flex-1 justify-center items-center h-full hover:bg-white text-sm tracking-wide cursor-pointer">On Progress</div>
                                <div className="flex flex-1 justify-center items-center h-full hover:bg-white text-sm tracking-wide cursor-pointer">Sending Goods</div>
                                <div className="flex flex-1 justify-center items-center h-full hover:bg-white text-sm tracking-wide cursor-pointer">Finish Order</div>
                            </div>
                            <div className="flex flex-row items-center bg-gray-300 h-14 box-border p-2 gap-1">
                                <div><FiCalendar className="w-5"/></div>
                                <div className="text-sm tracking-wide">January 2023</div>
                                <div><FiChevronDown className="w-5" /></div>
                            </div>
                        </div>
                        
                        {/* <!-- product-card-1 --> */}
                        <div className="flex flex-row h-fit bg-gray-100 gap-2 py-2 pl-2 pr-4 justify-between">
                            <div className="flex bg-[url('../assets/fav-img-1.jpg')] h-28 aspect-square bg-cover bg-center"></div>
                            <div className="flex flex-col self-start gap-2 pt-2">
                                <div className="flex flex-row gap-2 items-center">
                                    <div><FaMugHot className="text-gray-500"/></div>
                                    <span className="text-gray-500">No. Order</span>
                                </div>
                                <span className="text-base font-bold tracking-wide">#12354-09893</span>
                                <Link to={'/detail-order'} className="text-base text-orange-500 hover:text-gray-500"><span >View Order Detail</span></Link>
                            </div>
                            <div className="flex flex-col self-start gap-2 pt-2">
                                <div className="flex flex-row gap-2 items-center">
                                    <div><FaCalendar className="text-gray-500"/></div>
                                    <span className="text-gray-500">Date</span>
                                </div>
                                <span className="text-base font-bold tracking-wide">23 January 2023</span>
                            </div>
                            <div className="flex flex-col self-start gap-2 pt-2">
                                <div className="flex flex-row gap-2 items-center">
                                    <div><FaRepeat className="text-gray-500" /></div>
                                    <span className="text-gray-500">Total</span>
                                </div>
                                <span className="text-base font-bold tracking-wide">IDR 40.000</span>
                            </div>
                            <div className="flex flex-col self-start gap-2 pt-2">
                                <div className="flex flex-row gap-2 items-center">
                                    <div><FaArrowsSpin className="text-gray-500" /></div>
                                    <span className="text-gray-500">Status</span>
                                </div>
                                <span className="w-fit text-sm font-semibold bg-orange-200 text-orange-600 px-3 py-1 box-border rounded-full">On Progress</span>
                            </div>
                        </div>
                        {/* <!-- product-card-2 --> */}
                        <div className="flex flex-row h-fit bg-gray-100 gap-2 py-2 pl-2 pr-4 justify-between">
                            <div className="flex bg-[url('../assets/fav-img-2.jpg')] h-28 aspect-square bg-cover bg-center"></div>
                            <div className="flex flex-col self-start gap-2 pt-2">
                                <div className="flex flex-row gap-2 items-center">
                                    <div><FaMugHot className="text-gray-500"/></div>
                                    <span className="text-gray-500">No. Order</span>
                                </div>
                                <span className="text-base font-bold tracking-wide">#12354-09893</span>
                                <Link to={'/detail-order'} className="text-base text-orange-500 hover:text-gray-500"><span >View Order Detail</span></Link>
                            </div>
                            <div className="flex flex-col self-start gap-2 pt-2">
                                <div className="flex flex-row gap-2 items-center">
                                    <div><FaCalendar className="text-gray-500"/></div>
                                    <span className="text-gray-500">Date</span>
                                </div>
                                <span className="text-base font-bold tracking-wide">23 January 2023</span>
                            </div>
                            <div className="flex flex-col self-start gap-2 pt-2">
                                <div className="flex flex-row gap-2 items-center">
                                    <div><FaRepeat className="text-gray-500" /></div>
                                    <span className="text-gray-500">Total</span>
                                </div>
                                <span className="text-base font-bold tracking-wide">IDR 40.000</span>
                            </div>
                            <div className="flex flex-col self-start gap-2 pt-2">
                                <div className="flex flex-row gap-2 items-center">
                                    <div><FaArrowsSpin className="text-gray-500" /></div>
                                    <span className="text-gray-500">Status</span>
                                </div>
                                <span className="w-fit text-sm font-semibold bg-orange-200 text-orange-600 px-3 py-1 box-border rounded-full">On Progress</span>
                            </div>
                        </div>
                        {/* <!-- product-card-3 --> */}
                        <div className="flex flex-row h-fit bg-gray-100 gap-2 py-2 pl-2 pr-4 justify-between">
                            <div className="flex bg-[url('../assets/fav-img-3.jpg')] h-28 aspect-square bg-cover bg-center"></div>
                            <div className="flex flex-col self-start gap-2 pt-2">
                                <div className="flex flex-row gap-2 items-center">
                                    <div><FaMugHot className="text-gray-500"/></div>
                                    <span className="text-gray-500">No. Order</span>
                                </div>
                                <span className="text-base font-bold tracking-wide">#12354-09893</span>
                                <Link to={'/detail-order'} className="text-base text-orange-500 hover:text-gray-500"><span >View Order Detail</span></Link>
                            </div>
                            <div className="flex flex-col self-start gap-2 pt-2">
                                <div className="flex flex-row gap-2 items-center">
                                    <div><FaCalendar className="text-gray-500"/></div>
                                    <span className="text-gray-500">Date</span>
                                </div>
                                <span className="text-base font-bold tracking-wide">23 January 2023</span>
                            </div>
                            <div className="flex flex-col self-start gap-2 pt-2">
                                <div className="flex flex-row gap-2 items-center">
                                    <div><FaRepeat className="text-gray-500" /></div>
                                    <span className="text-gray-500">Total</span>
                                </div>
                                <span className="text-base font-bold tracking-wide">IDR 40.000</span>
                            </div>
                            <div className="flex flex-col self-start gap-2 pt-2">
                                <div className="flex flex-row gap-2 items-center">
                                    <div><FaArrowsSpin className="text-gray-500" /></div>
                                    <span className="text-gray-500">Status</span>
                                </div>
                                <span className="w-fit text-sm font-semibold bg-orange-200 text-orange-600 px-3 py-1 box-border rounded-full">On Progress</span>
                            </div>
                        </div>
                        {/* <!-- product-card-4 --> */}
                        <div className="flex flex-row h-fit bg-gray-100 gap-2 py-2 pl-2 pr-4 justify-between">
                            <div className="flex bg-[url('../assets/fav-img-4.jpg')] h-28 aspect-square bg-cover bg-center"></div>
                            <div className="flex flex-col self-start gap-2 pt-2">
                                <div className="flex flex-row gap-2 items-center">
                                    <div><FaMugHot className="text-gray-500"/></div>
                                    <span className="text-gray-500">No. Order</span>
                                </div>
                                <span className="text-base font-bold tracking-wide">#12354-09893</span>
                                <Link to={'/detail-order'} className="text-base text-orange-500 hover:text-gray-500"><span >View Order Detail</span></Link>
                            </div>
                            <div className="flex flex-col self-start gap-2 pt-2">
                                <div className="flex flex-row gap-2 items-center">
                                    <div><FaCalendar className="text-gray-500"/></div>
                                    <span className="text-gray-500">Date</span>
                                </div>
                                <span className="text-base font-bold tracking-wide">23 January 2023</span>
                            </div>
                            <div className="flex flex-col self-start gap-2 pt-2">
                                <div className="flex flex-row gap-2 items-center">
                                    <div><FaRepeat className="text-gray-500" /></div>
                                    <span className="text-gray-500">Total</span>
                                </div>
                                <span className="text-base font-bold tracking-wide">IDR 40.000</span>
                            </div>
                            <div className="flex flex-col self-start gap-2 pt-2">
                                <div className="flex flex-row gap-2 items-center">
                                    <div><FaArrowsSpin className="text-gray-500" /></div>
                                    <span className="text-gray-500">Status</span>
                                </div>
                                <span className="w-fit text-sm font-semibold bg-orange-200 text-orange-600 px-3 py-1 box-border rounded-full">On Progress</span>
                            </div>
                        </div>


                        <div className="flex flex-row gap-4 self-center items-center pt-5 pb-10">
                        <div className="flex justify-center items-center text-base bg-orange-500 w-9 h-9 rounded-full hover:opacity-90 active:scale-95 transition:all duration-300 cursor-pointer">1</div>
                                    <div className="flex justify-center items-center text-base bg-gray-300 w-9 h-9 rounded-full hover:bg-orange-500 hover:opacity-90 active:scale-95 transition:all duration-300 cursor-pointer">2</div>
                                    <div className="flex justify-center items-center text-base bg-gray-300 w-9 h-9 rounded-full hover:bg-orange-500 hover:opacity-90 active:scale-95 transition:all duration-300 cursor-pointer">3</div>
                                    <div className="flex justify-center items-center text-base bg-gray-300 w-9 h-9 rounded-full hover:bg-orange-500 hover:opacity-90 active:scale-95 transition:all duration-300 cursor-pointer">4</div>
                                    <FaCircleChevronRight className="fa-solid fa-circle-chevron-right text-4xl text-orange-500 hover:opacity-90 active:scale-95 transition:all duration-300 cursor-pointer"/>
                        </div>

                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col max-w-md w-full bg-white border border-gray-200 p-5 gap-2 rounded-md">
                            <div>
                                <img src={MessageIcon} alt="" />
                            </div>
                            <span className="text-lg font-semibold tracking-wide">Send Us Message</span>
                            <p className="text-gray-600">If you&apos;re unable to find answer or find your product quickly, please describe your problem and tell us, we will give you solution.</p>
                            <button className="flex h-10 text-sm justify-center items-center border border-orange-500 bg-orange-500 rounded-md hover:borde-orange-500 active:scale-95 transition:all duration-300 cursor-pointer">Send Message</button>
                        </div>
                    </div>
                </div>

            </main>
            {/* <!-- /main --> */}

            <Footer />
        </>
    )
}

export default HistoryOrder