import React from 'react'
import { ingredientDetails } from '../../constants/Types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import './IngredientList.css'
const IngredientList = ({title,items}:{title:string,items:ingredientDetails[]}) => {
    return (
        <div className='item-container'>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <p style={{ fontSize: '20px', fontWeight: '700' }}>{title}</p>
                <button className='drop-down'><FontAwesomeIcon icon={faChevronDown} /></button>
            </div>
            <ul className='item-list-box'>
                {
                    items.map((item) => {
                        return (
                            <li key={item.name} className='list-item'>
                                <p>{item.name}</p>
                                <p>{item.quantity}</p>
                            </li>
                        )

                    })
                }
            </ul>
        </div>
    )
}

export default IngredientList