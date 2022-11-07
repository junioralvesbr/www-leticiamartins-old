import Head from 'next/head'
import Image from 'next/image'

export default function PosMudanca() {
  return (
    <>
      <Head>
        <title>Leticia Martins - Organização de pós Mudança</title>
      </Head>

      <header>
        <figure className='fixed inset-0 after:absolute after:inset-0 after:bg-transparency'>
          <Image
            className='object-cover'
            src='/images/posmudanca.webp'
            alt='Foto de fundo de pós mudança'
            fill
          />
        </figure>

        <section
          className='relative z-50 h-[60vh] max-w-5xl mx-auto flex flex-col justify-center sm:h-[50vh] lg:h-[80vh]'
        >

          <h1 className='text-primary-color text-3xl text-shadow font-light mx-2 sm:mx-5 sm:text-5xl'>
            Serviço de mudança residencial
          </h1>

          <p className='text-primary-color text-shadow font-light mx-2 pt-4 sm:mx-5'>
            Organizamos sua mudança com todo cuidado, carinho e tranquilidade para você!
          </p>

        </section>
      </header>

      <main>
        <section className='relative z-10 pb-4 max-w-6xl mx-auto'>

          <article className='bg-primary-color mx-2 max-w-xl sm:mx-5 sm:p-2 xl:max-w-2xl'>
            <div className="relative pb-[56.25%] overflow-hidden">

              <iframe
                className='w-full h-full absolute inset-0 overflow-hidden'
                src="https://streamable.com/e/o1myie"
                frameBorder="0"
                width="100%"
                height="100%"
                allowFullScreen>
              </iframe>

            </div>
          </article>

          <article className='bg-primary-color mt-4 mx-2 p-5 max-w-xl sm:p-10 sm:mx-5 xl:max-w-2xl xl:p-20'>

            <h2 className='text-center uppercase text-2xl pb-3 font-light'>
              1. Pré mudança
            </h2>

            <p className='text-center leading-8 font-light'>
              É realizado um relatório no momento da embalagem, contendo a identificação de todas as caixas da mudança. Afim, de ter maior segurança no recebimento da mudança na nova residência.
            </p>
          </article>

          <article className='bg-primary-color mt-4 mx-2 p-5 max-w-xl sm:p-10 sm:mx-5 xl:max-w-2xl xl:p-20'>

            <h2 className='text-center uppercase text-2xl pb-3 font-light'>
              2. Acompanhamento do transporte da mudança
            </h2>

            <p className='text-center leading-8 font-light'>
              Nesse momento, é feito a última checagem de toda mudança da residência, conferência de todos os itens embalados e identificados nas caixas. Acompanhamos o transporte até o novo destino, onde já foi solicitado a reserva de estacionamento do caminhão e a liberação da entrada na nova residência.
            </p>
          </article>

          <article className='bg-primary-color mt-4 mx-2 p-5 max-w-xl sm:p-10 sm:mx-5 xl:max-w-2xl xl:p-20'>

            <h2 className='text-center uppercase text-2xl pb-3 font-light'>
              3. Pós mudança
            </h2>

            <p className='text-center leading-8 font-light'>
              Conferência da entrega da mudança, conforme relatório elaborado na pré mudança. E início da abertura das caixas e desembalagem de cada item, organizando tudo na nova residência, de forma prática e funcional.
            </p>

          </article>

          <article className='bg-primary-color mt-4 mx-2 p-5 max-w-xl sm:p-10 sm:mx-5 xl:max-w-2xl xl:p-20'>

            <h2 className='text-center uppercase text-2xl pb-3 font-light'>
              4. Organização finalizada
            </h2>

            <p className='text-center leading-8 font-light'>
              Apresentação e finalização do trabalho realizado. <br></br>Com todo zelo, cuidado e amor, sua casa organizada em pouco tempo para você, sem estresse ou preocupação!.
            </p>

          </article>
        </section>

      </main>
    </>
  )
}