import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="container mx-auto">
        <div className="max-w-3xl mx-auto mt-24 text-center px-5">
          <h1 className="font-semibold text-4xl sm:text-5xl leading-normal tracking-tight mb-4">
            Somos uma agência digital, que cria experiências online
            impressionantes e envolventes
          </h1>

          <p className="max-w-xl mx-auto text-base sm:text-lg font-medium leading-loose text-gray-300">
            Nós nos concentramos nas melhores práticas para soluções e serviços
            de design e desenvolvimento de sites e aplicativos.
          </p>

          <Image
            src="/website.webp"
            alt="MZN App Lab"
            width={768}
            height={768}
            className="mx-auto mt-8"
          />
        </div>
      </main>
    </>
  );
}
