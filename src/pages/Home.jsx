import WorldMapImage from '../assets/Huge Globalmap.svg'
import ShopManagerImage from '../assets/shop-manager.jpg'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import ProductCard from '../components/ProductCard.jsx'
import CoffeeSundaeImage from '../assets/fav-img-1.jpg'
import AffogatoImage from '../assets/fav-img-2.jpg'
import FishAndChipsImage from '../assets/fav-img-3.jpg'
import LatteImage from '../assets/fav-img-4.jpg'
// import Button from '../components/Button.jsx'
// import { FaFacebookF, FaTwitter } from "react-icons/fa";

const Home = () => {
    return(
        <>
            <Navbar className="bg-[#00000033] fixed"/>
            <main className="flex flex-col w-screen h-fit">
                <div className="flex flex-col-reverse md:flex-row h-screen w-full">
                    <div className="flex flex-1 justify-center items-center bg-gradient-to-b from-gray-700 to-gray-950 pt-12 pb-5">
                        <section className="flex flex-col items-start box-border mx-28 px-12 py-4 gap-4">
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
                    <div className="flex flex-1 justify-center items-center bg-white ">
                        <section className="flex flex-col items-start box-border mx-28 px-10 py-4 gap-4">
                            <h1 className="text-4xl font-medium text-gray-900 tracking-wide">We Provide <span className="text-yellow-900">Good Coffee</span> and <span className="text-yellow-900">Healthy Meals</span></h1>
                            <p className="text-xs text-gray-800">You can explore the menu that we provide with fun and have their own taste and make your day better</p>
                            <span className="flex items-center text-xs text-gray-800"><i className="fa-solid fa-circle-check mr-2 text-green-600 text-base"></i> High quality beans</span>
                            <span className="flex items-center text-xs text-gray-800"><i className="fa-solid fa-circle-check mr-2 text-green-600 text-base"></i> Healthy meals, you can request the ingredients</span>
                            <span className="flex items-center text-xs text-gray-800"><i className="fa-solid fa-circle-check mr-2 text-green-600 text-base"></i> Chat with our staff to get better experience for ordering</span>
                            <span className="flex items-center text-xs text-gray-800"><i className="fa-solid fa-circle-check mr-2 text-green-600 text-base"></i> Free member card with a minimum purchase of IDR 200.000</span>
                        </section>
                    </div>
                    <div className="bg-[url('../assets/bg-home-col2.jpg')] flex-1 bg-center bg-cover"></div>
                </div>

                {/* column 3 */}
                <div className="flex flex-col w-full h-fit md:h-screen py-12">
                    <div className="flex flex-1 justify-center items-center bg-white my-2">
                        <section className="flex flex-col items-center box-border gap-6 pb-6">
                            <h1 className="text-4xl font-medium text-gray-900 tracking-wide">Here is People&apos;s <span className="text-yellow-900">Favorite</span></h1>
                            <hr className="h-1.5 bg-orange-500 w-14"/>
                            <p className="text-xs text-gray-600">Let&apos;s choose and have a bit taste of people&apos;s favorite. It might be yours too!</p>
                        </section>
                    </div>
                    <div className="flex flex-1 flex-row bg-white w-screen justify-center">
                        <div className="flex flex-col md:flex-row mx-32 justify-center gap-5">
                            {/* product card 1 */}
                            <div className="flex flex-col bg-white w-64 h-[24rem] relative">
                                <div className="bg-[url('../assets/fav-img-1.jpg')] bg-no-repeat bg-contain bg-top h-3/4"></div>
                                <div className="flex flex-col self-center flex-1 bg-white w-11/12 absolute bottom-0 box-border p-3 gap-3 shadow-md">
                                    <h2 className="text-xl">Hazelnut Latte</h2>
                                    <p className="text-gray-600 text-xs tracking-wide">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
                                    <span className="text-orange-500 text-xl">IDR 20.000</span>
                                    <div className="flex flex-row gap-3">
                                        <button type="button" className="flex-1 text-black text-xs box-border border border-orange-500 bg-orange-500 rounded-md hover:opacity-90 active:scale-95 transition:all duration-300 cursor-pointer">Buy</button>
                                        <button type="button" className="flex justify-center text-orange-500 w-14 px-2 box-border border border-orange-500 rounded-md hover:opacity-90 active:scale-95 transition:all duration-300 cursor-pointer"><i className="w-4" data-feather="shopping-cart"></i></button>
                                    </div>
                                </div>
                            </div>

                            {/* product card 2 */}
                            <div className="flex flex-col bg-white w-64 h-[24rem] relative">
                                <div className="bg-[url('../assets/fav-img-2.jpg')] bg-no-repeat bg-contain bg-top h-3/4"></div>
                                <div className="flex flex-col self-center flex-1 bg-white w-11/12 absolute bottom-0 box-border p-3 gap-3 shadow-md">
                                    <h2 className="text-xl">Hazelnut Latte</h2>
                                    <p className="text-gray-600 text-xs tracking-wide">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
                                    <span className="text-orange-500 text-xl">IDR 20.000</span>
                                    <div className="flex flex-row gap-3">
                                        <button type="button" className="flex-1 text-black text-xs box-border border border-orange-500 bg-orange-500 rounded-md hover:opacity-90 active:scale-95 transition:all duration-300 cursor-pointer">Buy</button>
                                        <button type="button" className="flex justify-center text-orange-500 w-14 px-2 box-border border border-orange-500 rounded-md hover:opacity-90 active:scale-95 transition:all duration-300 cursor-pointer"><i className="w-4" data-feather="shopping-cart"></i></button>
                                    </div>
                                </div>
                            </div>

                            {/* product card 3 */}
                            <div className="flex flex-col bg-white w-64 h-[24rem] relative">
                                <div className="bg-[url('../assets/fav-img-3.jpg')] bg-no-repeat bg-contain bg-top h-3/4"></div>
                                <div className="flex flex-col self-center flex-1 bg-white w-11/12 absolute bottom-0 box-border p-3 gap-3 shadow-md">
                                    <h2 className="text-xl">Hazelnut Latte</h2>
                                    <p className="text-gray-600 text-xs tracking-wide">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
                                    <span className="text-orange-500 text-xl">IDR 20.000</span>
                                    <div className="flex flex-row gap-3">
                                        <button type="button" className="flex-1 text-black text-xs box-border border border-orange-500 bg-orange-500 rounded-md hover:opacity-90 active:scale-95 transition:all duration-300 cursor-pointer">Buy</button>
                                        <button type="button" className="flex justify-center text-orange-500 w-14 px-2 box-border border border-orange-500 rounded-md hover:opacity-90 active:scale-95 transition:all duration-300 cursor-pointer"><i className="w-4" data-feather="shopping-cart"></i></button>
                                    </div>
                                </div>
                            </div>

                            {/* product card 4 */}
                            <div className="flex flex-col bg-white w-64 h-[24rem] relative">
                                <div className="bg-[url('../assets/fav-img-4.jpg')] bg-no-repeat bg-contain bg-top h-3/4"></div>
                                <div className="flex flex-col self-center flex-1 bg-white w-11/12 absolute bottom-0 box-border p-3 gap-3 shadow-md">
                                    <h2 className="text-xl">Hazelnut Latte</h2>
                                    <p className="text-gray-600 text-xs tracking-wide">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
                                    <span className="text-orange-500 text-xl">IDR 20.000</span>
                                    <div className="flex flex-row gap-3">
                                        <button type="button" className="flex-1 text-black text-xs box-border border border-orange-500 bg-orange-500 rounded-md hover:opacity-90 active:scale-95 transition:all duration-300 cursor-pointer">Buy</button>
                                        <button type="button" className="flex justify-center text-orange-500 w-14 px-2 box-border border border-orange-500 rounded-md hover:opacity-90 active:scale-95 transition:all duration-300 cursor-pointer"><i className="w-4" data-feather="shopping-cart"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* column 4 */}
                <div className="flex flex-col w-full h-screen py-12 bg-slate-50">
                    <div className="flex flex-1 justify-center items-center my-2">
                        <section className="flex flex-col items-center box-border gap-6 pb-6">
                            <h1 className="text-4xl font-medium text-gray-900 tracking-wide"><span className="text-yellow-900">Visit Our Store</span> in the Spot on the Map Below</h1>
                            <hr className="h-1.5 bg-orange-500 w-14" />
                            <p className="text-center text-xs text-gray-600 w-96">You can explore the menu that we provide with fun and have their own taste and make your day better</p>
                        </section>
                    </div>
                    <div className="flex flex-1 flex-row w-screen justify-center">
                        <div className="w-3/5">
                            <img src={WorldMapImage} alt="" />
                        </div>
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
                                <i className="fa-solid fa-star text-orange-500 text-sm"></i>
                                <i className="fa-solid fa-star text-orange-500 text-sm"></i>
                                <i className="fa-solid fa-star text-orange-500 text-sm"></i>
                                <i className="fa-solid fa-star text-orange-500 text-sm"></i>
                                <i className="fa-solid fa-star text-orange-500 text-sm"></i>
                                <span className="text-white text-base">5.0</span>
                            </div>
                            <div className="flex flex-row gap-3 mb-2">
                                <i className="fa-solid fa-circle-chevron-left text-4xl text-white hover:opacity-90 active:scale-95 transition:all duration-300 cursor-pointer"></i>
                                <i className="fa-solid fa-circle-chevron-right text-4xl text-orange-500 hover:opacity-90 active:scale-95 transition:all duration-300 cursor-pointer"></i>
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

                {/* product card experimental */}
                <div className='flex flex-row gap-3'>
                    <ProductCard image={CoffeeSundaeImage} name='Latte' description='You can explore the menu that we provide with fun and have their own taste and make your day better.' price={25000}/>
                    <ProductCard image={AffogatoImage} name='Americano' description='You can explore the menu that we provide with fun and have their own taste and make your day better. This product is premium coffee drink.' price={25000}/>
                    <ProductCard image={FishAndChipsImage} name='Cappucino' description='You can explore the menu that we provide with fun and have their own taste and make your day better.' price={25000}/>
                    <ProductCard image={LatteImage} name='Espresso' description='You can explore the menu that we provide with fun and have their own taste and make your day better.' price={25000}/>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Home;
