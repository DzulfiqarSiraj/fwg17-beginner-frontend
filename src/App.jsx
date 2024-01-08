import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Redux integration
import { Provider } from 'react-redux';
import { store } from './redux/store';

// Pages and component
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
import PrivateRoute from './components/PrivateRoute';



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
        element: <PrivateRoute><CheckoutProduct /></PrivateRoute>
    },
    {
        path: '/history-order',
        element: <PrivateRoute><HistoryOrder /></PrivateRoute>
    },
    {
        path: '/detail-order',
        element: <PrivateRoute><DetailOrder /></PrivateRoute>
    },
    {
        path: '/profile',
        element: <PrivateRoute><Profile /></PrivateRoute>
    }
]);

const App = () => {
    return (
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    )
};

export default App;
