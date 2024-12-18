const BrandItemCard = ({
    brand,
    setShowProducts,
    setCurrentBrand
}) => {
    const showProducts = () => {
        setShowProducts(true)
        setCurrentBrand(brand)
    }
    
    return (
        <li
            className='cursor-pointer'
            onClick={() => showProducts()}
        >
            {brand}
        </li>
    )
};

export default BrandItemCard;
