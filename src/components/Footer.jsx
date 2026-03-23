import { Link } from 'react-router-dom';
import FooterLogo from '../assets/TSP_logo.png'; // Use your logo here

const Footer = () => {
  return (
    <footer className="bg-[#f2ede4] text-[#1a1a1a] py-16 px-6 md:px-20 font-serif">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        
        {/* --- LEFT COLUMN: Brand & Socials --- */}
        <div className="flex flex-col gap-6">
          <Link to="/">
            <img 
              src={FooterLogo} 
              alt="House On The Clouds" 
              className="h-20 w-auto grayscale contrast-125" 
            />
          </Link>
          
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:opacity-60 transition-opacity"><i className="fab fa-instagram"></i></a>
            <a href="#" className="hover:opacity-60 transition-opacity"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="hover:opacity-60 transition-opacity"><i className="fab fa-twitter"></i></a>
          </div>
        </div>

        {/* --- CENTER COLUMN: Locations & Legal --- */}
        <div className="flex flex-col gap-8 text-[0.9rem] tracking-wide">
          <p className="font-medium">Mumbai . Bangalore</p>
          <Link to="/privacy" className="hover:underline underline-offset-4">
            Privacy Policy
          </Link>
        </div>

        {/* --- RIGHT COLUMN: Contact --- */}
        <div className="flex flex-col gap-2 text-[0.9rem] tracking-wide md:text-right">
          <p>+91 99647 87383</p>
          <a 
            href="mailto:hello@houseontheclouds.com" 
            className="hover:underline underline-offset-4"
          >
            hello@houseontheclouds.com
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;