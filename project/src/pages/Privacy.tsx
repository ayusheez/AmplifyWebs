import React from 'react';
import { Shield, Lock, Eye, UserCheck } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="pt-24 min-h-screen bg-gradient-to-r from-black via-purple-900/20 to-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-100">
          Privacy Policy
        </h1>

        <div className="space-y-8">
          <div className="bg-purple-900/10 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20">
            <div className="flex items-center mb-4">
              <Shield className="w-6 h-6 text-purple-300 mr-3" />
              <h2 className="text-2xl font-semibold text-purple-100">Data Protection</h2>
            </div>
            <p className="text-purple-200/70">
              At AmplifyWebs, we take the protection of your personal data seriously. We implement appropriate technical and organizational measures to ensure the security of your information.
            </p>
          </div>

          <div className="bg-purple-900/10 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20">
            <div className="flex items-center mb-4">
              <Lock className="w-6 h-6 text-purple-300 mr-3" />
              <h2 className="text-2xl font-semibold text-purple-100">Information We Collect</h2>
            </div>
            <p className="text-purple-200/70 mb-4">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc list-inside text-purple-200/70 space-y-2">
              <li>Name and contact information</li>
              <li>Account credentials</li>
              <li>Payment information</li>
              <li>Communication preferences</li>
              <li>Website usage data</li>
            </ul>
          </div>

          <div className="bg-purple-900/10 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20">
            <div className="flex items-center mb-4">
              <Eye className="w-6 h-6 text-purple-300 mr-3" />
              <h2 className="text-2xl font-semibold text-purple-100">How We Use Your Information</h2>
            </div>
            <p className="text-purple-200/70 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-purple-200/70 space-y-2">
              <li>Provide and maintain our services</li>
              <li>Process your transactions</li>
              <li>Send you technical notices and support messages</li>
              <li>Communicate with you about products, services, and events</li>
              <li>Improve our services and develop new features</li>
            </ul>
          </div>

          <div className="bg-purple-900/10 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20">
            <div className="flex items-center mb-4">
              <UserCheck className="w-6 h-6 text-purple-300 mr-3" />
              <h2 className="text-2xl font-semibold text-purple-100">Your Rights</h2>
            </div>
            <p className="text-purple-200/70 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-purple-200/70 space-y-2">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to data processing</li>
              <li>Request data portability</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-purple-200/70 text-sm">
          <p>Last updated: March 15, 2024</p>
        </div>
      </div>
    </div>
  );
}