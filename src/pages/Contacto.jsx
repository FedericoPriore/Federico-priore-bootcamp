import useTitulo from "../hooks/useTitulo"
import './Contacto.scss'

const Contacto = () => {

  useTitulo('Contacto')

  return (
    <div>
      <div className="head">
    <h1>CONTACTANOS!</h1>
    <p>En el menor tiempo posible, vamos a estar enviandote la informacion solicitada.</p>
  </div>

  <div className="Form-Container">
    <div className="Form-Container__Form-contact">
      <form>
        <div className="Form-Container__Form-contact__grupo">
          <label htmlFor="label-nombre">Nombre: * </label>
          <input className="inputcheck"
            type="text"
            name="nombre"
            id="label-nombre"
            placeholder="Ej: Roberto"
            required
          />
        </div>

        <div className="Form-Container__Form-contact__grupo">
          <label htmlFor="label-apellido">Apellido: </label>
          <input className="inputcheck"
            type="text"
            name="apellido"
            id="label-apellido"
            placeholder="Ej: Palmeiras"
          />
        </div>

        <div className="Form-Container__Form-contact__grupo">
          <label htmlFor="label-email">Correo Electrónico: * </label>
          <input className="inputcheck"
            type="email"
            name="email"
            id="label-email"
            placeholder="Ej: ka-luccreaciones@gmail.com"
            required
          />
        </div>

        <div className="Form-Container__Form-contact__grupo">
          <label htmlFor="label-numero">Número de teléfono: </label>
          <input className="inputcheck" type="tel" name="numero" id="label-numero" placeholder="Ej: 1122874777"/>
        </div>

        <div className="Form-Container__Form-contact__grupo">
          <div id="description">
            <label htmlFor="label-descripcion">¿Que te gustaria pedirnos?: * </label>
            <textarea className="inputcheck"
              name="detalles"
              id="label-descripcion"
              cols="20"
              rows="10"
              placeholder="Ingresa aca los detalles y nosotros lo resolvemos"
            ></textarea>
          </div>
        </div>

        <div className="Form-Container__Form-contact__grupo">
          <div className="campo_requerido_container">
            <p id="requiered">* Campos requeridos</p>
          </div>
          <div className="buttoncontact">
            <button id="boton_form">Enviar</button>
          </div>
        </div>
      </form>
    </div>
  </div>
  </div>
  )
}

export default Contacto