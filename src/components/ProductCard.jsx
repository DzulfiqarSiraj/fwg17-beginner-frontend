import { FiShoppingCart } from "react-icons/fi";
import Button from './Button'

// eslint-disable-next-line react/prop-types
const ProductCard = ({image, name, description, price}) => {
    return (
        <div className='flex flex-col items-center flex-1'>
            <div className="max-w-md w-full asp"><img className="w-full" src={image} alt="" /></div>
            <div className='bg-white shadow-md rounded-b p-3 mx-3 -mt-10 flex flex-col gap-4 flex-1'>
                <div className='text-base md:text-2xl font-bold'>{name}</div>
                <div className='flex flex-1 text-[0.50rem] md:text-xs text-gray-500 tracking-wide'>{description}</div>
                <div className='text-sm md:text-xl font-bold text-orange-500'>Rp {price.toLocaleString('id')},-</div>
                <div className='flex flex-row gap-2'>
                    <Button className='bg-orange-500 flex-1 py-1 md:py-2 text-[0.60rem] md:text-sm'>Buy</Button>
                    <Button className='border border-orange-500 px-3 md:px-5 text-xs md:text-base'>
                        <FiShoppingCart className="text-orange-500"/>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard