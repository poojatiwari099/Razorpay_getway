
// components/ProductHighlights.js
import React from 'react';
import { FiCreditCard, FiBriefcase, FiDollarSign, FiBarChart2 } from 'react-icons/fi';
import { motion } from 'framer-motion';

const ProductCard = ({ product, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.2,
        ease: "easeOut"
      }}
      whileHover={{ 
        y: -12,
        scale: 1.02,
        transition: { type: "spring", stiffness: 300 }
      }}
      className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 sm:p-10 border border-gray-100 group overflow-hidden backdrop-blur-sm"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
      
      <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8 relative z-10">
        <motion.div 
          className={`inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-gradient-to-r ${product.gradient} text-white shadow-xl group-hover:scale-110 transition-all duration-300 flex-shrink-0`}
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          {product.icon}
        </motion.div>

        <div className="flex-1 w-full">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
            {product.title}
          </h3>
          <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg">
            {product.description}
          </p>

          <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
            {product.features.map((feature, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.4 }}
                className="flex items-center text-gray-700 font-medium text-sm sm:text-base"
              >
                <div className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mr-3 sm:mr-4 flex-shrink-0" />
                {feature}
              </motion.li>
            ))}
          </ul>

          <motion.div
            className="text-indigo-600 font-bold text-lg hover:text-indigo-700 flex items-center cursor-pointer"
            whileHover={{ x: 8 }}
          >
            Learn More 
            <motion.span className="ml-2 text-xl">→</motion.span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const ProductHighlights = () => {
  const products = [
    {
      icon: <FiCreditCard className="h-9 w-9 sm:h-10 sm:w-10" />,
      title: 'Payment Gateway',
      description: 'Accept payments with 100+ payment methods including UPI, credit cards, and wallets.',
      features: ['100+ Payment Methods', 'Instant Settlements', 'Smart Collect'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <FiBriefcase className="h-9 w-9 sm:h-10 sm:w-10" />,
      title: 'Business Banking',
      description: 'Open current accounts, access working capital, and manage finances seamlessly.',
      features: ['Current Accounts', 'Working Capital', 'Corporate Cards'],
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: <FiDollarSign className="h-9 w-9 sm:h-10 sm:w-10" />,
      title: 'Payouts',
      description: 'Automate vendor payments, salary disbursements, and refunds with ease.',
      features: ['Bulk Payouts', 'Instant Transfers', 'Vendor Management'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: <FiBarChart2 className="h-9 w-9 sm:h-10 sm:w-10" />,
      title: 'Payroll',
      description: 'Streamline payroll processing with automated calculations and compliance.',
      features: ['Auto Calculations', 'Compliance Management', 'Employee Portal'],
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-5"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 30, repeat: Infinity, repeatType: "reverse" }}
        style={{
          backgroundImage: `radial-gradient(circle at 30px 30px, #6366f1 1px, transparent 0)`,
          backgroundSize: '80px 80px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Heading */}
        <motion.div 
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black">
            Complete Business Banking Suite
          </h2>
          <motion.p 
            className="mt-4 sm:mt-6 text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Everything you need to accept payments, manage finances, and grow your business — all in one place.
          </motion.p>
        </motion.div>

        {/* Product Cards - Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} index={index} />
          ))}
        </div>

        {/* CTA Section - Fully Responsive */}
        <motion.div 
          className="mt-16 sm:mt-20 lg:mt-24 text-center"
          initial={{ opacity: 0, scale: 0.9, y: 60 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <div className="relative rounded-3xl p-10 sm:p-12 lg:p-20 overflow-hidden shadow-2xl bg-white border border-gray-200">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 opacity-70" />
            
            <motion.div
              className="absolute top-8 right-8 sm:top-10 sm:right-10 w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-br from-blue-300 to-indigo-400 rounded-full blur-3xl opacity-20"
              animate={{ scale: [1, 1.3, 1], rotate: [0, 90, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-16 -left-16 sm:-bottom-20 sm:-left-20 w-80 h-80 sm:w-96 sm:h-96 bg-gradient-to-tr from-purple-300 to-pink-300 rounded-full blur-3xl opacity-20"
              animate={{ scale: [1.1, 1.4, 1.1], rotate: [0, -60, 0] }}
              transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative z-10">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 sm:mb-6 text-gray-900 px-4">
                Ready to grow faster?
              </h3>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-10 sm:mb-12 max-w-3xl mx-auto font-light leading-relaxed px-4">
                Join 8+ million businesses already scaling with our platform.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                <motion.button 
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-2xl text-lg sm:text-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 w-full sm:w-auto"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Create Account
                </motion.button>
                
                <motion.button 
                  className="border-2 border-gray-300 text-gray-700 bg-white/80 backdrop-blur-sm px-8 sm:px-10 py-4 sm:py-5 rounded-2xl text-lg sm:text-xl font-bold hover:border-indigo-500 hover:text-indigo-600 hover:bg-white transition-all duration-300 w-full sm:w-auto"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Sales
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductHighlights;