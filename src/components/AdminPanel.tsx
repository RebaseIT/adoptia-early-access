import React, { useState, useEffect } from 'react';
import { Users, Globe, AlertCircle } from 'lucide-react';

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-800">Admin Panel</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl"
            >
              ×
            </button>
          </div>
        </div>

        <div className="p-6">
          {/* Info Message */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
            <AlertCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-blue-800 mb-2">
              Data Stored in Google Sheets
            </h3>
            <p className="text-blue-700 mb-4">
              All waitlist emails are now stored directly in your Google Spreadsheet. 
              To view and manage your subscribers, please check your Google Sheets document.
            </p>
            <div className="bg-white rounded-lg p-4 border border-blue-200">
              <p className="text-sm text-gray-600">
                <strong>To access your data:</strong><br />
                1. Go to your Google Sheets document<br />
                2. Look for the "Waitlist" sheet<br />
                3. All subscriber emails, languages, and timestamps are stored there
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};