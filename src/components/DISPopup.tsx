'use client';

import { useState, useEffect } from 'react';
import { X, Phone, Globe, Mail, MessageCircle } from 'lucide-react';
import Image from 'next/image';

export default function DISPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup after a short delay when component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000); // 2 second delay

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4">
      <div className="relative bg-white rounded-lg shadow-xl max-w-5xl w-full max-h-[95vh] overflow-auto">
        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 z-10 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors"
          aria-label="Close popup"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        <div className="p-6 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Image 
                src="/solitive-logo.png" 
                alt="Solitive Technologies" 
                width={256}
                height={80}
                className="w-64 h-20 object-contain"
              />
            </div>
            <div className="text-white px-4 py-2 rounded-lg">
              <div className="text-center">
                <Image src="/fbr-logo.png" alt="FBR Digital Invoicing System" width={256} height={80} className="w-64 h-20 object-contain" />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-4">
            {/* Title */}
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                <span className="text-blue-600">FBR</span> Digital Invoicing System
              </h1>
              <p className="text-xl text-red-600 font-semibold">Now Mandatory for all businesses</p>
              <p className="text-gray-600 mt-1">Secure, PRAL-Integrated Billing for Every Business</p>
            </div>

            {/* Two Column Layout */}
            <div className="grid md:grid-cols-2 gap-4">
              {/* Left Column */}
              <div className="space-y-4">
                {/* Attention */}
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-red-500 text-white p-2 rounded-full">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-red-700 font-bold mb-2">Attention Business Owners</h3>
                      <p className="text-sm text-gray-700">
                                              All corporate and non-corporate sales tax registered persons <strong>must</strong> integrate their 
                      invoicing systems with FBR&apos;s new platform for real-time tax reporting.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Pricing */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                  <p className="text-blue-700 font-bold text-xl">
                    Starting From Just <span className="text-3xl text-blue-800">RS. 10</span> per invoice
                  </p>
                </div>

                {/* Features */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h3 className="text-green-700 font-bold mb-2">FBR INTEGRATED INVOICING SOFTWARE</h3>
                  <p className="font-semibold text-gray-800 mb-1">Fast | Secure | Reliable</p>
                  <p className="text-sm text-gray-600">Retailers, Wholesalers & Manufacturers – For all Businesses</p>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                {/* Update */}
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h3 className="text-purple-700 font-bold mb-2">Exciting Update</h3>
                  <p className="text-sm text-gray-700 mb-2">
                    We&apos;ve successfully set up Digital Invoicing integration with ERP:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    <li>API integration with FBR</li>
                    <li>PRAL Integration via APIs</li>
                    <li>Sandbox Token Generation & Testing</li>
                    <li>ERP Setup & Training</li>
                  </ul>
                </div>

                {/* Trust */}
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h3 className="text-yellow-700 font-bold mb-2">Trusted by Industry Leaders</h3>
                  <p className="text-sm text-gray-700">
                    Companies like <strong>Jadeed Group</strong> trust our invoicing solution for reliable and compliant ERP integration.
                  </p>
                </div>

                {/* WhatsApp */}
                <div className="bg-green-500 text-white rounded-lg p-4 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <MessageCircle className="w-5 h-5" />
                    <span className="font-bold">WhatsApp Now:</span>
                  </div>
                  <a 
                    href="https://wa.me/923343196739" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xl font-bold hover:underline"
                  >
                    0334 3196739
                  </a>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t pt-3 mt-4">
              {/* Contact */}
              <div className="grid grid-cols-3 gap-4 mb-3">
                <div className="flex items-center gap-2 text-blue-600">
                  <Globe className="w-4 h-4" />
                  <span className="font-semibold text-sm">Solitive.net</span>
                </div>
                <div className="flex items-center gap-2 text-blue-600">
                  <Phone className="w-4 h-4" />
                  <span className="font-semibold text-sm">0334 3196739</span>
                </div>
                <div className="flex items-center gap-2 text-blue-600">
                  <Mail className="w-4 h-4" />
                  <span className="font-semibold text-sm">info@solitive.net</span>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <a
                  href="/services/e-invoicing"
                  onClick={() => setIsVisible(false)}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors text-center block"
                >
                  Learn More
                </a>
                <button
                  onClick={() => setIsVisible(false)}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-lg transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}