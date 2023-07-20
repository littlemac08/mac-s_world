import React from 'react';
import './SwiperBgContent.scss'

const SwiperBgContent = ({imgA, imgB, imgC}) => {
  return (
    <div className='swiper_bg_content_wrap'>
      <div className='swiper_bg'>
        {imgA && <img src={imgA} alt={imgA} />}
      </div>
      <div className='swiper_bg_2'>
        <div className='swiper_bg_2_1'>
          {imgB && <img src={imgB} alt={imgB} />}
        </div>
        <div className='swiper_bg_2_2'>
          {imgC && <img src={imgC} alt={imgC} />}
        </div>
      </div>
    </div>
  )
}

export default SwiperBgContent