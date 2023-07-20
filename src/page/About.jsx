import React from 'react'
import MainVisual from '../components/about/MainVisual'
import MainContentA from '../components/about/maincontent/MainContentA'
import SubContentA from '../components/about/subcontent/SubContentA'

const About = ({contactShowHandler}) => {
  return (
    <>
        <MainVisual />
        <MainContentA contactShowHandler={contactShowHandler}/>
        <SubContentA />
    </>
  )
}

export default About