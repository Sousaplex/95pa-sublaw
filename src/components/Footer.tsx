import { Building2, ExternalLink } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="w-6 h-6 text-primary-400" />
              <span className="font-semibold text-lg">Standard Unit By-Law Guide</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              An educational resource for Ontario condo owners to understand Standard Unit 
              By-Laws and their insurance implications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-200">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#what-is-it" className="text-gray-400 hover:text-white transition-colors">
                  What Is It?
                </a>
              </li>
              <li>
                <a href="#why-it-matters" className="text-gray-400 hover:text-white transition-colors">
                  Why It Matters
                </a>
              </li>
              <li>
                <a href="#insurance" className="text-gray-400 hover:text-white transition-colors">
                  Insurance Implications
                </a>
              </li>
              <li>
                <a href="#calculator" className="text-gray-400 hover:text-white transition-colors">
                  Scenario Calculator
                </a>
              </li>
              <li>
                <a href="#sources" className="text-gray-400 hover:text-white transition-colors">
                  Sources & References
                </a>
              </li>
            </ul>
          </div>

          {/* Official Resources */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-200">Official Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="https://www.condoauthorityontario.ca" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  Condominium Authority of Ontario
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.ontario.ca/laws/statute/98c19" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  Ontario Condominium Act, 1998
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://cci.ca" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  Canadian Condominium Institute
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="bg-gray-800 rounded-lg p-4">
            <p className="text-xs text-gray-400 leading-relaxed">
              <strong className="text-gray-300">Disclaimer:</strong> This website is for educational 
              and informational purposes only. It does not constitute legal, financial, or insurance 
              advice. The information provided is based on publicly available data and may not reflect 
              your specific situation. Always consult your condominium's governing documents and 
              speak with qualified professionals (lawyers, insurance brokers) for advice specific 
              to your circumstances. We are not liable for any decisions made based on this information.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-500">
          <p>&copy; {currentYear} Standard Unit By-Law Guide. Educational resource for Ontario condo owners.</p>
        </div>
      </div>
    </footer>
  );
}
