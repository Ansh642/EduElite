import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EducatorCard from "../components/EducatorCard";

const Educators = () => {
  const educators = [
    {
      id: 1,
      name: "Dr. Priya Sharma",
      field: "Mathematics",
      experience: "15 years",
      email: "priya.sharma@example.com",
      specialization: ["Calculus", "Linear Algebra", "Statistics"],
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      college: "IIT Bombay"
    },
    {
      id: 2,
      name: "Prof. Rajesh Patel",
      field: "Computer Science",
      experience: "12 years",
      email: "rajesh.patel@example.com",
      specialization: ["Algorithms", "Machine Learning", "Data Structures"],
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      college: "IIT Delhi"
    },
    {
      id: 3,
      name: "Dr. Ananya Gupta",
      field: "Physics",
      experience: "18 years",
      email: "ananya.gupta@example.com",
      specialization: ["Quantum Mechanics", "Thermodynamics", "Astrophysics"],
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      college: "IISc Bangalore"
    },
    {
      id: 4,
      name: "Prof. Arjun Singh",
      field: "Literature",
      experience: "10 years",
      email: "arjun.singh@example.com",
      specialization: ["Indian Literature", "Modernism", "Creative Writing"],
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      college: "University of Delhi"
    },
    {
      id: 5,
      name: "Dr. Nandini Reddy",
      field: "Biology",
      experience: "14 years",
      email: "nandini.reddy@example.com",
      specialization: ["Genetics", "Microbiology", "Ecology"],
      image: "https://randomuser.me/api/portraits/women/63.jpg",
      college: "AIIMS Delhi"
    },
    {
      id: 6,
      name: "Prof. Amit Kumar",
      field: "Economics",
      experience: "16 years",
      email: "amit.kumar@example.com",
      specialization: ["Macroeconomics", "Game Theory", "Development Economics"],
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      college: "ISI Kolkata"
    },
    {
      id: 7,
      name: "Dr. Sneha Joshi",
      field: "Chemistry",
      experience: "11 years",
      email: "sneha.joshi@example.com",
      specialization: ["Organic Chemistry", "Nanotechnology", "Materials Science"],
      image: "https://randomuser.me/api/portraits/women/33.jpg",
      college: "IIT Madras"
    },
    {
      id: 8,
      name: "Prof. Vikram Malhotra",
      field: "Engineering",
      experience: "19 years",
      email: "vikram.malhotra@example.com",
      specialization: ["Robotics", "AI", "Mechanical Systems"],
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      college: "BITS Pilani"
    },
    {
      id: 9,
      name: "Dr. Meera Iyer",
      field: "History",
      experience: "13 years",
      email: "meera.iyer@example.com",
      specialization: ["Ancient India", "World History", "Archaeology"],
      image: "https://randomuser.me/api/portraits/women/55.jpg",
      college: "JNU Delhi"
    }
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
                  ELITE FACULTY NETWORK
                </span>
              </motion.div>
              
              <motion.h1 
                variants={fadeIn}
                className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-white">
                  India's Finest Academic Minds
                </span>
              </motion.h1>
              
              <motion.p 
                variants={fadeIn}
                className="text-xl md:text-2xl text-blue-100 max-w-4xl mb-10"
              >
                Connect with distinguished educators from India's premier institutions who are shaping the future of education.
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
                  Find Your Mentor
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(255,255,255,0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-blue-300 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-blue-800/30 transition-all"
                >
                  View Institutions
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Educators Grid */}
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
                Our Distinguished <span className="text-blue-600">Faculty</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Handpicked educators from India's top institutions, committed to excellence in teaching and research.
              </p>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {educators.map((educator) => (
                <EducatorCard key={educator.id} educator={educator} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {[
                { number: "50+", label: "Institutions Represented" },
                { number: "100+", label: "Research Publications" },
                { number: "95%", label: "Student Satisfaction" },
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

export default Educators;