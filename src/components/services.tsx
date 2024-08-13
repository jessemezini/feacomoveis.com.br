import { MdOutlineDesignServices, MdTipsAndUpdates } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { THEME } from "@/consts";

export default function Services() {
  return (
    <section
      id="services"
      data-theme={THEME}
      className="bg-base-200/50 -mt-32 pt-44 pb-20"
    >
      <div className="container mx-auto my-10 text-center px-5">
        <h2 className="text-center text-2xl leading-normal tracking-tight mb-10">
          Design & desenvolvimento de Sites e Aplicativos
        </h2>

        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row gap-3 text-left [&>div]:prose [&>div]:py-10 [&>div]:px-6 [&>div]:flex-1 [&>div]:rounded-md [&>div]:shadow-sm">
          <div
            data-theme={THEME}
            className="bg-secondary hover:bg-secondary/50"
          >
            <MdOutlineDesignServices
              size={44}
              className="text-secondary-content"
            />
            <h3 className="!text-secondary-content">Design</h3>
            <p className="font-light text-secondary-content">
              Transformamos suas ideias em designs visualmente atraentes e
              funcionais para sites e aplicativos.
            </p>
          </div>

          <div
            data-theme={THEME}
            className="bg-secondary/70 hover:bg-secondary/50"
          >
            <FaLaptopCode size={44} className="text-secondary-content" />

            <h3 className="!text-secondary-content">Desenvolvimento</h3>
            <p className="font-light text-secondary-content">
              Criamos soluções web e mobile de alta performance, adaptadas às
              suas necessidades.
            </p>
          </div>

          <div
            data-theme={THEME}
            className="bg-secondary hover:bg-secondary/50"
          >
            <MdTipsAndUpdates size={44} className="text-secondary-content" />
            <h3 className="!text-secondary-content">Manutenção</h3>
            <p className="font-light text-secondary-content">
              Garantimos que seu site ou aplicativo esteja sempre atualizado e
              funcionando perfeitamente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
