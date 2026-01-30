import { Scale, AlertTriangle } from 'lucide-react';

interface LegalPreambleProps {
  onAccept: () => void;
  accepted: boolean;
}

export function LegalPreamble({ onAccept, accepted }: LegalPreambleProps) {
  if (accepted) return null;

  return (
    <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-6 sm:p-8">
      <div className="flex items-start gap-4 mb-6">
        <div className="p-3 bg-amber-100 rounded-xl shrink-0">
          <Scale className="w-6 h-6 text-amber-700" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-amber-900 mb-2">
            Important Legal Disclaimer
          </h3>
          <p className="text-amber-800">
            Please read and acknowledge before using the calculator.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl p-5 mb-6 border border-amber-200">
        <div className="flex items-start gap-3 mb-4">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <p className="text-gray-700 leading-relaxed">
            <strong>This calculator is provided for educational and illustrative purposes only.</strong> It does 
            not constitute legal, financial, or insurance advice.
          </p>
        </div>

        <ul className="space-y-3 text-sm text-gray-600">
          <li className="flex items-start gap-2">
            <span className="text-amber-500 mt-1">•</span>
            <span>
              <strong>Actual costs, coverage, and responsibilities</strong> depend on your specific 
              condominium's declaration, by-laws, and insurance policies.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-500 mt-1">•</span>
            <span>
              <strong>Figures are estimates</strong> based on publicly available data and industry 
              averages. Your actual situation may differ significantly.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-500 mt-1">•</span>
            <span>
              <strong>Consult professionals:</strong> Review your condominium's governing documents 
              and speak with a licensed insurance professional and/or lawyer for advice specific 
              to your situation.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-500 mt-1">•</span>
            <span>
              <strong>Data sources:</strong> Figures are derived from the Condominium Authority of 
              Ontario (CAO), Ontario Condominium Act, 1998, RCLLP legal analysis, and industry 
              restoration cost data.
            </span>
          </li>
        </ul>
      </div>

      <button
        onClick={onAccept}
        className="w-full sm:w-auto px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg transition-colors"
      >
        I Understand — Show Calculator
      </button>
    </div>
  );
}
