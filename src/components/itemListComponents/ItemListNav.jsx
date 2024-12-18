import ListNavIcon from './ListNavIcon';

const ItemListNav = ({
    categoriesData,
    setCurrentCategory,
}) => {
    return (
        <ul className='w-full flex justify-center gap-6 mt-5'>
            {
                categoriesData.map((data, i) => {
                    return (
                        <ListNavIcon
                            data={data}
                            key={i}
                            setCurrentCategory={setCurrentCategory}
                        />
                    )
                })
            }
        </ul>
    )
};

export default ItemListNav;
