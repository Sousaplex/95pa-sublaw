import { Shield, ArrowDown, AlertTriangle } from 'lucide-react';

export function Hero() {
  return (
    <section id="what-is-it" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-50 to-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
          <Shield className="w-4 h-4" />
          Ontario Condominium Act, 1998
        </div>
        
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Standard Unit By-Law:<br />
          <span className="text-primary-600">Protecting Your Wallet</span>
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
          Without one, there's no clear answer to <strong>who pays for what</strong> when something goes wrong—leading to disputes, delays, and you potentially paying more than your fair share.
        </p>

        {/* Quick Impact Numbers */}
        <div className="grid sm:grid-cols-3 gap-4 mb-8 max-w-3xl mx-auto">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <p className="text-3xl font-bold text-red-600">Unclear</p>
            <p className="text-sm text-gray-600">Who pays without the by-law?</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <p className="text-3xl font-bold text-green-600">Defined</p>
            <p className="text-sm text-gray-600">Clear rules with the by-law</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <p className="text-3xl font-bold text-primary-600">Fair</p>
            <p className="text-sm text-gray-600">You only pay for your upgrades</p>
          </div>
        </div>

        {/* Hook to keep reading */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8 max-w-2xl mx-auto flex items-start gap-3 text-left">
          <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <p className="text-amber-800 font-medium">Does your building have this by-law?</p>
            <p className="text-amber-700 text-sm">If it was built before 2001, probably not. Keep reading to understand why this matters and what you can do about it.</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 text-left max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            What Is a Standard Unit By-Law?
          </h2>
          
          <p className="text-gray-600 mb-4 leading-relaxed">
            Don't let the legal name intimidate you. It's simply a document that answers one critical question:
          </p>
          
          <div className="bg-primary-50 rounded-xl p-5 mb-6 border-l-4 border-primary-500">
            <p className="text-lg font-medium text-primary-800">
              "When something gets damaged, what does the building's insurance cover vs. what do I pay for myself?"
            </p>
          </div>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Without this by-law, there's no clear answer. That means <strong>arguments, delays, and you paying more than you should</strong>.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-primary-50 rounded-xl p-5">
              <h3 className="font-semibold text-primary-800 mb-2">Building Covers (with by-law)</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Original walls and ceilings</li>
                <li>• Basic flooring as defined</li>
                <li>• Standard plumbing fixtures</li>
                <li>• Original doors and trim</li>
              </ul>
            </div>
            
            <div className="bg-amber-50 rounded-xl p-5">
              <h3 className="font-semibold text-amber-800 mb-2">You Cover (your insurance)</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Upgraded flooring</li>
                <li>• Custom cabinetry</li>
                <li>• Renovated bathrooms</li>
                <li>• Any improvements you made</li>
              </ul>
            </div>
          </div>
        </div>

        <a 
          href="#why-it-matters" 
          className="inline-flex items-center gap-2 mt-8 text-primary-600 hover:text-primary-700 font-medium"
        >
          See the real cost difference
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
