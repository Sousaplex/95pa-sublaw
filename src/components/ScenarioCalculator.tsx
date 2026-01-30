import { useState, useMemo } from 'react';
import { Droplets, Flame, Hammer, CloudRain, Calculator, AlertTriangle, CheckCircle, Info, X } from 'lucide-react';
import { damageScenarios } from '../data/scenarios';
import type { ScenarioInputs } from '../types/calculator';
import { LegalPreamble } from './LegalPreamble';

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
              <div className="flex justify-between"><span className="text-gray-600">numberOfUnits</span><span>{inputs.numberOfUnits}</span></div>
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
                <p><span className="text-blue-600">improvementMultiplier</span> = {inputs.renovationValue > 50000 ? '1.5 (renos > $50K)' : inputs.renovationValue > 25000 ? '1.25 (renos > $25K)' : '1.0 (renos ≤ $25K)'}</p>
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
              <p><span className="text-green-600">insuranceCovers</span> = min(ownerCoverage - ownerDeductible, yourResponsibility - ownerDeductible)</p>
              <p><span className="text-green-600">yourCost</span> = max(0, yourResponsibility - insuranceCovers) + ownerDeductible</p>
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

          {/* Fee Impact */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-xs font-bold">6</span>
              Fee Impact Calculation
            </h3>
            <div className="bg-amber-50 rounded-lg p-3 space-y-2 text-xs font-mono">
              <p className="text-gray-600">// Corp claims increase building insurance premiums, spread across all units</p>
              <p><span className="text-amber-600">premiumIncrease</span> = corpCovers × 10% (WITH) or 15% (WITHOUT)</p>
              <p><span className="text-amber-600">annualFeeImpact</span> = premiumIncrease ÷ 3 years ÷ numberOfUnits</p>
              <p><span className="text-amber-600">monthlyIncrease</span> = annualFeeImpact ÷ 12</p>
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
  withByLaw: {
    yourCost: number;
    corpCovers: number;
    feeImpact: number;
    monthlyIncrease: number;
  };
  withoutByLaw: {
    yourCost: number;
    worstCase: number;
    feeImpact: number;
    monthlyIncrease: number;
  };
  savings: number;
}

function calculate(inputs: ScenarioInputs, scenarioId: string): CalculationResult {
  const scenario = damageScenarios.find(s => s.id === scenarioId);
  if (!scenario) {
    return {
      totalDamage: 0,
      withByLaw: { yourCost: 0, corpCovers: 0, feeImpact: 0, monthlyIncrease: 0 },
      withoutByLaw: { yourCost: 0, worstCase: 0, feeImpact: 0, monthlyIncrease: 0 },
      savings: 0,
    };
  }

  // Calculate damage
  const baseCost = scenario.baseCostPerSqFt[inputs.damageSeverity];
  const estimatedRepairCost = Math.round(baseCost * Math.sqrt(inputs.unitSize) * 10);
  const improvementMultiplier = inputs.renovationValue > 50000 ? 1.5 : inputs.renovationValue > 25000 ? 1.25 : 1;
  const standardUnitDamage = Math.round(estimatedRepairCost * scenario.standardUnitRatio);
  const improvementDamage = Math.round((estimatedRepairCost * (1 - scenario.standardUnitRatio)) * improvementMultiplier);
  const totalDamage = standardUnitDamage + improvementDamage;

  // WITH BY-LAW
  const corpCovers = Math.max(0, standardUnitDamage - inputs.corporationDeductible);
  const deductibleChargeback = Math.min(standardUnitDamage, inputs.corporationDeductible);
  const yourResponsibility = deductibleChargeback + improvementDamage;
  const insuranceCovers = Math.min(inputs.ownerInsuranceCoverage - inputs.ownerInsuranceDeductible, yourResponsibility - inputs.ownerInsuranceDeductible);
  const yourCostWithByLaw = Math.max(0, yourResponsibility - insuranceCovers) + (insuranceCovers > 0 ? inputs.ownerInsuranceDeductible : 0);
  
  // Fee impact WITH by-law: corp claim increases premiums, spread across all units
  // Estimate: insurance premium increase = 10% of claim, spread over 3 years
  const premiumIncrease = corpCovers * 0.10;
  const annualFeeImpactWith = premiumIncrease / 3 / inputs.numberOfUnits;
  const monthlyIncreaseWith = Math.round(annualFeeImpactWith / 12);

  // WITHOUT BY-LAW
  // Ambiguity means 50% of standard unit pushed to you, plus corp might cover some improvements
  const ambiguityPush = standardUnitDamage * 0.5;
  const yourCostWithout = improvementDamage + ambiguityPush;
  const worstCase = totalDamage + 10000; // Plus potential legal fees
  
  // Fee impact WITHOUT: corp may cover more (including some improvements), higher claims
  const corpCoversWithout = standardUnitDamage * 0.5 + improvementDamage * 0.3; // Ambiguity means corp covers some improvements
  const premiumIncreaseWithout = corpCoversWithout * 0.15; // Higher rate due to disputed claims
  const annualFeeImpactWithout = premiumIncreaseWithout / 3 / inputs.numberOfUnits;
  const monthlyIncreaseWithout = Math.round(annualFeeImpactWithout / 12);

  return {
    totalDamage,
    withByLaw: {
      yourCost: yourCostWithByLaw,
      corpCovers,
      feeImpact: annualFeeImpactWith,
      monthlyIncrease: monthlyIncreaseWith,
    },
    withoutByLaw: {
      yourCost: yourCostWithout,
      worstCase,
      feeImpact: annualFeeImpactWithout,
      monthlyIncrease: monthlyIncreaseWithout,
    },
    savings: yourCostWithout - yourCostWithByLaw,
  };
}

export function ScenarioCalculator() {
  const [disclaimerAccepted, setDisclaimerAccepted] = useState(false);
  const [selectedScenario, setSelectedScenario] = useState(damageScenarios[0].id);
  const [showMethodology, setShowMethodology] = useState(false);
  const [inputs, setInputs] = useState<ScenarioInputs>({
    unitSize: 850,
    renovationValue: 25000,
    corporationDeductible: 50000,
    ownerInsuranceCoverage: 100000,
    ownerInsuranceDeductible: 1000,
    damageSeverity: 'moderate',
    monthlyCondoFees: 600,
    numberOfUnits: 200,
  });

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

        <LegalPreamble onAccept={() => setDisclaimerAccepted(true)} accepted={disclaimerAccepted} />

        {disclaimerAccepted && (
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
                  <p className="text-xs text-gray-400 mt-0.5">Building insurance deductible (check your status certificate)</p>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-600">Your Condo Insurance</span>
                    <span className="font-medium text-green-600">{formatCurrency(inputs.ownerInsuranceCoverage)}</span>
                  </div>
                  <input type="range" min="0" max="200000" step="10000" value={inputs.ownerInsuranceCoverage}
                    onChange={(e) => setInputs({ ...inputs, ownerInsuranceCoverage: Number(e.target.value) })}
                    className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-500"
                  />
                  <p className="text-xs text-gray-400 mt-0.5">Your personal unit insurance (HO6 policy)</p>
                </div>

                <div className="pt-2 border-t border-gray-100">
                  <p className="text-xs text-gray-500 mb-2 font-medium">Building Info (for fee calc)</p>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <div className="text-xs text-gray-600 mb-1">Monthly Fees</div>
                      <input type="number" value={inputs.monthlyCondoFees}
                        onChange={(e) => setInputs({ ...inputs, monthlyCondoFees: Number(e.target.value) })}
                        className="w-full px-2 py-1 text-sm border border-gray-200 rounded"
                      />
                    </div>
                    <div>
                      <div className="text-xs text-gray-600 mb-1"># of Units</div>
                      <input type="number" value={inputs.numberOfUnits}
                        onChange={(e) => setInputs({ ...inputs, numberOfUnits: Number(e.target.value) })}
                        className="w-full px-2 py-1 text-sm border border-gray-200 rounded"
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
                    <p className="text-xs text-red-600">Your Direct Cost</p>
                    <p className="text-2xl font-bold text-red-700">{formatCurrency(result.withoutByLaw.yourCost)}</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-3 border border-red-100">
                    <p className="text-xs text-red-600">Worst Case</p>
                    <p className="text-xl font-bold text-red-800">{formatCurrency(result.withoutByLaw.worstCase)}</p>
                    <p className="text-xs text-gray-500">Including potential legal fees</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-3 border border-red-100">
                    <p className="text-xs text-red-600">Fee Impact (Everyone Pays)</p>
                    <p className="text-lg font-bold text-red-700">+{formatCurrency(result.withoutByLaw.monthlyIncrease)}/mo</p>
                    <p className="text-xs text-gray-500">Higher claims = higher premiums for all</p>
                  </div>

                  <div className="text-xs text-red-700 p-2 bg-red-100 rounded">
                    Plus: disputes, delays, ambiguity
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
                    <p className="text-xs text-green-600">Your Total Cost</p>
                    <p className="text-2xl font-bold text-green-700">{formatCurrency(result.withByLaw.yourCost)}</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-3 border border-green-100">
                    <p className="text-xs text-green-600">Corporation Covers</p>
                    <p className="text-xl font-bold text-green-800">{formatCurrency(result.withByLaw.corpCovers)}</p>
                    <p className="text-xs text-gray-500">Clearly defined standard unit</p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-3 border border-green-100">
                    <p className="text-xs text-green-600">Fee Impact (Everyone Pays)</p>
                    <p className="text-lg font-bold text-green-700">+{formatCurrency(result.withByLaw.monthlyIncrease)}/mo</p>
                    <p className="text-xs text-gray-500">Lower, clearer claims</p>
                  </div>

                  <div className="text-xs text-green-700 p-2 bg-green-100 rounded">
                    Plus: fast repairs, no disputes, clarity
                  </div>
                </div>
              </div>
            </div>

            {/* Savings Banner */}
            {result.savings > 0 && (
              <div className="p-4 bg-gradient-to-r from-green-600 to-green-700 text-white text-center">
                <p className="text-green-100 text-sm">The By-Law Saves You</p>
                <p className="text-3xl font-bold">{formatCurrency(result.savings)}</p>
                <p className="text-green-200 text-xs mt-1">in this scenario alone</p>
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
        )}
        
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
