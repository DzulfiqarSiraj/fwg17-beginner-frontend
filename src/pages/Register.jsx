import { Link } from 'react-router-dom'
import coffeeShopLogo from '../assets/icon/coffee-shop-icon.svg';
import FullNameInput from '../components/FullNameInput.jsx';
import EmailInput from '../components/EmailInput.jsx';
import PasswordInput from '../components/PasswordInput.jsx';
import Button from '../components/Button.jsx'
import { FaFacebook } from "react-icons/fa6";

const Register = () => {
    return (
        <>
            <main className="flex flex-col w-screen h-fit md:flex-row">
                <section className="hidden md:flex w-4/12 bg-[url('../assets/bg-register.png')] bg-cover bg-center">
                </section>
                <section className="flex flex-col flex-1 bg-white justify-center items-center px-10">
                    <div className="flex flex-col max-w-3xl w-full bg-white h3/6 mt-16 mb-16">
                        <figure className="flex flex-row gap-2 mb-8">
                            <img src={coffeeShopLogo} alt="" />
                            <figcaption  className="text-yellow-900 text-lg font-sacramento">Coffee Shop</figcaption>
                        </figure>
                        <h1 className="font-semibold text-2xl text-yellow-800 tracking-wide mb-5">Register</h1>
                        <span className="text-neutral-600 text-sm mb-5">Fill out the form correctly</span>
                        <form action="" className="flex flex-col gap-6">
                            <FullNameInput />
                            <EmailInput />
                            <PasswordInput text="Password" placeholder="Enter Your Password"/>
                            <PasswordInput text="Confirm Password" placeholder="Enter Your Password Again"/>
                            <Button type='submit' className="bg-orange-500 py-3">Register</Button>
                        </form>

                        <span className="text-slate-400 item self-center my-5">Have An Account? <Link to='/login' className='text-orange-500'>Login</Link></span>

                        <div className="flex flex-col self-center items-center relative w-full mb-5">
                            <span className="inline-block text-center bg-white w-[100px] z-10 text-xs text-slate-400">Or</span>
                            <hr className="absolute top-1/2 -left-1/2 transform translate-x-1/2 translate-y-1/2 w-full bg-slate-200 -z-0" />
                        </div>

                        <div className="flex flex-row gap-5">
                            <div className="flex flex-col md:flex-row items-center justify-center flex-1 gap-4 rounded-2xl p-5 shadow-md hover:opacity-80 cursor-pointer active:scale-95 transition-all duration-300 active:shadow-none">
                                <div><FaFacebook className='text-blue-500 text-4xl md:text-base'/></div>
                                <span className="hidden md:flex">Facebook</span>
                            </div>
                            <div className="flex flex-col md:flex-row flex-1 items-center justify-center gap-4 rounded-2xl p-5 shadow-md hover:opacity-80 cursor-pointer active:scale-95 transition-all duration-300 active:shadow-none">
                                <div className="flex">
                                    <svg className="w-10 md:w-4" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 48 48">
                                    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                    </svg>
                                </div>
                                <span className="hidden md:flex">Google</span>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Register;