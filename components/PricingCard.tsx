import React from 'react';
import { PricingPackage } from '../types';

interface PricingCardProps {
  pkg: PricingPackage;
  index: number;
}

export const PricingCard: React.FC<PricingCardProps> = ({ pkg, index }) => {
  return (
    <div className={`min-w-[90vw] md:min-w-0 md:w-full md:max-w-6xl flex-shrink-0 snap-center relative flex flex-col p-6 md:p-8 bg-white rounded-2xl border ${pkg.isPopular ? 'border-[#0B2338] shadow-xl scale-100 md:scale-105 z-10' : 'border-slate-200 shadow-sm'} transition-all duration-300 h-full`}>
      
      {pkg.title && (
        <h3 className="text-xl md:text-2xl font-semibold text-slate-800 mb-3">{pkg.title}</h3>
      )}

      <div className="mb-6 md:mb-8">
        <span className="text-4xl md:text-5xl font-bold text-[#0B2338]">{pkg.price}</span>
        {pkg.period && <span className="text-slate-500 text-base font-normal ml-2">{pkg.period}</span>}
      </div>

      <div className="flex-grow space-y-4 md:space-y-5">
        {pkg.features.map((feature, i) => (
          <div key={i} className="text-base text-slate-700">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 md:w-6 md:h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              <span className="leading-relaxed font-normal">{feature.text}</span>
            </div>
            {feature.subFeatures && (
              <ul className="pl-8 md:pl-9 mt-2 space-y-2 list-disc list-outside text-slate-500 marker:text-slate-300">
                {feature.subFeatures.map((sub, j) => (
                  <li key={j} className="text-sm md:text-base">{sub}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};