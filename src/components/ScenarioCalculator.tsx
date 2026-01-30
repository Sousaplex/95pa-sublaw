import { useState, useMemo } from 'react';
import { Droplets, Flame, Hammer, CloudRain, Calculator, AlertTriangle, CheckCircle, Info, X } from 'lucide-react';
import { damageScenarios } from '../data/scenarios';
import type { ScenarioInputs } from '../types/calculator';

const scenarioIcons: Record<string, React.ReactNode> = {
  'droplets': <Droplets className="w-4 h-4" />,
  'flame': <Flame className="w-4 h-4" />,
  'hammer': <Hammer className="w-4 h-4" />,
  'cloud-rain': <CloudRain className="w-4 h-4" />,
};

function MethodologyModal({ isOpen, onClose, inputs, scenarioId }: { 
  isOpen: boolean; 
  onClose: () => void; 
  inputs: ScenarioInputs;
  scenarioId: string;
}) {
  if (!isOpen) return null;
  
  const scenario = damageScenarios.find(s => s.id === scenarioId);
  const baseCost = scenario?.baseCostPerSqFt[inputs.damageSeverity] || 0;
  const standardUnitRatio = scenario?.standardUnitRatio || 0.5;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          <h2 className="text-lg font-bold text-gray-900">Calculation Methodology</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-4 space-y-6 text-sm">
          {/* Input Variables */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center text-xs font-bold">1</span>
              Input Variables
            </h3>
            <div className="bg-gray-50 rounded-lg p-3 space-y-1 font-mono text-xs">
              <div className="flex justify-between"><span className="text-gray-600">unitSize</span><span>{inputs.unitSize} sq ft</span></div>
              <div className="flex justify-between"><span className="text-gray-600">renovationValue</span><span>${inputs.renovationValue.toLocaleString()}</span></div>
              <div className="flex justify-between"><span className="text-gray-600">corporationDeductible</span><span>${inputs.corporationDeductible.toLocaleString()}</span></div>
              <div className="flex justify-between"><span className="text-gray-600">ownerInsuranceCoverage</span><span>${inputs.ownerInsuranceCoverage.toLocaleString()}</span></div>
              <div className="flex justify-between"><span className="text-gray-600">ownerInsuranceDeductible</span><span>${inputs.ownerInsuranceDeductible.toLocaleString()}</span></div>
              <div className="flex justify-between"><span className="text-gray-600">ownerInsurancePremium</span><span>${inputs.ownerInsurancePremium}/mo</span></div>
              <div className="flex justify-between"><span className="text-gray-600">numberOfUnits</span><span>{inputs.numberOfUnits}</span></div>
              <div className="flex justify-between"><span className="text-gray-600">incidentsPerYear</span><span>{inputs.incidentsPerYear}</span></div>
              <div className="flex justify-between"><span className="text-gray-600">damageSeverity</span><span>{inputs.damageSeverity}</span></div>
            </div>
          </div>

          {/* Scenario Constants */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center text-xs font-bold">2</span>
              Scenario Constants ({scenario?.name})
            </h3>
            <div className="bg-gray-50 rounded-lg p-3 space-y-1 font-mono text-xs">
              <div className="flex justify-between"><span className="text-gray-600">baseCostPerSqFt[{inputs.damageSeverity}]</span><span>${baseCost}</span></div>
              <div className="flex justify-between"><span className="text-gray-600">standardUnitRatio</span><span>{(standardUnitRatio * 100).toFixed(0)}%</span></div>
              <div className="flex justify-between"><span className="text-gray-600">improvementRatio</span><span>{((1 - standardUnitRatio) * 100).toFixed(0)}%</span></div>
            </div>
          </div>

          {/* Damage Calculation */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center text-xs font-bold">3</span>
              Damage Calculation
            </h3>
            <div className="bg-blue-50 rounded-lg p-3 space-y-2 text-xs">
              <div className="font-mono">
                <p className="text-gray-600 mb-1">// Base repair cost uses square root for diminishing returns</p>
                <p><span className="text-blue-600">estimatedRepairCost</span> = baseCostPerSqFt × √unitSize × 10</p>
                <p className="text-gray-500 ml-4">= ${baseCost} × √{inputs.unitSize} × 10 = <strong>${Math.round(baseCost * Math.sqrt(inputs.unitSize) * 10).toLocaleString()}</strong></p>
              </div>
              <div className="font-mono">
                <p className="text-gray-600 mb-1">// Improvement multiplier based on renovation value</p>
                <p><span className="text-blue-600">improvementMultiplier</span> = {inputs.renovationValue >= 50000 ? '1.5 (renos ≥ $50K)' : inputs.renovationValue >= 25000 ? '1.25 (renos ≥ $25K)' : '1.0 (renos < $25K)'}</p>
              </div>
              <div className="font-mono">
                <p><span className="text-blue-600">standardUnitDamage</span> = estimatedRepairCost × standardUnitRatio</p>
                <p><span className="text-blue-600">improvementDamage</span> = estimatedRepairCost × (1 - standardUnitRatio) × improvementMultiplier</p>
                <p><span className="text-blue-600">totalDamage</span> = standardUnitDamage + improvementDamage</p>
              </div>
            </div>
          </div>

          {/* WITH By-Law */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-xs font-bold">4</span>
              WITH By-Law Calculation
            </h3>
            <div className="bg-green-50 rounded-lg p-3 space-y-2 text-xs font-mono">
              <p><span className="text-green-600">corpCovers</span> = max(0, standardUnitDamage - corporationDeductible)</p>
              <p><span className="text-green-600">deductibleChargeback</span> = min(standardUnitDamage, corporationDeductible)</p>
              <p><span className="text-green-600">yourResponsibility</span> = deductibleChargeback + improvementDamage</p>
              <p className="text-gray-600">// Your HO6 insurance covers amount above your deductible</p>
              <p><span className="text-green-600">claimableAmount</span> = max(0, yourResponsibility - ownerDeductible)</p>
              <p><span className="text-green-600">insurancePays</span> = min(claimableAmount, ownerCoverage - ownerDeductible)</p>
              <p><span className="text-green-600">yourCost</span> = yourResponsibility - insurancePays</p>
            </div>
          </div>

          {/* WITHOUT By-Law */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-red-100 text-red-700 flex items-center justify-center text-xs font-bold">5</span>
              WITHOUT By-Law Calculation
            </h3>
            <div className="bg-red-50 rounded-lg p-3 space-y-2 text-xs font-mono">
              <p className="text-gray-600">// Without clear definitions, ~50% of standard unit costs get pushed to owner</p>
              <p><span className="text-red-600">ambiguityPush</span> = standardUnitDamage × 0.5</p>
              <p><span className="text-red-600">yourCost</span> = improvementDamage + ambiguityPush</p>
              <p><span className="text-red-600">worstCase</span> = totalDamage + $10,000 (legal fees)</p>
            </div>
          </div>

          {/* Yearly Fee Impact */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-xs font-bold">6</span>
              Yearly Fee Impact Calculation
            </h3>
            <div className="bg-amber-50 rounded-lg p-3 space-y-3 text-xs font-mono">
              <p className="text-gray-600 font-sans">// Based on {inputs.incidentsPerYear} building-wide incidents per year</p>
              
              <div className="border-l-2 border-green-400 pl-2">
                <p className="text-gray-600 font-sans font-medium mb-1">WITH By-Law:</p>
                <p><span className="text-green-600">corpClaimPerIncident</span> = corpCovers (standard unit above deductible)</p>
                <p><span className="text-green-600">yearlyCorpClaims</span> = corpClaimPerIncident × incidentsPerYear</p>
                <p><span className="text-green-600">yearlyFeeImpact</span> = (yearlyCorpClaims × 15%) ÷ numberOfUnits</p>
              </div>
              
              <div className="border-l-2 border-red-400 pl-2">
                <p className="text-gray-600 font-sans font-medium mb-1">WITHOUT By-Law:</p>
                <p><span className="text-red-600">corpClaimPerIncident</span> = standardUnitDamage × 70% + improvementDamage × 30%</p>
                <p className="text-gray-500">// Ambiguity causes corp to cover some improvements</p>
                <p><span className="text-red-600">disputeCostPerIncident</span> = $500-$2,000 (legal/admin from unclear rules)</p>
                <p><span className="text-red-600">yearlyCorpClaims</span> = (corpClaimPerIncident + disputeCost) × incidentsPerYear</p>
                <p><span className="text-red-600">yearlyFeeImpact</span> = (yearlyCorpClaims × 20%) ÷ numberOfUnits</p>
                <p className="text-gray-500">// Higher rate due to disputed/unclear claims</p>
              </div>
              
              <div className="border-l-2 border-primary-400 pl-2">
                <p><span className="text-primary-600">yearlyFeeDifference</span> = yearlyFeeImpactWithout - yearlyFeeImpactWith</p>
              </div>
            </div>
          </div>

          {/* HO6 Premium */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-xs font-bold">7</span>
              HO6 Premium Calculation
            </h3>
            <div className="bg-green-50 rounded-lg p-3 space-y-3 text-xs font-mono">
              <p className="text-gray-600 font-sans">// Estimated monthly premium based on coverage level</p>
              
              <div className="border-l-2 border-gray-400 pl-2">
                <p className="text-gray-600 font-sans font-medium mb-1">Premium Estimate:</p>
                <p><span className="text-gray-700">estimatedPremium</span> = $25 base + ($4 × coverage ÷ $10,000)</p>
                <p className="text-gray-500">// Example: $100K coverage → $25 + $40 = $65/mo</p>
              </div>
              
              <div className="border-l-2 border-green-400 pl-2">
                <p className="text-gray-600 font-sans font-medium mb-1">WITH By-Law:</p>
                <p><span className="text-green-600">yearlyPremium</span> = ownerInsurancePremium × 12</p>
                <p className="text-gray-500">// Owner pays for adequate coverage</p>
              </div>
              
              <div className="border-l-2 border-red-400 pl-2">
                <p className="text-gray-600 font-sans font-medium mb-1">WITHOUT By-Law:</p>
                <p><span className="text-red-600">underinsuredPremium</span> = ownerInsurancePremium × 60%</p>
                <p><span className="text-red-600">yearlyPremium</span> = underinsuredPremium × 12</p>
                <p className="text-gray-500">// Owners often underinsure when responsibilities unclear</p>
              </div>
              
              <div className="border-l-2 border-primary-400 pl-2">
                <p className="text-gray-600 font-sans font-medium mb-1">Total Yearly Costs:</p>
                <p><span className="text-primary-600">totalYearlyCost</span> = yearlyFeeImpact + yearlyPremium</p>
              </div>
            </div>
          </div>

          {/* Sources */}
          <div className="border-t border-gray-200 pt-4">
            <h3 className="font-semibold text-gray-900 mb-3">Data Sources</h3>
            <div className="space-y-2 text-xs">
              <div>
                <p className="font-medium text-gray-700 mb-1">Repair Cost Estimates:</p>
                <ul className="text-gray-600 space-y-0.5 ml-3">
                  <li>• <a href="https://centralab.dki.ca/the-true-cost-of-water-damage-restoration-in-canada-in-2025/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">DKI Canada - Water Damage Costs 2025</a> ($3-$7.50/sq ft)</li>
                  <li>• <a href="https://911waterdamageexperts.com/the-full-cost-of-fire-damage-restoration-in-canada-heres-what-you-pay-for/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">911 Water Damage - Fire Restoration Costs</a> ($4-$7/sq ft)</li>
                  <li>• <a href="https://homeguide.com/costs/water-damage-restoration-cost" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">HomeGuide - Water Damage Costs</a></li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-gray-700 mb-1">Legal & Regulatory:</p>
                <ul className="text-gray-600 space-y-0.5 ml-3">
                  <li>• <a href="https://www.ontario.ca/laws/statute/98c19" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Ontario Condominium Act, 1998</a> (Sections 99, 105)</li>
                  <li>• <a href="https://www.rcllp.ca/post/ontcondolaw/what-s-a-reasonable-deductible-for-condominiums" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">RCLLP - Deductible Case Law Analysis</a></li>
                  <li>• <a href="https://cci.ca/resource-centre/view/2073" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">CCI - Standard Unit By-Laws & Insurance</a></li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-gray-700 mb-1">Government Resources:</p>
                <ul className="text-gray-600 space-y-0.5 ml-3">
                  <li>• <a href="https://www.condoauthorityontario.ca/before-you-buy-or-rent-a-condo/fees-and-finances/insurance/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">CAO - Insurance Guide</a></li>
                  <li>• <a href="https://www.condoauthorityontario.ca/before-you-buy-or-rent-a-condo/how-condos-work/governing-documents/by-laws/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">CAO - By-Laws Guide</a></li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-gray-700 mb-1">Insurance Data:</p>
                <ul className="text-gray-600 space-y-0.5 ml-3">
                  <li>• <a href="https://www.ratehub.ca/blog/average-cost-of-condo-insurance-ontario/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">RateHub - Ontario Condo Insurance Costs</a> ($300-$600/year)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

interface CalculationResult {
  totalDamage: number;
  standardUnitDamage: number;
  improvementDamage: number;
  withByLaw: {
    yourCost: number;
    corpCovers: number;
    yourResponsibility: number;
    insurancePays: number;
    deductibleExceedsDamage: boolean;
    fullyInsured: boolean;
    yearlyFeeImpact: number;
    yearlyPremium: number;
    totalYearlyCost: number; // Fee impact + premium
  };
  withoutByLaw: {
    yourCost: number;
    worstCase: number;
    yearlyFeeImpact: number;
    yearlyPremium: number; // May be lower if underinsured
    totalYearlyCost: number;
  };
  savings: number;
  yearlyFeeDifference: number;
  yearlyTotalDifference: number; // Including premiums
}

function calculate(inputs: ScenarioInputs, scenarioId: string): CalculationResult {
  const scenario = damageScenarios.find(s => s.id === scenarioId);
  if (!scenario) {
    return {
      totalDamage: 0,
      standardUnitDamage: 0,
      improvementDamage: 0,
      withByLaw: { yourCost: 0, corpCovers: 0, yourResponsibility: 0, insurancePays: 0, deductibleExceedsDamage: false, fullyInsured: false, yearlyFeeImpact: 0, yearlyPremium: 0, totalYearlyCost: 0 },
      withoutByLaw: { yourCost: 0, worstCase: 0, yearlyFeeImpact: 0, yearlyPremium: 0, totalYearlyCost: 0 },
      savings: 0,
      yearlyFeeDifference: 0,
      yearlyTotalDifference: 0,
    };
  }

  // Calculate damage
  const baseCost = scenario.baseCostPerSqFt[inputs.damageSeverity];
  const estimatedRepairCost = Math.round(baseCost * Math.sqrt(inputs.unitSize) * 10);
  // Higher renovation value = more expensive finishes = higher repair costs
  const improvementMultiplier = inputs.renovationValue >= 50000 ? 1.5 : inputs.renovationValue >= 25000 ? 1.25 : 1;
  const standardUnitDamage = Math.round(estimatedRepairCost * scenario.standardUnitRatio);
  const improvementDamage = Math.round((estimatedRepairCost * (1 - scenario.standardUnitRatio)) * improvementMultiplier);
  const totalDamage = standardUnitDamage + improvementDamage;

  // WITH BY-LAW
  const corpCovers = Math.max(0, standardUnitDamage - inputs.corporationDeductible);
  const deductibleChargeback = Math.min(standardUnitDamage, inputs.corporationDeductible);
  const yourResponsibility = deductibleChargeback + improvementDamage;
  
  // Insurance calculation: you pay deductible first, insurance covers the rest up to policy limit
  const claimableAmount = Math.max(0, yourResponsibility - inputs.ownerInsuranceDeductible);
  const insurancePays = Math.min(claimableAmount, Math.max(0, inputs.ownerInsuranceCoverage - inputs.ownerInsuranceDeductible));
  const yourCostWithByLaw = yourResponsibility - insurancePays;
  
  // WITHOUT BY-LAW
  // Ambiguity means 50% of standard unit pushed to you, plus corp might cover some improvements
  const ambiguityPush = standardUnitDamage * 0.5;
  const yourCostWithout = improvementDamage + ambiguityPush;
  const worstCase = totalDamage + 10000; // Plus potential legal fees

  // YEARLY FEE IMPACT (based on incidents per year across building)
  // WITH by-law: corp claims are smaller and clearer
  // Corporation only claims when damage > deductible (less common with clear definitions)
  const corpClaimPerIncidentWith = corpCovers; // Only standard unit above deductible
  const yearlyCorpClaimsWithByLaw = corpClaimPerIncidentWith * inputs.incidentsPerYear;
  // Premium increase estimate: 15% of claims added to premium, spread across units
  const yearlyFeeImpactWith = Math.round((yearlyCorpClaimsWithByLaw * 0.15) / inputs.numberOfUnits);

  // WITHOUT by-law: corp claims are larger due to ambiguity (might cover improvements too)
  // Also more disputes lead to higher claims and legal costs
  const corpClaimPerIncidentWithout = standardUnitDamage * 0.7 + improvementDamage * 0.3; // Ambiguity means corp covers more
  const disputeCostPerIncident = totalDamage > 5000 ? 2000 : 500; // Legal/admin costs from disputes
  const yearlyCorpClaimsWithoutByLaw = (corpClaimPerIncidentWithout + disputeCostPerIncident) * inputs.incidentsPerYear;
  // Higher premium increase rate for disputed/unclear claims
  const yearlyFeeImpactWithout = Math.round((yearlyCorpClaimsWithoutByLaw * 0.20) / inputs.numberOfUnits);

  // Flags for UI feedback
  const deductibleExceedsDamage = inputs.corporationDeductible >= standardUnitDamage;
  const fullyInsured = insurancePays >= claimableAmount && claimableAmount > 0;

  // HO6 PREMIUM CALCULATIONS
  // WITH by-law: owner pays full premium for adequate coverage
  const yearlyPremiumWith = inputs.ownerInsurancePremium * 12;
  const totalYearlyCostWith = yearlyFeeImpactWith + yearlyPremiumWith;
  
  // WITHOUT by-law: owners often underinsure (50% less coverage typical)
  // Lower premium but higher risk exposure
  const underinsuredPremium = Math.round(inputs.ownerInsurancePremium * 0.6); // 40% less premium
  const yearlyPremiumWithout = underinsuredPremium * 12;
  const totalYearlyCostWithout = yearlyFeeImpactWithout + yearlyPremiumWithout;

  return {
    totalDamage,
    standardUnitDamage,
    improvementDamage,
    withByLaw: {
      yourCost: yourCostWithByLaw,
      corpCovers,
      yourResponsibility,
      insurancePays,
      deductibleExceedsDamage,
      fullyInsured,
      yearlyFeeImpact: yearlyFeeImpactWith,
      yearlyPremium: yearlyPremiumWith,
      totalYearlyCost: totalYearlyCostWith,
    },
    withoutByLaw: {
      yourCost: yourCostWithout,
      worstCase,
      yearlyFeeImpact: yearlyFeeImpactWithout,
      yearlyPremium: yearlyPremiumWithout,
      totalYearlyCost: totalYearlyCostWithout,
    },
    savings: yourCostWithout - yourCostWithByLaw,
    yearlyFeeDifference: yearlyFeeImpactWithout - yearlyFeeImpactWith,
    yearlyTotalDifference: totalYearlyCostWith - totalYearlyCostWithout, // Negative means WITH costs more
  };
}

export function ScenarioCalculator() {
  const [selectedScenario, setSelectedScenario] = useState('flood-from-above');
  const [showMethodology, setShowMethodology] = useState(false);
  // Estimate HO6 premium: ~$25 base + $4 per $10K coverage
  const estimatePremium = (coverage: number) => Math.round(25 + (coverage / 10000) * 4);
  
  const [inputs, setInputs] = useState<ScenarioInputs>({
    unitSize: 850,
    renovationValue: 25000,
    corporationDeductible: 50000,
    ownerInsuranceCoverage: 100000,
    ownerInsuranceDeductible: 1000,
    ownerInsurancePremium: estimatePremium(100000), // Default estimate: $65/mo
    damageSeverity: 'moderate',
    numberOfUnits: 200,
    incidentsPerYear: 3,
  });
  
  const [premiumOverridden, setPremiumOverridden] = useState(false);

  const result = useMemo(() => calculate(inputs, selectedScenario), [inputs, selectedScenario]);

  return (
    <section id="calculator" className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-3 py-1.5 rounded-full text-sm font-medium mb-3">
            <Calculator className="w-4 h-4" />
            Interactive Calculator
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            See How the By-Law Affects Your Wallet
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-sm">
            Adjust the sliders to match your situation and see the difference.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            {/* Scenario Selection */}
            <div className="p-4 bg-gray-50 border-b border-gray-200">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="text-sm font-medium text-gray-700">What happened?</span>
                {damageScenarios.map((scenario) => (
                  <button
                    key={scenario.id}
                    onClick={() => setSelectedScenario(scenario.id)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                      selectedScenario === scenario.id
                        ? 'bg-primary-600 text-white'
                        : 'bg-white text-gray-600 border border-gray-200 hover:border-primary-300'
                    }`}
                  >
                    {scenarioIcons[scenario.icon]}
                    <span className="hidden sm:inline">{scenario.name}</span>
                  </button>
                ))}
                <div className="ml-auto flex items-center gap-1">
                  {(['minor', 'moderate', 'major'] as const).map((sev) => (
                    <button
                      key={sev}
                      onClick={() => setInputs({ ...inputs, damageSeverity: sev })}
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        inputs.damageSeverity === sev
                          ? sev === 'minor' ? 'bg-green-100 text-green-700'
                          : sev === 'moderate' ? 'bg-amber-100 text-amber-700'
                          : 'bg-red-100 text-red-700'
                          : 'bg-gray-100 text-gray-500'
                      }`}
                    >
                      {sev.charAt(0).toUpperCase() + sev.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Vivid scenario description */}
              {(() => {
                const scenario = damageScenarios.find(s => s.id === selectedScenario);
                if (!scenario) return null;
                return (
                  <div className={`rounded-lg p-3 ${scenario.whoResponsible === 'you' ? 'bg-amber-50 border border-amber-200' : 'bg-blue-50 border border-blue-200'}`}>
                    <p className={`text-sm font-semibold mb-1 ${scenario.whoResponsible === 'you' ? 'text-amber-800' : 'text-blue-800'}`}>
                      {scenario.headline}
                    </p>
                    <p className="text-xs text-gray-700 leading-relaxed">
                      {scenario.description}
                    </p>
                    <p className="text-xs text-gray-500 mt-2 italic">
                      Common causes: {scenario.commonScenario}
                    </p>
                  </div>
                );
              })()}
              
              {/* Damage Summary */}
              <div className="mt-3 p-2 bg-gray-100 rounded-lg flex items-center justify-center gap-4 text-xs">
                <span className="text-gray-600">Estimated Total Damage:</span>
                <span className="font-bold text-gray-900">{formatCurrency(result.totalDamage)}</span>
                <span className="text-gray-400">|</span>
                <span className="text-gray-500">Standard: {formatCurrency(result.standardUnitDamage)}</span>
                <span className="text-gray-500">Improvements: {formatCurrency(result.improvementDamage)}</span>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-gray-200">
              {/* Inputs Column */}
              <div className="p-4 space-y-3">
                <h3 className="font-semibold text-gray-900 text-sm mb-3">Your Situation</h3>
                
                {/* Compact sliders */}
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-600">Unit Size</span>
                    <span className="font-medium">{inputs.unitSize} sq ft</span>
                  </div>
                  <input type="range" min="400" max="2000" step="50" value={inputs.unitSize}
                    onChange={(e) => setInputs({ ...inputs, unitSize: Number(e.target.value) })}
                    className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-600">Your Upgrades Value</span>
                    <span className="font-medium">{formatCurrency(inputs.renovationValue)}</span>
                  </div>
                  <input type="range" min="0" max="100000" step="5000" value={inputs.renovationValue}
                    onChange={(e) => setInputs({ ...inputs, renovationValue: Number(e.target.value) })}
                    className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
                  />
                  <p className="text-xs text-gray-400 mt-0.5">Hardwood, countertops, fixtures beyond original</p>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-600">Condo's Deductible</span>
                    <span className="font-medium text-amber-600">{formatCurrency(inputs.corporationDeductible)}</span>
                  </div>
                  <input type="range" min="10000" max="150000" step="5000" value={inputs.corporationDeductible}
                    onChange={(e) => setInputs({ ...inputs, corporationDeductible: Number(e.target.value) })}
                    className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
                  />
                  {result.withByLaw.deductibleExceedsDamage ? (
                    <p className="text-xs text-amber-600 mt-0.5">Exceeds damage—try "Major" severity or lower deductible</p>
                  ) : (
                    <p className="text-xs text-gray-400 mt-0.5">Corp covers {formatCurrency(result.withByLaw.corpCovers)} above this</p>
                  )}
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-600">Your HO6 Coverage</span>
                    <span className="font-medium text-green-600">{formatCurrency(inputs.ownerInsuranceCoverage)}</span>
                  </div>
                  <input type="range" min="0" max="200000" step="10000" value={inputs.ownerInsuranceCoverage}
                    onChange={(e) => {
                      const newCoverage = Number(e.target.value);
                      setInputs({ 
                        ...inputs, 
                        ownerInsuranceCoverage: newCoverage,
                        // Auto-update premium unless user has overridden it
                        ownerInsurancePremium: premiumOverridden ? inputs.ownerInsurancePremium : estimatePremium(newCoverage)
                      });
                    }}
                    className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-500"
                  />
                  {result.withByLaw.fullyInsured ? (
                    <p className="text-xs text-green-600 mt-0.5">Fully covers your {formatCurrency(result.withByLaw.yourResponsibility)} responsibility</p>
                  ) : inputs.ownerInsuranceCoverage === 0 ? (
                    <p className="text-xs text-red-500 mt-0.5">No coverage—you pay everything out of pocket</p>
                  ) : (
                    <p className="text-xs text-amber-600 mt-0.5">Pays {formatCurrency(result.withByLaw.insurancePays)}, you cover the rest</p>
                  )}
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-600">Your HO6 Monthly Premium</span>
                    <span className="font-medium text-green-600">${inputs.ownerInsurancePremium}/mo</span>
                  </div>
                  <input type="range" min="0" max="150" step="5" value={inputs.ownerInsurancePremium}
                    onChange={(e) => {
                      setPremiumOverridden(true);
                      setInputs({ ...inputs, ownerInsurancePremium: Number(e.target.value) });
                    }}
                    className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-500"
                  />
                  <p className="text-xs text-gray-400 mt-0.5">
                    {premiumOverridden ? 'Custom value' : `Est. $${estimatePremium(inputs.ownerInsuranceCoverage)}/mo`} 
                    = ${(inputs.ownerInsurancePremium * 12).toLocaleString()}/yr
                  </p>
                </div>

                <div className="pt-2 border-t border-gray-100">
                  <p className="text-xs text-gray-500 mb-2 font-medium">Building-Wide Impact</p>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-600"># of Units</span>
                        <span className="font-medium">{inputs.numberOfUnits}</span>
                      </div>
                      <input type="range" min="50" max="400" step="10" value={inputs.numberOfUnits}
                        onChange={(e) => setInputs({ ...inputs, numberOfUnits: Number(e.target.value) })}
                        className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gray-500"
                      />
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-600">Incidents/Year (building-wide)</span>
                        <span className="font-medium">{inputs.incidentsPerYear}</span>
                      </div>
                      <input type="range" min="1" max="10" step="1" value={inputs.incidentsPerYear}
                        onChange={(e) => setInputs({ ...inputs, incidentsPerYear: Number(e.target.value) })}
                        className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gray-500"
                      />
                    </div>
                  </div>
                </div>

              </div>

              {/* WITHOUT By-Law */}
              <div className="p-4 bg-red-50">
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                  <h3 className="font-bold text-red-800">WITHOUT By-Law</h3>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-3 border border-red-100">
                    <p className="text-xs text-red-600">Your Likely Cost (this incident)</p>
                    <p className="text-2xl font-bold text-red-700">{formatCurrency(result.withoutByLaw.yourCost)}</p>
                    <p className="text-xs text-gray-500">Ambiguity pushes costs to you</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-3 border border-red-100">
                    <p className="text-xs text-red-600">Worst Case</p>
                    <p className="text-xl font-bold text-red-800">{formatCurrency(result.withoutByLaw.worstCase)}</p>
                    <p className="text-xs text-gray-500">If dispute escalates + legal fees</p>
                  </div>

                  <div className="pt-2 border-t border-red-100 space-y-2">
                    <p className="text-xs text-red-700 font-medium">Yearly Costs</p>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-600">HO6 Premium (underinsured)</span>
                      <span className="text-red-700">{formatCurrency(result.withoutByLaw.yearlyPremium)}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-600">Fee Increase ({inputs.incidentsPerYear} incidents)</span>
                      <span className="text-red-700">+{formatCurrency(result.withoutByLaw.yearlyFeeImpact)}</span>
                    </div>
                    <div className="flex justify-between text-xs font-medium pt-1 border-t border-red-100">
                      <span className="text-red-800">Total Yearly Cost</span>
                      <span className="text-red-800">{formatCurrency(result.withoutByLaw.totalYearlyCost)}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* WITH By-Law */}
              <div className="p-4 bg-green-50">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <h3 className="font-bold text-green-800">WITH By-Law</h3>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-3 border border-green-100">
                    <p className="text-xs text-green-600">Your Total Cost (this incident)</p>
                    <p className="text-2xl font-bold text-green-700">{formatCurrency(result.withByLaw.yourCost)}</p>
                    <p className="text-xs text-gray-500">Clear responsibility = no surprises</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-3 border border-green-100">
                    <p className="text-xs text-green-600">Your Insurance Pays</p>
                    <p className="text-xl font-bold text-green-800">{formatCurrency(result.withByLaw.insurancePays)}</p>
                    <p className="text-xs text-gray-500">Your HO6 policy covers you</p>
                  </div>

                  <div className="pt-2 border-t border-green-100 space-y-2">
                    <p className="text-xs text-green-700 font-medium">Yearly Costs</p>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-600">HO6 Premium (adequate coverage)</span>
                      <span className="text-green-700">{formatCurrency(result.withByLaw.yearlyPremium)}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-600">Fee Increase ({inputs.incidentsPerYear} incidents)</span>
                      <span className="text-green-700">+{formatCurrency(result.withByLaw.yearlyFeeImpact)}</span>
                    </div>
                    <div className="flex justify-between text-xs font-medium pt-1 border-t border-green-100">
                      <span className="text-green-800">Total Yearly Cost</span>
                      <span className="text-green-800">{formatCurrency(result.withByLaw.totalYearlyCost)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Difference Banner */}
            {(result.savings > 0 || result.yearlyFeeDifference > 0) && (
              <div className="p-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
                <div className="flex justify-center gap-8 flex-wrap">
                  {result.savings > 0 && (
                    <div className="text-center">
                      <p className="text-primary-200 text-xs">Per Incident Difference</p>
                      <p className="text-2xl font-bold">{formatCurrency(result.savings)}</p>
                      <p className="text-primary-200 text-xs">less with the by-law</p>
                    </div>
                  )}
                  {result.yearlyFeeDifference > 0 && (
                    <div className="text-center">
                      <p className="text-primary-200 text-xs">Yearly Fee Difference</p>
                      <p className="text-2xl font-bold">{formatCurrency(result.yearlyFeeDifference)}/yr</p>
                      <p className="text-primary-200 text-xs">lower fees with the by-law</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Bottom note */}
            <div className="p-3 bg-gray-50 border-t border-gray-200 flex items-center justify-center gap-4">
              <p className="text-xs text-gray-500">
                Estimates based on industry data.
                <a href="#sources" className="text-primary-600 ml-1 hover:underline">See sources</a>
              </p>
              <button 
                onClick={() => setShowMethodology(true)}
                className="inline-flex items-center gap-1 text-xs text-primary-600 hover:text-primary-700 font-medium"
              >
                <Info className="w-3.5 h-3.5" />
                View Methodology
              </button>
            </div>
          </div>

        {/* Simple disclaimer */}
        <p className="text-xs text-gray-400 text-center mt-4 max-w-2xl mx-auto">
          This calculator is for illustration only—actual costs depend on your condo's specific by-laws, declaration, and insurance policies. 
          Consult your property manager or a professional for advice specific to your situation.
        </p>
        
        <MethodologyModal 
          isOpen={showMethodology} 
          onClose={() => setShowMethodology(false)} 
          inputs={inputs}
          scenarioId={selectedScenario}
        />
      </div>
    </section>
  );
}
