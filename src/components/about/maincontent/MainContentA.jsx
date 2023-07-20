import React from 'react';
import classes from './MainContent.module.scss'

const MainContentA = ({contactShowHandler}) => {
  return (
    <div className={classes.main_content_wrap}>
        <div className={classes.main_content_box}>
            <div className={classes.main_content_top}>
                <div className={classes.main_content_top_text}>
                    <p>I will become a Frontend <span>DEVELOPER</span></p>
                    <p>every time i will be <span>LEARNED</span></p>
                    <p>every time i will be <span>GROW</span></p>
                </div>
                <div className={classes.main_content_top_btn}>
                    <div className={classes.main_content_top_btn_logo_wrap}>
                        <button onClick={contactShowHandler}>CONTECT ME</button>
                    </div>
                </div>
            </div>
            <div className={classes.main_content_bottom}>
                <div className={classes.main_content_bottom_left}>
                    <div className={classes.main_content_bottom_left_img}>
                        <div className={classes.main_content_bottom_left_filter}></div>
                        <img src="./img/myprofile3.png" alt="" />
                    </div>
                    <div className={classes.main_content_bottom_left_text}>
                        <p className={classes.main_content_bottom_left_text_title}>NAME</p>
                        <p className={classes.main_content_bottom_left_text_des}><span className={classes.main_content_bottom_left_text_point}>MAC</span></p>
                        <p className={classes.main_content_bottom_left_text_title}>AGE</p>
                        <p className={classes.main_content_bottom_left_text_des}><span className={classes.main_content_bottom_left_text_point}>1994</span></p>
                        <p className={classes.main_content_bottom_left_text_title}>GENDER</p>
                        <p className={classes.main_content_bottom_left_text_des}><span className={classes.main_content_bottom_left_text_point}>MALE</span></p>
                        <p className={classes.main_content_bottom_left_text_title}>SKILL</p>
                        <p className={classes.main_content_bottom_left_text_des}>PUBLISHING, <span className={classes.main_content_bottom_left_text_point}>JAVASCRIPT</span>, REACT</p>
                        <p className={classes.main_content_bottom_left_text_title}>HUBBY</p>
                        <p className={classes.main_content_bottom_left_text_des}>COOK, GAME, RIDING, TRIP</p>
                    </div>
                </div>
                <div className={classes.main_content_bottom_right}>
                    <div className={classes.main_content_bottom_right_box}>
                        <div className={classes.main_content_bottom_right_logo}>
                            <img className={classes.main_content_bottom_right_logo_svg} src="./img/sideLogo.svg" alt="boxLogo" />
                        </div>
                    </div>
                    <div className={classes.main_content_bottom_right_text}>
                        <span className={classes.main_content_bottom_right_text_key}>N</span>
                        <span className={classes.main_content_bottom_right_text_des}>New, Rookie, Newbie, Noob</span>
                        <span className={classes.main_content_bottom_right_text_key}>8, ∞</span>
                        <span className={classes.main_content_bottom_right_text_des}>Infinit, Possibility, Potential</span>
                        <span className={classes.main_content_bottom_right_text_key}>WHITE</span>
                        <span className={classes.main_content_bottom_right_text_des}>Reflects all visible light</span>
                        <span className={classes.main_content_bottom_right_text_key}>CHARCOAL</span>
                        <span className={classes.main_content_bottom_right_text_des}>Use a lot, Common</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainContentA