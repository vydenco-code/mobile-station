import React, { useState } from 'react';
import { PricingCard } from './components/PricingCard';
import { dashboardData } from './data';
import { Logo } from './components/Logo';

const App: React.FC = () => {
  const [activeSectionId, setActiveSectionId] = useState(dashboardData[0].id);
  const activeSection = dashboardData.find(s => s.id === activeSectionId) || dashboardData[0];

  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col">
      {/* Horizontal Header & Navigation */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 md:py-4 space-y-3 md:space-y-4">
          <div className="flex items-center">
            <Logo className="h-9 md:h-12" />
          </div>
          
          {/* Horizontal Scrollable Buttons */}
          <div className="flex overflow-x-auto no-scrollbar gap-2 md:gap-3 pb-2 -mx-4 px-4 md:mx-0 md:px-0">
            {dashboardData.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSectionId(section.id)}
                className={`whitespace-nowrap px-4 md:px-6 py-2 md:py-2.5 rounded-full text-sm md:text-lg font-medium transition-all duration-200 flex-shrink-0 border ${
                  activeSectionId === section.id
                    ? 'bg-[#0B2338] text-white border-[#0B2338] shadow-md ring-2 ring-offset-2 ring-[#0B2338]/20'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-[#0B2338] hover:text-[#0B2338]'
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="mb-8 md:mb-10">
          <h1 className="text-2xl md:text-4xl font-bold text-[#0B2338] mb-2 md:mb-3">
            {activeSection.title}
          </h1>
          <p className="text-base md:text-lg text-slate-500">
            Detailed breakdown of packages and services.
          </p>
        </div>

        {/* Pricing Grid - Flex on mobile, Flex centered on desktop */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-5 pb-6 -mx-4 px-4 md:flex md:flex-wrap md:justify-center md:gap-8 md:pb-0 md:mx-0 md:px-0 md:overflow-visible items-stretch">
          {activeSection.packages.map((pkg, index) => (
            <PricingCard key={index} pkg={pkg} index={index} />
          ))}
        </div>

        {/* Note for Standard Packages */}
        {activeSection.type === 'standard' && (
          <div className="mt-8 md:mt-12 p-5 bg-slate-100 rounded-xl border border-slate-200 text-slate-600 text-sm md:text-base">
            <p className="font-bold text-slate-800 mb-2">Note:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Advertising budgets are not included and will be paid separately.</li>
              <li>A retainership contract with a minimum duration of 3 months is required.</li>
              <li>All Software charges paid separately</li>
            </ul>
          </div>
        )}

        {/* Add-ons Section (Only for Website Section) */}
        {activeSection.addOns && (
          <div className="mt-12 md:mt-16 pt-8 md:pt-10 border-t border-slate-200">
            <h2 className="text-xl md:text-2xl font-semibold text-[#0B2338] mb-4 md:mb-6">Add-ons (pricing is subject to requirement)</h2>
            <ul className="bg-white rounded-xl border border-slate-200 divide-y divide-slate-100 shadow-sm max-w-2xl">
              {activeSection.addOns.map((addon, idx) => (
                <li key={idx} className="p-4 md:p-5 hover:bg-slate-50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-[#0B2338] flex-shrink-0"></div>
                    <span className="text-base md:text-lg font-medium text-slate-700">{addon.title}</span>
                  </div>
                  {addon.items && (
                    <ul className="mt-3 pl-9 space-y-2">
                      {addon.items.map((item, i) => (
                        <li key={i} className="text-slate-500 text-sm md:text-base flex items-center gap-2">
                           <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                           {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </main>

      <footer className="bg-white border-t border-slate-200 py-8 text-slate-500 text-sm md:text-base">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <div className="text-center md:text-left">
            © 2026 Vyden Co. All rights reserved.
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
             <a href="tel:9903799675" className="flex items-center gap-2 hover:text-[#0B2338] transition-colors">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                 <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
               </svg>
               <span>9903799675</span>
             </a>
             <a href="mailto:vyden.co@gmail.com" className="flex items-center gap-2 hover:text-[#0B2338] transition-colors">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                 <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
               </svg>
               <span>vyden.co@gmail.com</span>
             </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;