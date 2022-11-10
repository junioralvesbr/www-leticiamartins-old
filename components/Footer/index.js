import { FaFacebook, FaCertificate } from 'react-icons/fa'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { SiGooglemaps } from 'react-icons/si'

export default function Footer() {
  return (
    <section
      id="contact"
      className='py-7 bg-[#e7e7e7] relative'
    >

      <nav className='flex flex-col gap-10 items-center sm:flex-row sm:justify-evenly sm:gap-0'>

        <div>
          <h3 className='text-fifth-color text-center'>
            <span className='font-Autography text-5xl block'>Leticia Martins</span>
            Personal Organizer
          </h3>

          <a href="https://www.facebook.com/leticiamartinsorganizer"
            className='text-secondary-color flex items-center mt-4 text-xl'
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaFacebook className='mr-2' />
            @leticiamartins.organizer
          </a>

          <a href="https://curso.leticiamartins.com.br/"
            className='text-secondary-color flex items-center mt-4 text-xl'
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaCertificate className='mr-2' />
            curso.leticiamartins.com.br
          </a>

          <a href="tel:+5544998138138" className='text-secondary-color flex items-center mt-4 text-xl'>
            <BsFillTelephoneFill className='mr-2' />
            (44) - 99813-8138
          </a>

          <p className='text-secondary-color flex items-center mt-4 text-xl'>
            <SiGooglemaps className='mr-2' />
            Maringá - Pr
          </p>
        </div>

        <a href="https://www.instagram.com/leticiamartins.organizer/" target="_blank" rel="noreferrer noopener">
          <figure>
            <figcaption className='text-secondary-color text-xl w-[300px]'>Me siga no instagram</figcaption>
            <img
              className='w-full'
              src="/images/instagram.svg"
              alt="Foto do instagram da Leticia Martins personal organizer"
            />
          </figure>
        </a>
      </nav>
    </section >
  )
}