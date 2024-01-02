import React from 'react';
import {Link} from 'react-router-dom'
import CoffeeShopLogo from '../assets/icon/coffee-white-icon.svg';
import {FiSearch,FiShoppingCart} from 'react-icons/fi'
import Button from './Button';
import { TbMenu2 } from "react-icons/tb";

// eslint-disable-next-line react/prop-types
function Navbar (props) {

    // eslint-disable-next-line react/prop-types
    const {className} = props;
    const [top, setTop] = React.useState('-top-[500px]')
    const [searchDisplay, setSearchDisplay] = React.useState('hidden')
    const [showLogout, setShowLogout] = React.useState('hidden')
    const [token, setToken] = React.useState(window.localStorage.getItem('token'))

    const profileButton = () => {
        if(showLogout === 'hidden'){
            setShowLogout('flex')
        } else if(showLogout === 'flex'){
            setShowLogout('hidden')
        }
    }

    const onLogout = () => {
        setToken(null)
        window.localStorage.removeItem('token')
    }

    const searchButton = (e) => {
        e.preventDefault()
        if(searchDisplay === 'hidden'){
            setSearchDisplay('flex')
        }else if(searchDisplay === 'flex'){
            setSearchDisplay('hidden')
        }
    }

    const menuToggling = () => {
        if(top === '-top-[500px]'){
            setTop('top-[4.7rem]')
        } else {
            setTop('-top-[500px]')
        }
    }

    return (
        <nav className={`${className} top- fixed flex flex-col md:flex-row w-screen h-fit md:h-16 z-50`}>
            <div className={`${className} flex flex-row items-center flex-1 md:justify-start md:pl-28 py-5 px-8 z-50`}>
                <ul className="flex flex-1 justify-between md:justify-start md:gap-16">
                    <li className="flex flex-row items-center">
                        <Link to='/' className='flex flex-row gap-3'>
                            <div><img src={CoffeeShopLogo} alt="" /></div>
                            <span className="font-sacramento text-white text-lg">Coffee Shop</span>
                        </Link>
                    </li>
                    <li className="hidden md:flex text-white text-sm items-center border-b-2 border-b-transparent hover:border-b-orange-500 py-1"><Link to='/'>Home</Link></li>
                    <li className=" hidden md:flex text-white text-sm items-center border-b-2 border-b-transparent hover:border-b-orange-500 py-1"><Link to='/products'>Product</Link></li>
                    <li className='flex items-center md:hidden'><TbMenu2 onClick={menuToggling} className='text-4xl text-white'/></li>
                </ul>
            </div>
            <div className={`absolute ${className} ${top} right-0 left-0 transition-all duration-300 md:static flex flex-row flex-1 items-center justify-center md:justify-end md:pr-28`}>
                <ul className={`flex flex-col-reverse md:static md:flex-row gap-3 md:gap-6 items-center py-5 md:py-0`}>
                    <li className='flex flex-row-reverse gap-6 items-center'>
                        <form className='flex flex-row-reverse items-center gap-2' action="">
                            <div onClick={searchButton}>
                                <div className="hover:border-b-2 hover:border-b-orange-500 hover:pb-1.5"><a href=""><FiSearch className='text-lg text-white'/></a></div>
                            </div>
                        </form>
                        <div className={`${searchDisplay} flex-row items-center border h-10 border-gray-300 rounded-lg px-4 gap-4`}>
                            <input className="flex-1 outline-none placeholder:text-sm placeholder:text-gray-500 bg-transparent" id="search" type="text" name="search" placeholder="Search" autoComplete="on"/>
                        </div>
                        <div className="hover:border-b-2 hover:border-b-orange-500 hover:pb-1.5"><a href=""><FiShoppingCart className='text-lg text-white'/></a></div>
                    </li>
                    <li className="md:hidden flex text-white text-sm items-center border-b-2 border-b-transparent hover:border-b-orange-500 py-1"><Link to='/products'>Product</Link></li>
                    <li className="md:hidden flex text-white text-sm items-center border-b-2 border-b-transparent hover:border-b-orange-500 py-1"><Link to='/'>Home</Link></li>
                    {token ? 
                    <li className='flex flex-col items-center md:relative gap-3'>
                        <div onClick={profileButton} className='bg-white w-7 h-7 cursor-pointer rounded-full'></div>
                        <Button onClick={onLogout} text='Logout' className={`md:${showLogout} md:absolute -bottom-8 bg-orange-500 text-xs py-1 px-2 md:left-1/2 md:-translate-x-1/2`}/>
                        </li> : 
                    <li className='flex flex-row gap-4'>
                        <Link to={'/login'}><div className="text-white text-xs px-5 py-2 box-border border border-white rounded-md hover:opacity-90 active:scale-95 transition:all duration-300 cursor-pointer"><Button text='Sign In' /></div></Link>
                        <Link to={'/register'}><div className="text-black text-xs px-5 py-2 box-border border border-orange-500 bg-orange-500 rounded-md hover:opacity-90 active:scale-95 transition:all duration-300 cursor-pointer"><Button text='Sign Up' /></div></Link>
                    </li>}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar