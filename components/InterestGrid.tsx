
import React from 'react';
import { InterestItem, InterestType } from '../types';

interface InterestGridProps {
  items: InterestItem[];
  type: InterestType;
}

const InterestGrid: React.FC<InterestGridProps> = ({ items, type }) => {
  const filteredItems = items.filter(item => item.type === type);
  
  if (type === 'Reflections') return null; // Handled elsewhere

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
      {filteredItems.map(item => (
        <div key={item.id} className="group cursor-pointer">
          <div className="relative overflow-hidden aspect-[4/3] mb-4 bg-gray-100">
            <img 
              src={item.imageUrl} 
              alt={item.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute top-4 right-4 glass px-3 py-1 text-xs font-semibold tracking-widest uppercase">
              {item.meta}
            </div>
          </div>
          <h3 className="text-2xl font-semibold mb-2 group-hover:underline underline-offset-4">{item.title}</h3>
          <p className="text-gray-600 leading-relaxed line-clamp-3">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default InterestGrid;
