import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import './Menu.css'
import { dishesProps } from '../../constants/Types'
import Dish from '../Dish/Dish'
const Menu = ({dishes,loading}:{dishes:dishesProps[],loading:boolean}) => {
    return (
        <div className='menu-container'>
            <div className="menu-title">
                    <p>Recommended <FontAwesomeIcon icon={faCaretDown} /></p>
                    <button className='menu-button'>Menu</button>
            </div>
            <div className='menu-items'>
                    {
                        dishes.map((item)=>{
                            return(
                                <Dish key={item.id} {...item} />
                            )
                        })
                    }
            </div>
        </div>
    )
}

export default Menu