import React, { useEffect, useState } from 'react'
import './HomeView.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faClock } from '@fortawesome/free-solid-svg-icons'
import { format } from 'date-fns';
import { cuisines } from '../../constants/helper';
import { PopularDishesProps, cuisineProps, dishesProps } from '../../constants/Types';
import PopularDishes from '../PopularDishes/PopularDishes';
import Menu from '../Menu/Menu';
import CartItems from '../CartItems/CartItems';
const HomeView = () => {
    const [activeButton, setActiveButton] = useState<Number>()
    const currentDate = new Date();
    const formattedDate = format(currentDate, 'dd MMMM yyyy');
    const [dishes, setDishes] = useState<dishesProps[]>([]);
    const [popularDishes, setPopularDishes] = useState<PopularDishesProps[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchDishes = async () => {
            try {
                const response = await fetch('https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/');
                const data = await response.json();
                setPopularDishes(data.popularDishes);
                setDishes(data.dishes);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching dishes:', error);
                setLoading(false);
            }
        };
        fetchDishes()
    }, [])
    const handleClick = (index: number) => {
        setActiveButton(index)
    }
    return (
        <div className='homeview'>
            <div className='operating-time-container'>
                <div className='operating-time'>
                    <div className='date-container'>
                        <FontAwesomeIcon icon={faCalendar} />
                        {formattedDate}
                    </div>
                    <div className='business-hours-container'>
                        <FontAwesomeIcon icon={faClock} />
                        <p>10:30 PM to 12:30 PM</p>
                    </div>
                </div>
            </div>
            <ul className='cuisine-list'>
                {cuisines.map((cuisine: cuisineProps) => {
                    return (
                        <li key={cuisine.id} className='cuisine'>
                            <button className={`cuisine-button ${activeButton == cuisine.id ? 'active' : ''}`} onClick={() => handleClick(cuisine.id)}>{cuisine.country}</button>
                        </li>)
                })}
            </ul>
            <PopularDishes popularDishes={popularDishes} loading = {loading}/>
            <Menu dishes={dishes} loading={loading}/>
        </div>
    )
}

export default HomeView