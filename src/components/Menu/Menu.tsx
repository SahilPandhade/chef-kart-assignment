import { faArrowRight, faBurger, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import './Menu.css'
import { dishesProps } from '../../constants/Types'
import Dish from '../Dish/Dish'
const Menu = ({ dishes, loading }: { dishes: dishesProps[], loading: boolean }) => {
    const [cartItems, setCartItems] = useState<dishesProps[]>([])
    const handleAddButton = (dish: dishesProps) => {
        console.log(dish)
        if ((!cartItems.some((obj) => obj.id === dish.id))) {
            setCartItems((prevState)=>[...prevState, dish])
            console.log(cartItems)
        }
        // else {
        //     setCartItems([dish])
        // }
    }
    const handleRemoveButton = (dish: dishesProps) => {
        // if (cartItems) {
            const updatedCartItems = cartItems.filter(obj => obj.id !== dish.id);
            setCartItems(updatedCartItems);
        // }
    }
    return (
        <div className='menu-container'>
            <div className="menu-title">
                <p className='menu-title-text'>
                    <p style={{ fontSize: '24px', fontWeight: '700' }}>Recommended </p>
                    <FontAwesomeIcon icon={faCaretDown} style={{ cursor: 'pointer' }} />
                </p>
                <button className='menu-button'>Menu</button>
            </div>
            <div className='menu-items'>
                {
                    dishes.map((item) => {
                        return (
                            <Dish 
                                key={item.id} 
                                cartItems={cartItems} 
                                handleAddButton={handleAddButton} 
                                handleRemoveButton={handleRemoveButton} 
                                dish={item} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Menu