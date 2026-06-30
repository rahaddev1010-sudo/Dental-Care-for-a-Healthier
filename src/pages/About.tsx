import { motion } from 'motion/react';
import { Heart, Award, Shield, Lightbulb, Users, CheckCircle2 } from 'lucide-react';

import heroBg from '../assets/images/hero_background_1782839173492.jpg';
import teamImg from '../assets/images/dentist_team_1782839189267.jpg';
import patientImg from '../assets/images/happy_patient_1782839211906.jpg';
import doc1 from '../assets/images/dentist_1_1782839222944.jpg';
import doc2 from '../assets/images/dentist_2_1782839235647.jpg';
import doc3 from '../assets/images/dentist_3_1782839247902.jpg';
import doc4 from '../assets/images/dentist_4_1782839258696.jpg';

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

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 lg:py-40 overflow-hidden bg-dark">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Clinic Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-dark/70 backdrop-blur-[2px]"></div>
        </div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-white mb-8"
            >
              About Dentis – <span className="text-primary">Excellence</span> in Dental Care
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto"
            >
              At Dentis, we are committed to providing exceptional dental care through advanced technology, compassionate service, and personalized treatment plans.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Our mission is to help every patient achieve a healthier smile and greater confidence through professional and comfortable dental experiences. For years, we have proudly served individuals and families by delivering comprehensive oral healthcare solutions.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-light">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <FadeIn>
                <div className="relative">
                  <img 
                    src={teamImg} 
                    alt="Our Story" 
                    className="rounded-[40px] shadow-2xl"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block">
                    <p className="text-primary font-bold text-4xl mb-1">15+</p>
                    <p className="text-gray-500 font-medium">Years of Experience</p>
                  </div>
                </div>
              </FadeIn>
            </div>
            <div className="lg:w-1/2">
              <FadeIn delay={0.2}>
                <h2 className="text-primary font-semibold tracking-wider uppercase mb-3">Our History</h2>
                <h3 className="text-3xl md:text-5xl font-heading font-bold text-dark mb-8">Building Healthy Smiles Since Day One</h3>
                <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                  <p>
                    Dentis was founded with a vision to redefine the dental experience. We recognized that many patients felt anxious about dental visits and wanted to create a clinic where comfort, trust, and quality care come together.
                  </p>
                  <p>
                    From a small practice to a modern dental clinic, our journey has been driven by a commitment to excellence and patient satisfaction. Over the years, we have helped thousands of patients improve their oral health and confidence.
                  </p>
                  <p>
                    Today, Dentis continues to invest in cutting-edge technology, ongoing education, and patient-focused care to ensure the highest standards of dentistry.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-dark text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <FadeIn>
              <div className="bg-white/5 p-12 rounded-[40px] border border-white/10 h-full hover:bg-white/10 transition-all duration-300">
                <div className="w-20 h-20 bg-primary/20 rounded-3xl flex items-center justify-center mb-8">
                  <Lightbulb className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-3xl font-heading font-bold mb-6">Our Mission</h3>
                <p className="text-gray-300 text-xl leading-relaxed">
                  To provide outstanding dental care that improves oral health, enhances confidence, and positively impacts the lives of our patients through innovative treatments.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-white/5 p-12 rounded-[40px] border border-white/10 h-full hover:bg-white/10 transition-all duration-300">
                <div className="w-20 h-20 bg-secondary/20 rounded-3xl flex items-center justify-center mb-8">
                  <Users className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="text-3xl font-heading font-bold mb-6">Our Vision</h3>
                <p className="text-gray-300 text-xl leading-relaxed">
                  To become the most trusted dental clinic in our community by delivering innovative treatments, exceptional patient experiences, and long-lasting results.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <FadeIn>
            <h2 className="text-primary font-semibold tracking-wider uppercase mb-3">What Drives Us</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-bold text-dark mb-16">Our Core Values</h3>
          </FadeIn>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {[
              { title: "Compassion", desc: "We treat every patient with kindness, empathy, and respect.", icon: Heart },
              { title: "Excellence", desc: "We strive for the highest standards in clinical care and customer service.", icon: Award },
              { title: "Integrity", desc: "We provide honest recommendations and transparent communication.", icon: Shield },
              { title: "Innovation", desc: "We embrace advanced technology to improve treatment outcomes.", icon: Lightbulb },
              { title: "Patient-Centered", desc: "Every decision is focused on our patients' needs and well-being.", icon: Users }
            ].map((value, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-light p-8 rounded-3xl hover:bg-white hover:shadow-2xl transition-all h-full text-left border border-transparent hover:border-gray-100 group">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                    <value.icon className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold font-heading text-dark mb-3">{value.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{value.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why Patients Trust Us */}
      <section className="py-24 bg-light">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <FadeIn>
                <h2 className="text-primary font-semibold tracking-wider uppercase mb-3">Trust</h2>
                <h3 className="text-3xl md:text-5xl font-heading font-bold text-dark mb-8">Why Patients Trust Us</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    "Experienced Dental Professionals", "State-of-the-Art Technology", "Comfortable Environment",
                    "Personalized Treatment Plans", "Comprehensive Services", "Proven Results"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-5 bg-white rounded-2xl shadow-sm">
                      <CheckCircle2 className="text-primary w-6 h-6 shrink-0" />
                      <span className="font-bold text-dark">{item}</span>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
            <div className="lg:w-1/2">
              <FadeIn delay={0.2}>
                <div className="rounded-[40px] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                  <img src={patientImg} alt="Happy Patient" />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Community Involvement */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="lg:w-1/2">
              <FadeIn>
                <h2 className="text-primary font-semibold tracking-wider uppercase mb-3">Impact</h2>
                <h3 className="text-3xl md:text-5xl font-heading font-bold text-dark mb-8">Community Involvement</h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  We believe in giving back to our community through educational programs, oral health awareness initiatives, and support for local events. Our goal is to help create healthier smiles both inside and outside our clinic.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  By partnering with local schools and organizations, we provide dental education to children and help families understand the importance of preventive care for a lifetime of health.
                </p>
              </FadeIn>
            </div>
            <div className="lg:w-1/2">
              <FadeIn delay={0.2}>
                <div className="relative">
                  <img 
                    src={teamImg} 
                    alt="Community Work" 
                    className="rounded-[40px] shadow-2xl"
                  />
                  <div className="absolute top-1/2 -left-20 w-40 h-40 bg-secondary/30 rounded-full blur-3xl z-0 animate-pulse"></div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-24 bg-light">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <h2 className="text-primary font-semibold tracking-wider uppercase mb-3">Our People</h2>
              <h3 className="text-3xl md:text-5xl font-heading font-bold text-dark mb-6">Meet Our Team</h3>
              <p className="text-gray-600 text-lg">
                Our team consists of highly skilled dentists, hygienists, and support staff who are passionate about helping patients achieve optimal oral health.
              </p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Dr. Michael Anderson", role: "Chief Dental Surgeon", image: doc1 },
              { name: "Dr. Sarah Johnson", role: "Orthodontic Specialist", image: doc2 },
              { name: "Dr. Emily Roberts", role: "Pediatric Dentist", image: doc3 },
              { name: "Jessica Miller", role: "Lead Dental Hygienist", image: doc4 }
            ].map((member, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group">
                  <div className="relative h-72 overflow-hidden">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <div className="p-6 text-center">
                    <h4 className="text-xl font-heading font-bold text-dark mb-1">{member.name}</h4>
                    <p className="text-primary font-medium text-sm">{member.role}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
