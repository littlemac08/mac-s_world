import React from 'react'
import ContactIcon from './contactIcon/ContactIcon'
import './ContactItems.scss'

const Contact = ({contactShowHandler}) => {
  return (
    <div className='contect_wrap'>
        <ContactIcon contactShowHandler={contactShowHandler} />
    </div>
  )
}

export default Contact