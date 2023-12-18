import motherImage from '../assets/icon/mother-fig.svg'
import manImage from '../assets/icon/man-fig.svg'

const Product = () => {
    return (
        <>        
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
                                <i className="fa-solid fa-circle-chevron-left text-3xl text-gray-300 hover:opacity-90 active:scale-95 transition:all duration-300 cursor-pointer hover:text-orange-500"></i>
                                <i className="fa-solid fa-circle-chevron-right text-3xl text-gray-300 hover:opacity-90 active:scale-95 transition:all duration-300 cursor-pointer hover:text-orange-500"></i>
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
                            <aside className="flex flex-row w-80 h-fit bg-black rounded-3xl p-8 items-center">
                                <form action="" className="flex flex-col w-full gap-6">
                                    <div className="flex justify-between">
                                        <span className="text-white font-bold tracking-wide">Filter</span>
                                        <span className="text-white font-bold tracking-wide text-sm"><a href="">Reset Filter</a></span>
                                    </div>
        
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="search" className="text-white font-bold tracking-wide text-sm">Search</label>
                                        <input id="search" type="text" placeholder="Search Your Product" className="h-12 p-5 placeholder:text-sm rounded-md" />
                                    </div>
        
                                    <div className="flex flex-col gap-4">
                                        <span className="text-white font-bold tracking-wide text-sm">Category</span>
                                        <div className="flex flex-row gap-3">
                                            <input type="radio" id="favorite-product" name="category" value="favorite-product" className="" />
                                            <label htmlFor="favorite-product" className="text-white">Favorite Product</label>
                                        </div>
                                        <div className="flex flex-row gap-3">
                                            <input type="radio" id="coffee" name="category" value="coffee" />
                                            <label htmlFor="coffee" className="text-white">Coffee</label>
                                        </div>
                                        <div className="flex flex-row gap-3">
                                            <input type="radio" id="non-coffee" name="category" value="non-coffee" />
                                            <label htmlFor="non-coffee" className="text-white">Non Coffee</label>
                                        </div>
                                        <div className="flex flex-row gap-3">
                                            <input type="radio" id="foods" name="category" value="foods" />
                                            <label htmlFor="foods" className="text-white">Foods</label>
                                        </div>
                                        <div className="flex flex-row gap-3">
                                            <input type="radio" id="add-on" name="category" value="add-on" />
                                            <label htmlFor="add-on" className="text-white">Add On</label>
                                        </div>
                                    </div>
        
                                    <div className="flex flex-col gap-4">
                                        <span className="text-white font-bold tracking-wide text-sm">Sort By</span>
                                        <div className="flex flex-row gap-3">
                                            <input type="radio" id="buy-1-get-1" name="sort-by" value="buy-1-get-1" />
                                            <label htmlFor="buy-1-get-1" className="text-white">Buy One Get One</label>
                                        </div>
                                        <div className="flex flex-row gap-3">
                                            <input type="radio" id="flash-sale" name="sort-by" value="flash-sale" />
                                            <label htmlFor="flash-sale" className="text-white">Flash Sale</label>
                                        </div>
                                        <div className="flex flex-row gap-3">
                                            <input type="radio" id="birthday-package" name="sort-by" value="birthday-package" />
                                            <label htmlFor="birthday-package" className="text-white">Birthday Package</label>
                                        </div>
                                        <div className="flex flex-row gap-3">
                                            <input type="radio" id="cheap" name="sort-by" value="cheap" />
                                            <label htmlFor="cheap" className="text-white">Cheap</label>
                                        </div>
                                    </div>
        
                                    <div className="flex flex-col gap-4">
                                        <span className="text-white font-bold tracking-wide text-sm">Range Price</span>
                                        <input type="range" minLength="0" maxLength="1000" step="2" />
                                    </div>
        
                                    <button type="submit" className="text-black text-xs font-semibold px-4 py-3 box-border border border-orange-500 bg-orange-500 rounded-md hover:opacity-90 active:scale-95 transition:all duration-300 cursor-pointer">Apply Filter</button>
                                </form>
                            </aside>
        
                            <div className="flex flex-col flex-1 gap-10 items-center">
                                <div className="w-full grid grid-cols-2 gap-7">
                                    {/* product-card-1 */}
                                    <div id="product-card" className="flex flex-col bg-white w-full h-[31rem] relative">
                                        <span className=" text-white font-semibold absolute top-4 left-4 bg-red-700 px-4 py-2 rounded-full">FLASH SALE!</span>
                                        <div className="bg-[url(assets/fav-img-1.jpg)] bg-no-repeat bg-contain bg-top h-3/4"></div>
                                        <div className="flex flex-col self-center flex-1 bg-white w-11/12 absolute bottom-0 box-border p-3 gap-3 shadow-md">
                                            <h2 className="text-xl">Hazelnut Latte</h2>
                                            <p className="text-gray-600 text-xs tracking-wide">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
                                            <div className="flex flex-row gap-4 items-center">
                                                <span className="text-red-600 text-xs"><del>IDR 20.000</del></span>
                                                <span className="text-orange-500 text-xl">IDR 10.000</span>
                                            </div>
                                            <div className="flex flex-row h-10 gap-3">
                                                <button type="button" className="flex-1 text-black text-xs font-semibold tracking-wide box-border border border-orange-500 bg-orange-500 rounded-md hover:opacity-90 active:scale-95 transition:all duration-300 cursor-pointer">Buy</button>
                                                <button type="button" className="flex justify-center items-center text-orange-500 w-14 px-2 box-border border border-orange-500 rounded-md hover:opacity-90 active:scale-95 transition:all duration-300 cursor-pointer"><i className="w-5" data-feather="shopping-cart"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* product-card-2 */}
                                    <div className="flex flex-col bg-white w-full h-[31rem] relative">
                                        <span className=" text-white font-semibold absolute top-4 left-4 bg-red-700 px-4 py-2 rounded-full">FLASH SALE!</span>
                                        <div className="bg-[url(assets/fav-img-1.jpg)] bg-no-repeat bg-contain bg-top h-3/4"></div>
                                        <div className="flex flex-col self-center flex-1 bg-white w-11/12 absolute bottom-0 box-border p-3 gap-3 shadow-md">
                                            <h2 className="text-xl">Hazelnut Latte</h2>
                                            <p className="text-gray-600 text-xs tracking-wide">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
                                            <div className="flex flex-row gap-4 items-center">
                                                <span className="text-red-600 text-xs"><del>IDR 20.000</del></span>
                                                <span className="text-orange-500 text-xl">IDR 10.000</span>
                                            </div>
                                            <div className="flex flex-row h-10 gap-3">
                                                <button type="button" className="flex-1 text-black text-xs font-semibold tracking-wide box-border border border-orange-500 bg-orange-500 rounded-md hover:opacity-90 active:scale-95 transition:all duration-300 cursor-pointer">Buy</button>
                                                <button type="button" className="flex justify-center items-center text-orange-500 w-14 px-2 box-border border border-orange-500 rounded-md hover:opacity-90 active:scale-95 transition:all duration-300 cursor-pointer"><i className="w-5" data-feather="shopping-cart"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* product-card-3 */}
                                    <div className="flex flex-col bg-white w-full h-[31rem] relative">
                                        <span className=" text-white font-semibold absolute top-4 left-4 bg-red-700 px-4 py-2 rounded-full">FLASH SALE!</span>
                                        <div className="bg-[url(assets/fav-img-1.jpg)] bg-no-repeat bg-contain bg-top h-3/4"></div>
                                        <div className="flex flex-col self-center flex-1 bg-white w-11/12 absolute bottom-0 box-border p-3 gap-3 shadow-md">
                                            <h2 className="text-xl">Hazelnut Latte</h2>
                                            <p className="text-gray-600 text-xs tracking-wide">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
                                            <div className="flex flex-row gap-4 items-center">
                                                <span className="text-red-600 text-xs"><del>IDR 20.000</del></span>
                                                <span className="text-orange-500 text-xl">IDR 10.000</span>
                                            </div>
                                            <div className="flex flex-row h-10 gap-3">
                                                <button type="button" className="flex-1 text-black text-xs font-semibold tracking-wide box-border border border-orange-500 bg-orange-500 rounded-md hover:opacity-90 active:scale-95 transition:all duration-300 cursor-pointer">Buy</button>
                                                <button type="button" className="flex justify-center items-center text-orange-500 w-14 px-2 box-border border border-orange-500 rounded-md hover:opacity-90 active:scale-95 transition:all duration-300 cursor-pointer"><i className="w-5" data-feather="shopping-cart"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* product-card-4 */}
                                    <div className="flex flex-col bg-white w-full h-[31rem] relative">
                                        <span className=" text-white font-semibold absolute top-4 left-4 bg-red-700 px-4 py-2 rounded-full">FLASH SALE!</span>
                                        <div className="bg-[url(assets/fav-img-1.jpg)] bg-no-repeat bg-contain bg-top h-3/4"></div>
                                        <div className="flex flex-col self-center flex-1 bg-white w-11/12 absolute bottom-0 box-border p-3 gap-3 shadow-md">
                                            <h2 className="text-xl">Hazelnut Latte</h2>
                                            <p className="text-gray-600 text-xs tracking-wide">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
                                            <div className="flex flex-row gap-4 items-center">
                                                <span className="text-red-600 text-xs"><del>IDR 20.000</del></span>
                                                <span className="text-orange-500 text-xl">IDR 10.000</span>
                                            </div>
                                            <div className="flex flex-row h-10 gap-3">
                                                <button type="button" className="flex-1 text-black text-xs font-semibold tracking-wide box-border border border-orange-500 bg-orange-500 rounded-md hover:opacity-90 active:scale-95 transition:all duration-300 cursor-pointer">Buy</button>
                                                <button type="button" className="flex justify-center items-center text-orange-500 w-14 px-2 box-border border border-orange-500 rounded-md hover:opacity-90 active:scale-95 transition:all duration-300 cursor-pointer"><i className="w-5" data-feather="shopping-cart"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* product-card-5 */}
                                    <div className="flex flex-col bg-white w-full h-[31rem] relative">
                                        <span className=" text-white font-semibold absolute top-4 left-4 bg-red-700 px-4 py-2 rounded-full">FLASH SALE!</span>
                                        <div className="bg-[url(assets/fav-img-1.jpg)] bg-no-repeat bg-contain bg-top h-3/4"></div>
                                        <div className="flex flex-col self-center flex-1 bg-white w-11/12 absolute bottom-0 box-border p-3 gap-3 shadow-md">
                                            <h2 className="text-xl">Hazelnut Latte</h2>
                                            <p className="text-gray-600 text-xs tracking-wide">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
                                            <div className="flex flex-row gap-4 items-center">
                                                <span className="text-red-600 text-xs"><del>IDR 20.000</del></span>
                                                <span className="text-orange-500 text-xl">IDR 10.000</span>
                                            </div>
                                            <div className="flex flex-row h-10 gap-3">
                                                <button type="button" className="flex-1 text-black text-xs font-semibold tracking-wide box-border border border-orange-500 bg-orange-500 rounded-md hover:opacity-90 active:scale-95 transition:all duration-300 cursor-pointer">Buy</button>
                                                <button type="button" className="flex justify-center items-center text-orange-500 w-14 px-2 box-border border border-orange-500 rounded-md hover:opacity-90 active:scale-95 transition:all duration-300 cursor-pointer"><i className="w-5" data-feather="shopping-cart"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* product-card-6 */}
                                    <div className="flex flex-col bg-white w-full h-[31rem] relative">
                                        <span className=" text-white font-semibold absolute top-4 left-4 bg-red-700 px-4 py-2 rounded-full">FLASH SALE!</span>
                                        <div className="bg-[url(assets/fav-img-1.jpg)] bg-no-repeat bg-contain bg-top h-3/4"></div>
                                        <div className="flex flex-col self-center flex-1 bg-white w-11/12 absolute bottom-0 box-border p-3 gap-3 shadow-md">
                                            <h2 className="text-xl">Hazelnut Latte</h2>
                                            <p className="text-gray-600 text-xs tracking-wide">You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
                                            <div className="flex flex-row gap-4 items-center">
                                                <span className="text-red-600 text-xs"><del>IDR 20.000</del></span>
                                                <span className="text-orange-500 text-xl">IDR 10.000</span>
                                            </div>
                                            <div className="flex flex-row h-10 gap-3">
                                                <button type="button" className="flex-1 text-black text-xs font-semibold tracking-wide box-border border border-orange-500 bg-orange-500 rounded-md hover:opacity-90 active:scale-95 transition:all duration-300 cursor-pointer">Buy</button>
                                                <button type="button" className="flex justify-center items-center text-orange-500 w-14 px-2 box-border border border-orange-500 rounded-md hover:opacity-90 active:scale-95 transition:all duration-300 cursor-pointer"><i className="w-5" data-feather="shopping-cart"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-row gap-4">
                                    <div className="flex justify-center items-center text-base bg-orange-500 w-9 h-9 rounded-full hover:opacity-90 active:scale-95 transition:all duration-300 cursor-pointer">1</div>
                                    <div className="flex justify-center items-center text-base bg-gray-300 w-9 h-9 rounded-full hover:bg-orange-500 hover:opacity-90 active:scale-95 transition:all duration-300 cursor-pointer">2</div>
                                    <div className="flex justify-center items-center text-base bg-gray-300 w-9 h-9 rounded-full hover:bg-orange-500 hover:opacity-90 active:scale-95 transition:all duration-300 cursor-pointer">3</div>
                                    <div className="flex justify-center items-center text-base bg-gray-300 w-9 h-9 rounded-full hover:bg-orange-500 hover:opacity-90 active:scale-95 transition:all duration-300 cursor-pointer">4</div>
                                    <i className="fa-solid fa-circle-chevron-right text-4xl text-orange-500 hover:opacity-90 active:scale-95 transition:all duration-300 cursor-pointer"></i>
                                </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Product