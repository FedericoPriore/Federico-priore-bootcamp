import { useContext } from 'react'
import './TablaFila.scss'
import ProductosContext from '../context/ProductosContext'

const TablaFila = ({ producto }) => {

  const { setProductoAEditar } = useContext(ProductosContext)
  const { setProductoAEliminar } = useContext(ProductosContext)
  
  //console.log(producto)
  const handleEditar = (producto) => {
    console.log('Producto a editar...', producto.id)
    setProductoAEditar(producto)
  }  
  const handleEliminar = (id) => {
    console.log('Eliminando el producto...',id)
    setProductoAEliminar(id)
      }

  
  return (
    <tr>
      <td>{producto.nombre}</td>
      <td>{producto.precio}</td>
      <td>{producto.stock}</td>
      <td>{producto.categoria}</td>
      <td>{producto.detalles}</td>
      <td>
        <img className="img-row" src={producto.foto} alt={producto.nombre} />
      </td>
      <td>{producto.envio ? 'SI' : 'NO'}</td>
      <td>
        <button className="buttonform" onClick={() => handleEditar(producto)}>Editar</button>
        <button className="buttonform" onClick={() => handleEliminar(producto.id)}>Borrar</button>
      </td>
    </tr>
  )
}

export default TablaFila