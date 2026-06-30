import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, ArrowRight, ShieldAlert, CreditCard, User, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

import teamImg from '../assets/images/dentist_team_1782839189267.jpg';

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

export default function Contact() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 lg:py-40 overflow-hidden bg-dark">
        <div className="absolute inset-0 z-0">
          <img 
            src={teamImg} 
            alt="Contact Background" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/40 to-dark/80 backdrop-blur-[1px]"></div>
        </div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-white mb-8"
            >
              Contact <span className="text-primary">Dentis</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
            >
              We're here to help you achieve and maintain a healthy smile. Contact our team today to schedule an appointment.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Main */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-20">
            
            {/* Information Column */}
            <div className="lg:w-1/2">
              <FadeIn>
                <div className="mb-16">
                  <h3 className="text-3xl font-heading font-bold text-dark mb-10">Contact Information</h3>
                  <div className="space-y-10">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0 shadow-sm border border-primary/5">
                        <MapPin className="w-7 h-7" />
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-dark text-xl mb-2">Our Location</h4>
                        <p className="text-gray-500 text-lg leading-relaxed">123 Dental Care Avenue<br />New York, NY 10001</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0 shadow-sm border border-primary/5">
                        <Phone className="w-7 h-7" />
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-dark text-xl mb-2">Call Us</h4>
                        <p className="text-gray-500 text-lg">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0 shadow-sm border border-primary/5">
                        <Mail className="w-7 h-7" />
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-dark text-xl mb-2">Email Us</h4>
                        <p className="text-gray-500 text-lg">info@dentisclinic.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0 shadow-sm border border-primary/5">
                        <Clock className="w-7 h-7" />
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-dark text-xl mb-2">Office Hours</h4>
                        <p className="text-gray-500 text-lg leading-relaxed">
                          Monday – Friday: 8:00 AM – 6:00 PM<br />
                          Saturday: 9:00 AM – 4:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="bg-red-50 p-10 rounded-[32px] border border-red-100 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-red-100 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-red-200 transition-colors"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 text-red-600 font-heading font-extrabold text-2xl mb-4">
                      <ShieldAlert className="w-8 h-8" /> Emergency Care
                    </div>
                    <p className="text-red-900 text-lg mb-8 leading-relaxed">
                      If you are experiencing severe tooth pain, trauma, or urgent swelling, please contact us immediately. Our emergency team is ready.
                    </p>
                    <a href="tel:+15551234567" className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-2xl transition-all shadow-lg shadow-red-200">
                      Call Emergency Line
                    </a>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Booking Form */}
            <div className="lg:w-1/2">
              <FadeIn delay={0.3}>
                <div className="bg-light rounded-[40px] p-8 md:p-12 border border-gray-100 shadow-2xl shadow-gray-200/50">
                  <h3 className="text-3xl font-heading font-bold text-dark mb-4">Book an Appointment</h3>
                  <p className="text-gray-500 text-lg mb-10 leading-relaxed">
                    Scheduling your visit is easy. Complete the form below, and a member of our team will contact you to confirm.
                  </p>
                  
                  <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-dark uppercase tracking-wide">First Name</label>
                        <input type="text" className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-200 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all text-lg" placeholder="John" required />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-dark uppercase tracking-wide">Last Name</label>
                        <input type="text" className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-200 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all text-lg" placeholder="Doe" required />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-dark uppercase tracking-wide">Phone Number</label>
                        <input type="tel" className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-200 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all text-lg" placeholder="(555) 123-4567" required />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-dark uppercase tracking-wide">Email Address</label>
                        <input type="email" className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-200 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all text-lg" placeholder="john@example.com" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-dark uppercase tracking-wide">Service Needed</label>
                      <select className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-200 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all bg-white text-lg" required>
                        <option value="">Select a service...</option>
                        <option value="general">General Checkup</option>
                        <option value="cleaning">Teeth Cleaning</option>
                        <option value="whitening">Teeth Whitening</option>
                        <option value="implants">Dental Implants</option>
                        <option value="ortho">Orthodontics</option>
                        <option value="emergency">Emergency Dental Care</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-dark uppercase tracking-wide">Additional Notes</label>
                      <textarea rows={4} className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-200 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all resize-none text-lg" placeholder="Any specific concerns or preferred times?"></textarea>
                    </div>

                    <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-2xl font-bold transition-all shadow-xl shadow-primary/30 text-xl transform hover:-translate-y-1">
                      Request Appointment
                    </button>
                  </form>
                </div>
              </FadeIn>
            </div>
            
          </div>
        </div>
      </section>

      {/* Info Sections */}
      <section className="py-24 bg-light">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <FadeIn>
              <div className="bg-white p-12 rounded-[40px] border border-gray-100 shadow-sm h-full hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-8">
                  <CreditCard className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-dark mb-6">Insurance & Payment</h3>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  We accept major insurance providers and offer flexible payment solutions to make dental care accessible and affordable for all patients.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {["Major Insurances", "Flexible Plans", "Financing Options", "Transparent Pricing"].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 font-bold text-gray-700 uppercase tracking-tighter text-sm">
                      <CheckCircle2 className="text-secondary w-4 h-4" /> {item}
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="bg-white p-12 rounded-[40px] border border-gray-100 shadow-sm h-full hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8">
                  <User className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-dark mb-6">First Visit Information</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  During your first appointment, our team will review your history, perform a comprehensive exam, and discuss personalized treatment recommendations. We ensure your first visit is informative, comfortable, and completely stress-free.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-primary text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8">Ready to Transform Your Smile?</h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90">
              Contact Dentis today and take the first step toward healthier teeth, improved confidence, and exceptional care.
            </p>
            <Link to="/contact" className="inline-block bg-white text-primary hover:bg-gray-100 font-extrabold px-12 py-5 rounded-2xl transition-all shadow-2xl text-xl">
              Book Your Appointment Now
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
