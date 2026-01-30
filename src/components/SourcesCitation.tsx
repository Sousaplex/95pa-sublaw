import { BookOpen, ExternalLink, Scale, BarChart3 } from 'lucide-react';
import { dataSources, legalReferences, keyStatistics } from '../data/sources';

export function SourcesCitation() {
  return (
    <section id="sources" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <BookOpen className="w-4 h-4" />
            References
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Data Sources & Legal References
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            All figures and information are sourced from trusted public sources.
          </p>
        </div>

        {/* Legal References */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Scale className="w-6 h-6 text-primary-600" />
            <h3 className="text-xl font-semibold text-gray-900">Key Legal Provisions</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            {Object.values(legalReferences).map((ref, index) => (
              <div key={index} className="bg-white rounded-xl p-5 border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">{ref.title}</h4>
                <p className="text-sm text-gray-600">{ref.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Statistics */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <BarChart3 className="w-6 h-6 text-amber-600" />
            <h3 className="text-xl font-semibold text-gray-900">Key Statistics Used</h3>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-5 py-3 text-sm font-semibold text-gray-700">Metric</th>
                  <th className="text-left px-5 py-3 text-sm font-semibold text-gray-700">Value</th>
                  <th className="text-left px-5 py-3 text-sm font-semibold text-gray-700">Source</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-5 py-4 text-sm text-gray-900">Corporation Deductible Range</td>
                  <td className="px-5 py-4 text-sm text-gray-600">$10,000 - $250,000</td>
                  <td className="px-5 py-4 text-sm text-gray-500">RCLLP Legal, Industry Data</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 text-sm text-gray-900">Deductible Increase</td>
                  <td className="px-5 py-4 text-sm text-gray-600">{keyStatistics.deductibleIncrease.past} → {keyStatistics.deductibleIncrease.current}</td>
                  <td className="px-5 py-4 text-sm text-gray-500">{keyStatistics.deductibleIncrease.source}</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 text-sm text-gray-900">Water Damage Claims</td>
                  <td className="px-5 py-4 text-sm text-gray-600">{keyStatistics.waterDamageFrequency.stat}</td>
                  <td className="px-5 py-4 text-sm text-gray-500">{keyStatistics.waterDamageFrequency.source}</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 text-sm text-gray-900">Water Damage Repair Cost</td>
                  <td className="px-5 py-4 text-sm text-gray-600">$2,000 - $30,000+</td>
                  <td className="px-5 py-4 text-sm text-gray-500">Toronto Restoration Industry (2024-2025)</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 text-sm text-gray-900">Owner Insurance (HO6) Cost</td>
                  <td className="px-5 py-4 text-sm text-gray-600">$200 - $600/year</td>
                  <td className="px-5 py-4 text-sm text-gray-500">RateHub Canada</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 text-sm text-gray-900">Court Precedent</td>
                  <td className="px-5 py-4 text-sm text-gray-600">{keyStatistics.courtPrecedent.stat}</td>
                  <td className="px-5 py-4 text-sm text-gray-500">{keyStatistics.courtPrecedent.source}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Data Sources */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <ExternalLink className="w-6 h-6 text-green-600" />
            <h3 className="text-xl font-semibold text-gray-900">Trusted Sources</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {dataSources.map((source, index) => (
              <a
                key={index}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-5 border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all group"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h4 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                      {source.name}
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">{source.description}</p>
                    <p className="text-xs text-gray-400 mt-2">Last accessed: {source.lastAccessed}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-primary-500 shrink-0" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
