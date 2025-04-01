import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
function Navbar() {
  return (
    <header className="bg-[#282828] h-16 m-4 rounded-xl flex justify-between items-center">
      <div>
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white ml-4 font-bold text-2xl"
        >
          Job<span className="text-red-500">Finder</span>
        </motion.h1>
      </div>

      <div className="mr-4 flex gap-3">
        <Link
          to="/login"
          className="border border-red-500 text-white rounded-full hover:bg-red-500 transition-all ease-in-out duration-300 font-semibold px-10 py-2"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="bg-red-500 text-white font-semibold  hover:border hover:border-red-500 hover:bg-transparent transition-all ease-in-out duration-300 rounded-full px-10 py-2"
        >
          Register
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
