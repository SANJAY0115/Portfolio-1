import React, { useState } from 'react'
import './Contact.css'
import OIP from '../../assets/OIP.jpg'
import pho from '../../assets/pho.jpg'
import add from '../../assets/add.jpg'



const Contact = () => {

    let [result,setResult] = useState("")

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "8cadb272-f039-4d80-9cd9-28b69e97695d");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            alert('Submitted',res)
            setResult(res.message)
        } else{
            alert('error',res)
            setResult(res.message)
        }
      };

      console.log(result);

  return (
    <div className='contact' id="Contact">
        <div className='left'>
            <div className='in'>
                <div className='icon'>
                    <img src={OIP} />
                </div>
                <div className='detail'>
                    <a href='mailto:arunkumark.ar6@gmail.com'>arunkumark.ar6@gmail.com</a>
                </div>
            </div>
            <div className='in'>
                <div className='icon'>
                    <img src={pho} style={{width:'20px',margin: '0px 14px 0px 20px'}} />
                </div>
                <div className='detail'>
                    <a href='tel:8838295305'>8838295305</a>
                </div>
            </div>
            <div className='in'>
                <div className='icon'>
                    <img src={add} style={{width:'17px',margin: '0px 14px 0px 20px'}} />
                </div>
                <div className='detail'>
                    <p>528 Bharathi Nagar fingerpost, Ooty-643001, Tamil Nadu, India</p>
                </div>
            </div>
        </div>
        <div className='right'>
            <form onSubmit={onSubmit}>
                <input type='text' name='first_name' placeholder='Name' required />
                <input type='text' name='email' placeholder='Email' required />
                <textarea placeholder='Message' name='message' required></textarea>
                <button type='submit'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact
