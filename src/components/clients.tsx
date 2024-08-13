import Image from "next/image";

export default function Clients() {
  return (
    <div className="my-24">
      <h2 className="text-center text-2xl leading-normal tracking-tight mb-10">
        Alguns de nossos clientes
      </h2>
      <section className="container max-w-screen-lg mx-auto flex flex-wrap justify-center gap-7">
        <div className="bg-base-200/50 shadow-sm rounded-3xl w-28 h-28 p-3 flex justify-center items-center">
          <Image
            src="/clients/prefeitura-iracemapolis.webp"
            alt="Prefeitura de Iracemapolis"
            width={72}
            height={72}
            quality={100}
          />
        </div>
        <div className="bg-base-200/50 shadow-sm rounded-3xl w-28 h-28 p-3 flex justify-center items-center">
          <Image
            src="/clients/gazeta-de-iracemapolis.webp"
            alt="Gazeta de Iracemapolis"
            width={72}
            height={72}
            quality={100}
          />
        </div>
        <div className="bg-gray-700 shadow-sm rounded-3xl w-28 h-28 p-3 flex justify-center items-center">
          <Image
            src="/clients/medite-em-casa.webp"
            alt="App Medite em Casa"
            width={60}
            height={60}
            quality={100}
          />
        </div>
        <div className="bg-base-200/50 shadow-sm rounded-3xl w-28 h-28 p-3 flex justify-center items-center">
          <Image
            src="/clients/praticar-italiano.webp"
            alt="Blog Praticar Italiano"
            width={72}
            height={72}
            quality={100}
          />
        </div>
        <div className="bg-base-200/50 shadow-sm rounded-3xl w-28 h-28 p-3 flex justify-center items-center">
          <Image
            src="/clients/emporio-da-terra.webp"
            alt="Empório da Terra"
            width={72}
            height={72}
            quality={100}
          />
        </div>
        <div className="bg-gray-700  rounded-3xl w-28 h-28 p-3 flex justify-center items-center">
          <Image
            src="/clients/j3a-metais.webp"
            alt="J3A Metais"
            width={72}
            height={72}
            quality={100}
          />
        </div>
        <div className="bg-base-200/50 shadow-sm rounded-3xl w-28 h-28 p-3 flex justify-center items-center">
          <Image
            src="/clients/dueamici.webp"
            alt="Pizzaria Due Amici"
            width={72}
            height={72}
            quality={100}
          />
        </div>
        <div className="bg-gray-700 shadow-sm rounded-3xl w-28 h-28 p-3 flex justify-center items-center">
          <Image
            src="/clients/dangelo-corretor.webp"
            alt="Dangelo Corretor"
            width={72}
            height={72}
            quality={100}
          />
        </div>
        <div className="bg-base-200/50 shadow-sm rounded-3xl w-28 h-28 p-3 flex justify-center items-center">
          <Image
            src="/clients/conveniencia-uniao.webp"
            alt="Conveniência União"
            width={52}
            height={52}
            quality={100}
          />
        </div>
        <div className="bg-gray-700 shadow-sm rounded-3xl w-28 h-28 p-3 flex justify-center items-center">
          <Image
            src="/clients/conectimme.webp"
            alt="Conectimme"
            width={72}
            height={72}
            quality={100}
          />
        </div>
        <div className="bg-base-200/50 shadow-sm rounded-3xl w-28 h-28 p-3 flex justify-center items-center">
          <Image
            src="/clients/castelli.webp"
            alt="Pizzaria Castelli"
            width={72}
            height={72}
            quality={100}
          />
        </div>
        <div className="bg-base-200/50 shadow-sm rounded-3xl w-28 h-28 p-3 flex justify-center items-center">
          <Image
            src="/clients/onibus-iracemapolis.webp"
            alt="App Ônibus Iracemápolis"
            width={72}
            height={72}
            quality={100}
          />
        </div>
      </section>
    </div>
  );
}
