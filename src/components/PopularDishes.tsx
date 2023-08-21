import React from 'react'
import { popular_dishes } from '../constants/helper'
import './PopularDishes.css'
import { PopularDishesProps } from '../constants/Types'
// import useDishesApi from '../hooks/useDishesApi'
const PopularDishes = ({popularDishes,loading}:{popularDishes:PopularDishesProps[],loading:boolean}) => {
    // const {popularDishes,loading} = useDishesApi()
    if(loading){
        return (
            <div>Loading...</div>
        )
    }
    return (
        <div className='popular-dishes-container'>
            <h3>Popular Dishes</h3>
            <div className='dish-list'>
                {
                   popularDishes.map((dish) => {
                        return (
                            <div key={dish.name+dish.id} className='dish-item'>
                                <img className="dish-image" src={dish.image} alt={dish.name} />
                                <div className="dish-overlay">
                                    <h2 className="dish-name">{dish.name}</h2>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default PopularDishes