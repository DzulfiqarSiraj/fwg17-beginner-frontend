
import CoffeeShopLogo from '../assets/icon/coffee-white-icon.svg';
import {FiSearch,FiShoppingCart} from 'react-icons/fi'

function Navbar (props) {

    // eslint-disable-next-line react/prop-types
    const {className} = props;

    return (
        <nav className={`${className} flex flex-col md:flex-row w-screen h-fit md:h-16 z-50`}>
            <div className="flex flex-row flex-1 items-center justify-start ml-28">
                <ul className="flex flex-row gap-16">
                    <li className="flex flex-row"><a className="flex flex-row gap-3" href="">
                        <div><img src={CoffeeShopLogo} alt="" /></div>
                        <span className="font-sacramento text-white text-lg">Coffee Shop</span>
                    </a></li>
                    <li className="flex text-white text-sm items-center hover:border-b-2 hover:border-b-orange-500"><a href="home.html">Home</a></li>
                    <li className="flex text-white text-sm items-center hover:border-b-2 hover:border-b-orange-500"><a href="product.html">Product</a></li>
                </ul>
            </div>
            <div className="flex flex-row flex-1 items-center justify-end mr-28">
                <ul className="flex flex-row gap-6 items-center">
                    <li className="hover:border-b-2 hover:border-b-orange-500 hover:pb-1.5"><a href=""><FiSearch className='text-lg text-white'/></a></li>
                    <li className="hover:border-b-2 hover:border-b-orange-500 hover:pb-1.5"><a href=""><FiShoppingCart className='text-lg text-white'/></a></li>
                    <li className="text-white text-xs px-5 py-2 box-border border border-white rounded-md hover:opacity-90 active:scale-95 transition:all duration-300 cursor-pointer"><a href="login.html">Sign In</a></li>
                    <li className="text-black text-xs px-5 py-2 box-border border border-orange-500 bg-orange-500 rounded-md hover:opacity-90 active:scale-95 transition:all duration-300 cursor-pointer"><a href="register.html">Sign Up</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar