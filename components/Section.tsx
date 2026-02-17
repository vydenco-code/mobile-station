import React from 'react';

export interface SectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  bgColor?: string;
  children?: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ id, title, subtitle, bgColor, children }) => {
  return (
    <section 
      id={id} 
      className={`min-h-screen flex flex-col justify-center py-24 px-6 md:px-12 ${
        bgColor === 'white' ? 'bg-white' : 'bg-slate-50'
      }`}
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0B2338] mb-4">{title}</h2>
            {subtitle && <p className="text-lg text-slate-600 max-w-2xl">{subtitle}</p>}
        </div>
        <div className="w-full">
          {children}
        </div>
      </div>
    </section>
  );
};