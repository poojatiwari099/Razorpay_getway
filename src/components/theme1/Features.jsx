// // // components/Features.js
// // import React from 'react';
// // import { FiShield, FiZap, FiTrendingUp, FiUsers } from 'react-icons/fi';

// // const Features = () => {
// //   const features = [
// //     {
// //       icon: <FiShield className="h-8 w-8" />,
// //       title: 'Secure & Reliable',
// //       description: 'Bank-grade security with 99.9% uptime. Your data is always safe with us.',
// //       color: 'text-green-600',
// //       bgColor: 'bg-green-50'
// //     },
// //     {
// //       icon: <FiZap className="h-8 w-8" />,
// //       title: 'Lightning Fast',
// //       description: 'Process payments in milliseconds. Never keep your customers waiting.',
// //       color: 'text-yellow-600',
// //       bgColor: 'bg-yellow-50'
// //     },
// //     {
// //       icon: <FiTrendingUp className="h-8 w-8" />,
// //       title: 'Grow Your Business',
// //       description: 'Access powerful tools and insights to scale your operations.',
// //       color: 'text-blue-600',
// //       bgColor: 'bg-blue-50'
// //     },
// //     {
// //       icon: <FiUsers className="h-8 w-8" />,
// //       title: '24/7 Support',
// //       description: 'Our support team is always here to help you succeed.',
// //       color: 'text-purple-600',
// //       bgColor: 'bg-purple-50'
// //     }
// //   ];

// //   return (
// //     <section className="py-20 bg-white">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="text-center mb-16">
// //           <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
// //             Why businesses choose Razorpay
// //           </h2>
// //           <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
// //             Built for developers, trusted by global businesses. Power your entire financial stack with our APIs.
// //           </p>
// //         </div>

// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
// //           {features.map((feature, index) => (
// //             <div
// //               key={index}
// //               className="text-center p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300 border border-gray-100"
// //             >
// //               <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${feature.bgColor} ${feature.color} mb-6`}>
// //                 {feature.icon}
// //               </div>
// //               <h3 className="text-xl font-semibold text-gray-900 mb-4">
// //                 {feature.title}
// //               </h3>
// //               <p className="text-gray-600 leading-relaxed">
// //                 {feature.description}
// //               </p>
// //             </div>
// //           ))}
// //         </div>

// //         {/* Stats Section */}
// //         <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
// //           <div>
// //             <div className="text-3xl md:text-4xl font-bold text-indigo-600">8M+</div>
// //             <div className="text-gray-600 mt-2">Businesses</div>
// //           </div>
// //           <div>
// //             <div className="text-3xl md:text-4xl font-bold text-indigo-600">$80B+</div>
// //             <div className="text-gray-600 mt-2">Annualized TPV</div>
// //           </div>
// //           <div>
// //             <div className="text-3xl md:text-4xl font-bold text-indigo-600">99.9%</div>
// //             <div className="text-gray-600 mt-2">Uptime</div>
// //           </div>
// //           <div>
// //             <div className="text-3xl md:text-4xl font-bold text-indigo-600">150+</div>
// //             <div className="text-gray-600 mt-2">Countries</div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Features;













// // components/Features.js
// // import React from 'react';
// // import { motion } from 'framer-motion';
// // import { FiShield, FiZap, FiTrendingUp, FiUsers } from 'react-icons/fi';
// // import { useInView } from 'react-intersection-observer';

// // // Counter Hook (simple & smooth)
// // const useCountUp = (end, duration = 2000) => {
// //   const [count, setCount] = React.useState(0);
// //   const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

// //   React.useEffect(() => {
// //     if (inView) {
// //       let startTime;
// //       const animate = (timestamp) => {
// //         if (!startTime) startTime = timestamp;
// //         const progress = timestamp - startTime;
// //         const percentage = Math.min(progress / duration, 1);
// //         setCount(Math.floor(percentage * end));
// //         if (percentage < 1) requestAnimationFrame(animate);
// //       };
// //       requestAnimationFrame(animate);
// //     }
// //   }, [inView, end, duration]);

// //   return [count, ref];
// // };

// // const Features = () => {
// //   const features = [
// //     {
// //       icon: <FiShield className="h-10 w-10" />,
// //       title: 'Secure & Reliable',
// //       description: 'Bank-grade security with 99.9% uptime. Your data is always safe with us.',
// //       color: 'text-green-600',
// //       bgColor: 'bg-green-50',
// //       delay: 0.1
// //     },
// //     {
// //       icon: <FiZap className="h-10 w-10" />,
// //       title: 'Lightning Fast',
// //       description: 'Process payments in milliseconds. Never keep your customers waiting.',
// //       color: 'text-yellow-600',
// //       bgColor: 'bg-yellow-50',
// //       delay: 0.2
// //     },
// //     {
// //       icon: <FiTrendingUp className="h-10 w-10" />,
// //       title: 'Grow Your Business',
// //       description: 'Access powerful tools and insights to scale your operations.',
// //       color: 'text-blue-600',
// //       bgColor: 'bg-blue-50',
// //       delay: 0.3
// //     },
// //     {
// //       icon: <FiUsers className="h-10 w-10" />,
// //       title: '24/7 Support',
// //       description: 'Our support team is always here to help you succeed.',
// //       color: 'text-purple-600',
// //       bgColor: 'bg-purple-50',
// //       delay: 0.4
// //     }
// //   ];

// //   // Stats with counter
// //   const [businesses, ref1] = useCountUp(8000000);
// //   const [tpv, ref2] = useCountUp(80);
// //   const [uptime, ref3] = useCountUp(99.9);
// //   const [countries, ref4] = useCountUp(150);

// //   return (
// //     <section className="py-24 bg-gray-50">
// //       <div className="max-w-7xl mx-auto px-6 lg:px-8">

// //         {/* Heading */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 30 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 0.8 }}
// //           className="text-center mb-20"
// //         >
// //           <h2 className="text-4xl md:text-5xl font-black text-gray-900">
// //             Why businesses choose Razorpay
// //           </h2>
// //           <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
// //             Built for developers, trusted by global businesses. Power your entire financial stack with our APIs.
// //           </p>
// //         </motion.div>

// //         {/* Feature Cards - Staggered Scroll Reveal */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
// //           {features.map((feature, index) => (
// //             <motion.div
// //               key={index}
// //               initial={{ opacity: 0, y: 60 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               viewport={{ once: true }}
// //               transition={{
// //                 duration: 0.7,
// //                 delay: feature.delay,
// //                 ease: "easeOut"
// //               }}
// //               whileHover={{ y: -8, scale: 1.03 }}
// //               className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
// //             >
// //               {/* Gradient Hover Background */}
// //               <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

// //               <div className="relative z-10">
// //                 <motion.div
// //                   whileHover={{ scale: 1.2, rotate: 8 }}
// //                   className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl ${feature.bgColor} ${feature.color} mb-6 shadow-lg`}
// //                 >
// //                   {feature.icon}
// //                 </motion.div>

// //                 <h3 className="text-2xl font-bold text-gray-900 mb-4">
// //                   {feature.title}
// //                 </h3>
// //                 <p className="text-gray-600 leading-relaxed">
// //                   {feature.description}
// //                 </p>
// //               </div>
// //             </motion.div>
// //           ))}
// //         </div>

// //         {/* Stats Section - Counter Animation */}
// //         <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center" ref={ref1}>
// //           <motion.div
// //             initial={{ opacity: 0, scale: 0.8 }}
// //             whileInView={{ opacity: 1, scale: 1 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.8 }}
// //           >
// //             <div className="text-5xl font-black text-indigo-600" ref={ref1}>
// //               {businesses.toLocaleString()}+
// //             </div>
// //             <div className="text-gray-600 mt-3 text-lg font-medium">Businesses</div>
// //           </motion.div>

// //           <motion.div
// //             initial={{ opacity: 0, scale: 0.8 }}
// //             whileInView={{ opacity: 1, scale: 1 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.8, delay: 0.2 }}
// //             ref={ref2}
// //           >
// //             <div className="text-5xl font-black text-indigo-600">
// //               ${tpv}B+
// //             </div>
// //             <div className="text-gray-600 mt-3 text-lg font-medium">Annualized TPV</div>
// //           </motion.div>

// //           <motion.div
// //             initial={{ opacity: 0, scale: 0.8 }}
// //             whileInView={{ opacity: 1, scale: 1 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.8, delay: 0.4 }}
// //             ref={ref3}
// //           >
// //             <div className="text-5xl font-black text-indigo-600">
// //               {uptime}%
// //             </div>
// //             <div className="text-gray-600 mt-3 text-lg font-medium">Uptime</div>
// //           </motion.div>

// //           <motion.div
// //             initial={{ opacity: 0, scale: 0.8 }}
// //             whileInView={{ opacity: 1, scale: 1 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.8, delay: 0.6 }}
// //             ref={ref4}
// //           >
// //             <div className="text-5xl font-black text-indigo-600">
// //               {countries}+
// //             </div>
// //             <div className="text-gray-600 mt-3 text-lg font-medium">Countries</div>
// //           </motion.div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Features;








// import React from 'react';
// import { motion } from 'framer-motion';
// import { FiShield, FiZap, FiTrendingUp, FiUsers } from 'react-icons/fi';
// import { useInView } from 'react-intersection-observer';

// // Counter Hook (tumhara original wala — bilkul same)
// const useCountUp = (end, duration = 2000) => {
//   const [count, setCount] = React.useState(0);
//   const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

//   React.useEffect(() => {
//     if (inView) {
//       let startTime;
//       const animate = (timestamp) => {
//         if (!startTime) startTime = timestamp;
//         const progress = timestamp - startTime;
//         const percentage = Math.min(progress / duration, 1);
//         setCount(Math.floor(percentage * end));
//         if (percentage < 1) requestAnimationFrame(animate);
//       };
//       requestAnimationFrame(animate);
//     }
//   }, [inView, end, duration]);

//   return [count, ref];
// };

// const Features = () => {
//   const features = [
//     {
//       icon: <FiShield className="h-10 w-10" />,
//       title: 'Secure & Reliable',
//       description: 'Bank-grade security with 99.9% uptime. Your data is always safe with us.',
//       color: 'text-green-600',
//       bgColor: 'bg-green-50',
//       delay: 0.1
//     },
//     {
//       icon: <FiZap className="h-10 w-10" />,
//       title: 'Lightning Fast',
//       description: 'Process payments in milliseconds. Never keep your customers waiting.',
//       color: 'text-yellow-600',
//       bgColor: 'bg-yellow-50',
//       delay: 0.2
//     },
//     {
//       icon: <FiTrendingUp className="h-10 w-10" />,
//       title: 'Grow Your Business',
//       description: 'Access powerful tools and insights to scale your operations.',
//       color: 'text-blue-600',
//       bgColor: 'bg-blue-50',
//       delay: 0.3
//     },
//     {
//       icon: <FiUsers className="h-10 w-10" />,
//       title: '24/7 Support',
//       description: 'Our support team is always here to help you succeed.',
//       color: 'text-purple-600',
//       bgColor: 'bg-purple-50',
//       delay: 0.4
//     }
//   ];

//   const [businesses, ref1] = useCountUp(8000000);
//   const [tpv, ref2] = useCountUp(80);
//   const [uptime, ref3] = useCountUp(99.9);
//   const [countries, ref4] = useCountUp(150);

//   return (
//     <section className="py-24 bg-white"> {/* ← Yahi change kiya */}
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">

//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-20"
//         >
//           <h2 className="text-4xl md:text-5xl font-black text-gray-900">
//             Why businesses choose Razorpay
//           </h2>
//           <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             Built for developers, trusted by global businesses. Power your entire financial stack with our APIs.
//           </p>
//         </motion.div>

//         {/* Feature Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
//           {features.map((feature, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 60 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{
//                 duration: 0.7,
//                 delay: feature.delay,
//                 ease: "easeOut"
//               }}
//               whileHover={{ y: -8, scale: 1.03 }}
//               className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
//             >
//               {/* Gradient hover background hata diya → sade ke liye */}
              
//               <div className="relative z-10">
//                 <motion.div
//                   whileHover={{ scale: 1.2, rotate: 8 }}
//                   className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl ${feature.bgColor} ${feature.color} mb-6 shadow-lg`}
//                 >
//                   {feature.icon}
//                 </motion.div>

//                 <h3 className="text-2xl font-bold text-gray-900 mb-4">
//                   {feature.title}
//                 </h3>
//                 <p className="text-gray-600 leading-relaxed">
//                   {feature.description}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Stats Section */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center" ref={ref1}>
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <div className="text-5xl font-black text-indigo-600" ref={ref1}>
//               {businesses.toLocaleString()}+
//             </div>
//             <div className="text-gray-600 mt-3 text-lg font-medium">Businesses</div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             ref={ref2}
//           >
//             <div className="text-5xl font-black text-indigo-600">
//               ${tpv}B+
//             </div>
//             <div className="text-gray-600 mt-3 text-lg font-medium">Annualized TPV</div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             ref={ref3}
//           >
//             <div className="text-5xl font-black text-indigo-600">
//               {uptime}%
//             </div>
//             <div className="text-gray-600 mt-3 text-lg font-medium">Uptime</div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//             ref={ref4}
//           >
//             <div className="text-5xl font-black text-indigo-600">
//               {countries}+
//             </div>
//             <div className="text-gray-600 mt-3 text-lg font-medium">Countries</div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Features;





import React from 'react';
import { motion } from 'framer-motion';
import { FiShield, FiZap, FiTrendingUp, FiUsers } from 'react-icons/fi';
import { useInView } from 'react-intersection-observer';

// Counter Hook (same as yours)
const useCountUp = (end, duration = 2000) => {
  const [count, setCount] = React.useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  React.useEffect(() => {
    if (inView) {
      let startTime;
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);
        setCount(Math.floor(percentage * end));
        if (percentage < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }
  }, [inView, end, duration]);

  return [count, ref];
};

const Features = () => {
  const features = [
    {
      icon: <FiShield className="h-10 w-10" />,
      title: 'Secure & Reliable',
      description: 'Bank-grade security with 99.9% uptime. Your data is always safe with us.',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      delay: 0.1
    },
    {
      icon: <FiZap className="h-10 w-10" />,
      title: 'Lightning Fast',
      description: 'Process payments in milliseconds. Never keep your customers waiting.',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      delay: 0.2
    },
    {
      icon: <FiTrendingUp className="h-10 w-10" />,
      title: 'Grow Your Business',
      description: 'Access powerful tools and insights to scale your operations.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      delay: 0.3
    },
    {
      icon: <FiUsers className="h-10 w-10" />,
      title: '24/7 Support',
      description: 'Our support team is always here to help you succeed.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      delay: 0.4
    }
  ];

  const [businesses, ref1] = useCountUp(8000000);
  const [tpv, ref2] = useCountUp(80);
  const [uptime, ref3] = useCountUp(99.9);
  const [countries, ref4] = useCountUp(150);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20 px-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900">
            Why businesses choose Razorpay
          </h2>
          <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Built for developers, trusted by global businesses. Power your entire financial stack with our APIs.
          </p>
        </motion.div>

        {/* Feature Cards - Fully Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-20 px-2 sm:px-0">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: feature.delay,
                ease: "easeOut"
              }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="group relative bg-white p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              <div className="relative z-10">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 8 }}
                  className={`inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-3xl ${feature.bgColor} ${feature.color} mb-5 sm:mb-6 shadow-lg`}
                >
                  {feature.icon}
                </motion.div>

                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section - Responsive Grid & Text Size */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 text-center px-4 sm:px-0" ref={ref1}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-3xl sm:text-4xl md:text-5xl font-black text-indigo-600" ref={ref1}>
              {businesses.toLocaleString()}+
            </div>
            <div className="text-gray-600 mt-2 sm:mt-3 text-sm sm:text-lg font-medium">Businesses</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            ref={ref2}
          >
            <div className="text-3xl sm:text-4xl md:text-5xl font-black text-indigo-600">
              ${tpv}B+
            </div>
            <div className="text-gray-600 mt-2 sm:mt-3 text-sm sm:text-lg font-medium">Annualized TPV</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            ref={ref3}
          >
            <div className="text-3xl sm:text-4xl md:text-5xl font-black text-indigo-600">
              {uptime}%
            </div>
            <div className="text-gray-600 mt-2 sm:mt-3 text-sm sm:text-lg font-medium">Uptime</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            ref={ref4}
          >
            <div className="text-3xl sm:text-4xl md:text-5xl font-black text-indigo-600">
              {countries}+
            </div>
            <div className="text-gray-600 mt-2 sm:mt-3 text-sm sm:text-lg font-medium">Countries</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;