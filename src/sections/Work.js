import { motion } from "framer-motion";

const variantsLeft = {
  rest: {
    opacity: 0,
    transition: {
      duration: 2,
      type: "tween",
      ease: "easeInOut",
    },
  },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeInOut",
    },
  },
};
const variantsRight = {
  rest: {
    opacity: 0,
    transition: {
      duration: 2,
      type: "tween",
      ease: "easeInOut",
    },
  },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeInOut",
    },
  },
};

export default function Work() {
  return (
    <motion.div
      className="bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0 }}
    >
      <div className="flex flex-col h-screen w-full gap-7 mb-7">
        <div className="flex gap-7 h-full max-w-full">
          <EachWork title="WINGSTOWN BRAND - " variants={variantsLeft} />
          <EachWork title="5505 - " variants={variantsRight} />
        </div>
        <div className="flex gap-7 h-full w-full">
          <EachWork title="MO-MAD - " variants={variantsLeft} />
          <EachWork title="HANGAR - " variants={variantsRight} />
        </div>
      </div>
      <div className="flex flex-col h-screen w-full gap-7">
        <div className="flex gap-7 h-full w-full">
          <EachWork title="OPTICA EL ALTET - " variants={variantsLeft} />
          <EachWork title="ACC. COSTABLANCA - " variants={variantsRight} />
        </div>
        <div className="flex gap-7 h-full w-full">
          <EachWork title="OTROS - " variants={variantsLeft} />
          <EachWork title="SP5505 - " variants={variantsRight} />
        </div>
      </div>
    </motion.div>
  );
}

function EachWork({ title, variants }) {
  return (
    <div className="w-full h-full bg-gray flex justify-center items-center">
      <motion.div
        initial="rest"
        whileHover="hover"
        animate="rest"
        className="w-full h-full flex justify-center items-center z-20 whitespace-nowrap"
      >
        <motion.div
          variants={variants}
          className=" text-yellow text-[32px] overflow-hidden w-full"
        >
          <div className="relative overflow-hidden scroll-text">
            <span>
              {title}
              {title}
            </span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
