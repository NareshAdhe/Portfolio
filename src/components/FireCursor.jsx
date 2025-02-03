import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const FireCursor = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50"
      animate={{ x: cursorPos.x - 20, y: cursorPos.y - 20 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    >
      {/* Outer Fire Glow (Biggest) */}
      <div className="fire-animation absolute w-14 h-14 bg-[#ce8500] rounded-full blur-lg opacity-40" />
      {/* Mid Fire Glow */}
      <div className="fire-animation absolute w-10 h-10 bg-[#9f5f00] rounded-full blur-md opacity-50" />
      {/* Inner Fire Core */}
      <div className="fire-animation absolute w-8 h-8 bg-[#743a00] rounded-full blur-sm opacity-60" />
    </motion.div>
  );
};
export default FireCursor;