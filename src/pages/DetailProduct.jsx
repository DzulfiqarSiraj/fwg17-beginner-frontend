import React from "react"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { FaStar } from "react-icons/fa6";
import { FaCircleChevronRight } from "react-icons/fa6"
import ProductCard from "../components/ProductCard"
import CoffeeBeanImage from '../assets/coffeebean.jpg'
import { getBestSellerProduct } from "./Home"
import { useDispatch } from "react-redux"
import { addToCart as addToCartAction } from "../redux/reducers/cart"

// eslint-disable-next-line react/prop-types
const DetailProduct = () => {
    
    const [detailProduct, setDetailProduct] = React.useState({})
    const [bestSeller, setBestSeller] = React.useState([])
    let [qty, setQty] = React.useState(0)
        const [localSelector, setLocalSelector] = React.useState({
        product: null,
        size: null,
        variant: null,
        quantity: null,
        uniqueId: null
    })
    const {id} = useParams()

    const decButton = () => {
        if(qty <= 0){
            setQty(0)
            console.log(qty)
            setLocalSelector({
                ...localSelector,
                quantity : qty
            })
            return
        }
        setQty(qty -= 1)
        setLocalSelector({
            ...localSelector,
            quantity : qty
        })
    }

    const addButton = () => {
        setQty(qty += 1)
                setLocalSelector({
            ...localSelector,
            quantity : qty
        })
    }

    const getDetailProduct = async (id) => {
        const {data} = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/products/${id}`)
        if(data.success){
            setDetailProduct(data.results)
            setLocalSelector({
                ...localSelector,
                product: data.results,
                size: data.results.sizes[0],
                variant: data.results.variants[0],
                quantity : qty
            })
        }
    }

    React.useEffect(()=>{
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        getDetailProduct(id)
        getBestSellerProduct(setBestSeller, {limit: 3})
    },[id])

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const addCart = () => {
        dispatch(addToCartAction({...localSelector,
        uniqueId : Math.random().toPrecision(4).slice(2)}))
        navigate('/products')
    }

    const addBuy = () => {
        dispatch(addToCartAction({...localSelector,
        uniqueId : Math.random().toPrecision(4).slice(2)}))
        navigate('/checkout-product')
    }

    return (
        <>
            <Navbar className="bg-black"/>
            {/* <!-- main --> */}
            <main className="flex flex-col w-screen items-center justify-center pt-32 px-24 gap-10">
                {/* <!-- column-1 --> */}
                <div className="flex w-full flex-row gap-5"> {/*<!-- left--> */}
                    <div className="flex w-2/4 flex-col gap-5">
                        <div className="w-full"><img className="w-full" id={detailProduct?.id} src={detailProduct?.image !== null && detailProduct?.image !== '' ? `${import.meta.env.VITE_BACKEND_URL}/uploads/products/${detailProduct?.image}` : CoffeeBeanImage} alt=""/></div>
                        <div className="flex flex-row gap-5">
                            <div className="flex-1">
                                <img className="w-full" src={detailProduct?.image !== null && detailProduct?.image !== '' ? `${import.meta.env.VITE_BACKEND_URL}/uploads/products/${detailProduct?.image}` : CoffeeBeanImage} alt="" />
                            </div>
                            <div className="flex-1">
                                <img className="w-full" src={detailProduct?.image !== null && detailProduct?.image !== '' ? `${import.meta.env.VITE_BACKEND_URL}/uploads/products/${detailProduct?.image}` : CoffeeBeanImage} alt="" />
                            </div>
                            <div className="flex-1">
                                <img className="w-full" src={detailProduct?.image !== null && detailProduct?.image !== '' ? `${import.meta.env.VITE_BACKEND_URL}/uploads/products/${detailProduct?.image}` : CoffeeBeanImage} alt="" />
                            </div>
                        </div>
                    </div>
        
                    <div className="flex flex-col flex-1 bg-white gap-5"> {/*<!-- right --> */}
                        {detailProduct?.tag === "Flash Sale" && <span className="text-sm text-white font-semibold tracking-wide bg-red-600 w-fit py-2 px-3 rounded-full">FLASH SALE!</span>}
                        {detailProduct?.tag === "End Year Sale" && <span className="text-sm text-white font-semibold tracking-wide bg-red-600 w-fit py-2 px-3 rounded-full">END YEAR SALE!</span>}
                        {detailProduct?.tag === "Ramadhan Sale" && <span className="text-sm text-white font-semibold tracking-wide bg-green-700 w-fit py-2 px-3 rounded-full">RAMADHAN SALE!</span>}
                        <h1 className="font-medium text-5xl tracking-wide">{detailProduct?.name}</h1>
                        <div className="flex flex-row gap-3 items-center">
                        {Number(detailProduct?.discount) !== 0 ? <span className='text-[0.6rem] md:text-xs font-bold text-red-500'><del>Rp {Number(detailProduct?.basePrice).toLocaleString('id')},-</del></span> : ''}
                    
                        <span className='text-sm md:text-xl font-bold text-[#1A4D2E]'>Rp {(Number(detailProduct?.basePrice) - (Number(detailProduct?.basePrice)*Number(detailProduct?.discount))).toLocaleString('id')},-</span>
                        </div>
                        <div className="flex flex-row gap-3 items-center h-3 mb-2">
                            <FaStar className="text-[#FF9F29] text-sm"/>
                            <FaStar className="text-[#FF9F29] text-sm"/>
                            <FaStar className="text-[#FF9F29] text-sm"/>
                            <FaStar className="text-[#FF9F29] text-sm"/>
                            <FaStar className="text-[#FF9F29] text-sm"/>
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
                            <button type='button' disabled={qty <= 0 ? true : false} onClick={decButton} id="substract-button" className={`flex w-9 text-lg font-semibold justify-center items-center border ${qty <= 0 ? `border-slate-400`: `border-[#1A4D2E] hover:bg-[#1A4D2E]`} rounded-md active:scale-95 transition:all duration-300 cursor-pointer hover:text-white`}>-</button>
                            <div id="qty-number" className="flex w-10 text-lg font-semibold justify-center items-center">{qty}</div>
                            <button type='button' onClick={addButton} id="add-button" className="flex w-9 text-lg font-semibold justify-center items-center border border-[#1A4D2E] rounded-md hover:bg-[#1A4D2E] hover:text-white active:scale-95 transition:all duration-300 cursor-pointer">+</button>
                        </div>
        
                        <div className="flex flex-col gap-3">
                            <span className="font-semibold">Choose Size</span>

                            <div className="flex flex-row items-center h-10 gap-8">
                                {detailProduct?.sizes?.map(item => (
                                        <button onClick={()=>setLocalSelector({...localSelector, size: item})} type="button" key={`size_${item.id}`} className={`flex flex-1 h-full text-sm tracking-wide justify-center items-center border ${localSelector.size.id === item.id ? 'border-[#1A4D2E]':'border-gray-300'} hover:border hover:border-[#1A4D2E] hover:bg-[#1A4D2E] hover:text-white active:scale-95 transition:all duration-300 cursor-pointer`}>
                                        {item.size}
                                    </button>
                                ))}
                            </div>
                        </div>
        
                        <div className="flex flex-col gap-3">
                            <span className="font-semibold">Choose Variant</span>
                            <div className="flex flex-row items-center h-10 gap-8">
                                {detailProduct?.variants?.map(item => (
                                    <button onClick={()=>setLocalSelector({...localSelector, variant: item})} type="button" key={`variant_${item.id}`} className={`flex flex-1 h-full text-sm tracking-wide text-black justify-center items-center border ${localSelector.variant.id === item.id ? 'border-[#1A4D2E]':'border-gray-300'} hover:border hover:border-[#1A4D2E] hover:bg-[#1A4D2E] hover:text-white active:scale-95 transition:all duration-300 cursor-pointer`}>
                                        {item.variant}
                                    </button>
                                ))}
                            </div>
                        </div>
        
                        <div className="flex flex-row h-11 gap-5 mt-8">
                            <button type="button" onClick={addBuy} className="flex flex-1 text-sm justify-center items-center border border-[#1A4D2E] bg-[#1A4D2E] rounded-md hover:border-[#1A4D2E] text-white active:scale-95 transition:all duration-300 cursor-pointer" id="buy-button" >Buy</button>
                            <button type="button" onClick={addCart} className="flex flex-row flex-1 justify-center items-center gap-5 border border-[#1A4D2E] rounded-md hover:border-[#1A4D2E] active:scale-95 transition:all duration-300 cursor-pointer">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
        
                <div className="flex flex-col w-full gap-5">
                    <h1 className="text-4xl font-medium text-gray-900 tracking-wide">Recommendation <span className="text-yellow-900">For You</span></h1>
                    <div className="flex flex-row w-full justify-center gap-5">
                        {bestSeller.map((item) => <ProductCard key={item.id} id={item.id} image={item.image} name={item.name} description={item.description} basePrice={item.basePrice} tag={item.tag} discount={item.discount}/>)}
                    </div>
        
                    <div className="flex flex-row gap-4 self-center items-center pt-5 pb-10">
                        <div className="flex justify-center items-center text-base bg-[#FF9F29] w-9 h-9 rounded-full hover:opacity-90 active:scale-95 transition:all duration-300 cursor-pointer">1</div>
                        <div className="flex justify-center items-center text-base bg-gray-300 w-9 h-9 rounded-full hover:bg-[#FF9F29] hover:opacity-90 active:scale-95 transition:all duration-300 cursor-pointer">2</div>
                        <div className="flex justify-center items-center text-base bg-gray-300 w-9 h-9 rounded-full hover:bg-[#FF9F29] hover:opacity-90 active:scale-95 transition:all duration-300 cursor-pointer">3</div>
                        <div className="flex justify-center items-center text-base bg-gray-300 w-9 h-9 rounded-full hover:bg-[#FF9F29] hover:opacity-90 active:scale-95 transition:all duration-300 cursor-pointer">4</div>
                        <FaCircleChevronRight className="fa-solid fa-circle-chevron-right text-4xl text-[#FF9F29] hover:opacity-90 active:scale-95 transition:all duration-300 cursor-pointer"/>
                    </div>
                </div>
            </main>
            {/* <!-- /main --> */}
            <Footer />
        </>

    )
}

export default DetailProduct