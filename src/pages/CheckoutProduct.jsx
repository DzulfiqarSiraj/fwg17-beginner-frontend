import React from 'react';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { FiXCircle } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";
import CoffeeBeanImage from '../assets/coffeebean.jpg'
import BriImage from '../assets/bri.svg'
import DanaImage from '../assets/dana.svg'
import BcaImage from '../assets/bca.svg'
import GopayImage from '../assets/gopay.svg'
import OvoImage from '../assets/ovo.svg'
import PaypalImage from '../assets/paypal.svg'
import {useNavigate} from 'react-router-dom';

import { emptyCart as emptyCartAction } from '../redux/reducers/cart';
import {removeFromCart as removeFromCartAction} from '../redux/reducers/cart'

const CheckoutProduct = () => {
    const [customerData, setCustomerData] = React.useState({
        email : '',
        fullname : '',
        address : ''
    })
    const [shipping, setShipping] = React.useState('')
    const [shippingPrice, setShippingPrice] = React.useState(0)
    const [emailInputMessage, setEmailInputMessage] = React.useState('')
    const [fullNameInputMessage, setFullNameInputMessage] = React.useState('')
    const [addressInputMessage, setAddressInputMessage] = React.useState('')
    const [loading, setLoading] = React.useState(false)
    const [successMessage, setSuccessMesage] = React.useState('hidden')
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart.data)
    const token = useSelector(state => state.auth.token)
    const totalOrder = cart.reduce((prev, curr) => {
        let discount = curr.product.discount
        if(!curr.product.discount){
            discount = 0
        }
        return prev + (((curr.product.basePrice - (curr.product.basePrice * discount)) + curr.size.additionalPrice + curr.variant.additionalPrice) * curr.quantity)
    },0)

    React.useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
    },[])

    const customerFormHandler = (e) => {
        setCustomerData({...customerData, [e.target.name] : e.target.value})
        console.log(customerData)
    }

    const checkoutProcess = async () => {
        const dataReq = {
            cartData : cart,
            custData : customerData,
            shippingData : shipping,
            shippingPrice : shippingPrice
        }
        try {
            setLoading(true)
            if(customerData.email === ''){
                setLoading(false)
                throw new Error('empty email')
            }
            if(customerData.fullname === ''){
                setLoading(false)
                throw new Error('empty name')
            }
            if(customerData.address === ''){
                setLoading(false)
                throw new Error('empty address')
            }
            if(shipping === ''){
                setLoading(false)
                throw new Error('empty shipping')
            }
            
            const data = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/customer/orders`, dataReq, {
                headers : {
                    'Authorization' : `Bearer ${token}`
                }
            });
            
            if(data){
                setTimeout(()=>{
                    setLoading(false)
                    setSuccessMesage('')
                },2000)
                setTimeout(()=>{
                    dispatch(emptyCartAction())
                    navigate('/history-order')
                },5000)
            }
            
        } catch (error) {
            if(error.message === 'empty email'){
                setEmailInputMessage('Email Must Not Be Empty')
                setTimeout(()=>{
                    setEmailInputMessage('')
                },2000)
            }
            if(error.message === 'empty name'){
                setFullNameInputMessage('Name Must Not Be Empty')
                setTimeout(()=>{
                    setFullNameInputMessage('')
                },2000)
            }
            if(error.message === 'empty address'){
                setAddressInputMessage('Address Must Not Be Empty')
                setTimeout(()=>{
                    setAddressInputMessage('')
                },2000)
            }
            if(error.message === 'empty shipping'){
                setShipping('Choose Delivery Option')
                setTimeout(()=>{
                    setShipping('')
                },2000)
            }
        }
    }

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
                            <button type="button" onClick={() => navigate('/products')} className="flex flex-row h-10 text-sm justify-center items-center gap-2 border border-orange-500 bg-orange-500 rounded-md hover:borde-orange-500 active:scale-95 transition:all duration-300 cursor-pointer">
                                <div className="flex pl-2 items-center"><FiPlus className='w-4' /></div>
                                <div className="flex flex-1 pr-2 items-center"><span>Add Menu</span></div>
                            </button>
                        </div>
                        {/* <!-- product-card-1 --> */}
                        {
                            cart.map(product => (
                                <div key={`product_${product?.product?.id}`} className="flex flex-row h-fit bg-gray-100 gap-5">
                                    <img src={product?.product?.image ? `${product?.product?.image}` : CoffeeBeanImage} className='h-48 aspect-square object-cover bg-center'/>
                                    <div className="flex flex-col flex-1 self-center gap-3">
                                        {product?.product?.tag === "Flash Sale" && <span className="w-fit text-xs text-white font-semibold bg-red-700 px-2 py-1 rounded-full">FLASH SALE!</span>}
                                        {product?.product?.tag === "End Year Sale" && <span className="w-fit text-xs text-white font-semibold bg-orange-700 px-2 py-1 rounded-full">END YEAR SALE!</span>}
                                        {product?.product?.tag === "Ramadhan Sale" && <span className="w-fit text-xs text-white font-semibold bg-green-700 px-2 py-1 rounded-full">RAMADHAN SALE!</span>}
                                        <span className="font-semibold tracking-wide">{product?.product?.name}</span>
                                        <div className="flex flex-row items-center gap-2 divide-x-2 divide-gray-300">
                                            <span className="text-sm text-gray-600">{product?.quantity} pcs</span>
                                            <span className="text-sm text-gray-600 pl-2">{product?.size?.size}</span>
                                            <span className="text-sm text-gray-600 pl-2">{product?.variant?.variant}</span>
                                            <span className="text-sm text-gray-600 pl-2">{shipping}</span>
                                        </div>
                                        <div className="flex flex-row gap-3 items-center">
                                            {product?.product?.discount && <span className="self-center text-xs text-red-700"><del>IDR {Number((
                                                Number(product?.product?.basePrice) + Number(product?.variant?.additionalPrice) + Number(product?.size?.additionalPrice))*Number(product?.quantity)).toLocaleString('id')
                                                },-</del></span>}
                                            <span className="text-base text-[#1A4D2E]">IDR {
                                            product?.product?.discount ?
                                            (((Number(product?.product?.basePrice)-(Number(product?.product?.basePrice)*Number(product?.product?.discount)))+
                                            Number(product?.variant?.additionalPrice) + Number(product?.size?.additionalPrice)) * Number(product?.quantity)).toLocaleString('id') :
                                            Number((
                                                Number(product?.product?.basePrice) + Number(product?.variant?.additionalPrice) + Number(product?.size?.additionalPrice))*Number(product?.quantity)).toLocaleString('id')
                                            },-</span>
                                        </div>
                                    </div>
                                    <div className="flex w-fit justify-center items-center px-8">
                                        <FiXCircle type='button' onClick={() => {
                                            dispatch(removeFromCartAction(product))
                                        }} className='text-red-700 hover:text-slate-700 hover:cursor-pointer hover:scale-125 transition:all duration-300' />
                                    </div>
                                </div>
                            ))
                        }                        
                        
                        <span className="text-xl font-semibold tracking-wide">Payment Info & Delivery</span>

                        <form action="" className="flex flex-col gap-5">
                            <label htmlFor="email" className="flex flex-col gap-1">
                                <span className="font-semibold text-lg">Email</span>
                                <div className="flex flex-row items-center border h-10 border-black rounded px-2 gap-2">
                                    <div>
                                        <FiMail />
                                    </div>
                                    <input className="flex-1 outline-none" id="email" type="email" name="email" value={customerData.email} onChange={customerFormHandler}/>
                                </div>
                            </label>
                            {emailInputMessage === 'Email Must Not Be Empty' ? (<div className='text-red-800 text-sm'>{emailInputMessage}!</div>) : ''}
                            <label htmlFor="fullname" className="flex flex-col gap-1">
                                <span className="font-semibold text-lg">Full Name</span>
                                <div className="flex flex-row items-center border h-10 border-black rounded px-2 gap-2">
                                    <div>
                                        <FiUser />
                                    </div>
                                    <input className="flex-1  outline-none" id="fullname" type="text" name="fullname" value={customerData.fullname} onChange={customerFormHandler}/>
                                </div>
                            </label>
                            {fullNameInputMessage === 'Name Must Not Be Empty' ? (<div className='text-red-800 text-sm'>{fullNameInputMessage}!</div>) : ''}
                            <label htmlFor="address" className="flex flex-col gap-1">
                                <span className="font-semibold text-lg">Address</span>
                                <div className="flex flex-row items-center border h-10 border-black rounded px-2 gap-2">
                                    <div>
                                        <FiMapPin />
                                    </div>
                                    <input className="flex-1 outline-none" id="address" type="address" name="address" value={customerData.address} onChange={customerFormHandler}/>
                                </div>
                            </label>
                            {addressInputMessage === 'Address Must Not Be Empty' ? (<div className='text-red-800 text-sm'>{addressInputMessage}!</div>) : ''}
                            <div className="flex flex-col gap-1">
                                <span className="font-semibold text-lg">Delivery</span>
                                <div className="flex flex-row items-center gap-8">
                                    <button type='button' onClick={()=>{
                                        setShipping('Dine In');
                                        setShippingPrice(0);
                                    }} className={`flex flex-1 justify-center items-center h-10 border ${shipping === 'Dine In' ? 'border-green-700' : 'border-gray-500'} rounded-md hover:border hover:border-green-700 active:scale-95 transition:all duration-300 cursor-pointer`}>Dine In</button>
                                    <button type='button' onClick={() => {
                                        setShipping('Door Delivery');
                                        setShippingPrice(10000);
                                    }} className={`flex flex-1 justify-center items-center h-10 border ${shipping === 'Door Delivery' ? 'border-green-700' : 'border-gray-500'} rounded-md hover:border hover:border-green-700 active:scale-95 transition:all duration-300 cursor-pointer`}>Door Delivery</button>
                                    <button type='button' onClick={() => {
                                        setShipping('Pick Up');
                                        setShippingPrice(0);
                                    }} className={`flex flex-1 justify-center items-center h-10 border ${shipping === 'Pick Up' ? 'border-green-700' : 'border-gray-500'} rounded-md hover:border hover:border-green-700 active:scale-95 transition:all duration-300 cursor-pointer`}>Pick Up</button>
                                </div>
                            </div>
                            {shipping === 'Choose Delivery Option' ? (<div className='text-red-800 text-sm'>{shipping}!</div>) : ''}

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
                                    <span className="font-semibold">IDR {Number(totalOrder).toLocaleString('id')},-</span>
                                </div>
                                <div className="flex flex-row justify-between ">
                                    <span className="font-semibold text-gray-800">Delivery</span>
                                    <span className="font-semibold">IDR {Number(shippingPrice).toLocaleString('id')},-</span>
                                </div>
                                <div className="flex flex-row justify-between ">
                                    <span className="font-semibold text-gray-800">Tax</span>
                                    <span className="font-semibold">IDR {(Number(totalOrder) * 0.05).toLocaleString('id')},-</span>
                                </div>
                                <hr />
                                <div className="flex flex-row justify-between ">
                                    <span className="font-semibold text-gray-800">Sub Total</span>
                                    <span className="font-semibold">IDR {((Number(totalOrder) + (Number(totalOrder) * 0.05)) + Number(shippingPrice)).toLocaleString('id')},-</span>
                                </div>
                                <div className='flex flex-1 justify-center'>
                                    {loading && <span className="loading loading-infinity loading-lg"></span>}
                                    {<div className={`${successMessage} text-green-700`}>Checkout Process Successfully</div>}
                                </div>
                                <button type='button' onClick={checkoutProcess} className='flex flex-1 text-sm justify-center items-center border border-[#1A4D2E] bg-[#1A4D2E] rounded-md hover:border-[#1A4D2E] text-white active:scale-95 transition:all duration-300 cursor-pointer py-2'>Checkout</button>

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