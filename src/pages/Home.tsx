import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Star, Calendar, Shield, Users, Activity, Heart, Clock, Award, Phone, ShieldAlert, User } from 'lucide-react';

import heroBg from '../assets/images/hero_background_1782839173492.jpg';
import teamImg from '../assets/images/dentist_team_1782839189267.jpg';
import techImg from '../assets/images/dental_technology_1782839201458.jpg';
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

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Dental Office Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/30"></div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
                <Star className="w-4 h-4 fill-primary" /> Rated #1 Dental Clinic in NY
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-dark leading-tight mb-6">
                Exceptional Dental Care for a <span className="text-primary">Healthier</span>, More <span className="text-secondary">Confident</span> Smile
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
                Your smile is one of your most valuable assets, and at Dentis, we are dedicated to helping you protect, restore, and enhance it. Our experienced team provides comprehensive care using advanced technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-medium transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50 text-center flex items-center justify-center gap-2 text-lg">
                  <Calendar size={20} /> Book Appointment
                </Link>
                <Link to="/services" className="bg-white hover:bg-gray-50 text-dark border border-gray-200 px-8 py-4 rounded-xl font-medium transition-all text-center flex items-center justify-center gap-2 text-lg">
                  Explore Services <ArrowRight size={20} />
                </Link>
              </div>
              
              <div className="mt-10 flex items-center gap-6">
                <div className="flex -space-x-4">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                      <img src={i === 1 ? patientImg : i === 2 ? doc1 : i === 3 ? doc2 : doc3} alt="Patient" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-1">
                    <Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" />
                  </div>
                  <p className="text-sm font-medium text-gray-700">10,000+ Happy Patients</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12 text-center max-w-4xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-primary font-semibold tracking-wider uppercase mb-3">Trusted by Thousands</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-bold text-dark mb-6">Our Reputation is Built on Trust and Excellence</h3>
            <p className="text-gray-600 text-lg">
              For years, Dentis has helped individuals and families maintain healthy smiles through personalized care and advanced dental solutions. Patients choose us because we prioritize comfort, transparency, and long-term oral health.
            </p>
          </FadeIn>
        </div>
        
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { number: "15+", label: "Experience", icon: Clock },
              { number: "10k+", label: "Patients", icon: Heart },
              { number: "25+", label: "Specialists", icon: Users },
              { number: "98%", label: "Satisfaction", icon: Award },
              { number: "5k+", label: "Procedures", icon: Activity },
              { number: "Mod.", label: "Technology", icon: Shield }
            ].map((stat, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="p-8 rounded-2xl bg-light text-center group hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100">
                  <div className="inline-flex justify-center items-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-3xl font-heading font-bold text-dark mb-1">{stat.number}</h4>
                  <p className="text-gray-500 text-sm font-medium">{stat.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 bg-light overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <FadeIn>
                <div className="relative">
                  <div className="rounded-[40px] overflow-hidden shadow-2xl relative z-10 aspect-[4/5] lg:aspect-auto">
                    <img src={teamImg} alt="Dentist Team" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl z-0"></div>
                </div>
              </FadeIn>
            </div>
            
            <div className="lg:w-1/2">
              <FadeIn delay={0.2}>
                <h2 className="text-primary font-semibold tracking-wider uppercase mb-3">Welcome to Dentis</h2>
                <h3 className="text-3xl md:text-5xl font-heading font-bold text-dark mb-6">Innovative Technology, Compassionate Service</h3>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  Dentis is a modern dental clinic dedicated to providing exceptional dental care for patients of all ages. We combine clinical expertise, innovative technology, and compassionate service to create an outstanding patient experience.
                </p>
                <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                  Our team believes that excellent oral health contributes to overall well-being and confidence. From preventive care to complex restorative procedures, our mission is to help every patient achieve and maintain a healthy smile for life.
                </p>
                
                <Link to="/about" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-medium transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50 text-lg">
                  Learn More About Us <ArrowRight size={20} />
                </Link>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <h2 className="text-primary font-semibold tracking-wider uppercase mb-3">Why Choose Us</h2>
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-dark">Why Patients Choose Dentis</h3>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { title: "Experienced Professionals", desc: "Our team includes highly trained dentists, hygienists, and specialists who bring years of experience and expertise." },
              { title: "Advanced Technology", desc: "We invest in the latest dental technology to provide accurate diagnoses, efficient procedures, and improved comfort." },
              { title: "Personalized Treatment", desc: "Every patient receives a customized treatment plan tailored to their unique oral health needs and goals." },
              { title: "Comfortable Environment", desc: "Our modern clinic is designed to create a relaxing and stress-free experience from the moment you arrive." },
              { title: "Comprehensive Services", desc: "From preventive dentistry to cosmetic enhancements, we provide complete dental care under one roof." },
              { title: "Transparent Communication", desc: "We believe patients deserve clear explanations, honest recommendations, and complete confidence." }
            ].map((reason, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="group p-8 rounded-3xl bg-light border border-transparent hover:border-primary/20 hover:bg-white hover:shadow-xl transition-all duration-300">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-heading font-bold text-dark mb-4">{reason.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{reason.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24 bg-light">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <FadeIn>
              <div className="max-w-2xl">
                <h2 className="text-primary font-semibold tracking-wider uppercase mb-3">Featured Services</h2>
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-dark">Comprehensive Dental Services</h3>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Link to="/services" className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary/80 transition-colors text-lg">
                View All Services <ArrowRight size={20} />
              </Link>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "General Dentistry", desc: "Protect your oral health with routine checkups, professional cleanings, preventive treatments, and restorative care.", icon: Activity, color: "text-blue-500", bg: "bg-blue-50" },
              { title: "Cosmetic Dentistry", desc: "Enhance your smile with professional teeth whitening, veneers, bonding, and complete smile makeovers.", icon: Star, color: "text-purple-500", bg: "bg-purple-50" },
              { title: "Dental Implants", desc: "Replace missing teeth with durable and natural-looking implant solutions that restore both function and appearance.", icon: Shield, color: "text-green-500", bg: "bg-green-50" },
              { title: "Orthodontics", desc: "Improve alignment, bite function, and smile aesthetics through advanced orthodontic treatment options.", icon: ArrowRight, color: "text-orange-500", bg: "bg-orange-50" },
              { title: "Pediatric Dentistry", desc: "Provide your child with gentle, compassionate dental care that supports lifelong oral health.", icon: Heart, color: "text-pink-500", bg: "bg-pink-50" },
              { title: "Emergency Dentistry", desc: "Receive immediate care for dental emergencies, severe pain, broken teeth, and urgent oral health concerns.", icon: ShieldAlert, color: "text-red-500", bg: "bg-red-50" }
            ].map((service, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
                  <div className={`w-16 h-16 rounded-2xl ${service.bg} ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <service.icon size={32} strokeWidth={1.5} />
                  </div>
                  <h4 className="text-xl font-heading font-bold text-dark mb-4">{service.title}</h4>
                  <p className="text-gray-600 mb-8 leading-relaxed">{service.desc}</p>
                  <Link to="/services" className="inline-flex items-center gap-2 text-primary font-bold group-hover:gap-3 transition-all">
                    Learn More <ArrowRight size={18} />
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Our Treatment Process */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <h2 className="text-primary font-semibold tracking-wider uppercase mb-3">Our Process</h2>
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-dark">A Simple and Comfortable Patient Journey</h3>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -z-10 hidden lg:block"></div>
            {[
              { step: "Step 1", title: "Consultation", desc: "Understanding your concerns, goals, and medical history." },
              { step: "Step 2", title: "Examination", desc: "Detailed evaluation using advanced diagnostic technology." },
              { step: "Step 3", title: "Custom Plan", desc: "Personalized plan based on your oral health needs." },
              { step: "Step 4", title: "Professional Treatment", desc: "Delivering care using modern techniques and equipment." },
              { step: "Step 5", title: "Ongoing Support", desc: "Follow-up care and guidance to maintain health." }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="relative text-center">
                  <div className="w-16 h-16 bg-white border-4 border-primary rounded-full flex items-center justify-center font-heading font-bold text-primary text-xl mx-auto mb-6 relative z-10 shadow-lg">
                    {i + 1}
                  </div>
                  <h4 className="text-lg font-heading font-bold text-dark mb-3">{item.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Dentists */}
      <section className="py-24 bg-light">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <h2 className="text-primary font-semibold tracking-wider uppercase mb-3">Experts</h2>
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-dark">Dedicated Experts Committed to Your Smile</h3>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Dr. Michael Anderson", role: "Chief Dental Surgeon", desc: "15+ years experience in restorative and cosmetic dentistry.", image: doc1 },
              { name: "Dr. Sarah Johnson", role: "Orthodontic Specialist", desc: "Focused on creating healthier, confident smiles for all ages.", image: doc2 },
              { name: "Dr. Emily Roberts", role: "Pediatric Dentist", desc: "Dedicated to providing positive dental experiences for children.", image: doc3 }
            ].map((dentist, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition-all group">
                  <div className="relative h-80 overflow-hidden">
                    <img src={dentist.image} alt={dentist.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <div className="p-8">
                    <h4 className="text-xl font-heading font-bold text-dark mb-1">{dentist.name}</h4>
                    <p className="text-primary font-medium mb-4 text-sm uppercase tracking-wide">{dentist.role}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{dentist.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Dental Technology */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <FadeIn>
                <h2 className="text-primary font-semibold tracking-wider uppercase mb-3">Technology</h2>
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-dark mb-6">Advanced Technology for Better Results</h3>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  At Dentis, we use modern dental technology to improve accuracy, comfort, and treatment outcomes. These innovations allow us to diagnose problems earlier and perform procedures more efficiently.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Digital X-Rays", "Intraoral Cameras", "3D Dental Imaging",
                    "Laser Dentistry", "Digital Smile Design", "Modern Sterilization Systems"
                  ].map((tech, i) => (
                    <div key={i} className="flex items-center gap-3 text-dark font-medium p-4 bg-light rounded-xl">
                      <CheckCircle2 className="text-primary w-5 h-5 shrink-0" />
                      {tech}
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
            <div className="lg:w-1/2">
              <FadeIn delay={0.2}>
                <div className="rounded-[40px] overflow-hidden shadow-2xl relative group">
                  <img src={techImg} alt="Dental Technology" className="w-full h-full object-cover aspect-square" />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all"></div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Testimonials */}
      <section className="py-24 bg-light">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <h2 className="text-primary font-semibold tracking-wider uppercase mb-3">Testimonials</h2>
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-dark">What Our Patients Say</h3>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Thompson", text: "Dentis completely transformed my smile. The staff were professional, caring, and made every visit comfortable." },
              { name: "James Wilson", text: "I had dental implants placed at Dentis and the entire experience exceeded my expectations." },
              { name: "Emily Carter", text: "The clinic is modern, clean, and the team truly cares about patient satisfaction." }
            ].map((testimonial, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white p-10 rounded-[32px] shadow-sm border border-gray-100 hover:shadow-xl transition-all h-full flex flex-col">
                  <div className="flex text-amber-400 mb-6">
                    {[1,2,3,4,5].map(n => <Star key={n} className="w-5 h-5 fill-current" />)}
                  </div>
                  <p className="text-gray-600 italic mb-8 flex-grow leading-relaxed">"{testimonial.text}"</p>
                  <p className="font-heading font-bold text-dark">— {testimonial.name}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance & Payment Options */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="bg-dark text-white rounded-[40px] p-10 lg:p-20 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -mr-48 -mt-48"></div>
            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row gap-16 items-center">
                <div className="lg:w-1/2">
                  <h2 className="text-primary font-semibold tracking-wider uppercase mb-3">Accessibility</h2>
                  <h3 className="text-3xl md:text-5xl font-heading font-bold mb-6 leading-tight">Affordable Dental Care for Everyone</h3>
                  <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                    We believe quality dental care should be accessible to everyone. Our team will help you understand your coverage and available payment solutions before treatment begins.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
                    {[
                      "Flexible Payment Plans", "Major Insurance Acceptance", "Financing Options",
                      "Transparent Pricing", "Treatment Cost Consultations"
                    ].map((opt, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="text-secondary w-6 h-6 shrink-0" />
                        <span className="font-medium text-lg">{opt}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="rounded-3xl overflow-hidden shadow-2xl grayscale brightness-75">
                    <img src={patientImg} alt="Consultation" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-24 bg-light">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <FadeIn>
              <div className="max-w-2xl">
                <h2 className="text-primary font-semibold tracking-wider uppercase mb-3">Resources</h2>
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-dark">Latest Dental Health Articles</h3>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Link to="/blog" className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary/80 transition-colors text-lg">
                View All Articles <ArrowRight size={20} />
              </Link>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Top Daily Habits for Healthy Teeth", desc: "Simple habits that can improve your oral health and reduce dental problems.", image: patientImg },
              { title: "Professional Teeth Whitening Guide", desc: "Everything you need to know about achieving a brighter smile safely.", image: techImg },
              { title: "Understanding Dental Implants", desc: "Learn how dental implants restore function, appearance, and confidence.", image: teamImg }
            ].map((post, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition-all group h-full flex flex-col">
                  <div className="relative h-56 overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" />
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <h4 className="text-xl font-heading font-bold text-dark mb-4 group-hover:text-primary transition-colors">{post.title}</h4>
                    <p className="text-gray-500 mb-6 text-sm flex-grow leading-relaxed">{post.desc}</p>
                    <Link to="/blog" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
                      Read More <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 relative overflow-hidden bg-dark">
        <div className="absolute inset-0 opacity-40">
          <img src={heroBg} alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-dark/95 via-dark/80 to-dark/95"></div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-6xl font-heading font-bold text-white mb-8">Ready to Achieve Your Best Smile?</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Whether you need preventive care, cosmetic treatment, or advanced restorative solutions, Dentis is here to help. Schedule your consultation today and discover why thousands of patients trust us.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact" className="bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-2xl font-bold transition-all shadow-lg shadow-primary/30 flex items-center justify-center gap-2 text-lg">
                <Calendar size={22} /> Book Appointment
              </Link>
              <Link to="/contact" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-2xl font-bold transition-all flex items-center justify-center gap-2 text-lg">
                <Phone size={22} /> Contact Us
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
