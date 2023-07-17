import React, { useState } from 'react'
import classes from './PortfolioContent.module.scss'
import { Link } from 'react-router-dom';

const PortfolioContent = ({content}) => {
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
    const {type, title, subtitle, img, tags, url} = content || {};
    const {A, B, C} = tags || {};

    return (
        <div className={classes.portfolio_layout}>
            <div className={classes.portfolio_layout_header} onClick={showContentHandler}>
                <span className={selectedHandler}>{type} : {title}</span>
            </div>
            <div className={openCloseHandler}>
                <div className={classes.portfolio_layout_body_subtitle}>
                    <p>{subtitle}</p>
                </div>
                <div className={classes.portfolio_layout_body_content}>
                    <Link to={url} target="_blank">
                        <div className={classes.portfolio_layout_body_content_img}>
                            <img src={img} alt="PFcontentImg" />
                        </div>
                    </Link>
                    <div className={classes.portfolio_layout_body_content_tag}>
                        <span>{A}</span>
                        <span>{B}</span>
                        <span>{C}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioContent