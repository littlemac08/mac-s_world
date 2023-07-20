import React from 'react'
// import { FiActivity } from "react-icons/fi";
import { TbGhost2, TbGhost2Filled, TbLoaderQuarter } from "react-icons/tb";
import './Header.scss';
import { Link } from 'react-router-dom';




const Header = () => {
  return (
    <header>
        <div className='header_wrap'>
            <div className='header_logo'>
                <Link to='/'>
                    <div className='header_logo_loading'>
                        <TbLoaderQuarter />
                    </div>
                </Link>
                <div className='haeder_logo_main'>
                    <TbGhost2 />
                </div>
                <div className='haeder_logo_sub'>
                    <TbGhost2Filled />
                </div>
            </div>
            <ul className='main_gnb_wrap'>
                <li className='main_gnb_hover_effect'>
                    <Link to='/about'>
                        <span>ABOUT</span>
                        <span>ABOUT</span>
                    </Link>
                </li>
                <li className='main_gnb_hover_effect'>
                    <Link to='/contact'>
                        <span>CONTACT</span>
                        <span>CONTACT</span>
                    </Link>
                </li>
                {/* <li className=main_gnb_icon>
                    <div className=main_gnb_icon_main>
                        <TbMenu2 />
                    </div>
                    <div className=main_gnb_icon_hover>
                        <FiActivity />
                    </div>
                </li> */}
                <li className='main_gnb_hover_effect'>
                    <Link to='/portfolio'>
                        <span>PORTFOLIO</span>
                        <span>PORTFOLIO</span>
                    </Link>
                </li>
                <li className='main_gnb_hover_effect'>
                    <Link to='https://mac-world.tistory.com/'>
                        <span>BLOG</span>
                        <span>BLOG</span>
                    </Link>
                </li>
            </ul>
        </div>
    </header>
  )
}

export default Header