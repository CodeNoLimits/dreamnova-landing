'use client';

import { useTranslation } from '@/lib/LanguageContext';

import { useState, FormEvent, ChangeEvent } from 'react';
import { Navbar } from '@/components/shared/navbar';
import { Footer } from '@/components/shared/footer';
import { SacredButton } from '@/components/shared/sacred-button';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, CheckCircle } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' as const },
  },
};

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactPage() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to send message');
      }

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(
        error instanceof Error ? error.message : 'An error occurred while sending your message'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-[#050508] via-[#0a0a0f] to-[#050508]">
        {/* Hero Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="relative py-20 px-4 text-center"
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#D4AF37] to-cyan-300 bg-clip-text text-transparent mb-6"
            >
              Get in Touch
            </motion.h1>
            <motion.p variants={itemVariants} className="text-xl text-gray-300">
              Have questions about Dream Nova? We're here to help you on your transformation journey.
            </motion.p>
          </div>
        </motion.section>

        {/* Main Content Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="relative py-20 px-4"
        >
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <form
                onSubmit={handleSubmit}
                className="bg-gradient-to-br from-[#D4AF37]/10 to-cyan-500/10 border border-[#D4AF37]/30 rounded-3xl p-8 md:p-12 space-y-6"
              >
                <div>
                  <label htmlFor="name" className="block text-white font-semibold mb-3">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-3 bg-[#0a0a0f] border border-gray-600 text-white rounded-lg focus:outline-none focus:border-cyan-400 transition-colors duration-300"
                    placeholder={t("contact.placeholder.name")}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white font-semibold mb-3">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-3 bg-[#0a0a0f] border border-gray-600 text-white rounded-lg focus:outline-none focus:border-cyan-400 transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-semibold mb-3">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-6 py-3 bg-[#0a0a0f] border border-gray-600 text-white rounded-lg focus:outline-none focus:border-cyan-400 transition-colors duration-300 resize-none"
                    placeholder="Tell us about your inquiry..."
                  />
                </div>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-500/20 border border-green-500/50 text-green-300 px-6 py-4 rounded-lg flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5" />
                    <span>Message sent successfully! We'll get back to you soon.</span>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-500/20 border border-red-500/50 text-red-300 px-6 py-4 rounded-lg"
                  >
                    <p className="font-semibold">{t("contact.error")}</p>
                    <p className="text-sm">{errorMessage}</p>
                  </motion.div>
                )}

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-6"
                >
                  <SacredButton disabled={isSubmitting} className="w-full">
                    <span className="flex items-center justify-center gap-2">
                      <Send className="w-5 h-5" />
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </span>
                  </SacredButton>
                </motion.button>
              </form>
            </motion.div>

            {/* Company Info Sidebar */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="bg-gradient-to-br from-[#D4AF37]/5 to-cyan-500/5 border border-[#D4AF37]/30 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">{t("contact.brand")}</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <MapPin className="w-6 h-6 text-[#D4AF37] mt-1" />
                    </div>
                    <div>
                      <p className="font-semibold text-white mb-1">{t("contact.location.title")}</p>
                      <p className="text-gray-400">{t("contact.location")}</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <Mail className="w-6 h-6 text-cyan-400 mt-1" />
                    </div>
                    <div>
                      <p className="font-semibold text-white mb-1">Email</p>
                      <a
                        href="mailto:hello@dreamnova.com"
                        className="text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        hello@dreamnova.com
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <Phone className="w-6 h-6 text-[#D4AF37] mt-1" />
                    </div>
                    <div>
                      <p className="font-semibold text-white mb-1">{t("contact.response.time")}</p>
                      <p className="text-gray-400">Within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Info Cards */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-cyan-500/10 to-[#D4AF37]/10 border border-cyan-400/30 rounded-2xl p-6"
              >
                <h4 className="font-semibold text-cyan-300 mb-2">{t("contact.quick")}</h4>
                <p className="text-gray-400 text-sm">
                  Our team typically responds to inquiries within 24 hours on business days.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-[#D4AF37]/10 to-cyan-500/10 border border-[#D4AF37]/30 rounded-2xl p-6"
              >
                <h4 className="font-semibold text-[#D4AF37] mb-2">{t("contact.secure")}</h4>
                <p className="text-gray-400 text-sm">
                  Your information is protected and treated with complete confidentiality.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* FAQ Preview Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="relative py-20 px-4"
        >
          <div className="max-w-4xl mx-auto">
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold text-white text-center mb-12"
            >
              Frequently Asked <span className="text-[#D4AF37]">{t("contact.questions")}</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  question: 'How long does delivery take?',
                  answer:
                    'Nova Keys are shipped within 5-7 business days. Standard shipping typically takes 7-14 days.',
                },
                {
                  question: 'Is there a warranty?',
                  answer:
                    'Yes, all Nova Keys come with a lifetime warranty covering manufacturing defects.',
                },
                {
                  question: 'Can I return my order?',
                  answer:
                    'We offer a 30-day satisfaction guarantee. If you are not satisfied, we will provide a full refund.',
                },
                {
                  question: 'What is the activation process?',
                  answer:
                    'Simply scan your Nova Key with any NFC-enabled device. Activation is instant and permanent.',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gradient-to-br from-[#D4AF37]/5 to-cyan-500/5 border border-gray-700 rounded-xl p-6 hover:border-cyan-400/30 transition-colors duration-300"
                >
                  <h3 className="font-bold text-white mb-3">{item.question}</h3>
                  <p className="text-gray-400">{item.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </>
  );
}
