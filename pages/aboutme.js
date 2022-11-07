import Head from "next/head"
import Image from "next/image"

import { MdOutlineDoubleArrow } from 'react-icons/md'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Autoplay } from "swiper"

export default function AboutMe() {
  return (
    <>
      <Head>
        <title>Leticia Martins - Sobre mim</title>
      </Head>

      <header className="relative h-screen">
        <figure className="relative w-full h-full">
          <Image
            className="object-cover"
            src='/images/aboutMe.jpg'
            alt="Foto do perfil Leticia Martins Personal Organizer"
            sizes="100%"
            fill
            priority
          />
        </figure>

        <div className="text-primary-color font-bold absolute bottom-28 left-4 p-4 bg-pattern bg-no-repeat bg-[length:150px] sm:left-10 md:bg-[length:217px] sm:py-14 sm:px-8 lg:bottom-1/3 lg:left-1/4">
          <p>Olá,</p>
          <h1 className="uppercase text-2xl md:text-4xl">Eu sou personal Organizer</h1>
          <p>Eu transformo ambientes em lugares aconchegantes que facilitam e simplificam o seu dia dia</p>
        </div>

        <MdOutlineDoubleArrow
          size={40}
          color="#ffffff"
          className="absolute bottom-14 left-2/4 translate-x-[-50%] animate-pulse rotate-90 lg:bottom-0"
        />
      </header>

      <main>
        <section id="aboutme" className="flex flex-wrap justify-center items-center py-10">

          <article className="max-w-md flex flex-col items-center lg:items-start">

            <h2 className="uppercase font-bold text-fifth-color text-3xl px-2">
              Leticia Martins
            </h2>

            <p className="mt-5 px-4">
              Desde pequena sempre tive meus pertences bem arrumados e cuidados, gostava de cuidar da casa para ajudar minha mãe.
            </p>

            <p className="mt-5 px-4">
              Ao longo da vida, casei e tive 2 filhos, numa fase da minha vida, em que eu não estava trabalhando fora, decidi que gostaria de retornar ao mercado de trabalho.
            </p>

            <figure className="mt-5">
              <Image
                className="rounded-xl w-auto h-auto"
                src='/images/aboutme1.jpg'
                alt="Foto do perfil Leticia Martins Personal Organizer"
                width={400}
                height={400}
              />
            </figure>
          </article>

          <article className="max-w-md flex flex-col items-center lg:items-start lg:ml-10">
            <figure className="mt-5">
              <Image
                className="rounded-xl w-auto h-auto"
                src='/images/aboutme2.jpg'
                alt="Foto do perfil Leticia Martins Personal Organizer"
                width={300}
                height={300}
              />
            </figure>

            <p className="mt-5 px-4">
              Foi então que pesquisando descobri que meu talento poderia se tornar uma profissão.
            </p>

            <p className="mt-5 px-4">
              Busquei me profissionalizar em personal organizer e atuo desde 2017, sempre com o apoio e incentivo de minha familia.
            </p>

          </article>
        </section>

        <section id="midia" className="bg-third-color pb-9">
          <h2 className="text-fifth-color text-2xl uppercase font-bold text-center py-3">
            Presença em mídia de TV e eventos
          </h2>

          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            autoplay={{ delay: 3000 }}
          >
            <SwiperSlide>
              <img src="/images/midia1.jpg" alt="Fotos de eventos" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/midia2.jpg" alt="Fotos de eventos" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/midia3.jpg" alt="Fotos de eventos" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/midia4.jpg" alt="Fotos de eventos" loading="lazy" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/midia5.jpg" alt="Fotos de eventos" loading="lazy" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/midia6.jpg" alt="Fotos de eventos" loading="lazy" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/midia7.jpg" alt="Fotos de eventos" loading="lazy" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/midia8.jpg" alt="Fotos de eventos" loading="lazy" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/midia9.jpg" alt="Fotos de eventos" loading="lazy" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/midia10.jpg" alt="Fotos de eventos" loading="lazy" />
            </SwiperSlide>
          </Swiper>
        </section>

        <section className="bg-fourth-color lg:py-10 lg:p-4">
          <article className="flex flex-col items-center justify-center max-w-[1300px] lg:flex-row lg:mx-auto">
            <div className="bg-gradient-black-bg lg:w-[700px]">
              <div className="text-primary-color max-w-[600px] p-4 lg:p-8">

                <img src="/logomarca.svg" alt="" className="h-20" />

                <p className="pt-6 max-w-[600px] lg:max-w-[500px]">
                  Sou uma profissional completa, atendo clientes em Maringá/Pr e de toda região. Coordeno pessoalmente minha equipe que são bem capacitadas e treinadas no meu segmento.
                </p>
                <p className="pt-6 max-w-[600px] lg:max-w-[500px]">
                  Meu trabalho é detalhista e minucioso em cada detalhe da organização.
                </p>
                <p className="pt-6 max-w-[600px] lg:max-w-[500px]">
                  Além de prestar serviços na área de organização, ainda ministro cursos, workshop e ensino ao público em geral os segredos da organização.
                </p>
                <p className="pt-6 max-w-[600px] lg:max-w-[500px]">
                  Meu maior prazer é proporcionar a satisfação e o bem estar às pessoas através da organização.
                </p>
              </div>
            </div>

            <figure className="max-w-[600px] lg:ml-[-70px] xl:ml-[-100px]">
              <img src="/images/aboutme3.jpg" alt="Imagem da Leticia Martins" />
            </figure>

          </article>
        </section>
      </main>
    </>
  )
}