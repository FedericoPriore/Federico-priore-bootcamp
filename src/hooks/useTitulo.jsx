import { useEffect } from "react"


const useTitulo = ( textoTitulo = 'Sin título') => {

    useEffect(() => {
      document.title = `Ka Luc Creaciones - ${textoTitulo}`
    }, [])
    
}

export default useTitulo