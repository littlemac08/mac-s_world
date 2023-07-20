import React, { useEffect, useState } from 'react';
import PortfolioContent from './portfolioContent/content/PortfolioContent';
import './PortfolioLayout.scss';

const PortfolioLayout = () => {
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

  return (
    <div className='portfolio_layout_wrap'>
        {portfolioContents.map((content, index)=>{
          return <PortfolioContent key={index} content={content}/>
          })
        }
    </div>
  )
}

export default PortfolioLayout

