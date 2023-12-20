import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FullNameInput from '../components/FullNameInput'
import EmailInput from '../components/EmailInput'
import PasswordInput from '../components/PasswordInput'
import PhoneNumberInput from '../components/PhoneNumberInput'
import AddressInput from '../components/AddressInput'
import Button from '../components/Button'

const Profile = () => {
    return (
        <>
            <Navbar className='bg-black' />
            {/* <!-- main --> */}
            <main className="flex flex-col h-fit px-24 p-24">
                <div className="flex flex-row items-center py-10 gap-5">
                    <h1 className="text-4xl font-medium text-gray-900 tracking-wide">Profile</h1>
                </div>
                {/* <!-- column-1 --> */}
                <div className="flex flex-1 h-fit flex-row-reverse gap-3 ">
                    <form className="flex flex-col flex-1 gap-4 bg-white border border-gray-200 p-5 rounded-md">
                        <FullNameInput />
                        <EmailInput />
                        <PhoneNumberInput />
                        <PasswordInput text='Password' placeholder='Enter Your Password'/>
                        <AddressInput />
                        <Button type='submit' text='Submit' className='bg-orange-500 py-3'/>

                    </form>

                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col items-center max-w-xs w-full bg-white border border-gray-200 p-5 gap-1 rounded-md">
                            <span className="text-base font-semibold tracking-wide">Galuh Wizard</span>
                            <span className='text-xs'>ghaluhwizz@gmail.com</span>
                            <div></div>
                            <button className="flex h-10 text-xs px-10 justify-center items-center border border-orange-500 bg-orange-500 rounded-md hover:borde-orange-500 active:scale-95 transition:all duration-300 cursor-pointer">Upload New Photo</button>
                            <span className='text-xs'>Since <strong>20 January 2022</strong></span>
                        </div>
                    </div>
                </div>
            </main>
            {/* <!-- /main --> */}
            <Footer />
        </>
    )
}

export default Profile