import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loader = ({ setLoading }) => {
  const [exit, setExit] = useState(false);

  useEffect(() => {
    const fillDuration = 3000;
    const exitDuration = 1000;

    const timeout = setTimeout(() => {
      setExit(true);
    }, fillDuration);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence
      onExitComplete={() => setLoading(false)}
    >
      {!exit && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-black flex flex-col items-center justify-center text-white z-50"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1 } }} // Fade-out animation (1s)
        >
          <div className="relative w-20 h-28 border-4 border-[#ffae00] rounded-full overflow-hidden flex items-end justify-center">
            <motion.div
              className="absolute bottom-0 w-full bg-gradient-to-t from-[#743a00] via-[#9f5f00] to-[#ffae00]"
              initial={{ height: "0%" }}
              animate={{ height: "100%" }}
              transition={{ duration: 3, ease: "easeInOut" }} // Fill animation takes 3s
            />
          </div>

          <p className="mt-4 text-xl font-semibold tracking-wide animate-pulse">
            Igniting Fire...
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
