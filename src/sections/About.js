import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0 }}
    >
      <div className="flex">
        <div className="h-screen w-1/2 bg-gray"></div>
        <div className="h-screen w-1/2 bg-black"></div>
      </div>
    </motion.div>
  );
}
