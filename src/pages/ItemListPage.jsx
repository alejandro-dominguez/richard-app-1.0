import { useState } from 'react';
import ItemListContainer from '../containers/ItemListContainer';
import ItemListNav from '../components/itemListComponents/ItemListNav';

const ItemListPage = () => {
    const [ categoriesData, ] = useState([
        {
            'twoLines': true,
            'nameLine1': 'pañales',
            'nameLine2': 'bebés',
            'url': 'categorias/bebe/pañales%bebe',
            'category': 'bebe'
        },
        {
            'twoLines': true,
            'nameLine1': 'pañales',
            'nameLine2': 'adultos',
            'url': 'categorias/adulto/pañales%adulto',
            'category': 'adulto'
        },
        {
            'twoLines': true,
            'nameLine1': 'higiene &',
            'nameLine2': 'cuidado',
            'url': 'categorias/higiene%y%cuidado',
            'category': 'higiene'
        },
        {
            'twoLines': false,
            'name': 'perfumería',
            'url': 'categorias/perfumería',
            'category': 'perfumeria'
        },
        {
            'twoLines': false,
            'name': 'accesorios',
            'url': 'categorias/accesorios',
            'category': 'accesorios'
        },
    ])
    const [ currentCategory, setCurrentCategory ] = useState([])
    
    return (
        <div className='min-h-[100svh]'>
            <ItemListNav
                categoriesData={categoriesData}
                setCurrentCategory={setCurrentCategory}
            />
            <ItemListContainer currentCategory={currentCategory} />
        </div>
    )
};

export default ItemListPage;
