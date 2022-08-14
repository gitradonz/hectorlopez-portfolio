import { motion } from "framer-motion";

const variantsLeft = {
  rest: {
    x: -3000,
    transition: {
      duration: 2,
      type: "tween",
      ease: "easeInOut",
    },
  },
  hover: {
    x: 0,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeInOut",
    },
  },
};
const variantsRight = {
  rest: {
    x: 3000,
    transition: {
      duration: 2,
      type: "tween",
      ease: "easeInOut",
    },
  },
  hover: {
    x: 0,
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
      <div className="flex flex-col h-screen w-screen gap-7">
        <div className="flex justify-between gap-7 h-full w-full">
          <EachWork title="WINGSTOWN BRAND" variants={variantsLeft} />
          <EachWork title="5505" variants={variantsRight} />
        </div>
        <div className="flex justify-between gap-7 h-full w-full">
          <EachWork title="MO-MAD" variants={variantsLeft} />
          <EachWork title="HANGAR" variants={variantsRight} />
        </div>
      </div>
    </motion.div>
  );
}

function EachWork({ title, variants }) {
  return (
    <div className="w-full h-full bg-gray flex justify-center items-center pt-44">
      <motion.div
        initial="rest"
        whileHover="hover"
        animate="rest"
        className="w-full h-full flex justify-center items-center z-10"
      >
        <motion.div
          variants={variants}
          className="bg-transparent text-yellow text-[96px]"
        >
          {title}
        </motion.div>
      </motion.div>
    </div>
  );
}
