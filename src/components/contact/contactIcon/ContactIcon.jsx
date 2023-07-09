import React from 'react';
import classes from './ContactIcon.module.scss'

const ContactIcon = () => {
  return (
    <div className={classes.contact_wrap}>
      <div className={classes.contact_wrap_box1}>
        <div className={classes.contact_wrap_box1_inner}>
          <div className={classes.contact_wrap_box1_inner_text}>
            <p>IF YOU CONTACT TO ME :)</p>
            <p>CLICK THE BUTTON </p>
          </div>
          <button>
            <div className={classes.contact_wrap_box1_inner_btn_nhover}>
              CONTACT ME :)
            </div>
            <div className={classes.contact_wrap_box1_inner_btn_hover}>
              <div className={classes.contact_wrap_box1_inner_btn_animation_wrap}>
                <div className={classes.contact_wrap_box1_iner_btn_animation}></div>
                <div className={classes.contact_wrap_box1_iner_btn_animation}></div>
                <div className={classes.contact_wrap_box1_iner_btn_animation}></div>
                <div className={classes.contact_wrap_box1_iner_btn_animation}></div>
                <div className={classes.contact_wrap_box1_iner_btn_animation}></div>
                <div className={classes.contact_wrap_box1_iner_btn_animation}></div>
                <div className={classes.contact_wrap_box1_iner_btn_animation}></div>
                <div className={classes.contact_wrap_box1_iner_btn_animation}></div>
                <div className={classes.contact_wrap_box1_iner_sbtn_animation}></div>
              </div>
            </div>
          </button>
        </div>
      </div>
      <div className={classes.contact_warp_box2}>
        <div className={classes.contact_wrap_box2_inner}>
          <p>I WILL CONTACT YOU AS SOON AS I CHECK THE MAIL</p>
          <p>THANK YOU SO MUCH</p>
        </div>
      </div>
    </div>
  )
}

export default ContactIcon