import React from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FullNameInput from '../components/FullNameInput'
import EmailInput from '../components/EmailInput'
import PasswordInput from '../components/PasswordInput'
import PhoneNumberInput from '../components/PhoneNumberInput'
import AddressInput from '../components/AddressInput'
import Button from '../components/Button'
import { FiUser } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux'
import { setProfile as setProfileAction } from '../redux/reducers/profile'

const Profile = () => {

    // const [user, setUser] = React.useState({})
    const user = useSelector(state => state.profile.data)
    const [successMessage, setSuccessMessage] = React.useState(null)
    const [uploadSuccessMessage, setUploadSuccessMessage] = React.useState('')
    // const token = window.localStorage.getItem('token')
    const [preview, setPreview] = React.useState()
    const token = useSelector(state => state.auth.token)
    const dispatch = useDispatch()

    // const getProfile = () => {
    //     axios.get('http://localhost:8888/profile',{
    //         headers: {
    //             'Authorization' : `Bearer ${token}`
    //         }
    //     }).then(({data}) => {
    //         setUser(data.results)
    //     })
    // }

    React.useEffect(()=>{
        // getProfile()
    },[])

    React.useEffect(() => {
        if(successMessage){
            setTimeout(()=>{
                setSuccessMessage(null)
            },2000)
        }
    },[successMessage])

    const updateProfileData = async (e) => {
        e.preventDefault()
        const form = new FormData()
        const fields = ['fullName','email','phoneNumber','password','address']
        fields.forEach((field) => {
            if(e.target[field]){
                console.log(e.target[field].value)
                form.append(field, e.target[field].value)
            }
        })
        console.log(form)
        const {data} = await axios.patch('http://localhost:8888/profile', form, {
            headers: {
                'Content-Type' : 'multipart/form-data',
                'Authorization': `Bearer ${token}`
            }
        })
        setSuccessMessage(data.message)
        // setUser(data.results)
        dispatch(setProfileAction(data.results))
    }

    const changePicture = (e) => {
        const pictureUrl = URL.createObjectURL(e.target.files[0])
        setPreview(pictureUrl)
    }

    const uploadPhoto = async (e) => {
        e.preventDefault()
        try {
            const [file] = e.target.pictures.files
            if(file){
                const form = new FormData()
                form.append('pictures',file)
                const {data: res} = await axios.patch('http://localhost:8888/profile', form, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        "Content-Type" : 'multipart/form-data'
                    }
                })
                // setUser(res.results)
                dispatch(setProfileAction(res.results))
                setPreview(null)
                setUploadSuccessMessage(<p className='text-green-500 text-xl self-center'>{res.message}</p>)
                setTimeout(() => {
                    setUploadSuccessMessage('')
                },2000)
            }
        } catch (err) {
            setUploadSuccessMessage(<p className='text-red-500 text-xl self-center'>{err.message}</p>)
            setTimeout(() => {
                setUploadSuccessMessage('')
            },2000)
        }

    }
    return (
        <>
            <Navbar className='bg-black' />
            {/* <!-- main --> */}
            <main className="flex flex-col h-fit p-6 pt-20 md:p-24 bg-white">
                {uploadSuccessMessage}
                <div className="flex flex-row self-center md:self-start py-10 gap-5">
                    <h1 className="text-4xl font-medium text-gray-900 tracking-wide">Profile</h1>
                </div>
                {/* <!-- column-1 --> */}
                <div className="flex flex-1 h-fit flex-col-reverse md:flex-row-reverse gap-3 ">
                    <form onSubmit={updateProfileData} className="flex flex-col flex-1 gap-4 bg-white border border-gray-200 p-5 rounded-md">
                        <FullNameInput defaultValue={user.fullName} />
                        <EmailInput defaultValue={user.email} />
                        <PhoneNumberInput defaultValue={user.phoneNumber} />
                        <PasswordInput defaultValue={user.password} htmlFor={'password'} id={'password'} type={'password'} name={'password'} text='Password' placeholder='Enter Your Password'/>
                        <AddressInput defaultValue={user.address} />
                        {successMessage && <div className='text-xl text-green-700 self-center'>{successMessage}</div>}
                        <Button type='submit' text='Submit' className='bg-orange-500 py-3'/>
                    </form>

                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col items-center md:max-w-xs w-full bg-white border border-gray-200 p-5 gap-2 rounded-md">
                            <span className="text-center text-3xl md:text-xl font-semibold tracking-wide">{user.fullName}</span>
                            <span className='text-base md:text-xs'>{user.email}</span>
                            <form onSubmit={uploadPhoto} className='flex flex-col items-center justify-center'>
                                <label className='flex rounded-full overflow-hidden mb-2 cursor-pointer relative'>
                                    {(!preview && !user?.pictures) && <FiUser className='text-9xl'/>}
                                    {(!preview && user?.pictures) && <img src={`http://localhost:8888/uploads/users/${user?.pictures}`} className='max-w-[9rem] w-full h-full object-cover'/>}
                                    {preview && <img src={preview} className='max-w-[9rem] w-full h-full object-cover'/>}

                                    {preview && <div className='absolute w-full h-full bg-[rgba(0,0,0,0.5)]'></div>}

                                    <input multiple={false} onChange={changePicture} type="file" name='pictures' className='hidden'/>
                                </label>
                                <button className="flex h-10 text-xs px-10 justify-center items-center border border-orange-500 bg-orange-500 rounded-md hover:borde-orange-500 active:scale-95 transition:all duration-300 cursor-pointer">Upload New Photo</button>
                            </form>
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