import React from 'react';
import './SvgChanger.scss'

const TextSVG = ({textA, textB, mouseOverState}) => {
  // SVG 속성 및 스타일 설정
  const svgAttributes = {
    width: "100%",
    height: "100%",
  };

  const textAttributes = {
    x: "20",
    y: "75%",
    fill: '#ffffff',
    fontSize: '250px',
  };

  const moveBox = mouseOverState ? 'mouse-over' : '';

  return (
    <>
        <div className={`svg_container ${moveBox}`}>
            <svg {...svgAttributes}>
                <text {...textAttributes}>{textA}</text>
            </svg>
        </div>
        <div className={`svg_container ${moveBox}`}>
            <svg {...svgAttributes}>
                <text {...textAttributes}>{textB}</text>
            </svg>
        </div>
    </>
  );
}

export default TextSVG;