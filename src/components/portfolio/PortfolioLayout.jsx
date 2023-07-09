import React from 'react';
import classes from './PortfolioLayout.module.scss'
import PortfolioContent from './portfolioContent/PortfolioContent';

const PortfolioLayout = () => {
  return (
    <div className={classes.portfolio_layout_wrap}>
        <PortfolioContent />
        <PortfolioContent />
        <PortfolioContent />
        <PortfolioContent />
        <PortfolioContent />
        <PortfolioContent />
    </div>
  )
}

export default PortfolioLayout