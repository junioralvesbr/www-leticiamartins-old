import Head from "next/head";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(import('react-player'), { ssr: false })

export default function Residencial() {
  return (
    <>
      <Head>
        <title>Leticia Martins - Serviço de Organização Residencial</title>
      </Head>

      <main>
        <h1 className="text-center uppercase text-xl tracking-widest text-shadow font-bold py-10 md:py-20 md:text-4xl">
          Organização Residencial
        </h1>
        <section>
          <article className="flex flex-col justify-center items-center gap-5 mb-10 md:flex-row md:gap-8">

            <figure className="lg:max-w-[640px]">
              <img src="/images/closet.jpg" alt="foto de closet"
                className="w-full h-auto"
              />
            </figure>

            <div className="lg:max-w-[640px]">

              <h2 className="font-bold text-center text-seventh-color uppercase tracking-widest pb-5">
                Quartos e Closets
              </h2>

              <p className="text-center text-secondary-color px-4 lg:text-lg min-w-[320px] max-w-[600px]">
                Essas áreas começam com pouco volume, mas rapidamente se tornam o lugar “fácil” para colocar as coisas quando você não sabe mais o que fazer com elas. Vamos organizar tudo com toda praticidade e facilidade para seu dia a dia.
              </p>

            </div>
          </article>

          <article className="flex flex-col justify-center items-center gap-5 mb-10 md:flex-row-reverse md:gap-8">

            <figure className="lg:max-w-[640px]">
              <img src="/images/infantil.webp" alt="foto de closet"
                className="w-full h-auto"
              />
            </figure>

            <div className="lg:max-w-[640px]">

              <h2 className="font-bold text-center text-seventh-color uppercase tracking-widest pb-5">
                Quartos Infantis e Brinquedoteca
              </h2>

              <p className="text-center text-secondary-color px-4 lg:text-lg min-w-[320px] max-w-[600px]">
                As crianças perdem suas roupas e brinquedos em um piscar de olhos, então não é de admirar que seus quartos e salas de jogos fiquem bagunçados. Podemos começar com a organização e restaurar a ordem em seus quartos para que eles possam encontrar o que precisam.
              </p>

            </div>
          </article>

          <article className="flex flex-col justify-center items-center gap-5 mb-10 md:flex-row md:gap-8">

            <figure className="lg:max-w-[640px]">
              <img src="/images/cozinha.jpg" alt="foto de closet"
                className="w-full h-auto"
              />
            </figure>

            <div className="lg:max-w-[640px]">

              <h2 className="font-bold text-center text-seventh-color uppercase tracking-widest pb-5">
                Cozinhas e despensas
              </h2>

              <p className="text-center text-secondary-color px-4 lg:text-lg min-w-[320px] max-w-[600px]">
                Provavelmente um dos cômodos mais usados em sua casa, a cozinha se torna um local de encontro para sua família e para o preparo das refeições. Colocar o foco nessas áreas pode não apenas ajudar a restaurar a ordem e reduzir o estresse, mas também pode ajudá-lo a economizar dinheiro.
              </p>

            </div>
          </article>

          <article className="flex flex-col justify-center items-center gap-5 mb-10 md:flex-row-reverse md:gap-8">

            <figure className="lg:max-w-[640px]">
              <img src="/images/banheiro.jpg" alt="foto de closet"
                className="w-full h-auto"
              />
            </figure>

            <div className="lg:max-w-[640px]">

              <h2 className="font-bold text-center text-seventh-color uppercase tracking-widest pb-5">
                Banheiros e Lavanderias
              </h2>

              <p className="text-center text-secondary-color px-4 lg:text-lg min-w-[320px] max-w-[600px]">
                Estes ambientes pequenos podem abrir a porta para um mundo de bagunça e desordem, por isso ao organizá-los você terá toda beleza e funcionalidadede para você, facilitando a limpeza e manutenção do dia a dia da casa.


              </p>

            </div>
          </article>

        </section>

        <div className="sm:bg-slate-900 sm:py-8">
          <div className="relative pb-[56%] sm:pb-0 sm:mx-auto sm:w-[600px] sm:h-[350px] lg:w-[900px] lg:h-[500px]">
            <ReactPlayer
              className="absolute inset-0"
              url='https://www.youtube.com/embed/XH01xQnICN0'
              controls={true}
              playing={false}
              loop={true}
              muted={false}
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </main>
    </>
  )
}