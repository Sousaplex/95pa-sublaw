import type { DataSource } from '../types/calculator';

export const dataSources: DataSource[] = [
  {
    name: 'Condominium Authority of Ontario (CAO)',
    url: 'https://www.condoauthorityontario.ca',
    description: 'Official Ontario government agency providing guidance on condominium living, including insurance requirements and owner responsibilities.',
    lastAccessed: 'January 2026',
  },
  {
    name: 'Ontario Condominium Act, 1998',
    url: 'https://www.ontario.ca/laws/statute/98c19',
    description: 'The governing legislation for condominiums in Ontario, including Section 99 (Standard Unit Insurance) and Section 105 (Deductible Chargebacks).',
    lastAccessed: 'January 2026',
  },
  {
    name: 'RCLLP - Ontario Condo Law',
    url: 'https://www.rcllp.ca/post/ontcondolaw/what-s-a-reasonable-deductible-for-condominiums',
    description: 'Legal analysis on condominium deductibles, including case law where a $50,000 deductible challenge was dismissed by the court.',
    lastAccessed: 'January 2026',
  },
  {
    name: 'Canadian Condominium Institute (CCI)',
    url: 'https://cci.ca',
    description: 'Industry organization providing resources on condominium insurance, standard unit by-laws, and damage recovery.',
    lastAccessed: 'January 2026',
  },
  {
    name: 'RateHub Canada',
    url: 'https://www.ratehub.ca',
    description: 'Insurance comparison data for average condo insurance costs in Ontario ($200-$600/year for HO6 policies).',
    lastAccessed: 'January 2026',
  },
  {
    name: 'Toronto Water Damage Restoration Industry',
    url: 'https://desacontracting.com',
    description: 'Industry pricing data for water damage restoration costs in the Greater Toronto Area.',
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
