import React from 'react'
import Post from '../Components/BlogComp/Post'
import '../CSS/Blog.css'

const Blog = () => {
    return (
        <div className='blog'>
            <h1 className='heading blog-heading'>Latest Posts</h1>

            <Post heading='Part 3'
                content='We started learning to code in python around the beginning of tenth grade. I loved it. It was an easy and fast language to learn. It was at this point when I started to teach myself how to research different programming concepts and found websites like w3schools and the holy grail of all websites stackoverflow.  I was the top programmer in my class. Although I knew how to program at a basic level I never introduced myself to the programming world. And it was because of this lack of involvement that I was unable to grow beyond a basic level. It went on like that for most of my high school career. '
            />

            <Post heading='Part 2 of my story'
                content='I wrote my first line of code back in the eighth grade visual basics. And I hated it. The programming language and programs that we were building were boring and it made the entire coding experience terrible. In ninth grade we started to learn pseudocode to teach us the concepts of programming like functions and loops. And I was bad at it. I had no idea when to call my functions and how parameters. I can’t remember passing any tests in which we had to write in pseudocode.  But then something clicked. I started to understand how loops and functions worked, the different data types and how and when to use them, how arrays worked and everything started to make sense. It was at that moment that I understood why programming was so amazing. ' />
        </div>
    )
}

export default Blog