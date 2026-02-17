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
      titleKey: 'privacy.s1.title',
      content:
        'At Dream Nova ("Company," "we," "us," or "our"), located in Jerusalem, Israel, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and otherwise handle your information when you visit our website, use our services, and purchase our products.',
    },
    {
      id: 'data-collection',
      titleKey: 'privacy.s2.title',
      subsections: [
        {
          subtitleKey: 'privacy.s3.title',
          text: 'When you register for an account, make a purchase, or contact us, we collect information such as your name, email address, shipping address, phone number, and payment information. We also collect information from your communications with us.',
        },
        {
          subtitleKey: 'privacy.s4.title',
          text: 'When you visit our website, we automatically collect certain information about your device and browsing activity, including IP address, browser type, operating system, pages visited, and referring URLs. We use cookies, pixels, and similar tracking technologies for this purpose.',
        },
        {
          subtitleKey: 'privacy.s5.title',
          text: 'If you sign up using Google or other OAuth providers, we receive information from those services in accordance with their authorization procedures.',
        },
      ],
    },
    {
      id: 'data-usage',
      titleKey: 'privacy.s6.title',
      subsections: [
        {
          subtitleKey: 'privacy.s7.title',
          text: 'We use your information to provide, maintain, and improve our services, process orders, deliver products, send transactional emails, and provide customer support.',
        },
        {
          subtitleKey: 'privacy.s8.title',
          text: 'With your consent, we may send you promotional emails, newsletters, and updates about new products or services. You can unsubscribe at any time by clicking the unsubscribe link in any email.',
        },
        {
          subtitleKey: 'privacy.s9.title',
          text: 'We may use your information to comply with applicable laws, regulations, legal processes, and governmental requests.',
        },
        {
          subtitleKey: 'privacy.s10.title',
          text: 'We use information to detect, prevent, and address fraud, abuse, and other harmful activities.',
        },
      ],
    },
    {
      id: 'cookies',
      titleKey: 'privacy.s11.title',
      content:
        'We use cookies, web beacons, and similar technologies to track user behavior, remember preferences, and understand how you use our website. You can control cookie settings through your browser. However, disabling cookies may affect the functionality of our website.',
    },
    {
      id: 'sharing',
      titleKey: 'privacy.s12.title',
      subsections: [
        {
          subtitleKey: 'privacy.s13.title',
          text: 'We share information with third-party service providers who assist us in operating our website, conducting business, or serving you, including payment processors, hosting providers, and email service providers.',
        },
        {
          subtitleKey: 'privacy.s14.title',
          text: 'We may disclose your information if required by law, court order, or governmental authority.',
        },
        {
          subtitleKey: 'privacy.s15.title',
          text: 'In the event of a merger, acquisition, or asset sale, your information may be transferred as part of that transaction.',
        },
      ],
    },
    {
      id: 'data-retention',
      titleKey: 'privacy.s16.title',
      content:
        'We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this Privacy Policy. You may request deletion of your data at any time by contacting us at hello@dreamnova.com.',
    },
    {
      id: 'security',
      titleKey: 'privacy.s17.title',
      content:
        'We implement reasonable technical, administrative, and physical security measures to protect your information. However, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security.',
    },
    {
      id: 'third-party',
      titleKey: 'privacy.s18.title',
      content:
        'Our website may contain links to third-party websites and services. We are not responsible for the privacy practices of these external sites. Please review their privacy policies before providing any information.',
    },
    {
      id: 'rights',
      titleKey: 'privacy.s19.title',
      subsections: [
        {
          subtitleKey: 'privacy.s20.title',
          text: 'You have the right to access, review, and request corrections to your personal information.',
        },
        {
          subtitleKey: 'privacy.s21.title',
          text: 'You may request deletion of your account and associated data.',
        },
        {
          subtitleKey: 'privacy.s22.title',
          text: 'You can opt out of marketing communications and cookies through your account settings or by contacting us.',
        },
      ],
    },
    {
      id: 'contact',
      titleKey: 'privacy.s23.title',
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
              <span className="text-gold">{t("privacy.page.title")}</span> Policy
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
                  {t(section.titleKey)}
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
                          {t(subsection.subtitleKey)}
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
