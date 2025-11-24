
// src/components/landing/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiPlay } from 'react-icons/fi';

const carouselImages = [
  "https://razorpay.com/sg-blog-content/uploads/2025/03/How-to-Choose-the-Right-Payment-Gateway-for-your-Business_.jpg",
  "https://blog.razorpay.in/wp-content/uploads/2025/09/Apple-Pay-Blog-3-770x515.png",
  "https://media.licdn.com/dms/image/v2/D5610AQGTbFIsYDPTTA/image-shrink_800/image-shrink_800/0/1708425074979/1200x6283png?e=2147483647&v=beta&t=5rV-0vj-kO3k0ZThag7R9Qvz2eQWGDmdZHLyRBx3Ndc",
  "https://blog.razorpay.in/wp-content/uploads/2025/11/A-Guide-for-Global-Businesses-770x515.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHEbA5cYR5hrffcIOY6mOwZq7D-py5eRqxbMFNG5JNGYlD3hU898gKRfuBdvPnyd0YsRs&usqp=CAU",
  "https://blog.razorpay.in/blog-content/uploads/2024/12/Money-Back-Promise-final-770x515.jpg",
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50">

      {/* Animated Background Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div className="absolute top-10 left-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-30"
          animate={{ x: [0, 100, 0], y: [0, -100, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-300 rounded-full blur-3xl opacity-30"
          animate={{ x: [0, -120, 0], y: [0, 80, 0] }}
          transition={{ duration: 24, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Content - Same Premium Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight">
              Power your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600"> finance,</span>
              <br />
              grow your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600"> business</span>
            </h1>

            <p className="mt-8 text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Accept payments from customers. Automate payouts to vendors & employees. 
              Never run out of working capital.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <motion.a
                href="https://razorpay.com/signup/"
                target="_blank"
                className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-lg font-bold rounded-2xl shadow-xl overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-3">
                  Sign Up Now <FiArrowRight className="group-hover:translate-x-2 transition" />
                </span>
                <motion.div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-700"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.a>

              <motion.button className="flex items-center justify-center gap-3 px-10 py-5 border-2 border-blue-300 text-blue-700 font-bold rounded-2xl bg-white/70 backdrop-blur hover:bg-blue-50 transition-all"
                whileHover={{ scale: 1.05 }}
              >
                <FiPlay className="text-xl" /> Know More
              </motion.button>
            </div>

            <p className="mt-10 text-lg text-gray-600 font-medium">
              Join <span className="text-blue-600 font-bold">8+ million businesses</span> using Razorpay
            </p>
          </motion.div>

          {/* Right Side: Infinite Carousel - ALL IMAGES SAME SIZE + FULL COVER */}
          <div className="relative h-[500px] lg:h-[600px] overflow-hidden rounded-3xl">
            <motion.div
              className="flex"
              animate={{ x: [0, -100 * carouselImages.length + "%"] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear"
                }
              }}
            >
              {[...carouselImages, ...carouselImages].map((img, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full px-4"
                  style={{ width: "100%" }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 h-full flex items-center justify-center"
                  >
                    <img
                      src={img}
                      alt={`Razorpay Screenshot ${index + 1}`}
                      className="w-full h-full object-cover"   // Perfect full cover
                      style={{
                        aspectRatio: "16/10",   // Sab images same ratio mein
                        objectFit: "cover"      // No stretch, full visible
                      }}
                      loading="lazy"
                    />
                  </motion.div>
                </div>
              ))}
            </motion.div>

            {/* Gradient Overlays */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-sky-50 to-transparent pointer-events-none z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-sky-50 to-transparent pointer-events-none z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
