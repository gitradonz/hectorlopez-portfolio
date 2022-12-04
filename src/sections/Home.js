import { motion } from 'framer-motion';
import imgHome from '../Images/Prueba-home.jpg';

export default function Home() {
  return (
    <motion.div
      className="h-screen flex flex-col bg-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0 }}
    >
      <img
        className={`h-screen lg:h-[97%] object-cover`}
        src={imgHome}
        alt="homeBackground"
      />
      <div className="h-0 text-white flex justify-evenly  items-center text-xs lg:visible lg:h-[3%] invisible">
        <div>{`Copyright hextxrlxpez 2022©`}</div>
        <div className="flex gap-7">
          <span className="text-left w-52">{`Política de privacidad.`}</span>
          <span className="text-left w-52">{`Aviso legal.`}</span>
        </div>
      </div>
    </motion.div>
  );
}
