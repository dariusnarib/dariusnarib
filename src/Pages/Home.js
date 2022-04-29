import React, { useState, useEffect } from 'react'
import Welcome from '../Components/HomeComp/Welcome'
import BackStory from '../Components/HomeComp/BackStory'
import SkillTree from '../Components/HomeComp/SkillTree'
import Contact from '../Components/HomeComp/Contact'
import '../CSS/Home.css'


const Home = () => {


    const [show, onShow] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            onShow(window.pageYOffset);
        })
    })

    return (
        <div>
            <Welcome />
            <BackStory scrollHeight={show} />
            <SkillTree scrollHeight={show} />
            <Contact />
        </div>

    )
}

export default Home