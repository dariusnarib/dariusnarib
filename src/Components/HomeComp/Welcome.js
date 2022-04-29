import React from 'react'
import dcn from '../../Images/universe.png';

import Text from './Text'

const Welcome = () => {




    return (
        <div className='welcome-wagon'>
            <div className='welcome-message'>
                <h1 className='text welcome-text'>
                    <div className='letter-anim-holder'>
                        <Text letter='D' />
                        <Text letter='i' />
                        <Text letter='g' />
                        <Text letter='i' />
                        <Text letter='t' />
                        <Text letter='i' />
                        <Text letter='z' />
                        <Text letter='e' />
                        <Text letter=' ' />
                        <Text letter='t' />
                        <Text letter='h' />
                        <Text letter='e' />
                    </div>
                </h1>
                <h1 className='text welcome-text'>
                    <div className='letter-anim-holder'>
                        <Text letter='U' />
                        <Text letter='n' />
                        <Text letter='i' />
                        <Text letter='v' />
                        <Text letter='e' />
                        <Text letter='r' />
                        <Text letter='s' />
                        <Text letter='e' />
                    </div>
                </h1>
                <h3 className='text welcome-text'>Hover over the letter</h3>
            </div>
            <div className='welcome-image'> <img src={dcn} alt='dcnthegreat' className='dcnImg' /></div>
        </div>
    )
}

export default Welcome