import React, { useState } from 'react';
import axios from 'axios';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/contact', formData);

      console.log('Server response:', response.data);

      setSuccessMessage('Form submitted successfully!');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
        console.error('Submission error:', error);
      
        if (error.response) {
          console.log('❌ Error response status:', error.response.status);
          console.log('❌ Error response data:', error.response.data);
        } else {
          console.log('❌ Network error or server not reachable:', error.message);
        }
      
        setSuccessMessage('Something went wrong.');
      }
  };

  return (
    <div style={{ padding: '40px' }}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: '500px', marginTop: '20px' }}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ width: '100%', marginBottom: '10px', padding: '10px' }}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ width: '100%', marginBottom: '10px', padding: '10px' }}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          style={{ width: '100%', marginBottom: '10px', padding: '10px' }}
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="4"
          style={{ width: '100%', marginBottom: '10px', padding: '10px' }}
        ></textarea>
        <button type="submit" style={{ padding: '10px 20px' }}>Submit</button>
      </form>

      {successMessage && <p style={{ marginTop: '15px' }}>{successMessage}</p>}
    </div>
  );
}

export default ContactPage;
