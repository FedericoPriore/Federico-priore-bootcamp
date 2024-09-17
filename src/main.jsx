import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { ProductosProvider } from './context/ProductosContext.jsx'
import { CarritoProvider } from './context/CarritoContext.jsx'

const endpointLocal = import.meta.env.VITE_LOCAL
const endpointBackend = import.meta.env.VITE_BACKEND_PRODUCTOS

let respuestaBack
if ( window.location.href.includes('localhost')) {
    respuestaBack = await fetch(endpointLocal);
} else {
    respuestaBack = await fetch(endpointBackend);
}


createRoot(document.getElementById('root')).render(
    <ProductosProvider>
        <CarritoProvider>
            <App />
        </CarritoProvider>
    </ProductosProvider>
)
