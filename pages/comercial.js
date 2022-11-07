export default function Comercial() {
  return (
    <>
      <header>
        <h1 className="text-center uppercase text-xl tracking-widest text-shadow font-bold py-10 md:py-20 md:text-4xl">
          Organização Comercial
        </h1>
      </header>

      <main>
        <section>
          <article className="flex flex-col justify-center items-center gap-5 mb-10 md:flex-row md:gap-8">

            <figure className="max-w-[640px]">
              <img src="/images/estoque.jpg" alt="foto de closet"
                className="w-full h-auto"
              />
            </figure>

            <div className="max-w-[640px]">

              <h2 className="text-center text-seventh-color uppercase font-bold tracking-widest pb-5">
                Estoques e almoxarifados
              </h2>

              <p className="text-center text-secondary-color px-4 lg:text-lg min-w-[400px] max-w-[600px]">
                A gestão de estoques e almoxarifados potencializam a rentabilidade de qualquer organização. Por isso é fundamental mantê-los organizados afim de que a empresa sempre esteja abastecida e não tenha custos desnecessários com produtos e insumos. A organização destes setores tem por objetivo aumentar a produtividade e a agilidade no manuseio dos produtos pelos colaboradores.
              </p>

            </div>
          </article>

          <article className="flex flex-col justify-center items-center gap-5 mb-10 md:flex-row-reverse md:gap-8">

            <figure className="max-w-[640px]">
              <img src="/images/atelie.jpg" alt="foto de closet"
                className="w-full h-auto"
              />
            </figure>

            <div className="max-w-[640px]">

              <h2 className="text-center text-seventh-color uppercase font-bold tracking-widest pb-5">
                Ateliê
              </h2>

              <p className="text-center text-secondary-color px-4 lg:text-lg min-w-[400px] max-w-[600px]">
                O ateliê é aquele cantinho agradável onde podemos nos refugiar no mundo da arte. E ter um ateliê organizado é muito mais prazeroso para trabalhar e produzir lindas peças. <br></br>
                Pois o que realmente importa é que esse local seja organizado para que você possa trabalhar com tranquilidade e praticidade.
              </p>

            </div>
          </article>

          <article className="flex flex-col justify-center items-center gap-5 mb-10 md:flex-row md:gap-8">

            <figure className="max-w-[640px]">
              <img src="/images/loja.jpg" alt="foto de closet"
                className="w-full h-auto"
              />
            </figure>

            <div className="max-w-[640px]">

              <h2 className="text-center text-seventh-color uppercase font-bold tracking-widest pb-5">
                Loja comercial
              </h2>

              <p className="text-center text-secondary-color px-4 lg:text-lg min-w-[400px] max-w-[600px]">
                Uma loja organizada com os produtos bem dispostos é uma ferramenta importante para atrair e proporcionar conforto e bem estar para os seus clientes. A organização pode chamar a atenção dos consumidores, melhorar seu atendimento, facilitar o trabalhos dos seus colaboradores e consequentemente aumentar as suas vendas.
              </p>

            </div>
          </article>

        </section>
      </main>
    </>
  )
}