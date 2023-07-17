import React, { useEffect, useState } from 'react';
import classes from './PortfolioLayout.module.scss'
import PortfolioContent from './portfolioContent/PortfolioContent';

const PortfolioLayout = () => {
  const [portfolioContents, setPortfolioContents] = useState([]);
  useEffect(()=>{
    fetch('/contents.json')
    .then(response => response.json())
    .then(portfolioContents => {
      setPortfolioContents(portfolioContents)
      console.log('/////////////',portfolioContents)
    })
    .catch(err => {
      console.error('Error fetching or parsing JSON:', err);
    });
  },[])

  return (
    <div className={classes.portfolio_layout_wrap}>
        {portfolioContents.map((content, index)=>{
          return <PortfolioContent key={index} content={content}/>
          })
        }
    </div>
  )
}

export default PortfolioLayout
