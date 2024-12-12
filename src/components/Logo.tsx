import React from 'react';
import { LineChart } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <LineChart className="h-8 w-8 text-blue-600" />
      <span className="text-xl font-bold">Ready Plan Go</span>
    </div>
  );
}