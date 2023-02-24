import Head from 'next/head'
import Image from "next/image"
import dynamic from 'next/dynamic'

const ReactPlayer = dynamic(import('react-player'), { ssr: false })

import Link from '../components/Link'
import { FaAngleDoubleDown } from 'react-icons/fa'

import Marcenaria from '../components/Marcenaria'

export default function Home() {
  return (
    <>
      <Head>
        <title>Leticia Martins - Personal Organizer</title>
      </Head>

      <header id="inicio" className='pt-14'>
        <div className="relative pb-[56.25%] overflow-hidden after:absolute after:inset-0">
          <ReactPlayer
            className="absolute inset-0"
            url='https://streamable.com/w80woi'
            playing={true}
            loop={true}
            muted={true}
            width="100%"
            height="100%"
          />
        </div>

        <a href="#sobremim">
          <FaAngleDoubleDown
            size={40}
            color="#ffffff"
            className="absolute bottom-0 left-2/4 translate-x-[-50%] animate-bounce hidden lg:block lg:bottom-0"
          />
        </a>

      </header >

      <main>
        {/* About Me */}
        <section id="sobremim" className="py-5 flex flex-col items-center lg:flex-row-reverse md:justify-center">

          <div className="relative w-[320px] h-[386px] md-[376px] md:h-[420px] lg:w-[467px] lg:h-[600px] lg:ml-10">
            <Image
              className="absolute object-cover rounded-lg"
              src='/images/LeticiaMartins.jpg'
              alt="Foto do perfil Leticia Martins Personal Organizer"
              fill
              sizes="100%"
              priority
            />
          </div>

          <article className="px-5 max-w-xl">
            <h1 className="uppercase text-fifth-color font-bold mt-5 text-2xl">
              Leticia Martins
            </h1>

            <p className="text-secondary-color text-justify font-medium leading-6 mt-5 lg:text-lg">
              Olá, muito prazer, tudo bem?
            </p>

            <p className="text-secondary-color text-justify font-medium leading-6 mt-5 lg:text-lg">
              Sou a Leticia Martins, certificada em personal organizer. Desde 2017 atuo na organização de ambientes, proporcionando conforto, praticidade e tranquilidade às pessoas.
            </p>

            <p className="text-secondary-color text-justify font-medium leading-6 mt-5 lg:text-lg">
              Meu maior prazer é proporcionar a satisfação e o bem estar às pessoas através da organização.
            </p>

            <p className="text-secondary-color text-justify font-medium leading-6 mt-5 lg:text-lg">
              Portanto, organizar pra mim não é só dispôr um objeto num determinado local, vai muito mais além, é você ter FACILIDADE e SIMPLICIDADE no seu dia dia, através da organização.
            </p>

            <div className="mt-5 lg:mt-24">
              <Link link="/sobremim" />
            </div>
          </article>
        </section >

        <section>
          {/* Home organization */}
          <article id="residencial">
            <div className="relative 
      before:bg-border-svg before:bg-repeat-x before:bg-position-mobile before:bg-size-mobile before:w-full before:h-5 before:absolute before:top-[-12px] before:z-10 md:before:bg-position-desktop md:before:bg-size-desktop
      after:absolute after:inset-0 after:bg-gradient-blue-mobile after:md:bg-gradient-blue-tablet"
            >
              <div className="relative w-full h-[500px] max-w-4xl overflow-hidden md:max-w-full md:h-[700px]">
                <Image
                  className="object-cover"
                  src="/images/organizacao-residencial.jpg"
                  alt="Foto de organização residencial da Leticia Martins"
                  fill
                />
              </div>

              <div className="z-10 relative p-5 mx-auto md:absolute md:top-14 md:right-1">
                <h2 className="text-2xl uppercase font-bold text-primary-color pb-10 max-w-lg md:text-3xl">
                  Organização Residencial
                </h2>

                <p className="font-medium text-primary-color pb-8 max-w-[410px] 2xl:text-lg">
                  Organize todos os ambientes da sua casa com toque de requinte e bom gosto, desfrutando de conforto e bem estar.
                </p>

                <p className="font-medium text-primary-color pb-8 max-w-[410px] 2xl:text-lg">
                  Organização de quartos, closets, cozinha, banheiro, lavanderia, home office e acessórios.
                </p>

                <Link link="/residencial" />
              </div>
            </div>
          </article>

          {/* Course */}
          <article id="course">
            <div className="relative 
        before:bg-border-svg before:bg-repeat-x before:bg-position-mobile before:bg-size-mobile before:w-full before:h-5 before:absolute before:top-[-12px] before:z-10 md:before:bg-position-desktop md:before:bg-size-desktop
        after:absolute after:inset-0 after:bg-gradient-black-mobile after:md:bg-gradient-black-tablet"
            >
              <div className="relative w-full h-[500px] max-w-4xl overflow-hidden md:max-w-full md:h-[700px]">
                <Image
                  className="object-cover object-[70%] 2xl:object-top"
                  src="/images/curso-organize-a-sua-casa.jpg"
                  alt="Foto do curso organize a sua casa"
                  fill
                />
              </div>

              <div className="z-10 relative px-8 py-5 mx-auto md:absolute md:top-14 md:left-1">

                <figure className="w-[200px] pb-8 md:w-[300px] md:mx-0">
                  <img
                    src="/images/logo-curso-organize-a-sua-casa.png"
                    alt="Logo do curso organize a sua casa"
                    className="w-full"
                    loading='lazy'
                  />

                </figure>

                <p className="font-medium text-primary-color pb-8 max-w-[410px] 2xl:text-lg">
                  Este é um curso completo de organização residencial com um método simples e muito eficaz, abordando todos os ambientes residenciais com contéudo teórico e prático.
                </p>

                <p className="font-medium text-primary-color pb-8 max-w-[410px] 2xl:text-lg">
                  Aprenda a deixar a sua casa linda e bem organizada com o meu curso Organize sua casa.
                </p>

                <Link link="https://curso.leticiamartins.com.br/" />
              </div>
            </div>
          </article >

          {/* Pos mudança */}
          <article id="posmudanca">
            <div className="relative 
      before:bg-border-svg before:bg-repeat-x before:bg-position-mobile before:bg-size-mobile before:w-full before:h-5 before:absolute before:top-[-12px] before:z-10 md:before:bg-position-desktop md:before:bg-size-desktop
      after:absolute after:inset-0 after:bg-gradient-blue-mobile after:md:bg-gradient-blue-tablet"
            >
              <div className="relative w-full h-[500px] max-w-4xl overflow-hidden md:max-w-full md:h-[700px]">
                <Image
                  className="object-cover"
                  src="/images/pos-mudanca.jpg"
                  alt="Foto de organização pós mudança da Leticia Martins"
                  fill
                />
              </div>

              <div className="z-10 relative p-5 mx-auto md:absolute md:top-14 md:right-1">
                <h2 className="text-2xl uppercase font-bold text-primary-color pb-10 max-w-lg md:text-3xl">
                  Organização Pós Mudança
                </h2>

                <p className="font-medium text-primary-color pb-8 max-w-[410px] 2xl:text-lg">
                  Organizamos sua mudança com todo cuidado, carinho e tranquilidade para você.
                </p>

                <p className="font-medium text-primary-color pb-8 max-w-[410px] 2xl:text-lg">
                  Tenho uma equipe especializada em mudança residencial, pronta para te atender e minimizar suas preocupações e estresse na sua mudança.
                </p>

                <Link link="/posmudanca" />
              </div>

            </div>
          </article>

          {/* Comercial */}
          <article id="comercial">
            <div className="relative 
        before:bg-border-svg before:bg-repeat-x before:bg-position-mobile before:bg-size-mobile before:w-full before:h-5 before:absolute before:top-[-12px] before:z-10 md:before:bg-position-desktop md:before:bg-size-desktop
        after:absolute after:inset-0 after:bg-gradient-black-mobile after:md:bg-gradient-black-tablet"
            >
              <div className="relative w-full h-[500px] max-w-4xl overflow-hidden md:max-w-full md:h-[700px]">
                <Image
                  className="object-cover object-[70%]"
                  src="/images/organizacao-comercial.jpg"
                  alt="Foto de organização residencial e empresarial da Leticia Martins"
                  fill
                />
              </div>

              <div className="z-10 relative px-8 py-5 mx-auto md:absolute md:top-14 md:left-1">
                <h2 className="text-2xl uppercase font-bold text-primary-color pb-5 max-w-lg md:text-3xl">
                  Organização comercial e empresarial
                </h2>

                <p className="font-medium text-primary-color pb-8 max-w-[410px] 2xl:text-lg">
                  Proporcionamos soluções de organização, para melhoria do espaço e ambiente, dessa forma o dia a dia do trabalho se torna mais produtivo, ágil e eficaz.
                </p>
                <p className="font-medium text-primary-color pb-8 max-w-[410px] 2xl:text-lg">
                  Organização de escritórios, lojas, ateliês, estoques e almoxarifados.
                </p>

                <Link link="/comercial" />

              </div>
            </div>
          </article>

          {/* Marcenaria */}
          <Marcenaria />
        </section>
      </main>
    </>
  )
}
