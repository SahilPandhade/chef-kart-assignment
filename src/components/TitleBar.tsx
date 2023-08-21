import React from 'react'
import './TitleBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
const TitleBar = () => {
  return (
    <div className="titlebar">
        <button className='back-button'><FontAwesomeIcon icon={faChevronLeft} /></button>
        Select Dishes
    </div>
  )
}

export default TitleBar