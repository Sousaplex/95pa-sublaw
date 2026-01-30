import type { DamageScenario } from '../types/calculator';

export const damageScenarios: DamageScenario[] = [
  {
    id: 'water-burst-pipe',
    name: 'Water Damage (Burst Pipe)',
    description: 'A pipe bursts within your unit, causing water damage to floors, walls, and potentially affecting units below.',
    icon: 'droplets',
    baseCostPerSqFt: {
      minor: 3,    // $1,500 - $3,000 for 500-1000 sq ft
      moderate: 8, // $4,000 - $8,000
      major: 20,   // $10,000 - $20,000+
    },
    standardUnitRatio: 0.6, // 60% of damage is to standard unit elements (walls, subfloor)
    commonScenario: 'Frozen pipes, old plumbing failures, or appliance malfunctions are common causes.',
  },
  {
    id: 'fire-damage',
    name: 'Fire Damage',
    description: 'A fire occurs in your unit, causing damage to walls, ceilings, electrical systems, and personal property.',
    icon: 'flame',
    baseCostPerSqFt: {
      minor: 15,   // Localized kitchen fire
      moderate: 40, // Room-level damage
      major: 100,  // Significant structural damage
    },
    standardUnitRatio: 0.7, // 70% of structural damage is to standard unit
    commonScenario: 'Kitchen fires, electrical faults, or candle accidents are typical causes.',
  },
  {
    id: 'renovation-damage',
    name: 'Renovation Damage',
    description: 'During renovations, damage occurs to your upgraded finishes, cabinetry, or affects neighboring units.',
    icon: 'hammer',
    baseCostPerSqFt: {
      minor: 5,
      moderate: 15,
      major: 35,
    },
    standardUnitRatio: 0.2, // Most damage is to improvements (80%)
    commonScenario: 'Contractor errors, plumbing mistakes during bathroom reno, or structural modifications.',
  },
  {
    id: 'flood-from-above',
    name: 'Flood from Unit Above',
    description: 'Water damage originates from the unit above yours, damaging your ceiling, walls, and belongings.',
    icon: 'cloud-rain',
    baseCostPerSqFt: {
      minor: 4,
      moderate: 10,
      major: 25,
    },
    standardUnitRatio: 0.55, // Mix of ceiling/wall (standard) and floor/improvements
    commonScenario: 'Upstairs neighbor\'s appliance failure, bathroom overflow, or plumbing issue.',
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
