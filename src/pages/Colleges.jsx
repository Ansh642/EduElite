import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CollegeCard from "../components/CollegeCard";

const Colleges = () => {
  const colleges = [
    {
      id: 1,
      name: "Indian Institute of Technology Bombay",
      location: "Mumbai, Maharashtra",
      features: ["QS Rank: 149", "Engineering", "Research"],
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      established: "1958",
      rating: "4.8"
    },
    {
      id: 2,
      name: "Indian Institute of Science",
      location: "Bangalore, Karnataka",
      features: ["QS Rank: 225", "Science", "Technology"],
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      established: "1909",
      rating: "4.9"
    },
    {
      id: 3,
      name: "University of Delhi",
      location: "New Delhi",
      features: ["NAAC A++", "Arts", "Commerce"],
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      established: "1922",
      rating: "4.5"
    },
    {
      id: 4,
      name: "All India Institute of Medical Sciences",
      location: "New Delhi",
      features: ["Medical", "Research", "Hospital"],
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      established: "1956",
      rating: "4.9"
    },
    {
      id: 5,
      name: "Indian Institute of Management Ahmedabad",
      location: "Ahmedabad, Gujarat",
      features: ["MBA", "Business", "Economics"],
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      established: "1961",
      rating: "4.8"
    },
    {
      id: 6,
      name: "Jawaharlal Nehru University",
      location: "New Delhi",
      features: ["Humanities", "Social Sciences", "Languages"],
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      established: "1969",
      rating: "4.6"
    },
    {
      id: 7,
      name: "Banaras Hindu University",
      location: "Varanasi, Uttar Pradesh",
      features: ["NAAC A++", "Multidisciplinary", "Research"],
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      established: "1916",
      rating: "4.5"
    },
    {
      id: 8,
      name: "Birla Institute of Technology & Science",
      location: "Pilani, Rajasthan",
      features: ["Deemed University", "Engineering", "Science"],
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      established: "1964",
      rating: "4.7"
    },
    
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
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/90"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn} className="mb-6">
                <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wide">
                  PREMIUM INSTITUTIONS
                </span>
              </motion.div>
              
              <motion.h1 
                variants={fadeIn}
                className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-white">
                  India's Premier Academic Institutions
                </span>
              </motion.h1>
              
              <motion.p 
                variants={fadeIn}
                className="text-xl md:text-2xl text-blue-100 max-w-4xl mb-10"
              >
                Discover the finest universities and colleges that are shaping India's future leaders and innovators.
              </motion.p>
              
              <motion.div 
                variants={fadeIn}
                className="flex flex-col sm:flex-row gap-6"
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(255,255,255,0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-900 px-8 py-3 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all"
                >
                  Explore Campuses
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(255,255,255,0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-blue-300 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-blue-800/30 transition-all"
                >
                  Admission Guidance
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Colleges Grid */}
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
                Featured <span className="text-blue-600">Institutions</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                India's most prestigious universities and colleges across diverse academic disciplines.
              </p>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {colleges.map((college) => (
                <CollegeCard key={college.id} college={college} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {[
                { number: "50+", label: "Academic Disciplines" },
                { number: "1000+", label: "Research Papers Published" },
                { number: "1M+", label: "Alumni Network" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                >
                  <div className="text-5xl font-bold mb-2 text-blue-200">{stat.number}</div>
                  <div className="text-xl text-blue-100">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Colleges;