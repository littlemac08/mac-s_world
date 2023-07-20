import React from 'react';
import './ContactIcon.scss'

const ContactIcon = ({contactShowHandler}) => {
  return (
    <div className='contact_wrap'>
      <div className='contact_wrap_box1'>
        <div className='contact_wrap_box1_inner'>
          <div className='contact_wrap_box1_inner_text'>
            <p>IF YOU CONTACT TO ME :)</p>
            <p>CLICK THE BUTTON </p>
          </div>
          <button onClick={contactShowHandler}>
            <div className='contact_wrap_box1_inner_btn_nhover'>
              CONTACT ME :)
            </div>
            <div className='contact_wrap_box1_inner_btn_hover'>
              <div className='contact_wrap_box1_inner_btn_animation_wrap'>
                <div className='contact_wrap_box1_iner_btn_animation'></div>
                <div className='contact_wrap_box1_iner_btn_animation'></div>
                <div className='contact_wrap_box1_iner_btn_animation'></div>
                <div className='contact_wrap_box1_iner_btn_animation'></div>
                <div className='contact_wrap_box1_iner_btn_animation'></div>
                <div className='contact_wrap_box1_iner_btn_animation'></div>
                <div className='contact_wrap_box1_iner_btn_animation'></div>
                <div className='contact_wrap_box1_iner_btn_animation'></div>
                <div className='contact_wrap_box1_iner_sbtn_animation'></div>
              </div>
            </div>
          </button>
        </div>
      </div>
      <div className='contact_warp_box2'>
        <div className='contact_wrap_box2_inner'>
          <p>I WILL CONTACT YOU AS SOON AS I CHECK THE MAIL</p>
          <p>THANK YOU SO MUCH</p>
        </div>
      </div>
    </div>
  )
}

export default ContactIcon