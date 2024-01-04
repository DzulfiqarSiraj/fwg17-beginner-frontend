import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Product from './pages/Product';
import DetailProduct from './pages/DetailProduct';
import CheckoutProduct from './pages/CheckoutProduct';
import HistoryOrder from './pages/HistoryOrder';
import DetailOrder from './pages/DetailOrder';
import Profile from './pages/Profile';
import PrivateRoot from './components/PrivateRoot';

const router = createBrowserRouter([
    {
        path: '/register',
        element: <Register />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/forgot-password',
        element: <ForgotPassword />,
    },
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/products',
        element: <Product />,
    },
    {
        path: 'products/:id',
        element: <DetailProduct />
    },
    {
        path: '/checkout-product',
        element: <PrivateRoot><CheckoutProduct /></PrivateRoot>
    },
    {
        path: '/history-order',
        element: <PrivateRoot><HistoryOrder /></PrivateRoot>
    },
    {
        path: '/detail-order',
        element: <PrivateRoot><DetailOrder /></PrivateRoot>
    },
    {
        path: '/profile',
        element: <PrivateRoot><Profile /></PrivateRoot>
    }
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
