import React from 'react';

const ListItemCard = ({ product }) => {
    const {
        category,
        stock,
        featured,
        adultSizes,
        brand,
        desc,
        sizes,
        img,
        name,
        price
    } = product

    return (
        <div>
            {brand} {name}
        </div>
    )
};

export default ListItemCard;
