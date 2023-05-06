import { useState, useEffect } from 'react'

const List = ({ getItems }) => {
    const [item, setItem] = useState([])

    useEffect(() => {
        setItem(getItems())
        console.log('Updating items');
    }, [getItems])
    return (
        <div>
            {item.map((element) => (
                <div key={element}>{element}</div>
            ))}
        </div>
    )
}

export default List