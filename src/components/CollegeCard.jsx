import { motion } from "framer-motion";

const CollegeCard = ({ college }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        y: -10,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100 transition-all duration-300 hover:shadow-xl"
    >
      <div className="h-48 overflow-hidden relative">
        <motion.img
          src={college.image}
          alt={college.name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          onError={(e) => {
            e.target.onerror = null; 
            e.target.src = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex justify-between items-center"
          >
            <span className="text-white font-bold">{college.established}</span>
            <span className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold flex items-center">
              ★ {college.rating}
            </span>
          </motion.div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{college.name}</h3>
        <p className="text-gray-600 mb-4 flex items-center">
          <svg className="w-4 h-4 mr-1 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          {college.location}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {college.features.map((feature, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-blue-50 text-blue-800 text-xs px-3 py-1 rounded-full"
            >
              {feature}
            </motion.span>
          ))}
        </div>
        
        <motion.button
          whileHover={{ 
            scale: 1.03,
            backgroundColor: "#1e40af",
            color: "#fff"
          }}
          whileTap={{ scale: 0.97 }}
          className="w-full bg-blue-100 text-blue-800 py-2 rounded-lg font-medium transition-all duration-300 flex items-center justify-center"
        >
          Explore Campus
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default CollegeCard;