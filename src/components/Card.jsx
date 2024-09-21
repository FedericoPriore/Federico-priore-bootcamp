import { useContext } from 'react';
import './Card.scss'
import CarritoContext from '../context/CarritoContext';

const Card = ( { producto } ) => {

  const { agregarProductoAlCarritoContext } = useContext(CarritoContext)

  const handleAgregar = (producto) => {
    //console.log(producto)
    console.log('Agregando el producto al carrito...')
    agregarProductoAlCarritoContext(producto)
  }

  return (
    <div className="card">
      <article className="card__article">
        <div className="card__image-container">
          <img
            src={producto.foto}
            alt={producto.nombre}
            className="card__image"
            srcSet={`${producto.foto.replace('.jpg', '-200.jpg')} 200w, ${producto.foto.replace('.jpg', '-400.jpg')} 400w, ${producto.foto.replace('.jpg', '-800.jpg')} 800w`}
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
          />
        </div>
        <div className="card__content">
          <h2 className="card__heading">{producto.nombre}</h2>
          <div className="card__description">
            <p>
              {producto.detalles}
            </p>
            <p>{producto.precio}</p>
            <button className="buttoncard" onClick={() => handleAgregar(producto)}>Agregar</button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Card;
