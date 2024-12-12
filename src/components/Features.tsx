import React from 'react';
import { Zap, Shield, Users, Clock } from 'lucide-react';

const features = [
  {
    icon: <Zap className="h-8 w-8 text-blue-600" />,
    title: 'Lightning Fast',
    description: 'Quick and efficient planning tools that save you valuable time'
  },
  {
    icon: <Shield className="h-8 w-8 text-blue-600" />,
    title: 'Secure',
    description: 'Your data is protected with enterprise-grade security'
  },
  {
    icon: <Users className="h-8 w-8 text-blue-600" />,
    title: 'Collaborative',
    description: 'Work together seamlessly with your team in real-time'
  },
  {
    icon: <Clock className="h-8 w-8 text-blue-600" />,
    title: 'Time-Saving',
    description: 'Automated workflows that streamline your planning process'
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose Ready Plan Go</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}