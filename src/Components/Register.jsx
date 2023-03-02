import React, { useState } from 'react';
import '../CSSfiles/Register.css';
import pic from '../bird.jpg';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    age: '',
    city: '',
    country: '',
    
  });
console.log(formData)
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let errors = {};
    const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    const phoneRegex = /^\d{10}$/;
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    // const ageRegex = /^\d{1,2}$/;

    if (!formData.name.match(nameRegex)) {
      errors.name = 'Invalid name';
    }
    
    if (!formData.phone.match(phoneRegex)) {
      errors.phone = 'Invalid phone number';
    }
    if (!formData.email.match(emailRegex)) {
      errors.phone = 'Invalid email address';
    }
    
    if (!formData.city) {
      errors.city = 'City is required';
    }
    
    if (!formData.country) {
      errors.country = 'Country is required';
    }
    
    if (!formData.password.match(passwordRegex)) {
      errors.password = 'Password must contain at least 8 characters, including a lowercase letter, an uppercase letter, a number, and a special character';
    }

    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    setErrors(errors);

    if (!Object.keys(errors).length) {
      // Submit the form
      console.log('Submitted')
    }
  };

  return (
    <>
    <div className="flex flex-col items-center bg-scroll py-4"  style={{
          backgroundImage: 'url('+pic+')',
          backgroundSize: "cover",
          height: "max-content",
          color: "#f5f5f5"
        }}>
      <h1 className="text-4xl pb-8">Register</h1>
    <form onSubmit={handleSubmit} className='text-black flex flex-col gap-3 w-96 items-center border-solid border-2 border-black rounded-lg py-2 bg-white'>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          placeholder='Muhammad'

          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p>{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          name="email"
          placeholder='example@mail.com'

          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="phone">Phone:</label>
        <input
          type="text"
          name="phone"
          placeholder='0000 0000000'

          value={formData.phone}
          onChange={handleChange}
        />
        {errors.phone && <p>{errors.phone}</p>}
      </div>

      
      <div>
        <label htmlFor="city">City:</label>
        <input
          type="text"
          name="city"
          placeholder='Lahore'

          value={formData.city}
          onChange={handleChange}
          />
        {errors.city && <p>{errors.city}</p>}
      </div>
      
      <div>
        <label htmlFor="country">Country:</label>
        <input
          type="text"
          name="country"
          placeholder='Pakistan'
          value={formData.country}
          onChange={handleChange}
          />
        {errors.country && <p>{errors.country}</p>}
      </div>
      <div>
        <label htmlFor="age">Date of Birth:</label>
        <input
          type="date"
          name="age"
          value={formData.age}
          onChange={handleChange}
          />
        {errors.age && <p>{errors.age}</p>}
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          placeholder='*********'
          value={formData.password}
          onChange={handleChange}
          />
        {errors.password && <p>{errors.password}</p>}
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          name="confirmPassword"
          placeholder='*********'

          value={formData.confirmPassword}
          onChange={handleChange}
          />
        {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
      </div>
      <button className="text-lg rounded-lg bg-blue-700 text-white px-5">Register</button>
      </form>
      </div>
          </>
  )
  };

  export default Register;