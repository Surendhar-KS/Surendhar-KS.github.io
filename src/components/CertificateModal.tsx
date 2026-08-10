'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export type Certificate = {
  title: string;
  path: string;
};

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  certificates: Certificate[];
}

export default function CertificateModal({ isOpen, onClose, certificates }: CertificateModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Reset to first cert when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen || !certificates || certificates.length === 0) return null;

  const currentCert = certificates[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % certificates.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  const handlePrint = () => {
    // Safest way to print a PDF across all browsers is to open it in a new tab
    window.open(currentCert.path, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-[#1a1a1a] w-full max-w-5xl h-[85vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-white/10"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#111]">
              <div className="flex items-center gap-4">
                <h3 className="text-white font-semibold text-lg">{currentCert.title}</h3>
                {certificates.length > 1 && (
                  <span className="text-white/50 text-sm">
                    ({currentIndex + 1} of {certificates.length})
                  </span>
                )}
              </div>
              
              <div className="flex items-center gap-2 md:gap-4">
                <button
                  onClick={handlePrint}
                  className="px-4 py-2 text-sm font-medium text-white hover:bg-white/10 rounded-lg transition-colors flex items-center gap-2"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
                  <span className="hidden md:inline">Print / View</span>
                </button>
                <a
                  href={currentCert.path}
                  download={currentCert.title}
                  className="px-4 py-2 text-sm font-medium bg-white text-black hover:bg-gray-200 rounded-lg transition-colors flex items-center gap-2"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                  <span className="hidden md:inline">Save</span>
                </a>
                <button
                  onClick={onClose}
                  className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors ml-2"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
              </div>
            </div>

            {/* Viewer Body */}
            <div className="flex-1 relative bg-neutral-900 w-full h-full flex items-center justify-center">
              
              {/* Prev Button */}
              {certificates.length > 1 && (
                <button 
                  onClick={handlePrev}
                  className="absolute left-4 z-10 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md transition-all shadow-lg"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                </button>
              )}

              {/* PDF iframe */}
              <iframe 
                src={`${currentCert.path}#view=FitH`} 
                className="w-full h-full bg-white"
                title={currentCert.title}
                frameBorder="0"
              />

              {/* Next Button */}
              {certificates.length > 1 && (
                <button 
                  onClick={handleNext}
                  className="absolute right-4 z-10 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md transition-all shadow-lg"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </button>
              )}

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
