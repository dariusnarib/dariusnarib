import React from 'react'

const Post = ({ heading, content }) => {
    return (
        <div className='post'>
            <h1 className='post-heading heading'>{heading}</h1>
            <p className='post-content text'>{content}</p>
        </div>
    )
}

export default Post