import { faArrowRight, faBurger, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import './Menu.css'
import { dishesProps } from '../../constants/Types'
import Dish from '../Dish/Dish'
const Menu = ({ dishes, loading }: { dishes: dishesProps[], loading: boolean }) => {
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
                            <Dish key={item.id} {...item} />
                        )
                    })
                }
            </div>
            <div className='cart-container'>
                <div className='cart-text'>
                    <FontAwesomeIcon icon={faBurger} />
                    <p>2 items added to cart</p>
                </div>
                <FontAwesomeIcon icon={faArrowRight} style={{marginRight:'4px'}}/>
            </div>
        </div>
    )
}

export default Menu