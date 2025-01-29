import React, { useState } from "react";
import { Mail, Lock, User, ArrowRight, AlertCircle } from "lucide-react";

export function RegistrationForm({ onComplete }) {
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const [email, setEmail] = useState("");
  const [sentCode, setSentCode] = useState("");
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const generateVerificationCode = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Generate a 6-digit code
    const code = generateVerificationCode();
    setSentCode(code);

    try {
      // In a real app, this would be an API call to your backend
      console.log(`Sending verification code ${code} to ${email}`);

      // Simulate email sending (in production, this would be a real email service)
      alert(`For demo purposes, your verification code is: ${code}`);

      setIsVerifying(true);
    } catch (err) {
      setError("Failed to send verification code. Please try again.");
    }
  };

  const handleVerification = (e) => {
    e.preventDefault();
    setError("");

    // Validate the entered code
    if (verificationCode === sentCode) {
      // Store user data (in production, this would be sent to your backend)
      const userData = {
        name,
        email,
        password,
        verifiedAt: new Date().toISOString(),
      };
      console.log("User verified:", userData);

      onComplete();
    } else {
      setError("Invalid verification code. Please try again.");
    }
  };

  if (isVerifying) {
    return (
      <form onSubmit={handleVerification} className="space-y-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-8">
          Verify Your Email
        </h2>
        <p className="text-gray-600 text-center mb-6">
          We've sent a verification code to {email}
        </p>
        <div className="flex justify-center gap-2">
          {[...Array(6)].map((_, i) => (
            <input
              key={i}
              type="text"
              maxLength={1}
              className="w-12 h-12 text-center border-2 rounded-lg focus:border-blue-500 focus:ring-blue-500"
              value={verificationCode[i] || ""}
              onChange={(e) => {
                const newCode = verificationCode.split("");
                newCode[i] = e.target.value;
                setVerificationCode(newCode.join(""));
                if (e.target.value && e.target.nextElementSibling) {
                  e.target.nextElementSibling.focus();
                }
              }}
            />
          ))}
        </div>
        {error && (
          <div className="flex items-center gap-2 text-red-600 justify-center">
            <AlertCircle className="w-4 h-4" />
            <span>{error}</span>
          </div>
        )}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
        >
          Verify <ArrowRight className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={() => {
            setVerificationCode("");
            handleSubmit(new Event("submit"));
          }}
          className="w-full text-blue-600 hover:underline text-sm"
        >
          Resend Code
        </button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md">
      <h2 className="text-2xl font-bold text-center mb-8">
        Create Your Account
      </h2>
      <div className="space-y-4">
        <div className="relative">
          <User className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border-2 rounded-lg focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        <div className="relative">
          <Mail className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border-2 rounded-lg focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        <div className="relative">
          <Lock className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border-2 rounded-lg focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
      </div>

      {error && (
        <div className="flex items-center gap-2 text-red-600 justify-center">
          <AlertCircle className="w-4 h-4" />
          <span>{error}</span>
        </div>
      )}

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
      >
        Continue <ArrowRight className="w-4 h-4" />
      </button>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">Or continue with</span>
        </div>
      </div>

      <button
        type="button"
        className="w-full border-2 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
      >
        <img
          src="https://www.google.com/favicon.ico"
          alt="Google"
          className="w-5 h-5"
        />
        Google
      </button>
    </form>
  );
}
