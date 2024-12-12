import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
}

export function Button({ href, children }: ButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
    >
      {children}
      <ArrowRight className="ml-2 h-5 w-5" />
    </a>
  );
}