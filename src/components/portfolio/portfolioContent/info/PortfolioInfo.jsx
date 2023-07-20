import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './PortfolioInfo.scss'
import PortfolioInfoItem from '../item/PortfolioInfoItem';
import PortfolioInfoHeader from '../header/PortfolioInfoHeader';

const PortfolioInfo = () => {
    const [portfolioContents, setPortfolioContents] = useState([]);

    
    useEffect(()=>{
      fetch('/contents.json')
      .then(response => response.json())
      .then(portfolioContents => {
        setPortfolioContents(portfolioContents)
      })
      .catch(err => {
        console.error('Error fetching or parsing JSON:', err);
      });
    },[])

    const { title } = useParams();
    const selectedContent = portfolioContents.find(content => content.title === title);

    const {type, url, infoItem, git} = selectedContent || {};
    const items = infoItem ? infoItem.map((item,index)=>{
      return <PortfolioInfoItem 
        key={index}
        item={item}
        index={index}
      />
    }) : null;



  return (
    <div className='portfolio_info_wrap'>
      <PortfolioInfoHeader type={type} title={title} url={url} git={git} />
      <div className='portfolio_info_body'>
        {items}
      </div>
    </div>
  )
}

export default PortfolioInfo