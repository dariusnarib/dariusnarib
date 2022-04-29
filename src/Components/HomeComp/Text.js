import React from 'react'

const Text = ({ letter }) => {


    return (
        <h1 className='letter-anim'>
            {letter === ' ' ? <div className='empty'>-</div> : letter}
        </h1>
    )
}

export default Text