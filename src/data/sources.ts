import type { DataSource } from '../types/calculator';

export const dataSources: DataSource[] = [
  {
    name: 'CAO - Insurance Guide',
    url: 'https://www.condoauthorityontario.ca/before-you-buy-or-rent-a-condo/fees-and-finances/insurance/',
    description: 'Official Ontario government guide on condo insurance requirements, what\'s covered, and owner responsibilities.',
    lastAccessed: 'January 2026',
  },
  {
    name: 'CAO - By-Laws Guide',
    url: 'https://www.condoauthorityontario.ca/before-you-buy-or-rent-a-condo/how-condos-work/governing-documents/by-laws/',
    description: 'Official guide on condo by-laws including standard unit definitions for repair and insurance purposes.',
    lastAccessed: 'January 2026',
  },
  {
    name: 'CAO - Repairs After Damage',
    url: 'https://www.condoauthorityontario.ca/before-you-buy-or-rent-a-condo/how-condos-work/condo-operations/repairs-and-maintenance/',
    description: 'Guide on repair responsibilities and how standard unit definitions affect damage claims.',
    lastAccessed: 'January 2026',
  },
  {
    name: 'Ontario Condominium Act, 1998',
    url: 'https://www.ontario.ca/laws/statute/98c19',
    description: 'The governing legislation for condominiums in Ontario, including Section 99 (Insurance) and Section 105 (Deductible Chargebacks).',
    lastAccessed: 'January 2026',
  },
  {
    name: 'RCLLP - Deductible Analysis',
    url: 'https://www.rcllp.ca/post/ontcondolaw/what-s-a-reasonable-deductible-for-condominiums',
    description: 'Legal analysis on condominium deductibles, including case law where a $50,000 deductible challenge was dismissed.',
    lastAccessed: 'January 2026',
  },
  {
    name: 'CCI - Standard Unit By-Laws Q&A',
    url: 'https://cci.ca/resource-centre/view/1555',
    description: 'Canadian Condominium Institute Q&A on what to include/exclude in standard unit by-laws.',
    lastAccessed: 'January 2026',
  },
  {
    name: 'CCI - Standard Unit By-Laws & Insurance',
    url: 'https://cci.ca/resource-centre/view/2073',
    description: 'CCI article on the relationship between standard unit by-laws and insurance responsibilities.',
    lastAccessed: 'January 2026',
  },
  {
    name: 'RateHub - Condo Insurance Costs',
    url: 'https://www.ratehub.ca/blog/average-cost-of-condo-insurance-ontario/',
    description: 'Average condo insurance costs in Ontario: $300-$600/year for HO6 policies.',
    lastAccessed: 'January 2026',
  },
  {
    name: 'Water Damage Restoration Costs (Canada)',
    url: 'https://centralab.dki.ca/the-true-cost-of-water-damage-restoration-in-canada-in-2025/',
    description: 'Industry data: water damage restoration costs $3-$7.50 per sq ft in Canada.',
    lastAccessed: 'January 2026',
  },
  {
    name: 'Fire Damage Restoration Costs (Canada)',
    url: 'https://911waterdamageexperts.com/the-full-cost-of-fire-damage-restoration-in-canada-heres-what-you-pay-for/',
    description: 'Industry data: fire damage restoration costs $4-$7 per sq ft in Canada.',
    lastAccessed: 'January 2026',
  },
  {
    name: 'HomeGuide - Water Damage Costs',
    url: 'https://homeguide.com/costs/water-damage-restoration-cost',
    description: 'Detailed breakdown of water damage restoration costs by severity and water type.',
    lastAccessed: 'January 2026',
  },
  {
    name: 'HomeGuide - Fire Damage Costs',
    url: 'https://homeguide.com/costs/fire-damage-restoration-cost',
    description: 'Detailed breakdown of fire damage restoration costs including smoke and structural damage.',
    lastAccessed: 'January 2026',
  },
];

export const legalReferences = {
  section99: {
    title: 'Section 99 - Insurance',
    description: 'Requires condominium corporations to obtain insurance covering standard units against specified perils. The standard unit definition determines what the corporation insures vs. owner responsibility.',
  },
  section105: {
    title: 'Section 105(2) - Chargebacks',
    description: 'Allows corporations to charge back to owners the lesser of: (1) the cost of repairs to the damaged unit, or (2) the corporation\'s insurance deductible, when damage is caused by an owner\'s act or omission.',
  },
  may2001Amendment: {
    title: 'May 5, 2001 Amendment',
    description: 'Condominiums declared after this date may have a standard unit schedule provided by the declarant. Condos registered before this date often lack proper standard unit definitions.',
  },
};

export const keyStatistics = {
  deductibleIncrease: {
    past: '$5,000 - $10,000 (10 years ago)',
    current: '$25,000 - $250,000 (typical today)',
    source: 'RCLLP Legal Analysis',
  },
  waterDamageFrequency: {
    stat: '24% of all homeowner insurance claims',
    frequency: '1 in 60 insured homes annually',
    source: 'Insurance Industry Data (2017-2021)',
  },
  courtPrecedent: {
    stat: '$50,000 deductible challenge dismissed by court',
    source: 'RCLLP Legal Analysis (2024)',
  },
};
