import React, { useState, useEffect } from 'react';
import { DiJavascript, DiCss3Full, DiHtml5, DiSass, DiReact, DiNodejsSmall } from "react-icons/di";
import { BiLogoVuejs } from "react-icons/bi";
import { SiReactrouter } from "react-icons/si";
import classes from './SubContent.module.scss';

const SkillIconAnimation = ({ children, text }) => {
  const dynamicClass = classes[text];


  return (
    <div className={`${dynamicClass}`}>
      {children}
    </div>
  );
}

const SubContent = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => (prevCount === 8 ? 1 : prevCount + 1));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  console.log(count)

  return (
    <div className={classes.sub_content_wrap}>
      <div className={classes.sub_content_1}>
        <div className={classes.spec_box}>
          {count === 1 && <SkillIconAnimation delay={0} text={'html'}><DiHtml5 /></SkillIconAnimation>}
          {count === 2 && <SkillIconAnimation delay={0} text={'css'}><DiCss3Full /></SkillIconAnimation>}
          {count === 3 && <SkillIconAnimation delay={0} text={'javas'}><DiJavascript /></SkillIconAnimation>}
          {count === 4 && <SkillIconAnimation delay={0} text={'sass'}><DiSass /></SkillIconAnimation>}
          {count === 5 && <SkillIconAnimation delay={0} text={'react'}><DiReact /></SkillIconAnimation>}
          {count === 6 && <SkillIconAnimation delay={0} text={'vue'}><BiLogoVuejs /></SkillIconAnimation>}
          {count === 7 && <SkillIconAnimation delay={0} text={'node'}><DiNodejsSmall /></SkillIconAnimation>}
          {count === 8 && <SkillIconAnimation delay={0} text={'router'}><SiReactrouter /></SkillIconAnimation>}
        </div>
        <div className={classes.animation_box}>
          <p className={classes.animation_text}>CODING</p>
          <img src="./img/subcontent2.gif" alt="" />
        </div>
        <div className={classes.text_box}>
          <div className={classes.text_box_wrap}>
            <div className={classes.text_sub_wrap}>
              <span className={classes.text_sub_content}>WEB & MOBILE</span>
            </div>
            <div className={classes.text_sub_wrap}>
              <span className={classes.text_sub_content}>CREATER</span>
            </div>
            <div className={classes.text_sub_wrap}>
              <span className={classes.text_sub_content}>MAKING NEW</span>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.sub_content_2}>
        <div className={classes.animation_box_2}>
          <img src="./img/subconetnt3.gif" alt="" />
        </div>
        <div className={classes.text_sub_final}>
          <p><span className={classes.sub_point}>Thank you</span> for</p>
          <p>Coming</p>
          <p>My <span className={classes.sub_point}>web site</span></p>
        </div>
      </div>
    </div>
  );
};

export default SubContent;