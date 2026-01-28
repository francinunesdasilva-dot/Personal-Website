
import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-12">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">{title}</h2>
      {subtitle && <p className="text-lg text-gray-500 max-w-2xl">{subtitle}</p>}
      <div className="h-1 w-20 bg-black mt-6"></div>
    </div>
  );
};

export default SectionHeader;
