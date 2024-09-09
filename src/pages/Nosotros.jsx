import useTitulo from "../hooks/useTitulo"
import './Nosotros.scss'

const Nosotros = () => {

  useTitulo('Nosotros')

  return (
    <div>
      <div className="Head-section">
      <h1>Ka-Luc Creaciones de azucar</h1>

      <div className="contenedor_logo">
        <img
          className="logoKaluc"
          src="/img/kaluc.webp"
          alt="Logo Ka-Luc"
        />
      </div>
    </div>

    <div className="Info-section">
      <p>
        Nosotros no vendemos tortas y postres solamente, vendemos sueños y alegria para todo publico, llenando de sabor tu evento para que puedas disfrutar al maximo sin limitacion alguna.
      </p>

      <div className="History_section">
        <h2 className="History_section__tittle">Como empezamos</h2>

        <h3>Donde arranco todo...</h3>

        <p>
          Esto arranco como un proyecto familiar luego de años de trabajo y constante esfuerzo, comprando las herramientas a medida que pasaba el tiempo, pudiendo lograr con el tiempo, esta Pyme que esta cumpliendo con los sueños y alegria de mucha gente.
        </p>
      </div>
      <div className="Info-section-cards">
        <div className="Info-section__Mision">
          <h2>Tortas</h2>

          <p>
            Hacemos todo tipo de tortas, con tan solo una foto, nosotros lo hacemos realidad!
          </p>
        </div>

        <div className="Info-section__Vision">
          <h2>Postres</h2>

          <p>
           No hay limites en la gama de postres que realizamos, de lo mas recomendado del pais!.
          </p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Nosotros