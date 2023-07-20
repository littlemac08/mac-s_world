import React, { useState } from 'react'
import { BsThreeDots } from "react-icons/bs";
import { VscCopy, VscSearch, VscSourceControl, VscDebugAltSmall, VscExtensions, VscChevronDown, VscAccount, VscSettingsGear, VscChromeClose } from "react-icons/vsc";
import { FaHtml5, FaCss3, FaJs } from "react-icons/fa";
import { HiMiniCursorArrowRays } from "react-icons/hi2";
import { FaLaptopFile } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
import classes from './MainVisual.module.scss'


const MainVisual = () => {
  const [consoleText,setConsoleText] = useState('')
  const consoleTextHandler = (event) => {
    setConsoleText(event.target.value)
  }

  const placeholderA = 
`<!DOCTYPE html>
  <html lang="en">
  <link rel="icon" href="/favicon.ico" />
  <head>
    <meta charset="utf-8" />
    <title>mac's world</title>
  </head>
  <body>
    <div>
      <p>mac's world</p>
    </div>
  </body>
</html>`

  return (
    <div className={classes.mainvisual_wrap}>
      <div className={classes.mainvisual_left_text}>
        <p className={classes.mainvisual_text_a}>Hi My Name is <span className={classes.mainvisual_text_color_a}>Mac</span></p>
        <p className={classes.mainvisual_text_b}>I'm Learning For Coding, Become to <span className={classes.mainvisual_text_color_b}>Developer</span></p>
        <p className={classes.mainvisual_text_c}>Now I'll Show My <span className={classes.mainvisual_text_color_a}>History</span> and <span className={classes.mainvisual_text_color_b}>works</span></p>
        <p className={classes.mainvisual_text_d}><span className={classes.mainvisual_text_color_c}>Welcome :)</span></p>
      </div>
      <div className={classes.mainvisual_right_sub}>
        <div className={classes.console_wrap}>
          <div className={classes.console_title}>
            <div className={classes.console_title_btn}>
              <span className={classes.console_title_btn_close}>o</span>
              <span className={classes.console_title_btn_mini}>o</span>
              <span className={classes.console_title_btn_resize}>o</span>
            </div>
            <span className={classes.console_title_text}>mac world - devleoper-create-app</span>
          </div>
          <div className={classes.console_inner}>
            <div className={classes.console_side_pannel}>
              <div className={classes.console_side_pannel_icons}>
                <div className={classes.console_side_pannel_icons_top}>
                  <div><VscCopy /></div>
                  <div><VscSearch /></div>
                  <div><VscSourceControl /></div>
                  <div><VscDebugAltSmall /></div>
                  <div><VscExtensions /></div>
                </div>
                <div className={classes.console_side_pannel_icons_bottom}>
                  <div><VscAccount /></div>
                  <div><VscSettingsGear /></div>
                </div>
              </div>
              <div className={classes.console_side_pannel_folders}>
                <div className={classes.console_side_pannel_top_menu}>
                  <div>탐색기</div>
                  <div><BsThreeDots /></div>
                </div>
                <div className={classes.console_side_pannel_folder1}><VscChevronDown /> mac_world</div>
                <div className={classes.console_side_pannel_folder2}><FaHtml5 />index.html</div>
                <div className={classes.console_side_pannel_folder2}><FaCss3 />basic.css</div>
                <div className={classes.console_side_pannel_folder2}><FaJs />basic.js</div>
              </div>
            </div>
            <div className={classes.console_main_pannel}>
              <div className={classes.console_main_title}>
                <div>index.html<VscChromeClose /></div>
                <div>index.css<VscChromeClose /></div>
                <div>index.js<VscChromeClose /></div>
              </div>
              <textarea className={classes.console_main_title_main_page} onChange={consoleTextHandler} value={consoleText} name="hellowWorld" id="hellowWorld" cols="30" rows="12.5" placeholder={placeholderA} />
            </div>
          </div>
          <div className={classes.console_log}>
            <div className={classes.console_log_top}>
              <div className={classes.console_log_top_icon}>
                <HiMiniCursorArrowRays />
                <FaLaptopFile />
              </div>
              <div className={classes.console_log_top_menu}>
                <div>요소</div>
                <div>콘솔</div>
                <div>소스</div>
                <div>네트워크</div>
                <div>성능</div>
                <div>메모리</div>
                <div>어플리케이션</div>
                <div>Components</div>
              </div>
              <div className={classes.console_log_top_close}>
                <AiOutlineClose />
              </div>
            </div>
            <div className={classes.console_log_bottom}>
              <div>console.log( <span className={classes.console_log_bottom_text}>{consoleText}</span> )</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainVisual