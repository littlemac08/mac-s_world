import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { PiGithubLogoLight, PiGoogleChromeLogoLight } from "react-icons/pi";



const PortfolioInfoHeader = ({type, title, url, git}) => {
    const [isNewTab, setIsNewTab] = useState(() => {
        const tabState = localStorage.getItem('isNewTab');
        return tabState ? JSON.parse(tabState) : false;
      });
    useEffect(() => {
        localStorage.setItem('isNewTab', JSON.stringify(isNewTab));
      }, [isNewTab]);
      
      useEffect(() => {
        const tabState = localStorage.getItem('isNewTab');
        if (tabState) {
          setIsNewTab(JSON.parse(tabState));
        }
      }, []);
  
      const toggleClickOption = () => {
        if(isNewTab){
          setIsNewTab(false)
        } else {
          setIsNewTab(true)
        }
      }
  
      const newTab = isNewTab ? '_blank' : ''
      const checked = isNewTab;
      const switchText = isNewTab ? 'Opening NewTab' : 'Opening SameTab'
      const switchClass = isNewTab ? 'newtab' : 'sametab'

    return (
        <div className='portfolio_info_head'>
            <div className='portfolio_info_title'>
            <h2>{type} : {title}</h2>
            <div className="switch-container">
                <div id="boo" className={switchClass}>
                    {switchText}
                </div>
                <label className="switch">
                <input id="toggle" type="checkbox" onClick={toggleClickOption} checked={checked} onChange={toggleClickOption}/>
                <div className="slider round"><div><div className="ghost" /></div></div>
                </label>
            </div>
            </div>
            <div className='portfolio_info_move_site'>
            <Link to={url} target={newTab}>
                <div className='portfolio_info_move_site_icon'>
                <PiGoogleChromeLogoLight />
                </div>
                <div className='portfolio_info_move_site_text'>
                <span>Go to WebSite</span>
                </div>
            </Link>
            <Link to={git} target={newTab}>
                <div className='portfolio_info_move_site_icon'>
                <PiGithubLogoLight />
                </div>
                <div className='portfolio_info_move_site_text'>
                <span>Go to Github</span>
                </div>
            </Link>
            </div>
        </div>
    )
}

export default PortfolioInfoHeader