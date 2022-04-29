import React, { useState, useEffect } from 'react'
import html from '../../Images/HtmlFinal.png'
import css from '../../Images/CSSComplete.png'
import JS from '../../Images/JavascriptComplete.png'
import ReactImg from '../../Images/ReactComplete.png'
import Native from '../../Images/Native Final.png'
import node from '../../Images/Node.png'
import python from '../../Images/Python.png'


const SkillTree = ({ scrollHeight }) => {

    return (
        <div className='skills' id={scrollHeight >= 900 ? '' : 'arrive'}>
            <h1 className='heading skills-heading'>Skills</h1>
            <h1 className='heading primary-heading'> Primary</h1>
            <div className='acolades'>
                <div className='acolades-first-layer'>
                    <div className='image-description'>
                        <img src={html} alt='html' className='acoImg' />
                        <h1 className='label'>HTML</h1>
                    </div>
                    <div className='image-description'>
                        <img src={css} alt='html' className='acoImg' />
                        <h1 className='label'>CSS</h1>
                    </div>
                    <div className='image-description'>
                        <img src={JS} alt='html' className='acoImg' />
                        <h1 className='label'>JavaScript</h1>
                    </div>
                </div>

                <div className='acolades-second-layer'>
                    <div className='image-description'>
                        <img src={ReactImg} alt='html' className='acoImg' />
                        <h1 className='label'>React</h1>
                    </div>
                    <div className='image-description'>
                        <img src={Native} alt='html' className='acoImg-sec' />
                        <h1 className='label'>React Native</h1>
                    </div>
                </div>
            </div>

            <h1 className='heading secondary-heading'>Secondary</h1>

            <div className='acolades-secondary'>
                <div className='acolades-secondary-first-layer'>
                    <div className='image-description'>
                        <img src={node} alt='html' className='node' />
                        <h1 className='label'>Node</h1>
                    </div>
                    <div className='image-description'>
                        <img src={python} alt='html' className='acoImg' />
                        <h1 className='label'>Python</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillTree