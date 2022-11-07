import NextLink from 'next/link'

export default function Link({ link }) {
  return (
    <NextLink
      href={link}
      className='w-36 h-10 bg-fifth-color text-primary-color flex justify-center items-center rounded font-bold hover:brightness-90 transition-all'
    >
      Saiba Mais
      <img src="/player.svg" alt="Player" className="ml-3" />
    </NextLink>
  )
}