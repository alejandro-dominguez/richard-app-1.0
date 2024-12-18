import {
    useEffect,
    useState
} from 'react';
import BrandsList from './BrandsList';

const CategoriesList = ({ prods, currentCategory }) => {
    const [ products, setProducts ] = useState([])
    const [ brands, setBrands ] = useState([])

    useEffect(() => {
        if (prods.length && currentCategory.length) {
            const filteredProducts = prods.filter(product => product.category === currentCategory)
            setProducts(filteredProducts)
            const uniqueBrands = Array.from(new Set(filteredProducts.map(product => product.brand)))
            setBrands(uniqueBrands)
        }
    }, [ prods, currentCategory ])
    
    return (
        <main>
            {
                prods.length && brands.length && products.length ?
                    <BrandsList
                        brands={brands}
                        products={products}
                    />
                :
                    null
            }
        </main>
    )
};

export default CategoriesList;
