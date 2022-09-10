import { motion } from "framer-motion";
import placeholder from "../Images/placeholder.jpg";

export default function Home() {
  return (
    <motion.div
      className="h-screen flex flex-col bg-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0 }}
    >
      <img className={`h-[97%]`} src={placeholder} alt="homeBackground"></img>
      <div className="h-[3%] text-white flex justify-between items-center text-xs mx-24">
        <div>{`Copyright hextxrlxpez 2022©`}</div>
        <div className="flex gap-7">
          <span className="text-left w-52">{`Política de privacidad.`}</span>
          <span className="text-left w-52">{`Aviso legal.`}</span>
        </div>
      </div>
    </motion.div>
  );
}
