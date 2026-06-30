import { motion } from 'motion/react';
import { Calendar, User, ArrowRight, Mail } from 'lucide-react';

import heroBg from '../assets/images/hero_background_1782839173492.jpg';
import patientImg from '../assets/images/happy_patient_1782839211906.jpg';
import techImg from '../assets/images/dental_technology_1782839201458.jpg';
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

const blogPosts = [
  {
    title: "Top 10 Habits for Healthy Teeth",
    excerpt: "Discover simple daily habits that can significantly improve your oral health and reduce the risk of dental problems.",
    image: patientImg,
    category: "Health",
    date: "Oct 12, 2023",
    author: "Dr. Michael Anderson"
  },
  {
    title: "The Benefits of Professional Teeth Whitening",
    excerpt: "Learn how professional whitening treatments provide faster, safer, and longer-lasting results compared to products.",
    image: techImg,
    category: "Cosmetic",
    date: "Oct 05, 2023",
    author: "Dr. Sarah Johnson"
  },
  {
    title: "Understanding Dental Implants",
    excerpt: "Explore how dental implants restore missing teeth and improve confidence, functionality, and appearance.",
    image: teamImg,
    category: "Restorative",
    date: "Sep 28, 2023",
    author: "Dr. Michael Anderson"
  },
  {
    title: "How to Prevent Gum Disease",
    excerpt: "Understand the warning signs of gum disease and the steps you can take to maintain healthy gums.",
    image: patientImg,
    category: "Prevention",
    date: "Sep 15, 2023",
    author: "Dr. Emily Roberts"
  },
  {
    title: "Children's Oral Health Guide",
    excerpt: "Learn how parents can help children develop healthy oral hygiene habits from an early age for a lifetime of health.",
    image: heroBg,
    category: "Pediatric",
    date: "Sep 02, 2023",
    author: "Dr. Emily Roberts"
  },
  {
    title: "Root Canal Myths and Facts",
    excerpt: "Separate fact from fiction and understand why root canal therapy is a safe and effective treatment.",
    image: techImg,
    category: "Education",
    date: "Aug 28, 2023",
    author: "Dr. Michael Anderson"
  },
  {
    title: "Invisalign vs Traditional Braces",
    excerpt: "Compare treatment options and determine which orthodontic solution may be right for you and your lifestyle.",
    image: patientImg,
    category: "Orthodontics",
    date: "Aug 21, 2023",
    author: "Dr. Sarah Johnson"
  },
  {
    title: "Best Foods for Strong Teeth",
    excerpt: "Discover foods that support healthy teeth, strong enamel, and overall oral health.",
    image: teamImg,
    category: "Nutrition",
    date: "Aug 10, 2023",
    author: "Jessica Miller"
  }
];

export default function Blog() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 lg:py-40 overflow-hidden bg-dark text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Blog Background" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/70 to-dark/40"></div>
        </div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold mb-8"
            >
              Dental Health <span className="text-primary">Insights</span> & Advice
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
            >
              Stay informed with helpful articles, expert tips, and practical advice from the Dentis team.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Featured Articles Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="bg-white rounded-[40px] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden group h-full flex flex-col">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-6 left-6 bg-white/95 backdrop-blur text-primary text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-lg">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-10 flex flex-col flex-grow">
                    <div className="flex items-center gap-6 text-sm text-gray-400 mb-6 font-medium">
                      <span className="flex items-center gap-2"><Calendar size={16} className="text-primary" /> {post.date}</span>
                      <span className="flex items-center gap-2"><User size={16} className="text-primary" /> {post.author}</span>
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-dark mb-4 group-hover:text-primary transition-colors leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 mb-8 line-clamp-3 flex-grow leading-relaxed">
                      {post.excerpt}
                    </p>
                    <a href="#" className="inline-flex items-center gap-3 text-primary font-bold hover:gap-5 transition-all text-lg border-t border-gray-100 pt-6">
                      Read Article <ArrowRight size={20} />
                    </a>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-cover bg-center" style={{ backgroundImage: `url(${heroBg})` }}></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary"></div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-primary/20 text-primary mb-8">
              <Mail className="w-10 h-10" />
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8">Subscribe to Our Newsletter</h2>
            <p className="text-gray-300 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Subscribe to receive the latest dental health tips and clinic updates directly in your inbox.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-6 max-w-2xl mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-grow px-8 py-5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-lg"
                required
              />
              <button type="submit" className="bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-2xl font-bold transition-all shadow-lg shadow-primary/30 text-lg">
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
