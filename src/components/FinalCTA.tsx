import { Vote, CheckCircle, ArrowRight } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="max-w-4xl mx-auto text-center">
        <Vote className="w-16 h-16 mx-auto mb-6 text-green-400" />
        
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Vote YES on the Standard Unit By-Law
        </h2>
        
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Protect yourself, protect your neighbors, and bring clarity to your building.
        </p>

        <div className="grid sm:grid-cols-3 gap-4 mb-10 max-w-3xl mx-auto">
          <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
            <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
            <p className="text-white font-medium">Save Money</p>
            <p className="text-gray-400 text-sm">$10,000 - $50,000+ in potential savings per incident</p>
          </div>
          
          <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
            <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
            <p className="text-white font-medium">Get Clarity</p>
            <p className="text-gray-400 text-sm">Know exactly what you're responsible for</p>
          </div>
          
          <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
            <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
            <p className="text-white font-medium">Be Fair</p>
            <p className="text-gray-400 text-sm">Everyone pays for their own choices</p>
          </div>
        </div>

        <div className="bg-gray-800 rounded-2xl p-6 sm:p-8 text-left max-w-2xl mx-auto border border-gray-700">
          <h3 className="text-xl font-semibold text-white mb-4">What To Do Next</h3>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center shrink-0 text-white font-bold">1</div>
              <div>
                <p className="text-white font-medium">Ask your property manager</p>
                <p className="text-gray-400 text-sm">"Does our corporation have a Standard Unit By-Law?"</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center shrink-0 text-white font-bold">2</div>
              <div>
                <p className="text-white font-medium">If no, ask for it to be put to a vote</p>
                <p className="text-gray-400 text-sm">The board can propose this at the next AGM</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center shrink-0 text-white font-bold">3</div>
              <div>
                <p className="text-white font-medium">Share this page with other owners</p>
                <p className="text-gray-400 text-sm">The more owners understand, the more likely it passes</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center shrink-0 text-white font-bold">4</div>
              <div>
                <p className="text-white font-medium">Vote YES when it comes up</p>
                <p className="text-gray-400 text-sm">Protect yourself and every owner in your building</p>
              </div>
            </div>
          </div>
        </div>

        <a 
          href="#calculator" 
          className="inline-flex items-center gap-2 mt-8 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
        >
          Calculate Your Potential Savings
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
