import { motion } from "framer-motion";

export default function Work() {
  return (
    <motion.div
      className="bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0 }}
    >
      <div className="flex flex-col h-screen w-screen gap-7">
        <div className="flex justify-between gap-7 h-full w-full">
          <div className="w-full h-full bg-gray" />
          <div className="w-full h-full bg-gray" />
        </div>
        <div className="flex justify-between gap-7 h-full w-full">
          <div className="w-full h-full bg-gray" />
          <div className="w-full h-full bg-gray" />
        </div>
      </div>
    </motion.div>
  );
}
