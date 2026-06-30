import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, Shield, Users, Heart, Award } from 'lucide-react';

import heroBg from '../assets/images/hero_background_1782839173492.jpg';
import teamImg from '../assets/images/dentist_team_1782839189267.jpg';
import techImg from '../assets/images/dental_technology_1782839201458.jpg';
import patientImg from '../assets/images/happy_patient_1782839211906.jpg';

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

const servicesList = [
  {
    id: "general",
    title: "General Dentistry",
    description: "Routine examinations, professional cleanings, fillings, and preventive treatments are essential for maintaining healthy teeth and gums. Our general dentistry services focus on preventing dental problems before they become serious.",
    benefits: ["Prevent Cavities", "Detect Issues Early", "Maintain Oral Health", "Reduce Future Costs"],
    image: teamImg
  },
  {
    id: "cosmetic",
    title: "Cosmetic Dentistry",
    description: "Our cosmetic treatments help patients achieve beautiful and confident smiles through advanced aesthetic procedures. We combine art and science to give you the smile you've always wanted.",
    benefits: ["Teeth Whitening", "Veneers", "Smile Makeovers", "Cosmetic Bonding"],
    image: patientImg
  },
  {
    id: "implants",
    title: "Dental Implants",
    description: "Dental implants are a permanent solution for replacing missing teeth while restoring both function and appearance. They look, feel, and function just like your natural teeth.",
    benefits: ["Natural Appearance", "Long-Term Durability", "Improved Speech", "Better Chewing Function"],
    image: techImg
  },
  {
    id: "orthodontics",
    title: "Orthodontics",
    description: "Straighten your teeth and improve bite alignment with modern orthodontic treatments. We offer solutions for both teens and adults seeking a straighter, healthier smile.",
    benefits: ["Traditional Braces", "Clear Aligners", "Retainers", "Bite Correction"],
    image: heroBg
  }
];

export default function Services() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 lg:py-40 overflow-hidden bg-dark">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Dental Services Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-dark/60 backdrop-blur-[2px]"></div>
        </div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-white mb-8"
            >
              Comprehensive Dental <span className="text-primary">Services</span> for Every Smile
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto"
            >
              Dentis offers a complete range of dental services designed to help patients maintain, restore, and enhance their oral health.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Services List */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="space-y-32">
            {servicesList.map((service, index) => (
              <FadeIn key={service.id}>
                <div className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}>
                  <div className="lg:w-1/2 w-full">
                    <div className="rounded-[40px] overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-square relative group">
                      <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-all"></div>
                    </div>
                  </div>
                  <div className="lg:w-1/2 w-full">
                    <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-widest mb-4">
                      {service.id.replace('-', ' ')}
                    </div>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-dark mb-8 leading-tight">{service.title}</h2>
                    <p className="text-xl text-gray-600 mb-10 leading-relaxed">{service.description}</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                      {service.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center gap-3 text-dark font-bold text-lg">
                          <CheckCircle2 className="text-secondary w-6 h-6 shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link to="/contact" className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-2xl font-bold transition-all shadow-lg hover:shadow-primary/40 transform hover:-translate-y-1">
                      Book Consultation <ArrowRight size={22} />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Grid */}
      <section className="py-24 bg-light">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <FadeIn>
              <h2 className="text-primary font-semibold tracking-wider uppercase mb-3">More Care</h2>
              <h3 className="text-3xl md:text-5xl font-heading font-bold text-dark">Additional Specialized Treatments</h3>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Root Canal Therapy", desc: "Removes infection while preserving your natural tooth structure and relieving pain.", items: ["Pain Relief", "Tooth Preservation", "Improved Oral Health"] },
              { title: "Pediatric Dentistry", desc: "Gentle and compassionate care designed specifically for children and young patients.", items: ["Child-Friendly", "Gentle Care", "Lifelong Habits"] },
              { title: "Gum Disease Treatment", desc: "Protect your oral health through professional gum disease diagnosis and treatment.", items: ["Healthy Gums", "Early Detection", "Professional Care"] },
              { title: "Teeth Whitening", desc: "Professional treatments providing noticeable improvements compared to over-the-counter products.", items: ["Brighter Smile", "Increased Confidence", "Safe Treatment"] },
              { title: "Emergency Dentistry", desc: "Immediate care for dental emergencies including severe pain, broken teeth, and injuries.", items: ["Rapid Response", "Pain Management", "24/7 Availability"] }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white p-10 rounded-[40px] shadow-sm border border-gray-100 h-full hover:shadow-xl transition-all duration-300">
                  <h4 className="text-2xl font-heading font-bold text-dark mb-6">{item.title}</h4>
                  <p className="text-gray-600 mb-8 leading-relaxed">{item.desc}</p>
                  <ul className="space-y-3">
                    {item.items.map((point, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm font-bold text-gray-700 uppercase tracking-wide">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Dentis Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <FadeIn>
            <h2 className="text-primary font-semibold tracking-wider uppercase mb-3">Quality</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-bold text-dark mb-16">Why Choose Dentis</h3>
          </FadeIn>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {[
              { title: "Modern Tech", desc: "Latest dental technology for better outcomes.", icon: Shield },
              { title: "Expert Team", desc: "Highly skilled and experienced dentists.", icon: Users },
              { title: "Personalized", desc: "Treatment plans tailored to your needs.", icon: Heart },
              { title: "Comfortable", desc: "Stress-free and relaxing environment.", icon: Award },
              { title: "Proven Results", desc: "Thousands of happy, healthy smiles.", icon: CheckCircle2 }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-light p-8 rounded-3xl border border-transparent hover:border-primary/20 transition-all h-full flex flex-col items-center">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary mb-6 shadow-sm">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h4 className="text-lg font-heading font-bold text-dark mb-3">{item.title}</h4>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
