import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-sky-700 text-white h-17 py-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
          
          {/* Branding or Links */}
          <div>
            <h2 className="text-2xl font-semibold"><i><b>My Landing Page</b></i></h2>
            <p className="mt-2 text-white"><i>Building the future, one step at a time.</i></p>
          </div>

          {/* Contact Section */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-3 text-black"><i><b>Contact Us</b></i></h3>
            <ul className="space-y-2">
              <li>
                <span className='text-black'><b>Email:</b> </span>
                <a href="mailto:info@example.com" className="text-white hover:underline">
                  abihaahmed@gmail.com
                </a>
              </li>
              <li>
                <span className='text-black' ><b>Phone:</b> </span>
                <a href="tel:+123456789" className="text-white hover:underline">
                  +1 (234) 567-89
                </a>
              </li>
              <li className="flex justify-center md:justify-start space-x-4">
                <a href="https://facebook.com" target="_blank" className="text-black hover:text-white">
                  Facebook
                </a>
                <a href="https://twitter.com" target="_blank" className="text-black hover:text-white">
                  Twitter
                </a>
                <a href="https://linkedin.com" target="_blank" className="text-black hover:text-white">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} My Website. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
