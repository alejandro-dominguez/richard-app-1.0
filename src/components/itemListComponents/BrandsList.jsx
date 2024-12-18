import {
    useEffect,
    useState
} from 'react';
import BrandItemCard from './BrandItemCard';
import ItemList from './ItemsList';

const BrandsList = ({
    brands,
    products
}) => {
    const [ showProducts, setShowProducts ] = useState(false)
    const [ currentBrand, setCurrentBrand ] = useState([])

    useEffect(() => {
        setShowProducts(false)
    }, [ brands ])
    
    return (
        <div>
            <ul className='w-full flex justify-center gap-6 mt-5'>
                {
                    brands.map((brand, i) => {
                        return (
                            <BrandItemCard
                                key={i}
                                brand={brand}
                                setShowProducts={setShowProducts}
                                setCurrentBrand={setCurrentBrand}
                            />
                    )})
                }
            </ul>
            {
                showProducts ?
                    <ItemList
                        products={products}
                        currentBrand={currentBrand}
                    />
                :
                    null
            }
        </div>
    )
};

export default BrandsList;
