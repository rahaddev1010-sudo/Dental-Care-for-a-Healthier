import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

import teamImg from '../assets/images/dentist_team_1782839189267.jpg';

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
  >
    {children}
  </motion.div>
);

const faqs = [
  {
    question: "How often should I visit the dentist?",
    answer: "Most patients should schedule a checkup every six months to maintain oral health and detect potential issues early. However, depending on your specific oral health needs, we may recommend more frequent visits."
  },
  {
    question: "Is professional teeth whitening safe?",
    answer: "Yes. Professional whitening treatments are completely safe, highly effective, and supervised by our dental professionals to ensure the health of your enamel while achieving optimal results."
  },
  {
    question: "What are dental implants?",
    answer: "Dental implants are titanium artificial tooth roots that are surgically placed into the jawbone. They provide a sturdy foundation for fixed or removable replacement teeth that look, feel, and function like natural teeth."
  },
  {
    question: "Do braces work for adults?",
    answer: "Absolutely. Orthodontic treatment can be highly effective for patients of all ages. In fact, a significant percentage of orthodontic patients today are adults seeking to improve their smile and bite alignment."
  },
  {
    question: "What causes gum disease?",
    answer: "Gum disease is primarily caused by plaque buildup due to poor oral hygiene. Other contributing factors include smoking, genetics, certain medications, and underlying health conditions like diabetes."
  },
  {
    question: "Are dental X-rays safe?",
    answer: "Yes, modern digital X-rays use extremely low levels of radiation and are considered very safe. We also use lead aprons as an added precaution to protect our patients."
  },
  {
    question: "How can I prevent cavities?",
    answer: "The best way to prevent cavities is to brush twice daily with fluoride toothpaste, floss regularly, limit sugary foods and drinks, and attend routine professional dental cleanings and checkups."
  },
  {
    question: "What should I do during a dental emergency?",
    answer: "If you experience a dental emergency such as severe pain, a knocked-out tooth, or significant swelling, contact our clinic immediately. We prioritize urgent cases and will provide guidance on how to manage the situation."
  },
  {
    question: "Do you treat children?",
    answer: "Yes, we offer specialized pediatric dental services for children of all ages. Our team is trained to provide gentle, compassionate care to ensure a positive and comfortable experience."
  },
  {
    question: "How long does a dental cleaning take?",
    answer: "A standard routine dental cleaning and exam typically takes between 30 and 60 minutes. If it has been a long time since your last visit, it may take slightly longer."
  },
  {
    question: "What payment options do you accept?",
    answer: "We accept all major credit cards, cash, and work with most major dental insurance providers. We also offer flexible financing options to help make your treatment more affordable."
  },
  {
    question: "Does getting a root canal hurt?",
    answer: "Modern root canal therapy is very similar to getting a routine filling and is typically relatively painless. The procedure is actually designed to relieve the pain caused by the infected tooth."
  },
  {
    question: "How do I know if I have a cavity?",
    answer: "Common signs include tooth sensitivity, pain when eating sweet or cold things, and visible holes or dark spots on your teeth. However, many cavities don't cause pain until they are quite large."
  },
  {
    question: "Is flossing really necessary?",
    answer: "Yes! Flossing removes plaque and food particles from between teeth where a toothbrush can't reach. Neglecting to floss can lead to cavities between teeth and gum disease."
  },
  {
    question: "What is restorative dentistry?",
    answer: "It involves procedures that repair or replace damaged or missing teeth, such as crowns, bridges, and implants, to restore function and appearance."
  },
  {
    question: "How long do dental implants last?",
    answer: "With proper care and regular checkups, dental implants can last a lifetime, making them a highly cost-effective long-term solution for missing teeth."
  },
  {
    question: "Can I whiten my teeth if I have veneers?",
    answer: "No, whitening treatments only work on natural tooth enamel and will not change the color of porcelain veneers or crowns."
  },
  {
    question: "What is the difference between a crown and a bridge?",
    answer: "A crown covers a single damaged tooth, while a bridge replaces one or more missing teeth by anchoring to neighboring healthy teeth."
  },
  {
    question: "Are electric toothbrushes better than manual ones?",
    answer: "Electric toothbrushes can be more effective at removing plaque for many patients, but both are effective if used correctly for two minutes twice a day."
  },
  {
    question: "What is gingivitis?",
    answer: "Gingivitis is the earliest stage of gum disease, characterized by red, swollen, or bleeding gums. It is usually reversible with professional cleaning and improved hygiene."
  },
  {
    question: "How can I stop my teeth from being sensitive?",
    answer: "Using desensitizing toothpaste, avoiding highly acidic foods, and maintaining good hygiene can help. We can also provide professional treatments to strengthen enamel."
  },
  {
    question: "What should I do if a tooth is knocked out?",
    answer: "Keep the tooth moist (ideally in milk or inside your cheek) and get to our clinic within 30-60 minutes for the best chance of saving it."
  },
  {
    question: "Do you offer sedation for anxious patients?",
    answer: "Yes, we offer various sedation options to help ensure a comfortable and stress-free experience for patients who feel anxious about dental visits."
  },
  {
    question: "How often should I replace my toothbrush?",
    answer: "You should replace your toothbrush or brush head every three to four months, or sooner if the bristles become frayed."
  },
  {
    question: "What is the best way to whiten my teeth?",
    answer: "Professional in-office whitening or dentist-supervised take-home kits offer the safest and most effective results for a brighter smile."
  },
  {
    question: "Can diet affect my dental health?",
    answer: "Absolutely. A diet high in sugar and acid can lead to tooth decay and enamel erosion, while a balanced diet supports strong teeth and healthy gums."
  },
  {
    question: "What is an intraoral camera?",
    answer: "It's a small camera used to take high-resolution images of the inside of your mouth, allowing us to show you exactly what we see during an exam."
  },
  {
    question: "Do you offer financing for dental work?",
    answer: "Yes, we work with various third-party financing companies to offer flexible monthly payment plans that fit your budget."
  },
  {
    question: "What is a smile makeover?",
    answer: "A smile makeover involves one or more cosmetic procedures, such as whitening, veneers, or bonding, to improve the overall appearance of your smile."
  },
  {
    question: "Is it normal for gums to bleed while flossing?",
    answer: "Occasional bleeding can occur if you haven't flossed recently, but persistent bleeding is often a sign of gum disease and should be evaluated."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 lg:py-40 overflow-hidden bg-dark">
        <div className="absolute inset-0 z-0">
          <img 
            src={teamImg} 
            alt="FAQ Background" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/60 to-dark/80"></div>
        </div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-white mb-8"
          >
            Frequently Asked <span className="text-primary">Questions</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
          >
            Find answers to common questions about our services, treatments, and dental care journey at Dentis.
          </motion.p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-24 bg-light">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FadeIn key={index} delay={index * 0.02}>
                <div 
                  className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${openIndex === index ? 'border-primary shadow-xl ring-4 ring-primary/5' : 'border-gray-200 hover:border-primary/30'}`}
                >
                  <button 
                    className="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none"
                    onClick={() => toggleFaq(index)}
                  >
                    <h3 className={`text-lg md:text-xl font-heading font-bold pr-8 transition-colors ${openIndex === index ? 'text-primary' : 'text-dark'}`}>
                      {faq.question}
                    </h3>
                    <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all ${openIndex === index ? 'bg-primary text-white rotate-180' : 'bg-gray-100 text-gray-500'}`}>
                      <ChevronDown size={20} />
                    </div>
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-8 pb-8 text-gray-600 border-t border-gray-100 pt-6 leading-relaxed text-lg">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            ))}
          </div>
          
          <div className="mt-24 text-center bg-dark text-white p-12 md:p-20 rounded-[40px] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-primary/10"></div>
            <div className="relative z-10">
              <h4 className="text-3xl md:text-4xl font-heading font-bold mb-6">Still have questions?</h4>
              <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
                If you couldn't find the answer to your question, our friendly team is here to help you.
              </p>
              <Link to="/contact" className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-2xl font-bold transition-all shadow-lg hover:shadow-primary/40">
                Contact Us Directly
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
