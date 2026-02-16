'use client';

import { useTranslation } from '@/lib/LanguageContext';

import { Navbar } from '@/components/shared/navbar';
import { Footer } from '@/components/shared/footer';
import { motion } from 'framer-motion';

export default function PrivacyPage() {
  const { t } = useTranslation();
  const sections = [
    {
      id: 'introduction',
      title: 'Privacy Policy',
      content:
        'At Dream Nova ("Company," "we," "us," or "our"), located in Jerusalem, Israel, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and otherwise handle your information when you visit our website, use our services, and purchase our products.',
    },
    {
      id: 'data-collection',
      title: '1. Information We Collect',
      subsections: [
        {
          subtitle: 'Information You Provide Directly',
          text: 'When you register for an account, make a purchase, or contact us, we collect information such as your name, email address, shipping address, phone number, and payment information. We also collect information from your communications with us.',
        },
        {
          subtitle: 'Information Collected Automatically',
          text: 'When you visit our website, we automatically collect certain information about your device and browsing activity, including IP address, browser type, operating system, pages visited, and referring URLs. We use cookies, pixels, and similar tracking technologies for this purpose.',
        },
        {
          subtitle: 'Third-Party Information',
          text: 'If you sign up using Google or other OAuth providers, we receive information from those services in accordance with their authorization procedures.',
        },
      ],
    },
    {
      id: 'data-usage',
      title: '2. How We Use Your Information',
      subsections: [
        {
          subtitle: 'Service Provision',
          text: 'We use your information to provide, maintain, and improve our services, process orders, deliver products, send transactional emails, and provide customer support.',
        },
        {
          subtitle: 'Marketing Communications',
          text: 'With your consent, we may send you promotional emails, newsletters, and updates about new products or services. You can unsubscribe at any time by clicking the unsubscribe link in any email.',
        },
        {
          subtitle: 'Legal Compliance',
          text: 'We may use your information to comply with applicable laws, regulations, legal processes, and governmental requests.',
        },
        {
          subtitle: 'Fraud Prevention',
          text: 'We use information to detect, prevent, and address fraud, abuse, and other harmful activities.',
        },
      ],
    },
    {
      id: 'cookies',
      title: '3. Cookies and Tracking Technologies',
      content:
        'We use cookies, web beacons, and similar technologies to track user behavior, remember preferences, and understand how you use our website. You can control cookie settings through your browser. However, disabling cookies may affect the functionality of our website.',
    },
    {
      id: 'sharing',
      title: '4. Sharing Your Information',
      subsections: [
        {
          subtitle: 'Service Providers',
          text: 'We share information with third-party service providers who assist us in operating our website, conducting business, or serving you, including payment processors, hosting providers, and email service providers.',
        },
        {
          subtitle: 'Legal Requirements',
          text: 'We may disclose your information if required by law, court order, or governmental authority.',
        },
        {
          subtitle: 'Business Transfers',
          text: 'In the event of a merger, acquisition, or asset sale, your information may be transferred as part of that transaction.',
        },
      ],
    },
    {
      id: 'data-retention',
      title: '5. Data Retention',
      content:
        'We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this Privacy Policy. You may request deletion of your data at any time by contacting us at hello@dreamnova.com.',
    },
    {
      id: 'security',
      title: '6. Data Security',
      content:
        'We implement reasonable technical, administrative, and physical security measures to protect your information. However, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security.',
    },
    {
      id: 'third-party',
      title: '7. Third-Party Links',
      content:
        'Our website may contain links to third-party websites and services. We are not responsible for the privacy practices of these external sites. Please review their privacy policies before providing any information.',
    },
    {
      id: 'rights',
      title: '8. Your Rights',
      subsections: [
        {
          subtitle: 'Access and Control',
          text: 'You have the right to access, review, and request corrections to your personal information.',
        },
        {
          subtitle: 'Deletion',
          text: 'You may request deletion of your account and associated data.',
        },
        {
          subtitle: 'Opt-Out',
          text: 'You can opt out of marketing communications and cookies through your account settings or by contacting us.',
        },
      ],
    },
    {
      id: 'contact',
      title: '9. Contact Us',
      content:
        'If you have questions about this Privacy Policy or our privacy practices, please contact us at:\n\nDream Nova\nJerusalem, Israel\nEmail: hello@dreamnova.com',
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-sacred-black">
        {/* Hero Section */}
        <section className="relative py-16 px-4 border-b border-gold/20">
          <div className="max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-display text-4xl md:text-5xl font-bold mb-4"
            >
              <span className="text-gold">Privacy</span> Policy
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-light-gray text-lg"
            >
              Effective Date: January 1, 2026
            </motion.p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="space-y-4"
              >
                <h2 className="font-display text-2xl md:text-3xl font-bold text-gold">
                  {section.title}
                </h2>

                {section.content && (
                  <p className="text-light-gray leading-relaxed whitespace-pre-line">
                    {section.content}
                  </p>
                )}

                {section.subsections && (
                  <div className="space-y-4 ml-4">
                    {section.subsections.map((subsection, subIndex) => (
                      <div key={subIndex} className="space-y-2">
                        <h3 className="font-display text-lg font-semibold text-cyan">
                          {subsection.subtitle}
                        </h3>
                        <p className="text-light-gray leading-relaxed">
                          {subsection.text}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
