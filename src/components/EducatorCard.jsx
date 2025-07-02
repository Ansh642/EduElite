import { motion } from "framer-motion";

const EducatorCard = ({ educator }) => {
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
      <div className="p-6">
        <div className="flex items-center space-x-4 mb-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative"
          >
            <img
              src={educator.image}
              alt={educator.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-blue-200"
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = `https://ui-avatars.com/api/?name=${educator.name.split(' ').join('+')}&background=1e3a8a&color=fff&size=128`;
              }}
            />
            <div className="absolute -bottom-1 -right-1 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
              {educator.experience}
            </div>
          </motion.div>
          <div>
            <h3 className="text-lg font-bold text-gray-800">{educator.name}</h3>
            <p className="text-blue-600 font-medium">{educator.field}</p>
            <p className="text-sm text-gray-500 mt-1">{educator.college}</p>
          </div>
        </div>
        
        <div className="space-y-3">
          <div>
            <span className="text-sm font-medium text-gray-500">Email:</span>
            <p className="text-gray-700">{educator.email}</p>
          </div>
          
          <div>
            <span className="text-sm font-medium text-gray-500">Specializes in:</span>
            <div className="flex flex-wrap gap-2 mt-1">
              {educator.specialization.map((subject, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-blue-50 text-blue-800 text-xs px-3 py-1 rounded-full"
                >
                  {subject}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
        
        <motion.button
          whileHover={{ 
            scale: 1.03,
            backgroundColor: "#1e40af",
            color: "#fff"
          }}
          whileTap={{ scale: 0.97 }}
          className="mt-6 w-full bg-blue-100 text-blue-800 py-2 rounded-lg font-medium transition-all duration-300"
        >
          View Full Profile
        </motion.button>
      </div>
    </motion.div>
  );
};

export default EducatorCard;