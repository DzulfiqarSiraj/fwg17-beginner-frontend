import coffeeShopLogo from '../assets/icon/coffee-shop-icon.svg';

const ForgotPassword = () => {
    return (
        <main  className="flex flex-col w-screen h-screen sm:flex-row">
        <section className="hidden md:flex w-4/12 bg-[url('../assets/bg_forgot-password.png')] bg-cover bg-center">
        </section>
        <section className="flex flex-col flex-1 bg-white justify-center items-center px-10">
            <div className="flex flex-col max-w-3xl w-full bg-white h3/6 mt-16 mb-16">
                <figure className="flex flex-row gap-2 mb-8">
                    <img src={coffeeShopLogo} alt="" />
                    <figcaption className="text-yellow-900 text-lg">Coffee Shop</figcaption>
                </figure>
                <h1 className="font-semibold text-2xl text-yellow-800 tracking-wide mb-5">Fill out the form correctly</h1>
                <span className="text-neutral-600 text-sm mb-5">We will send new password to your email</span>
                <form action="" className="flex flex-col gap-6">

                    <label htmlFor="email" className="flex flex-col gap-2">
                        <span className="font-semibold text-lg">Email</span>
                        <div className="flex flex-row items-center border h-14 border-gray-300 rounded-lg px-4 gap-4">
                            <div>
                                <i data-feather="mail" className="text-gray-500"></i>
                            </div>
                            <input className="flex-1 outline-none placeholder:text-sm placeholder:text-gray-500" id="email" type="email" name="email" placeholder="Enter Your Email" />
                        </div>
                    </label>

                    <button type="submit" className="border rounded-lg h-11 bg-orange-500 font-normal tracking-wide mb-5 hover:opacity-90 active:scale-95 transition:all duration-300">Submit</button>
                </form>
            </div>
        </section>
    </main>
    )
};

export default ForgotPassword