import React from 'react';

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">About Ready Plan Go</h2>
          <p className="text-xl text-gray-600 mb-8">
            We're revolutionizing the way teams plan and execute their projects. Our platform combines 
            intuitive design with powerful features to make planning easier than ever before.
          </p>
          <div className="aspect-video rounded-xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3"
              alt="Team planning"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}