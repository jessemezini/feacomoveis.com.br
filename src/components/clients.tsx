import Image from "next/image";

export default function Clients() {
  return (
    <div className="bg-base-200/50 -mt-32 py-44">
      <section className="container mx-auto flex flex-wrap gap-7">
        <div className="bg-slate-400 rounded-2xl w-28 h-28 p-4 flex justify-center items-center">
          <Image
            src="/clients/prefeitura-iracemapolis.webp"
            alt="Prefeitura de Iracemapolis"
            width={72}
            height={61.92}
            quality={100}
          />
        </div>
      </section>
    </div>
  );
}
