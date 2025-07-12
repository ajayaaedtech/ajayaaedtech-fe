"use client";
import { useState } from 'react';
import { Download, FileText, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

export default function BrochureDownloadSection() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
      setIsDownloaded(true);

      const link = document.createElement('a');
      link.href = '/ajayaa-pdf.pdf';
      link.download = 'ajayaa-pdf.pdf';
      link.click();

      setTimeout(() => setIsDownloaded(false), 3000);
    }, 1500);
  };

  return (
    <section className="relative bg-gradient-to-br from-[#004EA5] via-[#01319E] to-[#5598B5] py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#004EA5] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#5598B5] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#01319E] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-500"></div>
      </div>

      {/* Floating sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            <Sparkles className="w-4 h-4 text-white opacity-20" />
          </div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8 sm:p-12 lg:p-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left Section */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-r from-[#004EA5] to-[#5598B5] rounded-xl">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-[#B3D4EE] font-semibold text-sm uppercase tracking-wider">
                    Digital Resources
                  </span>
                </div>

                <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Get Our Complete
                  <span className="block bg-gradient-to-r from-[#B3D4EE] to-white bg-clip-text text-transparent">
                    Educational Guide
                  </span>
                </h2>

                <p className="text-sky-100 text-lg leading-relaxed">
                  Unlock the future of education with Ajayaa EdTech`&apos`s comprehensive brochure.
                  Discover innovative solutions, success stories, and how we`&apos`re transforming
                  learning experiences nation wide.
                </p>
              </div>

              {/* Features */}
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'Smart Learning Solutions',
                  'Success Case Studies',
                  'Technology Overview',
                  'Implementation Guide'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 group">
                    <div className="w-2 h-2 bg-gradient-to-r from-[#004EA5] to-[#5598B5] rounded-full group-hover:scale-125 transition-transform"></div>
                    <span className="text-sky-100 group-hover:text-white transition-colors">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <button
                  onClick={handleDownload}
                  disabled={isDownloading}
                  className={`animate-bounce group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500/50 ${
                    isDownloaded
                      ? 'bg-green-500 text-white shadow-lg shadow-green-500/25'
                      : 'bg-gradient-to-r from-[#1A4AA9] to-[#A9791A] text-white shadow-lg hover:shadow-xl'
                  }`}
                >
                  {isDownloading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                      <span>Preparing Download...</span>
                    </>
                  ) : isDownloaded ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      <span>Downloaded Successfully!</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-5 h-5 group-hover:animate-bounce" />
                      <span>Download Brochure</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
                <p className="text-gray-300 text-sm mt-3">Free download • PDF format • 2 MB</p>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#004EA5] to-[#5598B5] rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"></div>

                <div className="relative bg-white rounded-2xl shadow-2xl p-8 transform group-hover:scale-105 transition-transform duration-500">
                  <div className="w-64 h-80 bg-gradient-to-br from-[#D9EFFF] to-[#B3D4EE] rounded-xl relative overflow-hidden">
                    <div className="absolute inset-0 p-6 flex flex-col justify-between">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-[#004EA5] to-[#5598B5] rounded-xl mx-auto mb-4 flex items-center justify-center">
                          <FileText className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-[#004EA5] font-bold text-lg mb-2">Ajayaa EdTech</h3>
                        <p className="text-[#01319E] text-sm">Smart Learning Solutions</p>
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 bg-[#004EA5] rounded-full w-full"></div>
                        <div className="h-2 bg-[#004EA5] rounded-full w-3/4"></div>
                        <div className="h-2 bg-[#004EA5] rounded-full w-1/2"></div>
                      </div>
                    </div>

                    <div className="absolute top-4 right-4 w-8 h-8 bg-white rounded-bl-xl shadow-md transform rotate-12 group-hover:rotate-6 transition-transform"></div>
                  </div>
                </div>

                <div className="absolute -top-6 -right-6 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-xl animate-bounce">
                  📘
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center text-white text-lg animate-pulse">
                  ✨
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
