import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="min-h-screen bg-dark text-gray flex flex-col justify-center items-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-display font-bold text-center"
      >
        Welcome to <span className="text-chaos">UnBuildable.app</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-lg text-gray-400 mt-4 text-center max-w-2xl"
      >
        A beautifully chaotic app where every UI element betrays you. Built to break.
      </motion.p>

      <motion.div
        className="mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <Link
          to="/gallery"
          className="bg-chaos hover:bg-red-700 px-6 py-3 rounded-full text-lg font-semibold shadow-lg transition"
        >
          Start Breaking Things 💣
        </Link>
      </motion.div>
    </div>
  );
};

export default Home;
