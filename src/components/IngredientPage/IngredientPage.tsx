import { faChevronDown, faChevronLeft, faClock, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { CgSmartHomeRefrigerator } from 'react-icons/cg'
import './IngredientPage.css'
import { useNavigate } from 'react-router-dom'
import { selectedDishProps } from '../../constants/Types'
import imgSrc from './ingredient-asset.jpg'
import IngredientList from '../IngredientList/IngredientList'
const IngredientPage = () => {
    const [selectedDish, setSelectedDish] = useState<selectedDishProps>();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function ingredients() {
            fetch('https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/1').then((response) => {
                response.json().then((data) => {
                    setSelectedDish(data);
                    setLoading(false);
                    console.log("Ingredients data", data);
                })
            })
        }
        ingredients()
    }, [])
    const navigate = useNavigate();
    if (loading) {
        return (
            <div>Loading....</div>
        )
    }
    return (
        <>
            <div className="titlebar">
                <button className='back-button' style={{ cursor: 'pointer' }} onClick={() => { navigate('/') }}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
            </div>
            <div className='ingredient-header-container'>
                <div>
                    <div className='ingredient-title'>
                        <div className='ingredient-title-box'>
                            <div className='title'>
                                <p className='title-text'>{selectedDish!.name}</p>
                                <div className='rating'>
                                    <p>4.2</p>
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                            </div>
                            <div className='ingredient-description'>
                                <p>
                                    Mughlai Masala is a style of cookery developed in the Indian Subcontinent by the imperial kitchens of the Mughal Empire.
                                </p>
                            </div>
                            <div className='timer'>
                                <FontAwesomeIcon icon={faClock} />
                                <p>{selectedDish?.timeToPrepare}</p>
                            </div>
                        </div>
                        <img className='ingredient-banner' src={imgSrc} />
                    </div>
                </div>
                <div className='ingredient-box'>
                    <p style={{ fontSize: '20px', fontWeight: '700' }}>Ingredients</p>
                    <p style={{ color: 'grey' }}>For 2 people</p>
                </div>
                {selectedDish && <div className='ingredient-container'>
                    <IngredientList title='Vegetable' items={selectedDish.ingredients.vegetables} />
                    <IngredientList title='Spices' items={selectedDish.ingredients.spices} />
                    <div className='appliances-container'>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <p style={{ fontSize: '20px', fontWeight: '700' }}>Appliances</p>
                            <button className='drop-down'><FontAwesomeIcon icon={faChevronDown} /></button>
                        </div>
                        <ul className='appliance-list'>
                            {
                                selectedDish.ingredients.appliances.map((appliance) => {
                                    return (
                                        <li className='appliance' key={appliance.name}>
                                            <p style={{ fontSize: '40px', margin: '0' }}><CgSmartHomeRefrigerator /></p>
                                            {appliance.name}
                                        </li>
                                    )

                                })
                            }
                        </ul>
                    </div>
                </div>}
            </div>
        </>
    )
}

export default IngredientPage