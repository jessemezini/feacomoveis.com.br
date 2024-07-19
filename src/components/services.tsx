import { MdOutlineDesignServices, MdTipsAndUpdates } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#f7f7f7] -mt-32 pb-32"
      data-theme="light"
    >
      <div className="container mx-auto pt-64 text-center px-5">
        <h2 className="max-w-3xl mx-auto text-3xl sm:text-4xl font-extrabold leading-normal sm:leading-normal tracking-tight mb-6">
          Design & desenvolvimento de Sites e Aplicativos
        </h2>

        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row gap-3 text-left [&>div]:prose [&>div]:py-10 [&>div]:px-6 [&>div]:flex-1 [&>div]:rounded-md [&>div]:shadow-sm">
          <div
            data-theme="forest"
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
            data-theme="forest"
            className="bg-secondary/40 hover:bg-secondary/20"
          >
            <FaLaptopCode size={44} className="text-secondary-content" />

            <h3 className="!text-secondary-content">Desenvolvimento</h3>
            <p className="font-light text-secondary-content">
              Criamos soluções web e mobile de alta performance, adaptadas às
              suas necessidades.
            </p>
          </div>

          <div
            data-theme="forest"
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
