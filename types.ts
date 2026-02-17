export interface Feature {
  text: string;
  subFeatures?: string[];
}

export interface PricingPackage {
  title?: string; // e.g. "Shopify Ecommerce Website"
  price: string;
  period?: string; // e.g. "/ month"
  isPopular?: boolean;
  features: Feature[];
}

export interface AddOn {
  title: string;
  items?: string[];
}

export interface SectionData {
  id: string;
  title: string;
  type: 'standard' | 'website';
  packages: PricingPackage[];
  addOns?: AddOn[];
}