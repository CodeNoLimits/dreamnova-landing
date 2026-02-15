'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Lock, User, ArrowRight, Loader2, Chrome } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';

export default function RegisterPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters long.');
      return;
    }

    setIsLoading(true);

    try {
      const supabase = createClient();
      const { error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          },
        },
      });

      if (signUpError) {
        setError(signUpError.message);
        return;
      }

      // Show success message and redirect after a delay
      alert(
        'Account created! Please check your email to verify your account before signing in.'
      );
      window.location.href = '/login';
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    setIsGoogleLoading(true);
    setError(null);

    try {
      const supabase = createClient();
      const { error: googleError } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      if (googleError) {
        setError(googleError.message);
      }
    } catch (err) {
      setError('Failed to sign up with Google. Please try again.');
      console.error(err);
    } finally {
      setIsGoogleLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' as const },
    },
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-md"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-8">
          <h1 className="font-display text-4xl font-bold mb-3">
            <span className="text-gold">DREAM</span>
            <span className="text-cyan">NOVA</span>
          </h1>
          <p className="text-light-gray font-display text-sm tracking-wider uppercase">
            Join The Journey
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          variants={itemVariants}
          className="bg-sacred-card border border-gold/30 rounded-xl p-8 backdrop-blur-sm"
        >
          {/* Error Message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 mb-6"
            >
              <p className="text-red-400 text-sm">{error}</p>
            </motion.div>
          )}

          {/* Full Name Input */}
          <motion.div variants={itemVariants} className="mb-5">
            <label htmlFor="fullName" className="block text-light-gray text-sm font-semibold mb-2">
              Full Name
            </label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gold/50" />
              <input
                id="fullName"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Your Full Name"
                required
                disabled={isLoading}
                className="w-full bg-sacred-black border border-gold/20 rounded-lg pl-12 pr-4 py-3 text-light-gray placeholder-dark-gray focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/50 transition-all disabled:opacity-50"
              />
            </div>
          </motion.div>

          {/* Email Input */}
          <motion.div variants={itemVariants} className="mb-5">
            <label htmlFor="email" className="block text-light-gray text-sm font-semibold mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gold/50" />
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="hello@dreamnova.com"
                required
                disabled={isLoading}
                className="w-full bg-sacred-black border border-gold/20 rounded-lg pl-12 pr-4 py-3 text-light-gray placeholder-dark-gray focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/50 transition-all disabled:opacity-50"
              />
            </div>
          </motion.div>

          {/* Password Input */}
          <motion.div variants={itemVariants} className="mb-5">
            <label htmlFor="password" className="block text-light-gray text-sm font-semibold mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gold/50" />
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                disabled={isLoading}
                className="w-full bg-sacred-black border border-gold/20 rounded-lg pl-12 pr-4 py-3 text-light-gray placeholder-dark-gray focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/50 transition-all disabled:opacity-50"
              />
            </div>
            <p className="text-dark-gray text-xs mt-1">At least 8 characters</p>
          </motion.div>

          {/* Confirm Password Input */}
          <motion.div variants={itemVariants} className="mb-6">
            <label htmlFor="confirmPassword" className="block text-light-gray text-sm font-semibold mb-2">
              Confirm Password
            </label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gold/50" />
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••"
                required
                disabled={isLoading}
                className="w-full bg-sacred-black border border-gold/20 rounded-lg pl-12 pr-4 py-3 text-light-gray placeholder-dark-gray focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/50 transition-all disabled:opacity-50"
              />
            </div>
          </motion.div>

          {/* Sign Up Button */}
          <motion.button
            variants={itemVariants}
            onClick={handleSubmit}
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-gold to-gold/80 text-sacred-black font-display font-bold uppercase tracking-wider py-3 rounded-lg hover:shadow-lg hover:shadow-gold/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Creating Account...
              </>
            ) : (
              <>
                Create Account
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </motion.button>

          {/* Divider */}
          <motion.div variants={itemVariants} className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-gold/20"></div>
            <span className="text-dark-gray text-xs font-mono uppercase tracking-wider">Or</span>
            <div className="flex-1 h-px bg-gold/20"></div>
          </motion.div>

          {/* Google Sign Up Button */}
          <motion.button
            variants={itemVariants}
            onClick={handleGoogleSignUp}
            disabled={isGoogleLoading}
            className="w-full border border-gold/30 text-light-gray font-display font-semibold uppercase tracking-wider py-3 rounded-lg hover:bg-gold/10 hover:border-gold/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
          >
            {isGoogleLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Connecting...
              </>
            ) : (
              <>
                <Chrome className="w-5 h-5" />
                Sign Up with Google
              </>
            )}
          </motion.button>
        </motion.div>

        {/* Footer Links */}
        <motion.div variants={itemVariants} className="text-center mt-8">
          <p className="text-dark-gray text-sm">
            Already have an account?{' '}
            <Link
              href="/login"
              className="text-gold hover:text-gold/80 font-semibold transition-colors"
            >
              Sign in
            </Link>
          </p>
          <p className="text-dark-gray text-xs mt-4">
            <a href="/" className="text-gold/60 hover:text-gold transition-colors">
              Back to Home
            </a>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
