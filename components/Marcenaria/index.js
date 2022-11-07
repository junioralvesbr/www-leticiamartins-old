import { useState } from 'react';
import Modal from 'react-modal'
import { IoClose } from 'react-icons/io5'
import Image from "next/image";
import dynamic from 'next/dynamic'

const ReactPlayer = dynamic(import('react-player'), { ssr: false })

Modal.setAppElement('body')

export default function Marcenaria() {
  const [modalIsOpen, setIsOpen] = useState(false)

  return (
    <article id="marcenaria">
      <div className="relative 
      before:bg-border-svg before:bg-repeat-x before:bg-position-mobile before:bg-size-mobile before:w-full before:h-5 before:absolute before:top-[-12px] before:z-10 md:before:bg-position-desktop md:before:bg-size-desktop
      after:absolute after:inset-0 after:bg-gradient-blue-mobile after:md:bg-gradient-blue-tablet"
      >
        <div className="relative w-full h-[500px] max-w-4xl overflow-hidden md:max-w-full md:h-[700px]">
          <Image
            className="object-cover"
            src="/images/marcenaria-inteligente.webp"
            alt="Foto de organização pós mudança da Leticia Martins"
            fill
            priority
          />
        </div>

        <div className="z-20 relative p-5 mx-auto md:absolute md:top-14 md:right-1">
          <h2 className="text-2xl uppercase font-bold text-primary-color pb-10 max-w-lg md:text-3xl">
            Marcenaria Inteligente
          </h2>

          <p className="font-medium text-primary-color pb-8 max-w-[410px] 2xl:text-lg">
            Elaborar a parte interna de um móvel requer, um bom planejamento, cuidado e atenção com as medidas.
          </p>

          <p className="font-medium text-primary-color pb-8 max-w-[410px] 2xl:text-lg">
            É necessário focar na distribuição adequada das gavetas, prateleiras e de toda parte interna, trazendo maior praticidade, aproveitamento dos espaços e ainda mais beleza para os seus móveis.
          </p>

          <p className="font-medium text-primary-color pb-8 max-w-[410px] 2xl:text-lg">
            A organização com a marcenaria inteligente é a solução sob medida para os clientes mais exigentes.
          </p>

          <button
            className='w-36 h-10 bg-fifth-color text-primary-color flex justify-center items-center rounded font-bold hover:brightness-90 transition-all'
            onClick={() => setIsOpen(true)}
          >
            Saiba Mais
            <img src="/player.svg" alt="Player" className="ml-3" />
          </button>

          <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setIsOpen(false)}
            contentLabel="Example Modal"
            overlayClassName="react-modal-overlay"
            className="w-full h-max max-w-2xl flex flex-col lg:max-w-4xl"
          >
            <button
              className='text-3xl bg-transparent hover:brightness-50 transition-all self-end hover:text-red-600'
              onClick={() => setIsOpen(false)}
            >
              <IoClose />
            </button>

            <div id="hero" className="relative pb-[56.25%] overflow-hidden">
              <ReactPlayer
                className="absolute inset-0"
                url='https://streamable.com/jr1koi'
                playing={true}
                loop={true}
                muted={false}
                width="100%"
                height="100%"
              />
            </div>

          </Modal>
        </div>

      </div>
    </article>
  )
}