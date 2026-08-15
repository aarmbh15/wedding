import { useState, useCallback, memo } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = memo(function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    emailjs.send('your_service_id', 'your_template_id', formData, 'your_user_id')
      .then(
        () => setStatus('Message sent!'), 
        (error) => setStatus('Error: ' + error.text)
      );
  }, [formData]);

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input 
        type="text" 
        name="name" 
        value={formData.name}
        placeholder="Name" 
        onChange={handleChange} 
        className="w-full p-2 border" 
        required 
      />
      <input 
        type="email" 
        name="email" 
        value={formData.email}
        placeholder="Email" 
        onChange={handleChange} 
        className="w-full p-2 border" 
        required 
      />
      <textarea 
        name="message" 
        value={formData.message}
        placeholder="Message" 
        onChange={handleChange} 
        className="w-full p-2 border h-32" 
        required 
      />
      <button type="submit" className="bg-gold text-white py-2 px-4">Send</button>
      <p>{status}</p>
    </form>
  );
});

export default ContactForm;