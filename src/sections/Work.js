import { motion } from "framer-motion";

const variantsLeft = {
  rest: {
    opacity: 0,
    transition: {
      duration: 0.5,
      type: "tween",
      ease: "easeInOut",
    },
  },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.5,
      type: "tween",
      ease: "easeInOut",
    },
  },
};
const variantsRight = {
  rest: {
    opacity: 0,
    transition: {
      duration: 0.5,
      type: "tween",
      ease: "easeInOut",
    },
  },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.5,
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
        <div className="flex gap-7 h-full w-full">
          <EachWork
            title="  WINGSTOWN BRAND  -  "
            variants={variantsLeft}
            lado={"izq"}
          />
          <EachWork title=" 5505 - " variants={variantsRight} lado={"der"} />
        </div>
        <div className="flex gap-7 h-full w-full">
          <EachWork title=" MO-MAD - " variants={variantsLeft} lado={"izq"} />
          <EachWork title=" HANGAR - " variants={variantsRight} lado={"der"} />
        </div>
      </div>
      <div className="flex flex-col h-screen w-full gap-7">
        <div className="flex gap-7 h-full w-full">
          <EachWork
            title=" OPTICA EL ALTET  -  "
            variants={variantsLeft}
            lado={"izq"}
          />
          <EachWork
            title=" ACC. COSTABLANCA  -  "
            variants={variantsRight}
            lado={"der"}
          />
        </div>
        <div className="flex gap-7 h-full w-full">
          <EachWork title=" OTROS  -  " variants={variantsLeft} lado={"izq"} />
          <EachWork
            title=" SP5505  -  "
            variants={variantsRight}
            lado={"der"}
          />
        </div>
      </div>
    </motion.div>
  );
}

function EachWork({ title, variants, lado }) {
  return (
    <div className="w-full h-full bg-gray">
      <motion.div
        initial="rest"
        whileHover="hover"
        animate="rest"
        className="w-full h-full"
      >
        <motion.div variants={variants} className="text-yellow text-[64px]">
          {lado === "izq" ? (
            <MarqueeIzq title={title} />
          ) : (
            <Marquee title={title} />
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}

function MarqueeIzq({ title }) {
  return (
    <p className="marqueeIzq">
      <span>
        {title}
        {title}
        {title}
        {title}
      </span>
    </p>
  );
}
function Marquee({ title }) {
  return (
    <p className="marquee">
      <span>
        {title}
        {title}
        {title}
        {title}
        {title}
        {title}
        {title}
        {title}
        {title}
        {title}
        {title}
        {title}
        {title}
        {title}
        {title}
        {title}
        {title}
        {title}
        {title}
        {title}
        {title}
        {title}
        {title}
        {title}
      </span>
    </p>
  );
}
