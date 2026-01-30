import { Building, User, AlertCircle, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';

export function InsuranceSection() {
  return (
    <section id="insurance" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How Insurance Works in Your Condo
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            There are two policies at play—and a Standard Unit By-Law helps you know exactly where one ends and the other begins.
          </p>
        </div>

        {/* Why Standard Unit By-Law Matters for Insurance */}
        <div className="bg-green-50 border border-green-200 rounded-2xl p-6 sm:p-8 mb-12">
          <div className="flex items-start gap-4 mb-4">
            <ShieldCheck className="w-8 h-8 text-green-600 shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-green-800 mb-2">
                How a Standard Unit By-Law Saves You Money on Insurance
              </h3>
              <p className="text-green-700">
                Without a Standard Unit By-Law, you're guessing how much personal insurance you need. That leads to two costly problems:
              </p>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4 mt-4">
            <div className="bg-white rounded-lg p-4 border border-green-100">
              <p className="font-medium text-gray-800 mb-1">Under-insured</p>
              <p className="text-sm text-gray-600">
                You discover gaps when damage happens. You're stuck paying out of pocket—potentially <strong>$10,000 to $50,000+</strong> you didn't expect.
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-green-100">
              <p className="font-medium text-gray-800 mb-1">Over-insured</p>
              <p className="text-sm text-gray-600">
                You pay for coverage you don't need because you're unsure what the building covers. Wasting <strong>$100-300/year</strong> on unnecessary premiums.
              </p>
            </div>
          </div>
          
          <div className="mt-4 p-4 bg-green-100 rounded-lg">
            <p className="text-green-800 text-sm">
              <strong>With a Standard Unit By-Law:</strong> You know exactly what to insure. You get the right coverage—not too much, not too little—and avoid expensive surprises.
            </p>
          </div>
        </div>

        {/* Two-Column Insurance Breakdown */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Corporation's Insurance */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="bg-primary-600 p-5">
              <div className="flex items-center gap-3">
                <Building className="w-8 h-8 text-white" />
                <div>
                  <h3 className="text-xl font-semibold text-white">The Building's Insurance</h3>
                  <p className="text-primary-100 text-sm">Paid through your condo fees</p>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Covers:</h4>
              <ul className="space-y-2 mb-6">
                {[
                  'Common areas (hallways, lobby, garage)',
                  'Standard unit elements (walls, original floors, etc.)',
                  'Building structure and systems',
                  'Damage from fire, flood, and major events',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                    <span className="text-primary-500 mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
              
              <h4 className="font-semibold text-gray-900 mb-3">Does NOT Cover:</h4>
              <ul className="space-y-2">
                {[
                  'Your renovations and upgrades',
                  'Your furniture and belongings',
                  'Anything beyond the "standard unit"',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                    <span className="text-red-500 mt-0.5">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
              
              <div className="mt-4 p-3 bg-primary-50 rounded-lg flex items-start gap-2">
                <HelpCircle className="w-4 h-4 text-primary-600 shrink-0 mt-0.5" />
                <p className="text-xs text-primary-700">
                  <strong>The by-law defines</strong> exactly what "standard unit" means—so you know where this coverage stops.
                </p>
              </div>
            </div>
          </div>

          {/* Owner's Insurance */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="bg-amber-500 p-5">
              <div className="flex items-center gap-3">
                <User className="w-8 h-8 text-white" />
                <div>
                  <h3 className="text-xl font-semibold text-white">Your Personal Insurance</h3>
                  <p className="text-amber-100 text-sm">Called "HO6" or condo insurance</p>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <h4 className="font-semibold text-gray-900 mb-3">You Need to Cover:</h4>
              <ul className="space-y-2 mb-6">
                {[
                  'All renovations and improvements',
                  'Your furniture, electronics, clothing',
                  'Personal liability (if someone gets hurt)',
                  'Deductible chargebacks (more on this below)',
                  'Living expenses if you can\'t stay in your unit',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                    <span className="text-amber-500 mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
              
              <div className="bg-amber-50 rounded-lg p-4 border border-amber-100">
                <p className="text-sm text-amber-800">
                  <strong>Typical Cost:</strong> $200 - $600/year<br />
                  <strong>Coverage Amount:</strong> $50,000 - $300,000<br />
                  <span className="text-xs text-amber-700">Depends on your unit size and renovations</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Deductible Chargeback Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8 mb-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-red-100 rounded-xl">
              <AlertCircle className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                The Deductible Chargeback: Why This Can Hit Your Wallet Hard
              </h3>
              <p className="text-gray-600">
                When damage happens and it's traced back to your unit, you could be on the hook for the building's 
                insurance deductible. And these deductibles have gotten <em>huge</em>.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-5 mb-6">
            <p className="text-gray-700 leading-relaxed mb-4">
              Under Section 105(2) of the Condo Act, if damage starts from your unit, the corporation can 
              charge you the <strong>lesser of</strong>:
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex-1 bg-white rounded-lg p-4 text-center border border-gray-200">
                <p className="text-sm text-gray-500 mb-1">The Repair Cost</p>
                <p className="font-semibold text-gray-900">e.g., $35,000</p>
              </div>
              
              <div className="text-gray-400 font-semibold">OR</div>
              
              <div className="flex-1 bg-white rounded-lg p-4 text-center border border-gray-200">
                <p className="text-sm text-gray-500 mb-1">The Deductible</p>
                <p className="font-semibold text-gray-900">e.g., $50,000</p>
              </div>
              
              <ArrowRight className="w-6 h-6 text-gray-400 hidden sm:block" />
              
              <div className="flex-1 bg-red-50 rounded-lg p-4 text-center border border-red-200">
                <p className="text-sm text-red-600 mb-1">You Pay</p>
                <p className="font-semibold text-red-700">$35,000</p>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <h4 className="font-semibold text-blue-800 mb-2">Smaller Incident</h4>
              <p className="text-sm text-gray-700">
                Repair cost: <strong>$8,000</strong><br />
                Building's deductible: $50,000<br />
                <span className="text-blue-600 font-medium">You pay: $8,000</span>
              </p>
              <p className="text-xs text-gray-500 mt-2">Your HO6 policy can cover this</p>
            </div>
            
            <div className="p-4 bg-red-50 rounded-lg border border-red-100">
              <h4 className="font-semibold text-red-800 mb-2">Major Incident</h4>
              <p className="text-sm text-gray-700">
                Repair cost: <strong>$75,000</strong><br />
                Building's deductible: $50,000<br />
                <span className="text-red-600 font-medium">You pay: $50,000</span>
              </p>
              <p className="text-xs text-gray-500 mt-2">Corp covers remaining $25,000*</p>
            </div>
          </div>

          <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
            <p className="text-sm text-amber-800">
              <strong>* Here's the thing:</strong> The "corporation" is just all the owners together. When the 
              corporation pays that $25,000, it comes from everyone's fees:
            </p>
            <ul className="text-sm text-amber-700 mt-2 space-y-1">
              <li>• <strong>Insurance claims = higher premiums</strong> for the building, which means higher fees for everyone</li>
              <li>• <strong>Reserve fund payouts</strong> mean fee increases or special assessments down the road</li>
              <li>• <strong>Everyone pays</strong>—even if the damage had nothing to do with them</li>
            </ul>
          </div>
        </div>

        {/* How Standard Unit By-Law Protects You */}
        <div className="bg-gradient-to-r from-green-50 to-primary-50 rounded-2xl p-6 sm:p-8 mb-12 border border-green-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            How Does a Standard Unit By-Law Protect You Here?
          </h3>
          
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-800 mb-2">If damage starts in YOUR unit:</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>By-law clearly defines what's "standard unit" vs. your improvements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>You know exactly how much coverage you need in your HO6 policy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>No surprise bills for things the corporation should cover</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-800 mb-2">If damage comes from ANOTHER unit:</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Corporation can properly charge back the responsible owner</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Your repairs get done faster without liability disputes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Less chance of special assessments hitting all owners</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Action Items */}
        <div className="bg-primary-900 rounded-2xl p-6 sm:p-8 text-white">
          <h3 className="text-xl font-semibold mb-2">Protect Yourself: 4 Steps to Take Now</h3>
          <p className="text-primary-200 mb-6">These take 30 minutes and could save you thousands.</p>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                num: '1',
                title: 'Ask for the Standard Unit By-Law',
                desc: 'Email your property manager: "Does our corporation have a Standard Unit By-Law? Can I get a copy?"',
              },
              {
                num: '2',
                title: 'Find Out Your Deductible',
                desc: 'Ask: "What is our current insurance deductible, especially for water damage?"',
              },
              {
                num: '3',
                title: 'Review Your HO6 Policy',
                desc: 'Make sure your dwelling coverage matches your improvements + potential deductible chargeback.',
              },
              {
                num: '4',
                title: 'Add Loss Assessment Coverage',
                desc: 'This covers you if the corporation passes a special assessment after a major claim.',
              },
            ].map((item) => (
              <div key={item.num} className="flex gap-3">
                <div className="w-8 h-8 bg-primary-700 rounded-full flex items-center justify-center shrink-0 text-sm font-semibold">
                  {item.num}
                </div>
                <div>
                  <h4 className="font-medium text-white">{item.title}</h4>
                  <p className="text-primary-200 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
