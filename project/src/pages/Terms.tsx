import React from 'react';
import { FileText, Shield, AlertCircle, HelpCircle } from 'lucide-react';

export default function Terms() {
  return (
    <div className="pt-24 min-h-screen bg-gradient-to-r from-black via-purple-900/20 to-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-100">
          Terms of Service
        </h1>

        <div className="space-y-8">
          <div className="bg-purple-900/10 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20">
            <div className="flex items-center mb-4">
              <FileText className="w-6 h-6 text-purple-300 mr-3" />
              <h2 className="text-2xl font-semibold text-purple-100">Agreement Overview</h2>
            </div>
            <p className="text-purple-200/70">
              By accessing and using AmplifyWebs services, you agree to be bound by these Terms of Service. These terms govern your use of our website templates, customization services, and related features.
            </p>
          </div>

          <div className="bg-purple-900/10 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20">
            <div className="flex items-center mb-4">
              <Shield className="w-6 h-6 text-purple-300 mr-3" />
              <h2 className="text-2xl font-semibold text-purple-100">License & Usage</h2>
            </div>
            <div className="space-y-4 text-purple-200/70">
              <p>
                Upon purchase, we grant you a non-exclusive license to use the website template for a single implementation.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Templates may not be resold or redistributed</li>
                <li>Each license is valid for one website only</li>
                <li>Modifications are allowed for personal/client use</li>
                <li>Credit attribution is not required but appreciated</li>
              </ul>
            </div>
          </div>

          <div className="bg-purple-900/10 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20">
            <div className="flex items-center mb-4">
              <AlertCircle className="w-6 h-6 text-purple-300 mr-3" />
              <h2 className="text-2xl font-semibold text-purple-100">Limitations</h2>
            </div>
            <div className="space-y-4 text-purple-200/70">
              <p>You agree not to:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Use the services for any illegal purposes</li>
                <li>Infringe upon intellectual property rights</li>
                <li>Attempt to reverse engineer the code</li>
                <li>Remove any copyright or proprietary notices</li>
                <li>Transfer the license to another party</li>
              </ul>
            </div>
          </div>

          <div className="bg-purple-900/10 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20">
            <div className="flex items-center mb-4">
              <HelpCircle className="w-6 h-6 text-purple-300 mr-3" />
              <h2 className="text-2xl font-semibold text-purple-100">Support & Updates</h2>
            </div>
            <div className="space-y-4 text-purple-200/70">
              <p>
                We provide technical support for:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Template installation and setup</li>
                <li>Bug fixes and issues</li>
                <li>Basic customization guidance</li>
                <li>Documentation and resources</li>
              </ul>
              <p>
                Support is provided for the duration specified in your purchase package.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-purple-200/70 text-sm">
          <p>Last updated: March 15, 2024</p>
          <p className="mt-2">
            For questions about these terms, please contact our support team.
          </p>
        </div>
      </div>
    </div>
  );
}