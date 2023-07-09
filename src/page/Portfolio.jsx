import React from 'react'
import PortfolioLayout from '../components/portfolio/PortfolioLayout'
import PortfolioIntro from '../components/portfolio/portfolioIntro/PortfolioIntro'

const Portfolio = () => {
  return (
    <div className='portfolio_main_wrap'>
      <PortfolioIntro />
      <PortfolioLayout />
    </div>
    )
}

export default Portfolio