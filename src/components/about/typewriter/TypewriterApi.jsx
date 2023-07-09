import React from 'react';
import Typewriter from 'typewriter-effect';
import classes from './TypewriterApi.module.scss'

const TypewriterApi = () => {


    return (
        <div className={classes.type_text}>
            <Typewriter
                onInit={(typewriter) => {
                    typewriter.typeString('Thank you for visiting my website.')
                    .pauseFor(500)
                    .deleteAll()
                    typewriter.typeString('You can explore my portfolio and learn more about me.')
                    .pauseFor(500)
                    .deleteAll()
                    typewriter.typeString(`Let's go together :)`)
                    .start();
                }}
                options={{
                    cursor: '.'
                }}
            />
        </div>
    )
}

export default TypewriterApi