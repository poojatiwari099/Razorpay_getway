// components/Navbar.js
// import React, { useState, useEffect } from 'react';
// import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
// import { motion, AnimatePresence } from 'framer-motion';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navigationItems = [
//     { name: 'Payments', href: '#' },
//     { name: 'Banking+', href: '#' },
//     { name: 'Credit', href: '#' },
//     { name: 'Payroll', href: '#' },
//     { name: 'Resources', href: '#' },
//     { name: 'Support', href: '#' },
//     { name: 'Pricing', href: '#' },
//   ];

//   const menuVariants = {
//     closed: {
//       opacity: 0,
//       height: 0,
//       transition: {
//         duration: 0.3,
//         ease: "easeInOut"
//       }
//     },
//     open: {
//       opacity: 1,
//       height: "auto",
//       transition: {
//         duration: 0.3,
//         ease: "easeInOut"
//       }
//     }
//   };

//   const navItemVariants = {
//     hover: {
//       y: -2,
//       color: "#4f46e5",
//       transition: {
//         duration: 0.2,
//         ease: "easeOut"
//       }
//     }
//   };

//   return (
//     <motion.nav 
//       className={`fixed w-full z-50 transition-all duration-300 ${
//         scrolled 
//           ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
//           : 'bg-transparent'
//       }`}
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo with animation */}
//           <motion.div 
//             className="flex items-center"
//             whileHover={{ scale: 1.05 }}
//             transition={{ type: "spring", stiffness: 400, damping: 10 }}
//           >
//             <div className="flex-shrink-0">
//               <motion.div 
//                 className="h-8 w-8 bg-indigo-600 rounded-lg"
//                 whileHover={{ rotate: 180 }}
//                 transition={{ duration: 0.5 }}
//               ></motion.div>
//             </div>
//             {/* <span className="ml-2 text-xl font-bold text-gray-900">Razorpay</span> */}
//  <div className="text-3xl font-black text-blue-600">
//            <img  width="170px" src="https://upload.wikimedia.org/wikipedia/commons/8/89/Razorpay_logo.svg"></img>

//        </div>
//           </motion.div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:block">
//             <div className="ml-10 flex items-baseline space-x-8">
//               {navigationItems.map((item, index) => (
//                 <motion.a
//                   key={item.name}
//                   href={item.href}
//                   className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium relative"
//                   variants={navItemVariants}
//                   whileHover="hover"
//                   initial={{ opacity: 0, y: -20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.1 }}
//                 >
//                   {item.name}
//                   <motion.div
//                     className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600"
//                     whileHover={{ width: "100%" }}
//                     transition={{ duration: 0.3 }}
//                   />
//                 </motion.a>
//               ))}
//             </div>
//           </div>

//           {/* CTA Buttons */}
//           <div className="hidden md:flex items-center space-x-4">
//             <motion.button 
//               className="text-gray-700 hover:text-indigo-600 px-4 py-2 text-sm font-medium"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Log in
//             </motion.button>
//             <motion.button 
//               className="bg-indigo-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 relative overflow-hidden"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <span className="relative z-10">Sign Up</span>
//               <motion.div
//                 className="absolute inset-0 bg-indigo-700"
//                 initial={{ x: "-100%" }}
//                 whileHover={{ x: 0 }}
//                 transition={{ duration: 0.3 }}
//               />
//             </motion.button>
//           </div>

//           {/* Mobile menu button */}
//           <motion.div 
//             className="md:hidden"
//             whileTap={{ scale: 0.9 }}
//           >
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-gray-700 hover:text-indigo-600 focus:outline-none"
//             >
//               {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
//             </button>
//           </motion.div>
//         </div>

//         {/* Mobile Navigation */}
//         <AnimatePresence>
//           {isOpen && (
//             <motion.div
//               variants={menuVariants}
//               initial="closed"
//               animate="open"
//               exit="closed"
//               className="md:hidden overflow-hidden"
//             >
//               <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md border-t border-gray-200">
//                 {navigationItems.map((item, index) => (
//                   <motion.a
//                     key={item.name}
//                     href={item.href}
//                     className="text-gray-700 hover:text-indigo-600 block px-3 py-2 text-base font-medium"
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: index * 0.1 }}
//                     whileHover={{ x: 10 }}
//                   >
//                     {item.name}
//                   </motion.a>
//                 ))}
//                 <div className="pt-4 pb-3 border-t">
//                   <motion.button 
//                     className="w-full text-gray-700 hover:text-indigo-600 block px-3 py-2 text-base font-medium mb-2"
//                     whileHover={{ scale: 1.02 }}
//                   >
//                     Log in
//                   </motion.button>
//                   <motion.button 
//                     className="w-full bg-indigo-600 text-white px-3 py-2 rounded-lg text-base font-medium hover:bg-indigo-700"
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                   >
//                     Sign Up
//                   </motion.button>
//                 </div>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </motion.nav>
//   );
// };

// export default Navbar;



// src/components/landing/Navbar.jsx
// src/components/landing/Navbar.jsx
// src/components/landing/Navbar.jsx
import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Payments', href: 'https://razorpay.com/payments/' },
    { name: 'Banking+', href: 'https://razorpay.com/banking-plus/' },
    { name: 'Credit', href: 'https://razorpay.com/credit/' },
    { name: 'Payroll', href: 'https://razorpay.com/payroll/' },
    { name: 'Resources', href: 'https://razorpay.com/resources/' },
    { name: 'Support', href: 'https://razorpay.com/support/' },
    { name: 'Pricing', href: 'https://razorpay.com/pricing/' },
  ];

  return (
    <>
      {/* Main Navbar - White Background */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <motion.a
              href="https://razorpay.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/89/Razorpay_logo.svg"
                alt="Razorpay"
                className="h-10 transition-all duration-300 group-hover:drop-shadow-2xl"
              />
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative px-5 py-3 text-gray-700 font-medium text-sm tracking-wide transition-all duration-300 hover:text-indigo-600 group"
                >
                  {link.name}
                  {/* Sliding Underline */}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  
                  {/* Active State Indicator */}
                  {link.name === 'Payments' && (
                    <motion.span
                      layoutId="activePill"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-12 h-1 bg-indigo-600 rounded-full"
                    />
                  )}
                </a>
              ))}

              {/* CTA Buttons */}
              <div className="ml-12 flex items-center space-x-5">
                <a
                  href="https://dashboard.razorpay.com/signin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-indigo-600 font-medium transition"
                >
                  Log in
                </a>
                <motion.a
                  href="https://razorpay.com/signup/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative bg-indigo-600 text-white px-8 py-3.5 rounded-xl font-bold shadow-lg overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">Sign Up Free</span>
                  <motion.div
                    className="absolute inset-0 bg-indigo-700"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition"
            >
              {isOpen ? <FiX size={30} /> : <FiMenu size={30} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - White Theme */}
      <motion.div
        initial={false}
        animate={{ y: isOpen ? 0 : -1000 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={`fixed inset-x-0 top-20 z-40 lg:hidden ${isOpen ? 'block' : 'hidden'}`}
      >
        <div className="bg-white/98 backdrop-blur-2xl shadow-2xl border-t border-gray-200">
          <div className="px-6 py-8 space-y-6">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="block text-gray-800 text-xl font-medium hover:text-indigo-600 py-3 border-b border-gray-100 last:border-0"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </motion.a>
            ))}

            <div className="pt-8 space-y-5">
              <a
                href="https://dashboard.razorpay.com/signin"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center text-gray-700 font-medium text-lg py-4"
              >
                Log in
              </a>
              <a
                href="https://razorpay.com/signup/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-indigo-600 text-white font-bold text-lg py-5 rounded-2xl shadow-xl hover:shadow-2xl transition-all"
              >
                Sign Up Free
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Backdrop Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;