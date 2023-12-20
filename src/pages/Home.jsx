import React from 'react'
import WorldMapImage from '../assets/Huge Globalmap.svg'
import ShopManagerImage from '../assets/shop-manager.jpg'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import ProductCard from '../components/ProductCard.jsx'
import CoffeeParfaitsImage from '../assets/fav-img-1.jpg'
import AffogatoImage from '../assets/fav-img-2.jpg'
import FishAndChipsImage from '../assets/fav-img-3.jpg'
import CappucinoImage from '../assets/fav-img-4.jpg'
import { FaCircleCheck } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { FaCircleChevronLeft } from "react-icons/fa6"
import { FaCircleChevronRight } from "react-icons/fa6"

const Home = () => {

    // eslint-disable-next-line no-unused-vars
    const [data, setData] = React.useState([
        {
            name: 'Coffee Parfaits',
            price: 30000,
            image: CoffeeParfaitsImage,
            description: 'We provide high quality beans, good taste, and healthy meals made by love just for you. Start your day with us for a bigger smile!'
        },
        {
            name: 'Affogato',
            price: 40000,
            image: AffogatoImage,
            description: 'You can explore the menu that we provide with fun and have their own taste and make your day better. This product is premium coffee drink.'
        },
        {
            name: 'Fish and Chips',
            price: 35000,
            image: FishAndChipsImage,
            description: 'We provide high quality beans, good taste, and healthy meals made by love just for you. Start your day with us for a bigger smile!'
        },
        {
            name: 'Cappucino',
            price: 25000,
            image: CappucinoImage,
            description: 'We provide high quality beans, good taste, and healthy meals made by love just for you. Start your day with us for a bigger smile!'
        },
    ])

    return(
        <>
            <Navbar className="bg-[#00000033]"/>
            <main className="flex flex-col w-screen h-fit bg-white">
                {/* column 1 */}
                <div className="flex flex-col-reverse md:flex-row h-screen w-full">
                    <div className="flex flex-1 justify-center items-center bg-gradient-to-b from-gray-700 to-gray-950 pt-12 pb-5">
                        <section className="flex flex-col items-start box-border md:mx-28 px-12 py-4 gap-4">
                            <h1 className="text-4xl font-semibold text-white tracking-wide">Start Your Day with Coffee and Good Meals</h1>
                            <p className="text-xs text-white">We provide high quality beans, good taste, and healthy meals made by love just for you. Start your day with us for a bigger smile!</p>
                            <button id="started-button" className="text-black text-xs px-4 py-2 box-border border border-orange-500 bg-orange-500 rounded-md hover:opacity-90 active:scale-95 transition:all duration-300 cursor-pointer" type="button">Get Started</button>
                            <div className="flex flex-row w-full justify-between divide-x">
                                <div className="flex flex-1 flex-col gap-3 pr-10 md:pr-0">
                                    <span className="text-3xl text-orange-500 ">90+</span>
                                    <span className="text-xs text-white">Staffs</span>
                                </div>
                                <div className="flex flex-col flex-1 pl-10 pr-10 md:pr-0 gap-3">
                                    <span className="text-3xl text-orange-500">30+</span>
                                    <span className="text-xs text-white">Stores</span>
                                </div>
                                <div className="flex flex-col flex-1 pl-10 gap-3">
                                    <span className="text-3xl text-orange-500">800+</span>
                                    <span className="text-xs text-white">Customers</span>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="bg-[url('../assets/bg-home-col1.jpg')] flex-1 bg-center bg-cover"></div>
                </div>

                {/* column 2 */}
                <div className="flex h-screen w-full flex-col md:flex-row">
                    <div className="flex flex-1 justify-center items-center bg-white pt-12 pb-5">
                        <section className="flex flex-col items-start box-border md:mx-28 px-12 py-4 gap-4">
                            <h1 className="text-4xl font-medium text-gray-900 tracking-wide">We Provide <span className="text-yellow-900">Good Coffee</span> and <span className="text-yellow-900">Healthy Meals</span></h1>
                            <p className="text-xs text-gray-800">You can explore the menu that we provide with fun and have their own taste and make your day better</p>
                            <span className="flex items-center text-xs text-gray-800 gap-1"><FaCircleCheck className='text-green-600 text-base' /> High quality beans</span>
                            <span className="flex items-center text-xs text-gray-800 gap-1"><FaCircleCheck className='text-green-600 text-base' /> Healthy meals, you can request the ingredients</span>
                            <span className="flex items-center text-xs text-gray-800 gap-1"><FaCircleCheck className='text-green-600 text-base' /> Chat with our staff to get better experience for ordering</span>
                            <span className="flex items-center text-xs text-gray-800 gap-1"><FaCircleCheck className='text-green-600 text-base' /> Free member card with a minimum purchase of IDR 200.000</span>
                        </section>
                    </div>
                    <div className="bg-[url('../assets/bg-home-col2.jpg')] flex-1 bg-center bg-cover"></div>
                </div>

                {/* column 3 */}
                <div className="flex flex-col w-full h-fit py-12">
                    <section className="flex flex-col justify-center items-center gap-6 pb-6 px-5 md:px-0">
                        <h1 className="text-4xl text-center font-medium text-gray-900 tracking-wide">Here is People&apos;s <span className="text-yellow-900">Favorite</span></h1>
                        <hr className="h-1.5 bg-orange-500 max-w-[3.5rem] w-full"/>
                        <p className="inline-block text-xs text-center text-gray-600 md:px-0 px-10">Let&apos;s choose and have a bit taste of people&apos;s favorite. It might be yours too!</p>
                    </section>
                    <div className="flex flex-1 flex-row w-screen justify-center">
                        <div className="grid grid-cols-2 md:grid-cols-4 mx-5 md:mx-32 justify-center gap-5">
                            {data.map((item, index) => <ProductCard key={String(index)} image={item.image} name={item.name} description={item.description} price={item.price}/>)}
                        </div>
                    </div>
                </div>

                {/* column 4 */}
                <div className="flex flex-col w-full h-fit py-12 md:py-12 bg-slate-50">
                        <section className="flex flex-col items-center justify-center box-border gap-6 pb-6 px-12 md:mt-20">
                            <h1 className="text-2xl md:text-4xl text-center font-medium text-gray-900 tracking-wide"><span className="text-yellow-900">Visit Our Store</span> in the Spot on the Map Below</h1>
                            <hr className="h-1.5 bg-orange-500 w-14" />
                            <p className="text-center text-[0.60rem] md:text-xs text-gray-600">You can explore the menu that we provide with fun and have their own taste and make your day better</p>
                        </section>
                        <div className="flex justify-center">
                            <img className='max-w-xs md:max-w-4xl md:w-full' src={WorldMapImage} alt="" />
                        </div>
                </div>

                {/* column 5 */}
                <div className="flex flex-row items-center justify-center h-fit bg-gradient-to-b from-gray-800 to-gray-950">
                    <div className="flex flex-col md:flex-row w-3/4 my-14 gap-6">
                        <div className="flex-1">
                            <img src={ShopManagerImage} alt="" />
                        </div>
                        <section className="flex flex-col self-start flex-1 gap-4">
                            <h1 className="text-white tracking-wide text-lg">TESTIMONIAL</h1>
                            <span className="text-white text-4xl border-orange-500 border-l-4 py-1 pl-5 tracking-wide font-semibold">Viezh Robert</span>
                            <span className="text-orange-500 tracking-wide text-base">Manager Coffee Shop</span>
                            <p className="text-white">Wow... I am very happy to spend my whole day here. The Wi-Fi is good, and the coffee and meals tho. I like it here!! Very recommended!</p>
                            <div className="flex flex-row gap-7 items-center h-3 mb-2">
                                <FaStar className='text-orange-500 text-sm'/>
                                <FaStar className='text-orange-500 text-sm'/>
                                <FaStar className='text-orange-500 text-sm'/>
                                <FaStar className='text-orange-500 text-sm'/>
                                <FaStar className='text-orange-500 text-sm'/>
                                <span className="text-white text-base">5.0</span>
                            </div>
                            <div className="flex flex-row gap-3 mb-2">
                                <FaCircleChevronLeft className='fa-solid fa-circle-chevron-left text-4xl text-white hover:opacity-90 active:scale-95 transition:all duration-300 cursor-pointer'/>
                                <FaCircleChevronRight className='fa-solid fa-circle-chevron-right text-4xl text-orange-500 hover:opacity-90 active:scale-95 transition:all duration-300 cursor-pointer'/>
                            </div>
                            <div className="flex flex-row gap-3">
                                <div className="w-6 h-2 bg-orange-500 rounded-full"></div>
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Home;
