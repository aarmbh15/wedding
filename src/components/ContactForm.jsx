// src/components/ContactForm.jsx
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('your_service_id', 'your_template_id', formData, 'your_user_id')
      .then(() => setStatus('Message sent!'), (error) => setStatus('Error: ' + error.text));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" name="name" placeholder="Name" onChange={handleChange} className="w-full p-2 border" required />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} className="w-full p-2 border" required />
      <textarea name="message" placeholder="Message" onChange={handleChange} className="w-full p-2 border h-32" required />
      <button type="submit" className="bg-gold text-white py-2 px-4">Send</button>
      <p>{status}</p>
    </form>
  );
}