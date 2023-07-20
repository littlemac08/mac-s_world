import React, { useState } from 'react'
import './PortfolioContent.scss'
import { Link } from 'react-router-dom';

const PortfolioContent = ({content}) => {
    const [openClose, setOpenClose] = useState(false);
    const openCloseHandler = openClose ? `portfolio_layout_body` : `close`
    const selectedHandler = openClose ? `selected` : ''
    const showContentHandler = () => {
        if(openClose){
            setOpenClose(false);
        } else {
            setOpenClose(true)
        }
    }
    const {type, title, subtitle, img, tags} = content || {};
    const {A, B, C} = tags || {};

    return (
        <div className='portfolio_layout'>
            <div className='portfolio_layout_header' onClick={showContentHandler}>
                <span className={selectedHandler}>{type} : {title}</span>
            </div>
            <div className={openCloseHandler}>
                <div className='portfolio_layout_body_subtitle'>
                    <p>{subtitle}</p>
                </div>
                <div className='portfolio_layout_body_content'>
                    <Link to={`/portfolio/${title}`}>
                        <div className='portfolio_layout_body_content_img'>
                            <img src={img} alt="PFcontentImg" />
                        </div>
                    </Link>
                    <div className='portfolio_layout_body_content_tag'>
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