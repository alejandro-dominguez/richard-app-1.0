const ListNavIcon = ({ 
    data,
    setCurrentCategory,
}) => {
    const { category, twoLines, nameLine1, nameLine2, name, url } = data

    return (
        <li
            className='cursor-pointer'
            onClick={() => setCurrentCategory(category)}
        >
            {category}
        </li>
    )
};

export default ListNavIcon;
