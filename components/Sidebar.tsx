import React from 'react';
import { SectionData } from '../types';
import { Logo } from './Logo';

interface SidebarProps {
  sections: SectionData[];
  activeSectionId: string;
  onSelectSection: (id: string) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ 
  sections, 
  activeSectionId, 
  onSelectSection,
  isMobileMenuOpen,
  setIsMobileMenuOpen
}) => {
  return (
    <>
      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside 
        className={`fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-slate-200 transform transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:h-screen ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col">
          <div className="p-6 border-b border-slate-100 flex items-center justify-between md:justify-center">
            <Logo className="h-8" />
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="md:hidden text-slate-500"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => {
                  onSelectSection(section.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSectionId === section.id
                    ? 'bg-[#0B2338] text-white shadow-md'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-[#0B2338]'
                }`}
              >
                {section.title}
              </button>
            ))}
          </nav>

          <div className="p-6 border-t border-slate-100">
            <div className="bg-slate-50 rounded-lg p-4">
              <p className="text-xs text-slate-500 font-medium uppercase mb-2">Support</p>
              <p className="text-sm text-slate-700 font-semibold">+91 98765 43210</p>
              <p className="text-sm text-slate-600">support@vydenco.com</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
