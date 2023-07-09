import React, { useState } from 'react'
import classes from './PortfolioContent.module.scss'
import { Link } from 'react-router-dom';

const PortfolioContent = () => {
    const [openClose, setOpenClose] = useState(false);
    const openCloseHandler = openClose ? `${classes.portfolio_layout_body}` : `${classes.close}`
    const selectedHandler = openClose ? `${classes.selected}` : ''
    const showContentHandler = () => {
        if(openClose){
            setOpenClose(false);
        } else {
            setOpenClose(true)
        }
    }

    return (
        <div className={classes.portfolio_layout}>
            <div className={classes.portfolio_layout_header} onClick={showContentHandler}>
                <span className={selectedHandler}>A: TITLE</span>
            </div>
            <div className={openCloseHandler}>
                <div className={classes.portfolio_layout_body_subtitle}>
                    <p>SUBTITLE</p>
                </div>
                <div className={classes.portfolio_layout_body_content}>
                    <Link to='/'>
                        <div className={classes.portfolio_layout_body_content_img}>
                            <img src="https://picsum.photos/800/600" alt="PFcontentImg" />
                        </div>
                    </Link>
                    <div className={classes.portfolio_layout_body_content_tag}>
                        <span>tag1</span>
                        <span>tag2</span>
                        <span>tag3</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioContent