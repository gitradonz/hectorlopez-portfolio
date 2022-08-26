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
        <div className="h-screen w-1/2 bg-black text-white flex flex-col justify-center items-center gap-7 pt-24">
          <p className="w-96">{bio1}</p>
          <p className="w-96">{bio2}</p>
          <p className="w-96">{bio3}</p>
          <p className="w-96">{bio4}</p>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="h-72 w-screen bg-black text-white text-center pt-3">
          COSAS
        </div>
        <div className="h-[576px] w-screen bg-gray text-center pt-3">
          MAS COSAS
        </div>
      </div>
    </motion.div>
  );
}

const bio1 =
  "¿Sabes el día que decides ir con tu cita a un buen restaurante a cenar tranquilo? Ignoras la tipografía, la etiqueta recargada del vino… Lo dejas pasar. Pero el camarero te trae la carta y de repente… ¡pam! el texto no está bien alineado.";
const bio2 =
  "Hola, me llamo Héctor y desde que mi tío me instaló por error Photoshop CS2 busco la perfección en mi trabajo.";
const bio3 =
  "Soy curioso, meticuloso y autodidacta. Actualmente, con varios cursos y los estudios superiores de diseño a la espalda, puedo decir que el pack adobe es como una extensión más de mi cuerpo. Prefiero que lo compruebes tú mismo.";
const bio4 = "Time flies!";
