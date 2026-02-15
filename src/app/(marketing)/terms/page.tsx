'use client';

import { Navbar } from '@/components/shared/navbar';
import { Footer } from '@/components/shared/footer';
import { motion } from 'framer-motion';

export default function TermsPage() {
  const sections = [
    {
      id: 'acceptance',
      title: '1. Acceptance of Terms',
      content:
        'By accessing and using the Dream Nova website and services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not use our services. We reserve the right to modify these terms at any time, and your continued use of our services constitutes acceptance of the updated terms.',
    },
    {
      id: 'products',
      title: '2. Products and Services',
      subsections: [
        {
          subtitle: 'Description',
          text: 'Dream Nova offers digital content and physical products including NFC cards (Nova Key), meditation systems, and spiritual/philosophical materials. All products are described as accurately as possible on our website.',
        },
        {
          subtitle: 'Availability',
          text: 'Products are offered subject to availability. We reserve the right to limit quantities, discontinue products, or cancel orders at our discretion.',
        },
        {
          subtitle: 'Digital Products',
          text: 'Digital content includes access to The Source Code of Reality, Tikkun HaKlali, and Azamra meditation systems. Once purchased and accessed, digital content is non-refundable.',
        },
      ],
    },
    {
      id: 'payment',
      title: '3. Pricing and Payment',
      subsections: [
        {
          subtitle: 'Pricing',
          text: 'All prices are listed in USD unless otherwise stated. We reserve the right to change prices at any time. Price changes will not apply to previously placed orders.',
        },
        {
          subtitle: 'Payment Methods',
          text: 'We accept payment via credit card, debit card, and other methods as displayed at checkout. Payment is processed through secure third-party payment processors.',
        },
        {
          subtitle: 'Billing',
          text: 'By providing payment information, you authorize us to charge your account for the products ordered. You are responsible for maintaining accurate payment information.',
        },
        {
          subtitle: 'Taxes',
          text: 'You are responsible for any applicable sales tax, VAT, or other taxes based on your location.',
        },
      ],
    },
    {
      id: 'shipping',
      title: '4. Shipping and Delivery',
      subsections: [
        {
          subtitle: 'Physical Products',
          text: 'We ship Nova Key NFC cards and other physical products internationally. Shipping times vary by location and shipping method selected.',
        },
        {
          subtitle: 'Delivery Risk',
          text: 'Once shipped, delivery is the responsibility of the carrier. We are not liable for lost, stolen, or damaged packages in transit.',
        },
        {
          subtitle: 'Shipping Address',
          text: 'You are responsible for providing an accurate shipping address. We cannot redirect packages after they have been shipped.',
        },
        {
          subtitle: 'Digital Delivery',
          text: 'Digital products are delivered immediately upon purchase confirmation via email. You must download and save digital content promptly, as we are not responsible for data loss.',
        },
      ],
    },
    {
      id: 'intellectual',
      title: '5. Intellectual Property Rights',
      subsections: [
        {
          subtitle: 'Ownership',
          text: 'All content on the Dream Nova website, including text, graphics, logos, images, audio, and video, is the property of Dream Nova or our content providers and is protected by copyright law.',
        },
        {
          subtitle: 'Licensed Use',
          text: 'When you purchase digital content, you receive a personal, non-transferable, non-exclusive license to use the content for personal, non-commercial purposes only.',
        },
        {
          subtitle: 'Restrictions',
          text: 'You may not reproduce, distribute, modify, or create derivative works from our content without written permission. Unauthorized use is a violation of intellectual property rights.',
        },
      ],
    },
    {
      id: 'limitations',
      title: '6. Limitation of Liability',
      subsections: [
        {
          subtitle: 'Disclaimer',
          text: 'Our services are provided "as is" without warranties of any kind. We do not guarantee that our website will be uninterrupted, error-free, or secure.',
        },
        {
          subtitle: 'No Liability',
          text: 'To the maximum extent permitted by law, Dream Nova is not liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.',
        },
        {
          subtitle: 'Maximum Liability',
          text: 'Our total liability for any claim shall not exceed the amount you paid for the product or service in question.',
        },
      ],
    },
    {
      id: 'user-conduct',
      title: '7. User Conduct',
      content:
        'You agree not to use our website for any unlawful purposes or in any way that could harm Dream Nova or its users. This includes but is not limited to: hacking, harassment, spam, creating false accounts, or uploading malicious content. We reserve the right to terminate accounts that violate these terms.',
    },
    {
      id: 'third-party',
      title: '8. Third-Party Links and Services',
      content:
        'Our website may contain links to third-party websites and services. We are not responsible for their content, policies, or practices. Your use of third-party services is subject to their terms and conditions.',
    },
    {
      id: 'indemnification',
      title: '9. Indemnification',
      content:
        'You agree to indemnify and hold harmless Dream Nova from any claims, damages, or expenses arising from your use of our services, violation of these terms, or infringement of any rights.',
    },
    {
      id: 'severability',
      title: '10. Severability',
      content:
        'If any provision of these terms is found to be unenforceable, that provision shall be severed, and the remaining provisions shall remain in full effect.',
    },
    {
      id: 'jurisdiction',
      title: '11. Jurisdiction and Governing Law',
      content:
        'These terms are governed by the laws of Israel. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Israel.',
    },
    {
      id: 'contact',
      title: '12. Contact Us',
      content:
        'If you have questions about these Terms of Service, please contact us at:\n\nDream Nova\nJerusalem, Israel\nEmail: hello@dreamnova.com',
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
              <span className="text-gold">Terms</span> of Service
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
