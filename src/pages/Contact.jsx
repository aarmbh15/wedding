// src/pages/Contact.jsx
// Correct (react-helmet-async):
import { Helmet } from "react-helmet-async";
import ContactForm from '../components/ContactForm.jsx';

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <Helmet>
        <title>Our Wedding - Contact</title>
        <meta name="description" content="Get in touch with us for any queries or RSVPs." />
        <meta name="keywords" content="contact, RSVP, wedding inquiry" />
      </Helmet>
      <h1 className="text-5xl font-bold text-center text-green mb-8">Contact Us</h1>
      <div className="max-w-md mx-auto">
        <ContactForm />
      </div>
    </div>
  );
}