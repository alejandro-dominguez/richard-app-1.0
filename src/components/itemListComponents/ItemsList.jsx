import {
    useEffect,
    useState
} from 'react';
import ListItemCard from './ListItemCard';

const ItemsList = ({ products, currentBrand }) => {
    const [ currentProducts, setCurrentProducts ] = useState([])

    useEffect(() => {
        if (currentBrand.length) {
            const filteredProducts = products.filter(product => product.brand === currentBrand)
            setCurrentProducts(filteredProducts)
        }
    }, [ currentBrand ])
    
    return (
        <div className='w-full flex flex-col items-center gap-2 mt-5'>
            {
                currentProducts.length ?
                    currentProducts.map(product => {
                        return (
                            <ListItemCard
                                key={product.id}
                                product={product}
                            />
                    )})
                :
                    null
            }
        </div>
    )
};

export default ItemsList;
