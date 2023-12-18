import { FiShoppingCart } from "react-icons/fi";
import Button from './Button'

// eslint-disable-next-line react/prop-types
const ProductCard = ({image, name, description, price}) => {
    return (
        <div className='flex flex-col items-center flex-1'>
            <div className=""><img className="" src={image} alt="" /></div>
            <div className='bg-white shadow-md rounded p-3 mx-5 -mt-10 flex flex-col gap-4 flex-1'>
                <div className='text-2xl font-bold'>{name}</div>
                <div className='flex flex-1 text-sm'>{description}</div>
                <div className='text-xl font-bold text-orange-500'>Rp {price.toLocaleString('id')},-</div>
                <div className='flex flex-row gap-1'>
                    <Button className='bg-orange-500 flex-1 py-1'>Buy</Button>
                    <Button className='border border-orange-500'>
                        <FiShoppingCart className="text-orange-500"/>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard