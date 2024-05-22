import React from 'react'
import logoEmail from '../Assets/Logos/logoEmail.webp';

function Contact() {
  return (
    <div id='contact'>
      <h2>Forms</h2>
      <form>
        <label> Name: <input type="text" name="name" /> </label>
        <label> Email: <input type="text" name="name" /> </label>
        <label> Message: <input type="text" name="name" /> </label>
        <input type="submit" value="Submit" />
      </form>
      <img src={logoEmail} alt=""/>
    </div>
  )
}

export default Contact