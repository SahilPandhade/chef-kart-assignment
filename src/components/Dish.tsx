import React from 'react'
import { dishesProps } from '../constants/Types'
import './Dish.css'
import { faChevronRight, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CgSmartHomeRefrigerator } from 'react-icons/cg'
import { useNavigate } from 'react-router-dom';
const Dish: React.FC<dishesProps> = (dish) => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/ingredients')
    }
    const handleAddButton = ()=>{
        
    }
    return (
        <div className='dish-container'>
            <div className="dish-details">
                <div className='dish-title'>
                    <p>{dish.name}</p>
                    <p>
                        {Number(dish.rating)} <FontAwesomeIcon icon={faStar} />
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
                <button className='add-dish-button' onClick={handleAddButton}>
                    <span className="button-text">Add</span>
                    <span className="button-icon">+</span>
                </button>
            </div>
        </div>
    )
}

export default Dish