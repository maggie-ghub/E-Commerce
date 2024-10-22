import React from 'react'
import './Css/LoginSignup.css'
// import axios from 'axios';

const LoginSignup = () => {

  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const handleFormSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     // Send a POST request to the backend API
  //     const response = await axios.post('/api/users/signup', {
  //       name,
  //       email,
  //       password,
  //     });

  //     console.log(response.data); // Handle the response as needed
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>Sign Up</h1>
        <div className='loginsignup-fields'>
          <input type='text' placeholder='Your Name' required name='name'/>
          <input type='email' placeholder='Email Address' required name='email' />
          <input type='password' placeholder='Password' required name='password' />
        </div>
        <button >Continue</button>
        <p className='loginsignup-login'>Already have an account? <span>Login here</span></p>
        <div className='loginsignup-agree'>
          <input type='checkbox' name='' id='' />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup