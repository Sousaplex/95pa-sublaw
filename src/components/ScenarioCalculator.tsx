import { useState, useMemo } from 'react';
import { Droplets, Flame, Hammer, CloudRain, Calculator, AlertTriangle, CheckCircle } from 'lucide-react';
import { damageScenarios } from '../data/scenarios';
import type { ScenarioInputs } from '../types/calculator';
import { LegalPreamble } from './LegalPreamble';

const scenarioIcons: Record<string, React.ReactNode> = {
  'droplets': <Droplets className="w-4 h-4" />,
  'flame': <Flame className="w-4 h-4" />,
  'hammer': <Hammer className="w-4 h-4" />,
  'cloud-rain': <CloudRain className="w-4 h-4" />,
};

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
  const [inputs, setInputs] = useState<ScenarioInputs>({
    unitSize: 850,
    renovationValue: 25000,
    corporationDeductible: 50000,
    ownerInsuranceCoverage: 100000,
    ownerInsuranceDeductible: 1000,
    damageSeverity: 'moderate',
    monthlyCondoFees: 600,
    numberOfUnits: 150,
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
            {/* Scenario Selection - Compact */}
            <div className="p-4 bg-gray-50 border-b border-gray-200">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-medium text-gray-700 mr-2">Scenario:</span>
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
                    <span className="hidden sm:inline">{scenario.name.split(' ')[0]}</span>
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
                    <span className="text-gray-600">Your Renovations</span>
                    <span className="font-medium">{formatCurrency(inputs.renovationValue)}</span>
                  </div>
                  <input type="range" min="0" max="100000" step="5000" value={inputs.renovationValue}
                    onChange={(e) => setInputs({ ...inputs, renovationValue: Number(e.target.value) })}
                    className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-600">Building Deductible</span>
                    <span className="font-medium text-amber-600">{formatCurrency(inputs.corporationDeductible)}</span>
                  </div>
                  <input type="range" min="10000" max="150000" step="5000" value={inputs.corporationDeductible}
                    onChange={(e) => setInputs({ ...inputs, corporationDeductible: Number(e.target.value) })}
                    className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-600">Your HO6 Coverage</span>
                    <span className="font-medium text-green-600">{formatCurrency(inputs.ownerInsuranceCoverage)}</span>
                  </div>
                  <input type="range" min="0" max="200000" step="10000" value={inputs.ownerInsuranceCoverage}
                    onChange={(e) => setInputs({ ...inputs, ownerInsuranceCoverage: Number(e.target.value) })}
                    className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-500"
                  />
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
            <div className="p-3 bg-gray-50 border-t border-gray-200">
              <p className="text-xs text-gray-500 text-center">
                Estimates based on industry data. Actual costs depend on your specific situation and policy terms.
                <a href="#sources" className="text-primary-600 ml-1 hover:underline">See sources</a>
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
