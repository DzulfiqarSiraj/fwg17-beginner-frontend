import coffeeShopLogo from '../assets/icon/coffee-shop-icon.svg';
import Button from '../components/Button';
import EmailInput from '../components/EmailInput';

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
                    <EmailInput />
                    <Button type='submit' className="bg-orange-500 py-3">Submit</Button>
                </form>
            </div>
        </section>
    </main>
    )
};

export default ForgotPassword