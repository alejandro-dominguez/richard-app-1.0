import {
    Outlet,
    ScrollRestoration,
    useLocation,
} from 'react-router-dom';
import {
    useEffect,
    useState
} from 'react';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

const Root = () => {
    const location = useLocation()
    const [ showRootComponents,setShowRootComponents ] = useState(true)

    useEffect(() => {
        location.pathname === '/' ? setShowRootComponents(false) : setShowRootComponents(true)
    }, [location])

    return (
        <div className='relative'>
            {
                showRootComponents ?
                    <NavBar />
                :
                    null
            }
            <Outlet />
            {
                showRootComponents ?
                    <Footer />
                :
                    null
            }
            <ScrollRestoration />
        </div>
    )
};

export default Root;
