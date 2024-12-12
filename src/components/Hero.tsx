import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Streamline Your Planning Process
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transform your ideas into actionable plans with our innovative planning solution.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeYL1ssTJSZHXMBSedMdI2nGWeEI8obwwT6p3tqFL8vBGCGCg/viewform?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}