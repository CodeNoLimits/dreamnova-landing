'use client';

import { useTranslation } from '@/lib/LanguageContext';

import { Navbar } from '@/components/shared/navbar';
import { Footer } from '@/components/shared/footer';
import { motion } from 'framer-motion';
import { CheckCircle, AlertCircle, Clock, Package } from 'lucide-react';

export default function RefundPage() {
  const { t } = useTranslation();
  const sections = [
    {
      id: 'overview',
      titleKey: 'refund.s1.title',
      content:
        'At Dream Nova, we want you to be completely satisfied with your purchase. Our refund and returns policy outlines the conditions under which we accept returns and issue refunds for both physical and digital products.',
    },
    {
      id: 'physical-products',
      titleKey: 'refund.s2.title',
      subsections: [
        {
          icon: Package,
          subtitleKey: 'refund.s3.title',
          text: 'You may return physical products within 30 days of delivery for a full refund, provided the items are unused and in their original packaging.',
        },
        {
          icon: AlertCircle,
          subtitleKey: 'refund.s4.title',
          text: 'Items must be returned in unused condition with all original packaging, seals, and accessories intact. Products that show signs of use, wear, or damage are not eligible for refund.',
        },
        {
          icon: Clock,
          subtitleKey: 'refund.s5.title',
          text: 'To initiate a return, contact hello@dreamnova.com with your order number and reason for return. Once approved, we will provide return shipping instructions.',
        },
        {
          icon: CheckCircle,
          subtitleKey: 'refund.s6.title',
          text: 'Upon receipt and inspection of the returned item, refunds will be processed within 5-7 business days to your original payment method.',
        },
      ],
    },
    {
      id: 'digital-products',
      titleKey: 'refund.s7.title',
      subsections: [
        {
          icon: AlertCircle,
          subtitleKey: 'refund.s8.title',
          text: 'Digital content, including The Source Code of Reality, Tikkun HaKlali, and Azamra meditation systems, is non-refundable once accessed or downloaded.',
        },
        {
          icon: Clock,
          subtitleKey: 'refund.s9.title',
          text: 'If you purchase digital content and have not accessed or downloaded it within 24 hours, you may request a refund for the digital portion only.',
        },
        {
          icon: CheckCircle,
          subtitleKey: 'refund.s10.title',
          text: 'We may request confirmation that the digital content has not been accessed, such as checking download logs or account activity.',
        },
      ],
    },
    {
      id: 'combined-orders',
      titleKey: 'refund.s11.title',
      content:
        'For orders containing both physical products and digital content: Physical items are eligible for the 30-day return policy if unopened. Digital content is non-refundable once accessed. If you return a physical product, the digital content purchased with it remains non-refundable.',
    },
    {
      id: 'shipping-costs',
      titleKey: 'refund.s12.title',
      subsections: [
        {
          subtitleKey: 'refund.s13.title',
          text: 'Original shipping costs are non-refundable when a return is accepted.',
        },
        {
          subtitleKey: 'refund.s14.title',
          text: 'Customers are responsible for return shipping costs unless the return is due to our error or a defective product.',
        },
      ],
    },
    {
      id: 'defective',
      titleKey: 'refund.s15.title',
      content:
        'If you receive a defective or damaged Nova Key NFC card, we will replace it at no cost or provide a full refund. Contact hello@dreamnova.com within 7 days of delivery with photos of the defect.',
    },
    {
      id: 'international',
      titleKey: 'refund.s16.title',
      content:
        'For international customers, return shipping costs may be substantial. Please contact hello@dreamnova.com to discuss return options. We may offer a partial refund or replacement in some cases to account for high return shipping fees.',
    },
    {
      id: 'non-refundable',
      titleKey: 'refund.s17.title',
      subsections: [
        {
          subtitleKey: 'refund.s18.title',
          text: 'Physical products that have been used, worn, or damaged are not eligible for refund.',
        },
        {
          subtitleKey: 'refund.s19.title',
          text: 'Items with opened, torn, or missing packaging are not eligible for refund.',
        },
        {
          subtitleKey: 'refund.s20.title',
          text: 'Custom or special orders are non-refundable unless there is a defect.',
        },
        {
          subtitleKey: 'refund.s21.title',
          text: 'All digital content is non-refundable once accessed or downloaded.',
        },
      ],
    },
    {
      id: 'process',
      titleKey: 'refund.s22.title',
      content: `1. Contact Dream Nova at hello@dreamnova.com with your order number and reason for return
2. Receive approval and return shipping address from our team
3. Ship the item back to us in original packaging
4. We inspect the returned item upon receipt
5. If approved, refund is processed within 5-7 business days
6. Refund appears in your account within 7-10 business days depending on your bank`,
    },
    {
      id: 'exceptions',
      titleKey: 'refund.s23.title',
      subsections: [
        {
          subtitleKey: 'refund.s24.title',
          text: 'If your order was lost in transit, contact us within 14 days with tracking information. We may send a replacement or issue a refund.',
        },
        {
          subtitleKey: 'refund.s25.title',
          text: 'If you received the wrong item, we will send a replacement immediately and may provide a return label for the incorrect item.',
        },
        {
          subtitleKey: 'refund.s26.title',
          text: 'If your item arrived damaged, contact us within 7 days with photos. We will replace the item or issue a refund.',
        },
      ],
    },
    {
      id: 'contact',
      titleKey: 'refund.s27.title',
      content:
        'For any questions about our refund and returns policy, or to initiate a return, please contact:\n\nDream Nova\nJerusalem, Israel\nEmail: hello@dreamnova.com\n\nWe respond to all refund inquiries within 24-48 hours during business days.',
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
              <span className="text-gold">{t("refund.page.title")}</span> & Returns
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

        {/* Quick Summary */}
        <section className="py-12 px-4 bg-sacred-surface/50 border-y border-gold/20">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-2"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Package className="w-6 h-6 text-gold" />
                  <h3 className="font-display font-bold text-gold text-lg">{t("refund.physical")}</h3>
                </div>
                <p className="text-light-gray leading-relaxed">
                  30-day return window for unused items in original packaging. Full refund after inspection.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-2"
              >
                <div className="flex items-center gap-3 mb-4">
                  <AlertCircle className="w-6 h-6 text-cyan" />
                  <h3 className="font-display font-bold text-cyan text-lg">{t("refund.digital")}</h3>
                </div>
                <p className="text-light-gray leading-relaxed">
                  Non-refundable once accessed or downloaded. 24-hour grace period available.
                </p>
              </motion.div>
            </div>
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
                  <div className="space-y-6 ml-4">
                    {section.subsections.map((subsection, subIndex) => {
                      const Icon = 'icon' in subsection ? subsection.icon : null;
                      return (
                        <div key={subIndex} className="space-y-2">
                          <div className="flex items-center gap-3">
                            {Icon && <Icon className="w-5 h-5 text-cyan flex-shrink-0" />}
                            <h3 className="font-display text-lg font-semibold text-cyan">
                              {t(subsection.subtitleKey)}
                            </h3>
                          </div>
                          <p className="text-light-gray leading-relaxed ml-8">
                            {subsection.text}
                          </p>
                        </div>
                      );
                    })}
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
