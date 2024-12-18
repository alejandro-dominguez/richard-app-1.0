import { useContext } from 'react';
import { ProductsContext } from '../contexts/productsContext';
import { RotatingLines } from 'react-loader-spinner';
import ErrorPage from '../pages/ErrorPage';
import CategoriesList from '../components/itemListComponents/CategoriesList';

const ItemListContainer = ({ currentCategory }) => {
    const { prods, error, loading } = useContext(ProductsContext)
    
    return (
        <>
            {
                !loading && !error ?
                    <CategoriesList
                        currentCategory={currentCategory}
                        prods={prods}
                    />
                : loading ?
                    <RotatingLines />
                :
                    <ErrorPage />
            }
        </>
    )
};

export default ItemListContainer;
