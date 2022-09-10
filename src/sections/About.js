import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0 }}
    >
      <div
        id="aboutTitle"
        className={`absolute noSelectable left-1/2 -ml-[550px] text-white text-[200px] italic w-[900px] top-10`}
      >
        <span className="whitespace-nowrap">{"héctxr lxpez"}</span>
      </div>
      <div className="flex">
        <div className="h-screen w-1/2 bg-gray"></div>
        <div className="h-screen w-1/2 bg-black">
          <div className="absolute noSelectable right-[20%] top-[40%] text-white">
            <p className="w-96 mb-5">{bio1}</p>
            <p className="w-96 mb-5">{bio2}</p>
            <p className="w-96 mb-5">{bio3}</p>
            <p className="w-96 mb-5">{bio4}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="h-72 w-screen bg-black text-white text-center flex flex-col gap-7 justify-center text-5xl font-semibold">
          <p>{`brand identity · content creation · editorial design`}</p>
          <p>{`logo design · poster design · web design`}</p>
          <p>{`photography · packaging · clothing · visual content`}</p>
        </div>
        <div className="h-[576px] w-screen bg-gray text-center pt-3">
          MAS COSAS
        </div>
        {/* EXPERIENCE */}
        <div className="h-[576px] w-screen text-center">
          <ExperienceBanner />
          <Experiences
            company={"Freelance"}
            time={"Always"}
            site={"Anywhere"}
          />
          <Experiences
            company={"You are the princess"}
            time={"from JUN22"}
            site={"Mad, Spain"}
          />
          <Experiences
            company={"Saraos Agency"}
            time={"MAR21 to MAY22"}
            site={"San Juan, Spain"}
          />
          <Experiences
            company={"Estudio Pérez Medina"}
            time={"FEB18 to JAN19"}
            site={"Mad, Spain"}
          />
          <Experiences
            company={"Marmarela"}
            time={"MAY15 to AUG19"}
            site={"Alc, Spain"}
          />
          <Experiences
            company={"Accesorios Costablanca"}
            time={"since 2016"}
            site={"Alc, Spain"}
          />
          <Experiences
            company={"Nightfall"}
            time={"2014"}
            site={"Alc, Spain"}
          />
          <ExperienceBanner />
        </div>
        <div className="h-[576px] w-screen bg-gray text-center pt-3">
          MAS COSAS
        </div>
      </div>
    </motion.div>
  );
}

const ExperienceBanner = () => {
  return (
    <div className="h-7 bg-white text-xl font-semibold overflow-hidden">
      · EXPERIENCE · EXPERIENCE · EXPERIENCE · EXPERIENCE · EXPERIENCE ·
      EXPERIENCE · EXPERIENCE · EXPERIENCE · EXPERIENCE · EXPERIENCE ·
      EXPERIENCE · EXPERIENCE · EXPERIENCE · EXPERIENCE · EXPERIENCE ·
      EXPERIENCE · EXPERIENCE · EXPERIENCE · EXPERIENCE · EXPERIENCE ·
      EXPERIENCE · EXPERIENCE · EXPERIENCE · EXPERIENCE · EXPERIENCE ·
    </div>
  );
};
const Experiences = ({ company, time, site }) => {
  return (
    <div className="h-8 bg-black border-t-[1px] border-t-yellow text-white flex justify-between items-center">
      <div className="uppercase">{company}</div>
      <div className="flex gap-7">
        <span className="text-left w-52">{time}</span>
        <span className="text-left w-52">{site}</span>
      </div>
    </div>
  );
};

const bio1 =
  "¿Sabes el día que decides ir con tu cita a un buen restaurante a cenar tranquilo? Ignoras la tipografía, la etiqueta recargada del vino… Lo dejas pasar. Pero el camarero te trae la carta y de repente… ¡pam! el texto no está bien alineado.";
const bio2 =
  "Hola, me llamo Héctor y desde que mi tío me instaló por error Photoshop CS2 busco la perfección en mi trabajo.";
const bio3 =
  "Soy curioso, meticuloso y autodidacta. Actualmente, con varios cursos y los estudios superiores de diseño a la espalda, puedo decir que el pack adobe es como una extensión más de mi cuerpo. Prefiero que lo compruebes tú mismo.";
const bio4 = "Time flies!";
