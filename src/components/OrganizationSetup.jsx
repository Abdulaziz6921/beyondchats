import React, { useState } from "react";
import { Globe, ArrowRight, CheckCircle, Clock, Search } from "lucide-react";

export function OrganizationSetup({ onComplete }) {
  const [webpages] = useState([
    { url: "/about", status: "scraped" },
    { url: "/pricing", status: "pending" },
    { url: "/contact", status: "detected" },
  ]);

  return (
    <div className="w-full max-w-2xl">
      <h2 className="text-2xl font-bold text-center mb-8">
        Organization Setup
      </h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          onComplete();
        }}
        className="space-y-6"
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Company Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 border-2 rounded-lg focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Website URL
            </label>
            <div className="relative">
              <Globe className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type="url"
                className="w-full pl-12 pr-4 py-3 border-2 rounded-lg focus:border-blue-500 focus:ring-blue-500"
                placeholder="https://example.com"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              className="w-full px-4 py-3 border-2 rounded-lg focus:border-blue-500 focus:ring-blue-500"
              rows={4}
              required
            />
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="font-semibold mb-4">Detected Webpages</h3>
          <div className="space-y-3">
            {webpages.map((page) => (
              <div
                key={page.url}
                className="flex items-center justify-between p-3 bg-white rounded-lg border hover:border-blue-500 cursor-pointer transition-colors"
              >
                <span className="text-gray-700">{page.url}</span>
                <div className="flex items-center gap-2">
                  {page.status === "scraped" && (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  )}
                  {page.status === "pending" && (
                    <Clock className="w-5 h-5 text-yellow-500" />
                  )}
                  {page.status === "detected" && (
                    <Search className="w-5 h-5 text-gray-400" />
                  )}
                  <span className="text-sm text-gray-500 capitalize">
                    {page.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
        >
          Continue <ArrowRight className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}
