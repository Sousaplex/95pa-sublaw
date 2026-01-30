import { useState, useEffect } from 'react';
import { Vote, X } from 'lucide-react';

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero section (roughly 600px)
      const shouldShow = window.scrollY > 600;
      setIsVisible(shouldShow);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isDismissed || !isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-4 bg-gradient-to-r from-green-600 to-green-700 shadow-lg transform transition-transform duration-300">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Vote className="w-8 h-8 text-green-200 hidden sm:block" />
          <div>
            <p className="text-white font-semibold">Ready to protect yourself?</p>
            <p className="text-green-100 text-sm hidden sm:block">Vote YES on the Standard Unit By-Law</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <a 
            href="#calculator"
            className="bg-white text-green-700 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-green-50 transition-colors whitespace-nowrap"
          >
            See Your Savings
          </a>
          <button 
            onClick={() => setIsDismissed(true)}
            className="text-green-200 hover:text-white p-1"
            aria-label="Dismiss"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
