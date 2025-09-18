import React, { useState } from 'react'
import './Contact.css'

function Contact() {
    const[form, setForm]=useState({
     name:"",
     number:"",
     email:"",
     textarea:""
    })
    const handle =(e)=>{
        setForm({...form,[e.target.name]: e.target.value})
    }
  return (
    <div className='contact-page'>
      <div className="contact-page-box">
      <input type="text" name='text' placeholder='Enter your name:' className='input-area' onChange={handle}/>
      <input type="number" name='number' placeholder='Enter your number:' className='input-area' onChange={handle}/>
      <input type="email" name='email' placeholder='Enter your email:' className='input-area' onChange={handle}/>
      <button type='submit'>send</button>
      </div>
      <div className="contact-page-box">
        <textarea name="textarea" id="" cols={80} rows={15} onChange={handle}></textarea>
      </div>
    </div>
  )
}

export default Contact