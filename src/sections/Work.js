import { motion } from 'framer-motion';
// import img1 from '../Images/Prueba-home.jpg';
// import img2 from '../Images/prueba-2.jpg';
// import img3 from '../Images/prueba-3.jpg';
// import img4 from '../Images/prueba-4.jpg';
// import img5 from '../Images/prueba-5.jpg';
// import img6 from '../Images/prueba-6.jpg';

const variantsLeft = {
  rest: {
    opacity: 0,
    transition: {
      duration: 0.5,
      type: 'tween',
      ease: 'easeInOut',
    },
  },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.5,
      type: 'tween',
      ease: 'easeInOut',
    },
  },
};
const variantsRight = {
  rest: {
    opacity: 0,
    transition: {
      duration: 0.5,
      type: 'tween',
      ease: 'easeInOut',
    },
  },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.5,
      type: 'tween',
      ease: 'easeInOut',
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
            lado={'izq'}
            img={'img1'}
          />
          <EachWork
            title=" 5505 - "
            variants={variantsRight}
            lado={'der'}
            img={'img2'}
          />
        </div>
        <div className="flex gap-7 h-full w-full">
          <EachWork
            title=" MO-MAD - "
            variants={variantsLeft}
            lado={'izq'}
            img={'img3'}
          />
          <EachWork
            title=" HANGAR - "
            variants={variantsRight}
            lado={'der'}
            img={'img4'}
          />
        </div>
      </div>
      <div className="flex flex-col h-screen w-full gap-7">
        <div className="flex gap-7 h-full w-full">
          <EachWork
            title=" OPTICA EL ALTET  -  "
            variants={variantsLeft}
            lado={'izq'}
            img={'img5'}
          />
          <EachWork
            title=" ACC. COSTABLANCA  -  "
            variants={variantsRight}
            lado={'der'}
            img={'img6'}
          />
        </div>
        <div className="flex gap-7 h-full w-full">
          <EachWork
            title=" OTROS  -  "
            variants={variantsLeft}
            lado={'izq'}
            img={'img1'}
          />
          <EachWork
            title=" SP5505  -  "
            variants={variantsRight}
            lado={'der'}
            img={'img2'}
          />
        </div>
      </div>
    </motion.div>
  );
}

function EachWork({ title, variants, lado, img }) {
  return (
    <div className={`w-full h-full bg-gray ${img}`}>
      <motion.div
        initial="rest"
        whileHover="hover"
        animate="rest"
        className="w-full h-full"
      >
        <motion.div
          variants={variants}
          className="text-yellow text-[64px] font-semibold"
        >
          {lado === 'izq' ? (
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
      <span className="noSelectable">
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
function Marquee({ title }) {
  return (
    <p className="marquee">
      <span className="noSelectable">
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
