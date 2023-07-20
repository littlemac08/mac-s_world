import React from 'react';
import ContactItems from '../components/contact/ContactItems'

const Contact = ({contactShowHandler}) => {
  return (
    <>
        <ContactItems contactShowHandler={contactShowHandler}/>
    </>
  )
}

export default Contact