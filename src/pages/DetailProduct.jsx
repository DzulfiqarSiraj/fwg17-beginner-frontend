import React from "react"
import axios from "axios"
import { Link, useParams } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { FaStar } from "react-icons/fa6";
import { FaCircleChevronRight } from "react-icons/fa6"
import ProductCard from "../components/ProductCard"
import CoffeeBeanImage from '../assets/coffeebean.jpg'
import { getBestSellerProduct } from "./Home"

// eslint-disable-next-line react/prop-types
const DetailProduct = () => {
    
    const [detailProduct, setDetailProduct] = React.useState({})
    const [bestSeller, setBestSeller] = React.useState([])
    const {id} = useParams()

    const getDetailProduct = async (id) => {
        const {data} = await axios.get(`http://localhost:8888/products/${id}`)
        console.log(data)
        if(data.success){
            setDetailProduct(data.results)
        }
    }

    React.useEffect(()=>{
        getDetailProduct(id)
        getBestSellerProduct(setBestSeller, {limit: 3})
    },[id])
    


    const [quantity, setQuantity] = React.useState(0)

    const decButton = () => {
        if(quantity <= 0) {
            setQuantity(0)
        } else {
            setQuantity(   quantity - 1)
        }
    }

    const addButton = () => {
        setQuantity(   quantity + 1)
    }


    return (
        <>
            <Navbar className="bg-black"/>
            {/* <!-- main --> */}
            <main className="flex flex-col w-screen items-center justify-center pt-32 px-24 gap-10">
                {/* <!-- column-1 --> */}
                <div className="flex w-full flex-row gap-5"> {/*<!-- left--> */}
                    <div className="flex w-2/4 flex-col gap-5">
                        <div className="w-full"><img className="w-full" id={detailProduct?.id} src={detailProduct?.image !== null && detailProduct?.image !== '' ? `http://localhost:8888/uploads/products/${detailProduct?.image}` : CoffeeBeanImage} alt=""/></div>
                        <div className="flex flex-row gap-5">
                            <div className="flex-1">
                                <img className="w-full" src={detailProduct?.image !== null && detailProduct?.image !== '' ? `http://localhost:8888/uploads/products/${detailProduct?.image}` : CoffeeBeanImage} alt="" />
                            </div>
                            <div className="flex-1">
                                <img className="w-full" src={detailProduct?.image !== null && detailProduct?.image !== '' ? `http://localhost:8888/uploads/products/${detailProduct?.image}` : CoffeeBeanImage} alt="" />
                            </div>
                            <div className="flex-1">
                                <img className="w-full" src={detailProduct?.image !== null && detailProduct?.image !== '' ? `http://localhost:8888/uploads/products/${detailProduct?.image}` : CoffeeBeanImage} alt="" />
                            </div>
                        </div>
                    </div>
        
                    <div className="flex flex-col flex-1 bg-white gap-5"> {/*<!-- right --> */}
                        <span className="text-sm text-white font-semibold tracking-wide bg-red-600 w-fit py-2 px-3 rounded-full">FLASH SALE!</span>
                        <h1 className="font-medium text-5xl tracking-wide">{detailProduct?.name}</h1>
                        <div className="flex flex-row gap-3 items-center">
                        {Number(detailProduct?.discount) !== 0 ? <span className='text-[0.6rem] md:text-xs font-bold text-red-500'><del>Rp {Number(detailProduct?.basePrice).toLocaleString('id')},-</del></span> : ''}
                    
                    <span className='text-sm md:text-xl font-bold text-orange-500'>Rp {(Number(detailProduct?.basePrice) - (Number(detailProduct?.basePrice)*Number(detailProduct?.discount))).toLocaleString('id')},-</span>
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
                                {detailProduct?.isBestSeller && <span className="text-gray-600 pl-4">Recommendation</span>}
                            </div>
                            <i className="text-orange-500 w-5 self-start box-border pb-1" data-feather="thumbs-up"></i>
                        </div>
                        <p className="text-gray-600">{detailProduct?.description}</p>
                        <div className="h-9 w-fit flex flex-row border rounded-md border-gray-3">
                            <div onClick={decButton} id="substract-button" className="flex w-9 text-lg font-semibold justify-center items-center border border-orange-500 rounded-md hover:bg-orange-500 active:scale-95 transition:all duration-300 cursor-pointer">-</div>
                            <div id="quantity-number" className="flex w-10 text-lg font-semibold justify-center items-center">{quantity}</div>
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
                                <div className="flex flex-1 h-full tracking-wide justify-center text-sm items-center border border-gray-300 hover:border hover:border-orange-500 active:scale-95 transition:all duration-300 cursor-pointer"
                                >Hot</div>
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
                        {bestSeller.map((item) => <ProductCard key={item.id} id={item.id} image={item.image} name={item.name} description={item.description} basePrice={item.basePrice} discount={item.discount} isBestSeller={item.isBestSeller}/>)}                        
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