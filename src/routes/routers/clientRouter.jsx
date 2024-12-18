import { createBrowserRouter } from 'react-router-dom';
import Root from '../root/Root';
/* import HomePage from '../../pages/HomePage'; */
import ItemListPage from '../../pages/ItemListPage';
import ErrorPage from '../../pages/ErrorPage';

const clientRouter = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <ItemListPage />,
                errorElement: <ErrorPage />,
            },
        ],
    },
]);

export default clientRouter;
