import { AlertTriangle, CheckCircle, Calendar, TrendingUp, DollarSign, Users, Scale, Vote } from 'lucide-react';

export function WhyItMatters() {
  return (
    <section id="why-it-matters" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How This By-Law Protects <span className="text-primary-600">Your Money</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            This isn't just paperwork—it's financial protection for every owner in your building.
          </p>
        </div>

        {/* Who Does the Current System Favor? */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-6 sm:p-8 mb-12 text-white">
          <div className="flex items-start gap-4 mb-6">
            <Scale className="w-10 h-10 text-amber-400 shrink-0" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Who Does the Current System Favor?</h3>
              <p className="text-gray-300">
                Without a Standard Unit By-Law, the system isn't neutral. Here's who benefits—and who pays the price.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-900/40 rounded-xl p-5 border border-red-700/50">
              <h4 className="font-semibold text-red-300 mb-3">Who Benefits From NO By-Law?</h4>
              <ul className="text-sm text-gray-300 space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-red-400">→</span>
                  <span><strong className="text-white">Owners with expensive renovations</strong> — ambiguity means their luxury upgrades might get covered by everyone's fees</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">→</span>
                  <span><strong className="text-white">Those who cause damage</strong> — harder for the corporation to charge them back properly</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">→</span>
                  <span><strong className="text-white">No one, really</strong> — even these "beneficiaries" face disputes and delays</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-amber-900/40 rounded-xl p-5 border border-amber-700/50">
              <h4 className="font-semibold text-amber-300 mb-3">Who Pays the Price?</h4>
              <ul className="text-sm text-gray-300 space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-amber-400">→</span>
                  <span><strong className="text-white">Owners with original/modest units</strong> — you subsidize others' luxury repairs through higher fees</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400">→</span>
                  <span><strong className="text-white">Every owner</strong> — disputes, delays, potential litigation, and unclear responsibilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400">→</span>
                  <span><strong className="text-white">The building's finances</strong> — higher insurance premiums, depleted reserves, special assessments</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-green-900/40 rounded-lg border border-green-700/50">
            <p className="text-green-300 font-medium">
              <strong className="text-white">A Standard Unit By-Law levels the playing field:</strong> Everyone knows 
              what they're responsible for. Owners with upgrades insure their own improvements. Owners with original 
              units don't subsidize their neighbors. Fair and clear.
            </p>
          </div>
        </div>

        {/* It's Simply Fair */}
        <div className="bg-gradient-to-r from-primary-50 to-green-50 rounded-2xl p-6 sm:p-8 mb-12 border border-primary-200">
          <div className="text-center mb-6">
            <div className="text-5xl mb-4">⚖️</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">It's Simply Fair</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Beyond protecting your wallet, a Standard Unit By-Law is about treating every owner equitably.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-5 text-center border border-gray-200">
              <div className="text-3xl mb-3">🏠</div>
              <h4 className="font-semibold text-gray-900 mb-2">You Pay for Yours</h4>
              <p className="text-sm text-gray-600">
                If you renovated your kitchen, you insure it. If you kept the original, you don't pay extra for someone else's choices.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-5 text-center border border-gray-200">
              <div className="text-3xl mb-3">📋</div>
              <h4 className="font-semibold text-gray-900 mb-2">Same Rules for Everyone</h4>
              <p className="text-sm text-gray-600">
                Clear definitions that apply equally to every unit. No special treatment, no ambiguity, no surprises.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-5 text-center border border-gray-200">
              <div className="text-3xl mb-3">🤝</div>
              <h4 className="font-semibold text-gray-900 mb-2">Good for the Community</h4>
              <p className="text-sm text-gray-600">
                Fewer disputes between neighbors. Faster repairs. A building that works together instead of against each other.
              </p>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-gray-700 font-medium">
              The Standard Unit By-Law doesn't take anything away from anyone. It simply makes clear what was always supposed to be true: 
              <strong> each owner is responsible for their own choices</strong>.
            </p>
          </div>
        </div>

        {/* Real Cost Scenario */}
        <div className="bg-gradient-to-r from-red-50 to-amber-50 rounded-2xl p-6 sm:p-8 mb-12 border border-red-100">
          <div className="flex items-start gap-4 mb-6">
            <DollarSign className="w-10 h-10 text-red-500 shrink-0 p-2 bg-red-100 rounded-full" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">A Real Scenario: Pipe Bursts in Your Unit</h3>
              <p className="text-gray-600">
                Let's say a pipe bursts in your unit. Water damages your floors, walls, and the unit below. 
                Total repair cost: <strong>$35,000</strong>. Here's what happens:
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-5 border-2 border-red-200">
              <h4 className="font-semibold text-red-800 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Without a Standard Unit By-Law
              </h4>
              <ul className="text-sm text-gray-700 space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">1.</span>
                  <span>Corporation says "we're not sure what we cover"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">2.</span>
                  <span>Weeks of back-and-forth with property manager</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">3.</span>
                  <span>They claim the flooring is "your improvement"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">4.</span>
                  <span>You get stuck paying for more than you should</span>
                </li>
              </ul>
              <div className="mt-4 p-3 bg-red-100 rounded-lg">
                <p className="text-red-800 font-semibold">You might pay: $25,000 - $35,000</p>
                <p className="text-red-700 text-xs mt-1">Plus legal fees if there's a dispute</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-5 border-2 border-green-200">
              <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                With a Standard Unit By-Law
              </h4>
              <ul className="text-sm text-gray-700 space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">1.</span>
                  <span>By-law clearly defines what's "standard unit"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">2.</span>
                  <span>Corporation covers standard unit repairs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">3.</span>
                  <span>You only pay for your actual improvements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">4.</span>
                  <span>Your personal insurance covers the rest</span>
                </li>
              </ul>
              <div className="mt-4 p-3 bg-green-100 rounded-lg">
                <p className="text-green-800 font-semibold">You might pay: $5,000 - $10,000</p>
                <p className="text-green-700 text-xs mt-1">Clear responsibility = no disputes</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-2xl font-bold text-gray-900">
              Potential Difference: <span className="text-green-600">$15,000 - $25,000</span>
            </p>
            <p className="text-gray-600 text-sm mt-1">The gap between clear rules and ambiguity. Try the calculator to see your situation.</p>
          </div>
        </div>

        {/* Why Should You Pay for Their Marble? */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 sm:p-8 mb-12 border border-purple-200">
          <div className="flex items-start gap-4 mb-4">
            <div className="text-4xl">💎</div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Why Should <em>You</em> Pay for Your Neighbor's Marble Countertops?
              </h3>
              <p className="text-gray-600">
                Here's something that might surprise you—and make you angry.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-5 border border-purple-100 mb-4">
            <p className="text-gray-700 leading-relaxed">
              Let's say your neighbor in unit 1205 did a <strong>$150,000 luxury renovation</strong>—marble floors, 
              custom Italian cabinetry, high-end fixtures. Then a pipe bursts and floods their unit.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              <strong>Without a Standard Unit By-Law:</strong> There's no clear definition of what's "standard" vs. "improvement." 
              The corporation might end up covering some of those luxury repairs through its insurance. And when 
              insurance claims go up, <strong>everyone's condo fees go up</strong>.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-red-50 rounded-lg p-4 border border-red-200">
              <p className="font-semibold text-red-800 mb-2">Without the By-Law</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Unclear what counts as "improvement"</li>
                <li>• Corp insurance may cover luxury items</li>
                <li>• Higher claims = higher premiums</li>
                <li>• <strong>Your fees subsidize their upgrades</strong></li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <p className="font-semibold text-green-800 mb-2">With the By-Law</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• "Standard unit" is clearly defined</li>
                <li>• Corp only covers standard elements</li>
                <li>• Their HO6 covers their marble</li>
                <li>• <strong>You pay for yours, they pay for theirs</strong></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-4 p-4 bg-purple-100 rounded-lg">
            <p className="text-purple-900 text-sm font-medium">
              <strong>Bottom line:</strong> A Standard Unit By-Law ensures that owners who invest in luxury upgrades are responsible 
              for insuring those upgrades—not spreading the cost to everyone in the building through higher fees.
            </p>
          </div>
        </div>

        {/* For Older Buildings */}
        <div className="bg-gradient-to-r from-primary-50 to-amber-50 rounded-2xl p-6 sm:p-8 mb-12">
          <div className="flex items-start gap-4 mb-6">
            <Calendar className="w-8 h-8 text-primary-600 shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Is Your Building at Risk?</h3>
              <p className="text-gray-600">
                If your condo was registered <strong>before May 5, 2001</strong>, there's a good chance 
                it doesn't have a Standard Unit By-Law—and that puts every owner at financial risk.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-5 border-l-4 border-amber-500">
              <h4 className="font-semibold text-amber-800 mb-2">Older Buildings (Pre-2001)</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Often have no Standard Unit By-Law</li>
                <li>• Responsibility is unclear when damage occurs</li>
                <li>• Owners often pay more than they should</li>
                <li>• <strong>Need to pass the by-law to be protected</strong></li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-5 border-l-4 border-green-500">
              <h4 className="font-semibold text-green-800 mb-2">Newer Buildings (Post-2001)</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• May have a schedule from the developer</li>
                <li>• Framework is clearer</li>
                <li>• Still recommended to pass a formal by-law</li>
                <li>• Ensures ongoing protection</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Common Misconceptions */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 mb-12">
          <div className="flex items-start gap-4 mb-6">
            <Users className="w-8 h-8 text-primary-600 shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                "I Voted Against This Before—Did I Make a Mistake?"
              </h3>
              <p className="text-gray-600">
                Many owners vote against or abstain from Standard Unit By-Law votes because it sounds complicated 
                or they're not sure what it does. That's completely understandable. Here's the truth:
              </p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
              <span className="text-red-500 font-bold text-lg">✗</span>
              <div>
                <p className="font-medium text-gray-800">"This benefits the corporation, not me"</p>
                <p className="text-sm text-gray-600 mt-1">
                  <strong>Reality:</strong> The by-law protects <em>you</em> by ensuring you only pay for what's 
                  genuinely your responsibility. Without it, you could get stuck paying for things the 
                  building should cover.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
              <span className="text-red-500 font-bold text-lg">✗</span>
              <div>
                <p className="font-medium text-gray-800">"It will increase my fees"</p>
                <p className="text-sm text-gray-600 mt-1">
                  <strong>Reality:</strong> The by-law doesn't directly affect fees. In fact, it can help 
                  <em>reduce</em> overall costs by preventing disputes, legal fees, and ensuring the 
                  right party pays for repairs.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
              <span className="text-red-500 font-bold text-lg">✗</span>
              <div>
                <p className="font-medium text-gray-800">"This only matters if I cause damage"</p>
                <p className="text-sm text-gray-600 mt-1">
                  <strong>Reality:</strong> You're protected even when <em>someone else</em> causes damage 
                  that affects your unit. The by-law ensures repairs happen quickly and the right party pays.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
              <span className="text-red-500 font-bold text-lg">✗</span>
              <div>
                <p className="font-medium text-gray-800">"I haven't done any renovations, so I don't need this"</p>
                <p className="text-sm text-gray-600 mt-1">
                  <strong>Reality:</strong> Owners with original units benefit <em>the most</em>. The by-law 
                  ensures you're not subsidizing your neighbors' luxury upgrades through higher fees. It also 
                  clarifies what insurance you need.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Deductible Trend */}
        <div className="bg-gray-900 rounded-2xl p-6 sm:p-8 text-white mb-12">
          <div className="flex items-start gap-4 mb-6">
            <TrendingUp className="w-8 h-8 text-amber-400 shrink-0" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Why This Matters More Now Than Ever</h3>
              <p className="text-gray-300">
                Insurance deductibles have skyrocketed. The amount you could be charged back has increased dramatically.
              </p>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-gray-800 rounded-xl">
              <p className="text-gray-400 text-sm mb-1">10 Years Ago</p>
              <p className="text-2xl font-bold text-white">$5,000 - $10,000</p>
              <p className="text-gray-400 text-sm">Typical deductible</p>
            </div>
            
            <div className="text-center p-4 bg-gray-800 rounded-xl">
              <p className="text-gray-400 text-sm mb-1">Today (Typical)</p>
              <p className="text-2xl font-bold text-amber-400">$25,000 - $50,000</p>
              <p className="text-gray-400 text-sm">Common range</p>
            </div>
            
            <div className="text-center p-4 bg-gray-800 rounded-xl">
              <p className="text-gray-400 text-sm mb-1">High-Risk Buildings</p>
              <p className="text-2xl font-bold text-red-400">Up to $250,000</p>
              <p className="text-gray-400 text-sm">Water damage claims</p>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gray-800 rounded-lg">
            <p className="text-gray-300">
              <strong className="text-white">Bottom line:</strong> With deductibles this high, having a clear 
              Standard Unit By-Law that defines exactly what you're responsible for isn't optional—it's essential financial protection.
            </p>
          </div>
          
          <p className="mt-4 text-sm text-gray-400">
            <strong className="text-gray-200">Source:</strong> <a href="https://www.rcllp.ca/post/ontcondolaw/what-s-a-reasonable-deductible-for-condominiums" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-300">RCLLP Legal Analysis (Feb 2024)</a>
          </p>
        </div>

        {/* Vote CTA */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-6 sm:p-8 text-white text-center">
          <Vote className="w-12 h-12 mx-auto mb-4 text-green-200" />
          <h3 className="text-2xl font-bold mb-3">Vote YES on the Standard Unit By-Law</h3>
          <p className="text-green-100 max-w-2xl mx-auto mb-4">
            This isn't about benefiting the corporation or the property manager. It's about protecting 
            <strong> every owner</strong> in the building—including you. Clear definitions. Fair responsibility. 
            No surprises.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="bg-green-800/50 px-4 py-2 rounded-full">Clear responsibilities</div>
            <div className="bg-green-800/50 px-4 py-2 rounded-full">Stop subsidizing neighbors' upgrades</div>
            <div className="bg-green-800/50 px-4 py-2 rounded-full">Faster repairs, no disputes</div>
          </div>
        </div>
      </div>
    </section>
  );
}
