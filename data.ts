import { SectionData } from './types';

export const dashboardData: SectionData[] = [
  {
    id: 'mobile-station',
    title: 'Mobile Station',
    type: 'standard',
    packages: [
      {
        price: '₹40,000',
        period: '/ month',
        features: [
          { text: 'Upto 15 custom posts and Unlimited brand posts as per needed' },
          { text: '10 videos (Instagram, Facebook and YouTube Shorts)' },
          { text: 'Active Comment Management' },
          { text: 'Meta Ads Marketing (Instagram and Facebook) [note:Ad spend to be paid separately]' },
          { text: 'Campaign Strategy (Planning and Execution)' },
          { text: 'Dedicated Social Media Account Management' },
          { 
            text: 'Content and Visual Production', 
            subFeatures: ['Scripting', 'Ideation', 'Shooting', 'Editing'] 
          },
          { 
            text: 'Google My Business [note: Ad spent to be paid separately]', 
            subFeatures: ['Page Creation', 'Review Management', 'Google Ads'] 
          },
          { text: 'Brand and Visual Identity Refreshment' },
          { text: 'Lead Generation Management and Reporting' },
          { 
            text: 'WhatsApp Chat Bot', 
            subFeatures: ['Setup', 'Management', 'Flows creation'] 
          },
          { text: 'WhatsApp bulk messaging [Note: messaging cost paid separately]' },
          { text: 'Dynamic QR code generation and management(Social Media and Google business)' }
        ]
      }
    ]
  },
  {
    id: 'website',
    title: 'Website & Add-ons:',
    type: 'website',
    packages: [
      {
        title: 'Website',
        price: '₹12,000',
        features: [
          { text: 'Custom Website' },
          { text: 'Mobile responsive design' },
          { text: 'Complete SEO setup' }
        ]
      }
    ],
    addOns: [
      { title: 'Podcasts Creation' },
      { 
        title: 'Ad Creatives',
        items: [
          'Leaflets',
          'Banners',
          'Posters',
          'Newspaper Ads'
        ]
      }
    ]
  }
];