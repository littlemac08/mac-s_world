import React from 'react';
import classes from './PortfolioIntro.module.scss'

const PortfolioIntro = () => {
  return (
    <div className={classes.portfolio_intro_wrap}>
        <div className={classes.portfolio_intro_left}>
            <div className={classes.portfolio_intro_left_title}>This Page has My works</div>   
            <div className={classes.portfolio_intro_left_des}>Click on the title to view the portfolio.</div>   
        </div>
        <div className={classes.portfolio_intro_right}>
            <div className={classes.portfolio_intro_right_img}>
                <img src="./img/pfimg.gif" alt="" />
            </div>
        </div>
    </div>
  )
}

export default PortfolioIntro