import {Link} from 'react-router-dom'
import coffeeShopLogo from '../assets/icon/coffee-shop-icon.svg';

const BrandLogo = () => {
    return (
        <figure>
            <Link to={'/'} className="flex flex-row gap-2 mb-8">
                <img src={coffeeShopLogo} alt="" />
                <figcaption  className="text-yellow-900 text-lg font-sacramento">Coffee Shop</figcaption>
            </Link>
        </figure>
    )
}

export default BrandLogo