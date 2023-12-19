import React from "react"
import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import CappuccinoImage from '../assets/fav-img-4.jpg'
import CappuccinoImage1 from '../assets/image-32.jpg'
import CappuccinoImage2 from '../assets/image-33.jpg'
import CappuccinoImage3 from '../assets/image-34.jpg'
import { FaStar } from "react-icons/fa6";
import { FaCircleChevronRight } from "react-icons/fa6"
import { FiShoppingCart } from "react-icons/fi"

const DetailProduct = () => {

    const [result, setResult] = React.useState(0)

    const decButton = () => {
        if(result <= 0) {
            setResult(0)
        } else {
            setResult(result - 1)
        }
    }

    const addButton = () => {
        setResult(result + 1)
    }


    return (
        <>
            <Navbar className="bg-black"/>
            {/* <!-- main --> */}
            <main className="flex flex-col w-screen items-center justify-center pt-32 px-24 gap-10">
                {/* <!-- column-1 --> */}
                <div className="flex w-full flex-row gap-5"> {/*<!-- left--> */}
                    <div className="flex w-2/4 flex-col gap-5">
                        <div className="w-full"><img className="w-full" src={CappuccinoImage} alt="" /></div>
                        <div className="flex flex-row gap-5">
                            <div className="flex-1">
                                <img className="w-full" src={CappuccinoImage1} alt="" />
                            </div>
                            <div className="flex-1">
                                <img className="w-full" src={CappuccinoImage2} alt="" />
                            </div>
                            <div className="flex-1">
                                <img className="w-full" src={CappuccinoImage3} alt="" />
                            </div>
                        </div>
                    </div>
        
                    <div className="flex flex-col flex-1 bg-white gap-5"> {/*<!-- right --> */}
                        <span className="text-sm text-white font-semibold tracking-wide bg-red-600 w-fit py-2 px-3 rounded-full">FLASH SALE!</span>
                        <h1 className="font-medium text-5xl tracking-wide">Cappuccino</h1>
                        <div className="flex flex-row gap-3 items-center">
                            <span className="text-red-700"><del>IDR 25.000,-</del></span>
                            <span className="text-xl text-orange-500 font-medium">IDR 10.000,-</span>
                        </div>
                        <div className="flex flex-row gap-3 items-center h-3 mb-2">
                            <FaStar className="text-orange-500 text-sm"/>
                            <FaStar className="text-orange-500 text-sm"/>
                            <FaStar className="text-orange-500 text-sm"/>
                            <FaStar className="text-orange-500 text-sm"/>
                            <FaStar className="text-orange-500 text-sm"/>
                            <span className="text-gray-500 text-base">5.0</span>
                        </div>
                        <div className="flex flex-row gap-4 items-start">
                            <div className="flex flex-row divide-x-2 gap-4 divide-gray-600">
                                <span className="text-gray-600">200+ Review</span>
                                <span className="text-gray-600 pl-4">Recommendation</span>
                            </div>
                            <i className="text-orange-500 w-5 self-start box-border pb-1" data-feather="thumbs-up"></i>
                        </div>
                        <p className="text-gray-600">Cold brewing is a method of brewing that combines ground coffee and cool water and uses time instead of heat to extract the flavor. It is brewed in small batches and steeped for as long as 48 hours</p>
                        <div className="h-9 w-fit flex flex-row border rounded-md border-gray-3">
                            <div onClick={decButton} id="substract-button" className="flex w-9 text-lg font-semibold justify-center items-center border border-orange-500 rounded-md hover:bg-orange-500 active:scale-95 transition:all duration-300 cursor-pointer">-</div>
                            <div id="quantity-number" className="flex w-10 text-lg font-semibold justify-center items-center">{result}</div>
                            <div onClick={addButton} id="add-button" className="flex w-9 text-lg font-semibold justify-center items-center border border-orange-500 rounded-md hover:bg-orange-500 active:scale-95 transition:all duration-300 cursor-pointer">+</div>
                        </div>
        
                        <div className="flex flex-col gap-3">
                            <span className="font-semibold">Choose Size</span>
                            <div className="flex flex-row items-center h-10 gap-8">
                                <div className="flex flex-1 h-full text-sm tracking-wide justify-center items-center border border-gray-300 hover:border hover:border-orange-500 active:scale-95 transition:all duration-300 cursor-pointer">Regular</div>
                                <div className="flex flex-1 h-full tracking-wide text-sm justify-center items-center border border-gray-300 hover:border hover:border-orange-500 active:scale-95 transition:all duration-300 cursor-pointer">Medium</div>
                                <div className="flex flex-1 h-full tracking-wide justify-center text-sm items-center border border-gray-300 hover:border hover:border-orange-500 active:scale-95 transition:all duration-300 cursor-pointer">Large</div>
                            </div>
                        </div>
        
                        <div className="flex flex-col gap-3">
                            <span className="font-semibold">Hot/Ice?</span>
                            <div className="flex flex-row items-center h-10 gap-8">
                                <div className="flex flex-1 h-full tracking-wide justify-center text-sm items-center border border-gray-300 hover:border hover:border-orange-500 active:scale-95 transition:all duration-300 cursor-pointer">Hot</div>
                                <div className="flex flex-1 h-full tracking-wide text-sm justify-center items-center border border-gray-300 hover:border hover:border-orange-500 active:scale-95 transition:all duration-300 cursor-pointer">Ice</div>
                            </div>
                        </div>
        
                        <div className="flex flex-row h-11 gap-5 mt-8">
                            <Link to={'/checkout-product'} className="flex flex-1 text-sm justify-center items-center border border-orange-500 bg-orange-500 rounded-md hover:borde-orange-500 active:scale-95 transition:all duration-300 cursor-pointer"><button id="buy-button" >Buy</button></Link>
                            <button className="flex flex-row flex-1 justify-center items-center gap-5 border border-orange-500 rounded-md hover:borde-orange-500 active:scale-95 transition:all duration-300 cursor-pointer">
                                <div><i data-feather="shopping-cart" className="text-orange-500"></i></div>
                                <span className="text-sm text-orange-500">add to cart</span>
                            </button>
                        </div>
                    </div>
                </div>
        
                <div className="flex flex-col w-full gap-5">
                    <h1 className="text-4xl font-medium text-gray-900 tracking-wide">Recommendation <span className="text-yellow-900">For You</span></h1>
                    <div className="flex flex-row w-full justify-center gap-5">
                                    {/* product-card-2 */}
                                    <div className="flex flex-col bg-white w-full h-[31rem] relative">
                                        <span className=" text-white font-semibold absolute top-4 left-4 bg-red-700 px-4 py-2 rounded-full">FLASH SALE!</span>
                                        <div className="bg-[url('../assets/fav-img-1.jpg')] bg-no-repeat bg-contain bg-top h-3/4"></div>
                                        <div className="flex flex-col self-center flex-1 bg-white w-11/12 absolute bottom-0 box-border p-3 gap-3 shadow-md">
                                            <h2 className="text-xl">Coffee Parfaits</h2>
                                            <p className="text-gray-600 text-xs tracking-wide">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
                                            <div className="flex flex-row gap-4 items-center">
                                                <span className="text-red-600 text-xs"><del>IDR 30.000,-</del></span>
                                                <span className="text-orange-500 text-xl">IDR 20.000,-</span>
                                            </div>
                                            <div className="flex flex-row h-10 gap-3">
                                            <Link to={'/detail-product'} className="flex flex-1 justify-center text-black text-xs font-semibold tracking-wide box-border border border-orange-500 bg-orange-500 rounded-md hover:opacity-90 active:scale-95 transition:all duration-300 cursor-pointer"><button type="button" className='flex-1'>Buy</button></Link>
                                                <button type="button" className="flex justify-center items-center text-orange-500 w-14 px-2 box-border border border-orange-500 rounded-md hover:opacity-90 active:scale-95 transition:all duration-300 cursor-pointer"><FiShoppingCart className="w-5"/></button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* product-card-3 */}
                                    <div id="product-card" className="flex flex-col bg-white w-full h-[31rem] relative">
                                        <span className=" text-white font-semibold absolute top-4 left-4 bg-red-700 px-4 py-2 rounded-full">FLASH SALE!</span>
                                        <div className="bg-[url('../assets/fav-img-2.jpg')] bg-no-repeat bg-contain bg-top h-3/4"></div>
                                        <div className="flex flex-col self-center flex-1 bg-white w-11/12 absolute bottom-0 box-border p-3 gap-3 shadow-md">
                                            <h2 className="text-xl">Affogato</h2>
                                            <p className="text-gray-600 text-xs tracking-wide">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
                                            <div className="flex flex-row gap-4 items-center">
                                                <span className="text-red-600 text-xs"><del>IDR 40.000,-</del></span>
                                                <span className="text-orange-500 text-xl">IDR 25.000,-</span>
                                            </div>
                                            <div className="flex flex-row h-10 gap-3">
                                            <Link to={'/detail-product'} className="flex flex-1 justify-center text-black text-xs font-semibold tracking-wide box-border border border-orange-500 bg-orange-500 rounded-md hover:opacity-90 active:scale-95 transition:all duration-300 cursor-pointer"><button type="button" className='flex-1'>Buy</button></Link>
                                                <button type="button" className="flex justify-center items-center text-orange-500 w-14 px-2 box-border border border-orange-500 rounded-md hover:opacity-90 active:scale-95 transition:all duration-300 cursor-pointer"><FiShoppingCart className="w-5"/></button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* product-card-4 */}
                                    <div className="flex flex-col bg-white w-full h-[31rem] relative">
                                        <span className=" text-white font-semibold absolute top-4 left-4 bg-red-700 px-4 py-2 rounded-full">FLASH SALE!</span>
                                        <div className="bg-[url('../assets/fav-img-4.jpg')] bg-no-repeat bg-contain bg-top h-3/4"></div>
                                        <div className="flex flex-col self-center flex-1 bg-white w-11/12 absolute bottom-0 box-border p-3 gap-3 shadow-md">
                                            <h2 className="text-xl">Cappuccino</h2>
                                            <p className="text-gray-600 text-xs tracking-wide">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
                                            <div className="flex flex-row gap-4 items-center">
                                                <span className="text-red-600 text-xs"><del>IDR 25.000,-</del></span>
                                                <span className="text-orange-500 text-xl">IDR 10.000,-</span>
                                            </div>
                                            <div className="flex flex-row h-10 gap-3">
                                            <Link to={'/detail-product'} className="flex flex-1 justify-center text-black text-xs font-semibold tracking-wide box-border border border-orange-500 bg-orange-500 rounded-md hover:opacity-90 active:scale-95 transition:all duration-300 cursor-pointer"><button type="button" className='flex-1'>Buy</button></Link>
                                                <button type="button" className="flex justify-center items-center text-orange-500 w-14 px-2 box-border border border-orange-500 rounded-md hover:opacity-90 active:scale-95 transition:all duration-300 cursor-pointer"><FiShoppingCart className="w-5"/></button>
                                            </div>
                                        </div>
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
            </main>
            {/* <!-- /main --> */}
            <Footer />
        </>

    )
}

export default DetailProduct