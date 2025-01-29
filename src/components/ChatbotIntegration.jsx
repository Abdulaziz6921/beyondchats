import React, { useState } from "react";
import { Code, Mail, Share2, ExternalLink, PartyPopper } from "lucide-react";

export function ChatbotIntegration({ onComplete }) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleTest = () => {
    setIsSuccess(true);
    setTimeout(() => {
      onComplete();
    }, 3000);
  };

  if (isSuccess) {
    return (
      <div className="w-full max-w-2xl text-center space-y-8">
        <PartyPopper className="w-16 h-16 text-blue-600 mx-auto" />
        <h2 className="text-2xl font-bold">Integration Successful!</h2>
        <p className="text-gray-600">
          Your chatbot is now ready to assist your customers.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
            Explore Admin Panel <ExternalLink className="w-4 h-4" />
          </button>
          <button className="px-6 py-3 border-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
            Share <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl">
      <h2 className="text-2xl font-bold text-center mb-8">
        Chatbot Integration
      </h2>

      {showFeedback && (
        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <form className="space-y-4">
            <textarea
              placeholder="Describe the issue you're experiencing..."
              className="w-full px-4 py-3 border-2 rounded-lg focus:border-blue-500 focus:ring-blue-500"
              rows={4}
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Submit Feedback
            </button>
          </form>
        </div>
      )}

      <div className="space-y-6">
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="font-semibold mb-4">Integration Code</h3>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
            &lt;script src="https://example.com/chatbot.js"&gt;&lt;/script&gt;
          </div>
          <div className="mt-4 flex gap-4">
            <button className="px-4 py-2 border-2 rounded-lg hover:bg-white transition-colors flex items-center gap-2">
              <Code className="w-4 h-4" /> Copy Code
            </button>
            <button className="px-4 py-2 border-2 rounded-lg hover:bg-white transition-colors flex items-center gap-2">
              <Mail className="w-4 h-4" /> Email to Developer
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          <button
            onClick={handleTest}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Test Integration
          </button>
          <button
            onClick={() => setShowFeedback(!showFeedback)}
            className="text-blue-600 hover:underline"
          >
            Chatbot not working?
          </button>
        </div>
      </div>
    </div>
  );
}
