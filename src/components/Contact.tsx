import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <Mail className="h-12 w-12 text-blue-600 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join the growing number of teams that trust Ready Plan Go for their planning needs.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeYL1ssTJSZHXMBSedMdI2nGWeEI8obwwT6p3tqFL8vBGCGCg/viewform?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get Started Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}