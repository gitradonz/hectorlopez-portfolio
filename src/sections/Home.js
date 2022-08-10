import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      className="h-screen flex justify-center items-center bg-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0 }}
    >
      HOME
    </motion.div>
  );
}
