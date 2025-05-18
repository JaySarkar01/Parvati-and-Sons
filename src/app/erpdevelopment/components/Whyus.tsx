'use client';

import {
  LayoutDashboard,
  Database,
  Settings,
  Users,
  FileText,
  CheckCircle,
} from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

const features = [
  {
    icon: <LayoutDashboard className="h-6 w-6" />,
    title: 'Centralized Dashboard',
    description: 'Gain real-time visibility and control over your entire business with a unified ERP dashboard.',
    gradient: 'from-blue-500 to-blue-600',
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: 'Data-Driven Operations',
    description: 'Manage your data effectively with integrated modules for finance, inventory, HR, and more.',
    gradient: 'from-green-500 to-green-600',
  },
  {
    icon: <Settings className="h-6 w-6" />,
    title: 'Custom Module Development',
    description: 'Tailor your ERP solution to meet the unique workflows and needs of your business.',
    gradient: 'from-purple-500 to-purple-600',
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Role-Based Access Control',
    description: 'Ensure secure access with role-specific permissions and user management features.',
    gradient: 'from-yellow-500 to-yellow-600',
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: 'Automated Reporting',
    description: 'Generate real-time business reports for smarter, faster decision-making.',
    gradient: 'from-pink-500 to-pink-600',
  },
  {
    icon: <CheckCircle className="h-6 w-6" />,
    title: 'Scalable & Reliable',
    description: 'Built with modern technology to scale with your business and ensure high availability.',
    gradient: 'from-red-500 to-red-600',
  },
];

const FeatureCard = React.memo(({ item, index }: { item: typeof features[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-sm hover:shadow-lg transition-all duration-500 hover:border-transparent"
    >
      <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${item.gradient}`} />
      <div className="relative h-full p-8">
        <div className="flex items-start space-x-5">
          <div className={`flex-shrink-0 p-3 rounded-xl bg-gradient-to-br ${item.gradient} text-white shadow-md`}>
            {item.icon}
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        </div>
      </div>
      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
    </motion.div>
  );
});

FeatureCard.displayName = 'FeatureCard';

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section 
      ref={ref}
      className="relative py-24 px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
      id="why-choose-us"
    >
      {/* Decorative gradients */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent" />
      
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-blue-50 text-blue-600 mb-4">
            ERP Solutions
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">Us?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our ERP systems streamline operations, integrate departments, and power data-driven business growth.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, idx) => (
            <FeatureCard key={idx} item={item} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
