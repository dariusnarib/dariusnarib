import React from 'react'

const Contact = () => {


    const sendMessage = (e) => {
        e.preventDefault();
        console.log('submited')
        alert('Message sent succesfully')
    }

    return (
        <div className='contact-form'>
            <form className='form' action="https://formsubmit.co/681269a981e3955fce488243146ec470" method="POST">
                <label htmlFor="FullName" className='text'>Name:</label>
                <input type='text' placeholder="John Cena" name='name' />
                <label htmlFor="email" className='text'>Email:</label>
                <input type='email' placeholder="JC@gmail.com" required name='email' />
                <label htmlFor="text" className='messgaeLabel text'>Message:</label>
                <textarea placeholder='I would like to hire you... ' className='messageInput' name='message'></textarea>
                <button type='submit' className='submitBTN' >Send Message</button>
            </form>
        </div>
    )
}

export default Contact