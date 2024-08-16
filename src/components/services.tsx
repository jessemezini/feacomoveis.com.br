import { MdOutlineDesignServices, MdTipsAndUpdates } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { THEME } from "@/consts";
import CountUpStats from "./countup-stats";

export default function Services() {
  return (
    <section
      id="services"
      data-theme={THEME}
      className="bg-gradient-to-br from-secondary to-secondary/10 -mt-32 pt-44 pb-20"
    >
      <div className="container mx-auto my-10 text-center px-5">
        <h2 className="text-center text-2xl leading-normal tracking-tight mb-10">
          Design & Desenvolvimento de Sites e Aplicativos
        </h2>

        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row gap-3 text-left [&>div]:prose [&>div]:py-10 [&>div]:px-6 [&>div]:flex-1">
          <div className="text-center">
            <div className="bg-accent rounded-full mx-auto relative w-14 h-14">
              <MdOutlineDesignServices
                size={60}
                className="text-secondary-content absolute -right-4 -bottom-4"
              />
            </div>

            <h3 className="!text-secondary-content">Design</h3>
            <p className="font-light text-secondary-content">
              Transformamos suas ideias em designs visualmente atraentes e
              funcionais para sites e aplicativos.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-accent rounded-full mx-auto relative w-14 h-14">
              <FaLaptopCode
                size={60}
                className="text-secondary-content absolute -right-4 -bottom-4"
              />
            </div>

            <h3 className="!text-secondary-content">Desenvolvimento</h3>
            <p className="font-light text-secondary-content">
              Criamos soluções web e mobile de alta performance, adaptadas às
              suas necessidades.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-accent rounded-full mx-auto relative w-14 h-14">
              <MdTipsAndUpdates
                size={60}
                className="text-secondary-content absolute -right-4 -bottom-4"
              />
            </div>

            <h3 className="!text-secondary-content">Manutenção</h3>
            <p className="font-light text-secondary-content">
              Garantimos que seu site ou aplicativo esteja sempre atualizado e
              funcionando perfeitamente.
            </p>
          </div>
        </div>

        <CountUpStats />
      </div>
    </section>
  );
}
