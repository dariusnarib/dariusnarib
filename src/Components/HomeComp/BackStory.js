import React, { useState, useEffect } from 'react'
import drawing from '../../Images/multi.png'

const BackStory = ({ scrollHeight }) => {

    return (
        <div className='backstory' >
            <div className='drawingImage'>
                <h1 className='heading'>My Story</h1>
                <div className='drawinHolder'>
                    <div className='drawingImg' id={scrollHeight >= 500 ? 'start' : ''}></div>
                </div>

            </div>
            <div className='text story'> <p>For the longest time I had no idea what I wanted to do with my life.
                At first I wanted to become a business man but I had no idea what that even meant.
                Then I wanted to become an online influencer and content creator.
                Even started up a few YouTube channels and uploaded a few videos that sound like they were recorded underwater.
                Then I jumped to music producer, photo editor, biological engineering, and the list goes on.
                I had no idea what I wanted to do but one thing I was certain of was the fact that I loved to create.
                And it was through this love of creation that my passion for programming was born. </p>
            </div>
        </div>
    )
}

export default BackStory