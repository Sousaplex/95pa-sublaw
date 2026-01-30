import type { DamageScenario } from '../types/calculator';

export const damageScenarios: DamageScenario[] = [
  {
    id: 'water-burst-pipe',
    name: 'Your Pipe Bursts',
    headline: 'You caused it — a pipe in YOUR unit bursts',
    description: 'It\'s 2am. You wake up to water gushing from under your bathroom vanity. An old pipe inside your wall has burst. Water is soaking through your hardwood floors, seeping into the drywall, and dripping into the unit below. The building\'s property manager is knocking on your door. This is YOUR pipe, YOUR unit, YOUR responsibility.',
    icon: 'droplets',
    baseCostPerSqFt: {
      minor: 3,
      moderate: 8,
      major: 20,
    },
    standardUnitRatio: 0.6,
    commonScenario: 'Frozen pipes, aging plumbing (common in older buildings), dishwasher hose failures, or toilet supply line bursts.',
    whoResponsible: 'you',
  },
  {
    id: 'fire-damage',
    name: 'Kitchen Fire',
    headline: 'You caused it — fire starts in YOUR kitchen',
    description: 'You\'re cooking dinner when oil in a pan catches fire. It spreads to the cabinets before you can grab the extinguisher. The fire department arrives, but not before flames have scorched your kitchen walls, ceiling, and melted your new backsplash. Smoke damage has spread throughout your unit. The fire started in YOUR unit — you\'re on the hook.',
    icon: 'flame',
    baseCostPerSqFt: {
      minor: 15,
      moderate: 40,
      major: 100,
    },
    standardUnitRatio: 0.7,
    commonScenario: 'Cooking fires, faulty appliances, candles left unattended, or electrical issues from DIY work.',
    whoResponsible: 'you',
  },
  {
    id: 'renovation-damage',
    name: 'Renovation Gone Wrong',
    headline: 'Your contractor causes damage',
    description: 'You hired a contractor to renovate your bathroom. They\'re removing the old tile when they accidentally puncture a water line. Water floods your unit and leaks into the hallway. Or maybe they damage a structural element. Either way — it\'s YOUR renovation, YOUR contractor, and under most condo rules, YOUR liability.',
    icon: 'hammer',
    baseCostPerSqFt: {
      minor: 5,
      moderate: 15,
      major: 35,
    },
    standardUnitRatio: 0.2,
    commonScenario: 'Contractor punctures pipes, damages HVAC, structural errors, or causes water damage during bathroom/kitchen renos.',
    whoResponsible: 'you',
  },
  {
    id: 'flood-from-above',
    name: 'Neighbour Floods You',
    headline: 'Someone ELSE caused it — but YOU suffer',
    description: 'You come home to find water dripping from your ceiling. Your upstairs neighbour\'s washing machine overflowed — or maybe their bathtub, or a burst pipe. Your ceiling is sagging, your walls are soaked, and your new flooring is buckling. You didn\'t cause this. But guess what? You still might have to pay to fix YOUR unit.',
    icon: 'cloud-rain',
    baseCostPerSqFt: {
      minor: 4,
      moderate: 10,
      major: 25,
    },
    standardUnitRatio: 0.55,
    commonScenario: 'Upstairs neighbour\'s appliance leak, overflowing tub, burst pipe, or aquarium failure.',
    whoResponsible: 'neighbour',
  },
];

// Damage cost multipliers based on severity
export const severityDescriptions = {
  minor: 'Localized damage affecting a small area (e.g., one room)',
  moderate: 'Significant damage affecting multiple areas or requiring professional restoration',
  major: 'Extensive damage requiring major repairs or reconstruction',
};

// Source: Industry data and restoration company estimates (2024-2025)
export const repairCostRanges = {
  waterDamage: {
    minor: { min: 1000, max: 3000 },
    moderate: { min: 3000, max: 7000 },
    major: { min: 7000, max: 30000 },
  },
  fireDamage: {
    minor: { min: 5000, max: 15000 },
    moderate: { min: 15000, max: 50000 },
    major: { min: 50000, max: 150000 },
  },
};

// Source: RCLLP Legal, Industry Data (2024-2025)
export const deductibleRanges = {
  min: 10000,
  max: 250000,
  typical: 50000,
  waterSpecific: 100000, // Many condos have higher water deductibles
};
