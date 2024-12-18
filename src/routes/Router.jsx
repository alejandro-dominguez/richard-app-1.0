import { RouterProvider } from 'react-router-dom';
import clientRouter from './routers/clientRouter';

const Router = () => {
    return ( 
        <RouterProvider
            router={clientRouter}
        />
    )
};

export default Router;
