import React, { useState } from 'react'
import { dishesProps } from '../../constants/Types'
import './Dish.css'
import { faArrowRight, faBurger, faChevronRight, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CgSmartHomeRefrigerator } from 'react-icons/cg'
import { useNavigate } from 'react-router-dom';
interface DishProps{
    dish:dishesProps;
    cartItems:dishesProps[];
    handleAddButton:(dish: dishesProps) => void;
    handleRemoveButton:(dish: dishesProps) => void
}

const Dish = ({dish,cartItems,handleAddButton,handleRemoveButton}:DishProps)=>{
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/ingredients')
    }
    return (
        <div className='dish-container'>
            <div className="dish-details">
                <div className='dish-title'>
                    <p>{dish.name}</p>
                    <p className='dish-rating'>
                        {Number(dish.rating)}<FontAwesomeIcon icon={faStar} />
                    </p>
                </div>
                <div className='equipment-container'>
                    <div className='equipment-list'>
                        {dish.equipments.map((equipment) => {
                            return (
                                <div key={dish.name + equipment} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <CgSmartHomeRefrigerator />
                                    <p style={{ fontSize: '12px' }}>{equipment}</p>
                                </div>
                            )
                        })}
                    </div>
                    <div className='ingredient-container' onClick={handleClick}>
                        <p style={{ color: 'black', fontWeight: '500' }}>Ingredients</p>
                        <p style={{ color: 'orangered' }}>View List <FontAwesomeIcon icon={faChevronRight} /></p>
                    </div>
                </div>
                <div className='dish-description'>
                    {dish.description}
                </div>
            </div>
            <div className="dish-img-container">
                <img className='dish-image' src={dish.image} alt={dish.name} />
                {!cartItems.some((obj) => obj.id === dish.id) ? <button className='add-dish-button' onClick={() => handleAddButton(dish)}>
                    <span className="button-text">Add</span>
                    <span className="button-icon">+</span>
                </button> : <button className='add-dish-button' onClick={() => handleRemoveButton(dish)}>
                    <span className="button-text">Remove</span>
                    <span className="button-icon">-</span>
                </button>}
            </div>
            {cartItems && cartItems.length > 0 && (<div className='cart-container'>
                <div className='cart-text'>
                    <FontAwesomeIcon icon={faBurger} />
                    <p>{Number(cartItems.length)}items added to cart</p>
                </div>
                <FontAwesomeIcon icon={faArrowRight} style={{ marginRight: '4px' }} />
            </div>)}
        </div>
    )
}

export default Dish