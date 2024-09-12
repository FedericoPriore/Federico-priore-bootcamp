import { createContext, useEffect, useState } from "react";
import { helperPeticionesHttp } from "../helpers/helper-peticiones-http";

// ! CREANDO CONTEXTO
// ! 1. Creamos el contexto
const ProductosContext = createContext()
// ! 2. Armamos el provider
const ProductosProvider = ( { children} ) => {
    const url = import.meta.env.VITE_BACKEND_PRODUCTOS
    const [productos, setProductos] = useState(null)
    const [productoAEditar, setProductoAEditar] = useState(null)
    const [productoAEliminar, setProductoAEliminar] = useState(null)

    useEffect(() => {
        getAllProductos()
    }, [])

    const getAllProductos = async () => {

        try {

            const prods = await helperPeticionesHttp(url, {})

            // console.log(prods)
            setProductos(prods)
            
        } catch (error) {
            console.error('[getAllProductos]', error)
        }
    }

    const crearProductoContext = async (nuevoProducto) => {

        try {
            // console.log(nuevoProducto)

            const options = {
                method: 'POST',
                headers: { 'content-type' : 'application/json' },
                body: JSON.stringify(nuevoProducto)
            }

            const newProducto = await helperPeticionesHttp(url, options)

            console.log(newProducto)

            setProductos([...productos, newProducto])
            
        } catch (error) {
            console.error('[crearProductoContext]', error)
        }

    }

    const actualizarProductoContext = async (productoEditado) => {
        // console.log(productoEditado)
        try {

            const options = {
                method: 'PUT',
                headers: { 'content-type' : 'application/json' },
                body: JSON.stringify(productoEditado)
            }

            const urlEdicion = url + productoEditado.id // http://local.../productos/9

            const editedProduct = await helperPeticionesHttp(urlEdicion, options)

            const nuevoEstadoProductos = productos.map( 
                producto => producto.id === editedProduct.id ? editedProduct : producto
            )
            setProductos(nuevoEstadoProductos)
            
        } catch (error) {
            console.error('[actualizarProductoContext]', error)
        }

    }

    const eliminarProductoContext = async (productoEliminado) => {
        // console.log(productoEditado)
        try {

            const options = {
                method: 'DELETE',
                headers: { 'content-type' : 'application/json' },
                body: JSON.stringify(productoEliminado)
            }

            const eliminadoProducto = await helperPeticionesHttp(url, options)

            console.log(eliminadoProducto)

            setProductos([...productos, eliminadoProducto])
            
        } catch (error) {
            console.error('[eliminarProductoContext]', error)
        }

    }

    const data = {
        productos,
        crearProductoContext,
        actualizarProductoContext,
        eliminarProductoContext,
        productoAEditar,
        setProductoAEditar,
        productoAEliminar,
        setProductoAEliminar
    }

    return <ProductosContext.Provider value={data}>{ children }</ProductosContext.Provider>
}
// ! 3. Exportamos el contexto y provider

export { ProductosProvider }
export default ProductosContext