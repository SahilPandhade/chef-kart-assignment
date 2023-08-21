import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import './Menu.css'
import MenuList from './MenuList'
import axios from 'axios'
import { dishesProps } from '../constants/Types'
import Dish from './Dish'
import { dummy_dishes } from '../constants/helper'
// import useDishesApi from '../hooks/useDishesApi'
const Menu = ({dishes,loading}:{dishes:dishesProps[],loading:boolean}) => {
    // const {dishes,loading} = useDishesApi()
    // if(loading){
    //     return(
    //         <div>Loading.....</div>
    //     )
    // }
    return (
        <div className='menu-container'>
            <div className="menu-title">
                {/* <div style={{display:'flex',alignItems:'center'}}> */}
                    <p>Recommended <FontAwesomeIcon icon={faCaretDown} /></p>
                    
                {/* </div> */}
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