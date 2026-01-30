export interface ScenarioInputs {
  unitSize: number;
  renovationValue: number;
  corporationDeductible: number;
  ownerInsuranceCoverage: number;
  ownerInsuranceDeductible: number;
  ownerInsurancePremium: number; // Monthly HO6 premium
  damageSeverity: 'minor' | 'moderate' | 'major';
  numberOfUnits: number;
  incidentsPerYear: number;
}

export interface ScenarioResult {
  estimatedRepairCost: number;
  standardUnitDamage: number;
  improvementDamage: number;
  corporationCoverage: number;
  ownerDeductibleChargeback: number;
  ownerInsuranceClaimable: number;
  ownerInsuranceDeductiblePaid: number;
  outOfPocketCost: number;
  indirectFeeCost: number;
  specialAssessmentRisk: number;
  totalPersonalCost: number;
}

export interface DamageScenario {
  id: string;
  name: string;
  headline: string;
  description: string;
  icon: string;
  baseCostPerSqFt: {
    minor: number;
    moderate: number;
    major: number;
  };
  standardUnitRatio: number; // Percentage of damage to standard unit elements
  commonScenario: string;
  whoResponsible: 'you' | 'neighbour';
}

export interface DataSource {
  name: string;
  url: string;
  description: string;
  lastAccessed: string;
}
