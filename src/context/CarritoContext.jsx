import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

/* CREANDO CONTEXTO */

/* 1er -> Creación del contexto */
const CarritoContext = createContext()
/* 2do -> El armado del provider */
const CarritoProvider = ( { children } ) => {
    //              0
    const [ agregarAlCarrito, eliminarDelCarrito, limpiarCarrito, carrito ] = useLocalStorage('carrito', [])


    function elProductoEstaEnElCarrito(producto) { 
        console.log('Analizo si el producto esta en el carrito')
        // 0, el producto no esta en el carrito
        // 1, el producto ya esta en el carrito
        //debugger
        const nuevoArray = carrito.filter(prod => prod.id === producto.id)
        return nuevoArray.length
    }

    function obtenerProductoDeCarrito(producto) {
        return carrito.find(prod => prod.id === producto.id)
    }

    const agregarProductoAlCarritoContext = (producto) => {
        console.log('ya estoy en el agregar del contexto', producto)
        //debugger
        if (!elProductoEstaEnElCarrito(producto)) {
            //debugger
            producto.cantidad = 1
            agregarAlCarrito(producto)
        } else {
            //debugger
            const productoDeCarrito = obtenerProductoDeCarrito(producto)
            console.log(productoDeCarrito)
            productoDeCarrito.cantidad++
            window.localStorage.setItem('carrito', JSON.stringify(carrito))
        }
    }

    const eliminarProductoDelCarritoContext = (id) => {
        console.log(id)
        eliminarDelCarrito(id)
    }

    const limpiarCarritoContext = () => {
        limpiarCarrito()
    }

    const guardarCarritoContext = () => {
        console.log(carrito)
    }

    const data = {
        carrito,
        agregarProductoAlCarritoContext,
        eliminarProductoDelCarritoContext,
        guardarCarritoContext,
        limpiarCarritoContext
    }

    return <CarritoContext.Provider value={data}>{ children }</CarritoContext.Provider>
}
/* 3ero -> Exportaciones */
export { CarritoProvider }
export default CarritoContext