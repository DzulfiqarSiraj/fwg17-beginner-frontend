import React from 'react'
import axios from 'axios'
// import { Link } from 'react-router-dom'
import motherImage from '../assets/icon/mother-fig.svg'
import manImage from '../assets/icon/man-fig.svg'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProductCard from '../components/ProductCard.jsx'
import { FaCircleChevronLeft } from "react-icons/fa6"
import { FaCircleChevronRight } from "react-icons/fa6"
import { FiChevronRight } from "react-icons/fi";


const Product = () => {

    const [data, setData] = React.useState([{}])

    const getProduct = async () => {
        const res = await axios.get('http://localhost:8888/products')
        console.log(res.data.results)
        setData(res.data.results)
    }

    React.useEffect(()=>{
        getProduct()
    },[])


    const [sidebarDisplay, setSidebarDisplay] = React.useState('hidden')

    const sidebarButton = () => {
        if(sidebarDisplay === 'hidden'){
            setSidebarDisplay('flex')
        } else if(sidebarDisplay === 'flex'){
            setSidebarDisplay('hidden')
        }
    }
    
    return (
        <>
            <Navbar className="bg-black"/>
            {/* main */}
            <main className="flex flex-col w-screen h-fit overflow-hidden justify-center items-center">
                <header className="flex items-center w-screen h-72 bg-[url('../assets/bg-product-1.jpg')] bg-cover bg-center">
                    <h1 className="w-4/6 text-5xl font-normal text-white tracking-wide ml-20">We Provide Good Coffee and Healthy Meals</h1>
                </header>
                
                <div className="flex flex-col w-5/6">
                    {/* column 1 */}
                    <div className="flex flex-col gap-5 w-full py-10">
                        <div className="flex flex-row items-center justify-between">
                            <h1 className="text-4xl font-medium text-gray-900 tracking-wide">Today <span className="text-yellow-900">Promo</span></h1>
                            <div className="flex flex-row items-center justify-center gap-2">
                                <FaCircleChevronLeft className="fa-solid fa-circle-chevron-left text-3xl text-gray-300 hover:opacity-90 active:scale-95 transition:all duration-300 cursor-pointer hover:text-orange-500"/>
                                <FaCircleChevronRight className="fa-solid fa-circle-chevron-right text-3xl text-gray-300 hover:opacity-90 active:scale-95 transition:all duration-300 cursor-pointer hover:text-orange-500"/>
                            </div>
                        </div>
                        <div className="flex flex-row gap-10 w-max overflow-hidden relative left-1/2 -translate-x-1/2">
                            {/* coupon-1 */}
                            <div className="flex w-80 flex-row bg-[#88B788] gap-6 px-4 rounded-2xl">
                                <div className="relative w-20 overflow-hidden"><img className="absolute -bottom-4" src={motherImage} alt=""/></div>
                                <div className="flex flex-col flex-1 my-3 gap-1 justify-center self-center">
                                    <h1 className="font-semibold text-sm tracking-wide">HAPPY MOTHER&apos;S DAY!</h1>
                                    <span className="text-xs mb-2 tracking-wide">Get one of our favorite menu for free!</span>
                                    <span className="text-white text-sm">Claim Coupon</span>
                                </div>
                            </div>
                            {/* coupon-2 */}
                            <div className="flex w-80 flex-row bg-[#88B788] gap-6 px-4 rounded-2xl">
                                <div className="relative w-20 overflow-hidden"><img className="absolute -bottom-4" src={motherImage} alt=""/></div>
                                <div className="flex flex-col flex-1 my-3 gap-1 justify-center self-center">
                                    <h1 className="font-semibold text-sm tracking-wide">HAPPY MOTHER&apos;S DAY!</h1>
                                    <span className="text-xs mb-2 tracking-wide">Get one of our favorite menu for free!</span>
                                    <span className="text-white text-sm">Claim Coupon</span>
                                </div>
                            </div>
                            {/* coupon-3 */}
                            <div className="flex w-80 flex-row bg-[#88B788] gap-6 px-4 rounded-2xl">
                                <div className="relative w-20 overflow-hidden"><img className="absolute -bottom-4" src={motherImage} alt=""/></div>
                                <div className="flex flex-col flex-1 my-3 gap-1 justify-center self-center">
                                    <h1 className="font-semibold text-sm tracking-wide">HAPPY MOTHER&apos;S DAY!</h1>
                                    <span className="text-xs mb-2 tracking-wide">Get one of our favorite menu for free!</span>
                                    <span className="text-white text-sm">Claim Coupon</span>
                                </div>
                            </div>

                            {/* coupon-4 */}
                            <div className="flex w-80 flex-row bg-orange-300 gap-6 px-4 rounded-2xl">
                                <div className="relative w-20 overflow-hidden"><img className="absolute -bottom-4" src={manImage} alt="" /></div>
                                <div className="flex flex-col flex-1 my-3 gap-1 justify-center self-center">
                                    <h1 className="font-semibold text-sm tracking-wide">Get a cup of coffee for free on Sunday morning</h1>
                                    <span className="text-xs mb-2 tracking-wide">Only at 7 to 9 AM</span>
                                </div>
                            </div>
            
                        </div>
                        <div className="flex flex-row gap-2 tracking-wide">
                            <div className="w-6 h-2 bg-orange-500 rounded-full"></div>
                            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                        </div>
                    </div>
        
                    {/* column 2 */}
                    <div className="flex flex-col gap-5 w-full h-fit py-10">
                        <div className="flex flex-row items-center justify-between">
                            <h1 className="text-4xl font-medium text-gray-900 tracking-wide">Our <span className="text-yellow-900">Product</span></h1>
                        </div>
            
                        <div className="flex flex-row gap-7">
                            <div className='fixed top-0 left-0 md:static flex flex-row h-fit z-20'>
                                <aside className={`${sidebarDisplay} top-0 bottom-0 md:flex md:flex-row w-80 h-screen bg-black rounded-3xl pb-16 pt-32 px-5 md:p-8 items-center`}>
                                    <form action="" className={`flex flex-col w-full gap-6`}>
                                        <div className="flex justify-between">
                                            <span className="text-white font-bold tracking-wide">Filter</span>
                                            <span className="text-white font-bold tracking-wide text-sm"><button type='reset'>Reset Filter</button></span>
                                        </div>
            
                                        <div className="flex flex-col gap-2">
                                            <label htmlFor="search" className="text-white font-bold tracking-wide text-sm">Search</label>
                                            <input id="search" type="text" placeholder="Search Your Product" className="h-12 p-5 placeholder:text-sm rounded-md" />
                                        </div>
            
                                        <div className="flex flex-col gap-4">
                                            <span className="text-white font-bold tracking-wide text-sm">Category</span>
                                            <div className="flex flex-row gap-3">
                                                <input type="radio" id="favorite-product" name="category" value="favorite-product" className="" />
                                                <label htmlFor="favorite-product" className="text-white text-xs md:text-base">Favorite Product</label>
                                            </div>
                                            <div className="flex flex-row gap-3">
                                                <input type="radio" id="coffee" name="category" value="coffee" />
                                                <label htmlFor="coffee" className="text-white text-xs md:text-base">Coffee</label>
                                            </div>
                                            <div className="flex flex-row gap-3">
                                                <input type="radio" id="non-coffee" name="category" value="non-coffee" />
                                                <label htmlFor="non-coffee" className="text-white text-xs md:text-base">Non Coffee</label>
                                            </div>
                                            <div className="flex flex-row gap-3">
                                                <input type="radio" id="foods" name="category" value="foods" />
                                                <label htmlFor="foods" className="text-white text-xs md:text-base">Foods</label>
                                            </div>
                                            <div className="flex flex-row gap-3">
                                                <input type="radio" id="add-on" name="category" value="add-on" />
                                                <label htmlFor="add-on" className="text-white text-xs md:text-base">Add On</label>
                                            </div>
                                        </div>
            
                                        <div className="flex flex-col gap-4">
                                            <span className="text-white font-bold tracking-wide text-sm">Sort By</span>
                                            <div className="flex flex-row gap-3">
                                                <input type="radio" id="buy-1-get-1" name="sort-by" value="buy-1-get-1" />
                                                <label htmlFor="buy-1-get-1" className="text-white text-xs md:text-base">Buy One Get One</label>
                                            </div>
                                            <div className="flex flex-row gap-3">
                                                <input type="radio" id="flash-sale" name="sort-by" value="flash-sale" />
                                                <label htmlFor="flash-sale" className="text-white text-xs md:text-base">Flash Sale</label>
                                            </div>
                                            <div className="flex flex-row gap-3">
                                                <input type="radio" id="birthday-package" name="sort-by" value="birthday-package" />
                                                <label htmlFor="birthday-package" className="text-white text-xs md:text-base">Birthday Package</label>
                                            </div>
                                            <div className="flex flex-row gap-3">
                                                <input type="radio" id="cheap" name="sort-by" value="cheap" />
                                                <label htmlFor="cheap" className="text-white text-xs md:text-base">Cheap</label>
                                            </div>
                                        </div>
            
                                        <div className="flex flex-col gap-4">
                                            <span className="text-white font-bold tracking-wide text-sm">Range Price</span>
                                            <input type="range" minLength="0" maxLength="1000" step="2" />
                                        </div>
            
                                        <button type="submit" className="text-black text-xs font-semibold px-4 py-3 box-border border border-orange-500 bg-orange-500 rounded-md hover:opacity-90 active:scale-95 transition:all duration-300 cursor-pointer">Apply Filter</button>
                                    </form>
                                </aside>
                                {/* sidebar button */}
                                <div onClick={sidebarButton} className={`fixed bottom-0 right-0 md:hidden flex flex-row self-center items-center justify-center bg-black h-10 w-5 rounded-l-xl`}>
                                <FiChevronRight className='text-white'/>
                                </div>
                            </div>
        
                            <div className="flex flex-col flex-1 gap-10 items-center">
                                <div className="w-full grid grid-cols-2 gap-7 h-fit">
                                    {data.map((item) => <ProductCard key={item.id} image={item.image} name={item.name} description={item.description} basePrice={item.basePrice} isDiscount={item.isDiscount} isBestSeller={item.isBestSeller}/>)}
                                </div>

                                <div className="flex flex-row gap-4">
                                    <div className="flex justify-center items-center text-base bg-orange-500 w-9 h-9 rounded-full hover:opacity-90 active:scale-95 transition:all duration-300 cursor-pointer">1</div>
                                    <div className="flex justify-center items-center text-base bg-gray-300 w-9 h-9 rounded-full hover:bg-orange-500 hover:opacity-90 active:scale-95 transition:all duration-300 cursor-pointer">2</div>
                                    <div className="flex justify-center items-center text-base bg-gray-300 w-9 h-9 rounded-full hover:bg-orange-500 hover:opacity-90 active:scale-95 transition:all duration-300 cursor-pointer">3</div>
                                    <div className="flex justify-center items-center text-base bg-gray-300 w-9 h-9 rounded-full hover:bg-orange-500 hover:opacity-90 active:scale-95 transition:all duration-300 cursor-pointer">4</div>
                                    <FaCircleChevronRight className="fa-solid fa-circle-chevron-right text-4xl text-orange-500 hover:opacity-90 active:scale-95 transition:all duration-300 cursor-pointer"/>
                                </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Product