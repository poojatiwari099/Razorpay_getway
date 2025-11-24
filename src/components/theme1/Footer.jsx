
import React from 'react';
import { FiTwitter, FiFacebook, FiLinkedin, FiInstagram, FiYoutube } from 'react-icons/fi';

const Footer = () => {
  const footerSections = [
    { title: 'Products', links: ['Payment Gateway','RazorpayX','Razorpay Capital','Instant Settlements','UPI','Payment Pages','Payment Links','Subscriptions','Smart Collect','Route'] },
    { title: 'Resources', links: ['Blog','Customer Stories','Events','Chargeback Guide','Support','API Documentation','Help Center','Community'] },
    { title: 'Company', links: ['About Us','Careers','Partners','Press Kit','Contact Us','Social Responsibility','Terms of Use','Privacy Policy'] },
    { title: 'Developers', links: ['Documentation','API Reference','Integration Guides','SDKs & Libraries','Developer Forum','API Status','GitHub'] }
  ];

  const socialLinks = [
    { icon: <FiTwitter className="w-5 h-5" />, href: '#' },
    { icon: <FiFacebook className="w-5 h-5" />, href: '#' },
    { icon: <FiLinkedin className="w-5 h-5" />, href: '#' },
    { icon: <FiInstagram className="w-5 h-5" />, href: '#' },
    { icon: <FiYoutube className="w-5 h-5" />, href: '#' }
  ];

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">

        {/* Brand Section - Always on top on mobile */}
        <div className="mb-12 text-center sm:text-left">
          <div className="mb-6 flex justify-center sm:justify-start">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/8/89/Razorpay_logo.svg" 
              alt="Razorpay" 
              className="h-9 lg:h-10 w-auto"
            />
          </div>
          <p className="text-gray-400 text-sm lg:text-base mb-8 max-w-md mx-auto sm:mx-0 leading-relaxed">
            Power your finance, grow your business. Accept payments, automate payouts, and manage finances seamlessly.
          </p>
          <div className="flex justify-center sm:justify-start space-x-6">
            {socialLinks.map((social, index) => (
              <a key={index} href={social.href} className="text-gray-400 hover:text-white transition-colors">
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Footer Links - Mobile: 2 columns, Tablet: 4, Desktop: 5 (with brand gap) */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-x-8 gap-y-10 mb-12">
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-semibold text-white text-base lg:text-lg mb-5">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="text-gray-400 hover:text-white text-sm lg:text-base transition-colors block leading-snug">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
            <div className="text-gray-400 text-xs lg:text-sm">
              © 2024 Razorpay. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-4 lg:gap-8 text-xs lg:text-sm">
              <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white">Security</a>
              <a href="#" className="text-gray-400 hover:text-white">GDPR</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;