import React from 'react';

const PortfolioInfoItem = ({item, index}) => {
    const {infoPoint, infoPointTitle_en, infoPointTitle_ko, text_en, text_ko } = item || {};

    const textEn = text_en ? text_en.map((text, index) => (
        <p key={index}>{text}</p>
    )) : null;

    const textKo = text_ko ? text_ko.map((text, index) => (
        <p key={index}>{text}</p>
    )) : null;
    
    if(index === 1){
        return (
            <div className='portfolio_info_body_point'>
                <div className='portfolio_info_body_text'>
                    <div className='portfolio_info_body_text_en'>
                        <h3>{infoPointTitle_en}</h3>
                        {textEn}
                    </div>
                    <div className='portfolio_info_body_text_ko'>
                        <h3>{infoPointTitle_ko}</h3>
                        {textKo}
                    </div>
                </div>
                <div className='portfolio_info_body_img_wrap'>
                    <div className='portfolio_info_body_img_top'>
                        <div className='box_tl'></div>
                        <div className='box_tr'></div>
                    </div>
                    <div className='portfolio_info_body_img_center'>
                        <div className='portfolio_info_body_img'>
                        <img src={infoPoint} alt="point 1" />
                        </div>
                    </div>
                    <div className='portfolio_info_body_img_bottom'>
                        <div className='box_bl'></div>
                        <div className='box_br'></div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className='portfolio_info_body_point'>
                <div className='portfolio_info_body_img_wrap'>
                    <div className='portfolio_info_body_img_top'>
                        <div className='box_tl'></div>
                        <div className='box_tr'></div>
                    </div>
                    <div className='portfolio_info_body_img_center'>
                        <div className='portfolio_info_body_img'>
                        <img src={infoPoint} alt="point 1" />
                        </div>
                    </div>
                    <div className='portfolio_info_body_img_bottom'>
                        <div className='box_bl'></div>
                        <div className='box_br'></div>
                    </div>
                </div>
                <div className='portfolio_info_body_text'>
                    <div className='portfolio_info_body_text_en'>
                        <h3>{infoPointTitle_en}</h3>
                        {textEn}
                    </div>
                    <div className='portfolio_info_body_text_ko'>
                        <h3>{infoPointTitle_ko}</h3>
                        {textKo}
                    </div>
                </div>
            </div>
        )
    }
}

export default PortfolioInfoItem