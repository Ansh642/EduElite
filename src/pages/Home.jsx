import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  const features = [
    {
      title: "World-Class Educators",
      description: "Access to Nobel laureates, industry leaders, and top academics from prestigious institutions worldwide.",
      icon: "👨‍🏫",
    },
    {
      title: "Elite Institutions",
      description: "Partnerships with Ivy League universities and global top-100 ranked institutions.",
      icon: "🏛️",
    },
    {
      title: "Tailored Learning",
      description: "Customized educational pathways designed for your unique goals and learning style.",
      icon: "🎯",
    },
    {
      title: "Cutting-Edge Research",
      description: "Opportunities to participate in groundbreaking academic research projects.",
      icon: "🔬",
    },
    {
      title: "Global Network",
      description: "Connect with peers and mentors from over 50 countries worldwide.",
      icon: "🌐",
    },
    {
      title: "Career Acceleration",
      description: "Exclusive internships and career opportunities with Fortune 500 companies.",
      icon: "💼",
    },
  ];

  const testimonials = [
    {
      quote: "EduElite connected me with a mentor who transformed my academic journey. I'm now at Oxford thanks to their guidance.",
      author: "Sarah K., Oxford University",
      role: "Physics Student"
    },
    {
      quote: "The college matching service found me the perfect institution that aligned with both my academic and personal goals.",
      author: "Michael T., Stanford University",
      role: "Computer Science"
    },
    {
      quote: "As an educator, I've found incredibly motivated students through EduElite who truly value deep learning.",
      author: "Dr. Priya N.",
      role: "Professor of Economics"
    }
  ];

  const stats = [
    { number: "500+", label: "Nobel Laureates & Experts" },
    { number: "200+", label: "Top Global Institutions" },
    { number: "10,000+", label: "Successful Alumni" },
    { number: "98%", label: "Satisfaction Rate" },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/90"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="text-center"
            >
              <motion.div variants={fadeIn} className="mb-6">
                <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wide">
                  PREMIUM EDUCATION NETWORK
                </span>
              </motion.div>
              
              <motion.h1 
                variants={fadeIn}
                className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-white">
                  The Future of Elite Education
                </span> <br />
                <span className="text-blue-100">Starts Here</span>
              </motion.h1>
              
              <motion.p 
                variants={fadeIn}
                className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-10"
              >
                Join the world's most exclusive educational platform connecting exceptional students with premier institutions and distinguished educators.
              </motion.p>
              
              <motion.div 
                variants={fadeIn}
                className="flex flex-col sm:flex-row justify-center gap-6"
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(255,255,255,0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all"
                >
                  Discover Programs
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(255,255,255,0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-blue-300 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-800/30 transition-all"
                >
                  Speak to an Advisor
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
          
          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
          >
            <svg className="w-10 h-10 text-blue-300 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </motion.div>
        </section>

        {/* Logo Cloud */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center text-3xl font-bold text-gray-900 mb-12"
            >
              Trusted by the World's Leading Institutions
            </motion.h2>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center"
            >
              {[
                "Harvard",
                "MIT",
                "Stanford",
                "Oxford",
                "Cambridge",
                "ETH Zurich"
              ].map((university, index) => (
                <motion.div
                  key={university}
                  variants={fadeIn}
                  whileHover={{ scale: 1.1 }}
                  className="flex justify-center"
                >
                  <div className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-blue-50 flex items-center justify-center shadow-md border border-blue-100">
                    <span className="text-xs md:text-sm font-bold text-blue-900">{university}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why <span className="text-blue-600">EduElite</span> Stands Apart
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our exclusive platform offers unparalleled access to the highest echelons of academia.
              </p>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  variants={fadeIn}
                  whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0,0,0,0.05)" }}
                  className="bg-white p-8 rounded-xl shadow-lg border border-blue-50 transition-all"
                >
                  <motion.div 
                    className="text-5xl mb-6"
                    animate={{ 
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3
                    }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-5xl md:text-6xl font-bold mb-3 text-blue-200">
                    <motion.span
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.2, duration: 1 }}
                      viewport={{ once: true }}
                    >
                      {stat.number}
                    </motion.span>
                  </div>
                  <div className="text-xl text-blue-100">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Success Stories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Hear from our students and educators about their EduElite experience.
              </p>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  whileHover={{ scale: 1.02 }}
                  className="bg-blue-50 p-8 rounded-xl border border-blue-100"
                >
                  <div className="text-4xl text-blue-400 mb-4">"</div>
                  <p className="text-gray-700 italic mb-6">{testimonial.quote}</p>
                  <div className="font-bold text-blue-900">{testimonial.author}</div>
                  <div className="text-sm text-blue-700">{testimonial.role}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Educational Journey?
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10">
                Join the select few who gain access to the world's most prestigious educational opportunities.
              </p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row justify-center gap-6"
              >
                <motion.button
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 10px 25px -5px rgba(255,255,255,0.2)",
                    backgroundColor: "#fff",
                    color: "#1e3a8a"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg shadow-lg"
                >
                  Apply Now
                </motion.button>
                
                <motion.button
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 10px 25px -5px rgba(255,255,255,0.2)",
                    backgroundColor: "rgba(255,255,255,0.1)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg"
                >
                  Schedule Consultation
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;