import { useState, createContext } from "react";

export const CarritoContext = createContext({ carrito: [] });

export const CarritoProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (item, cantidad) => {
        if (!productoExistente(item.id)) {
            setCarrito(prev => [...prev, { item, cantidad }]);
        } else {
            console.log("Este producto ya está en el carrito")
        }
    }

    const productoExistente = (id) => {
        return carrito.some(prod => prod.id === id);
    }

    const eliminarDelCarrito = (id) => {
        const actualizarCarrito = carrito.filter(prod => prod.id !== id);
        setCarrito(actualizarCarrito);
    }

    const vaciarCarrito = () => {
        setCarrito([]);
    }

    return (
        <CarritoContext.Provider value={{ carrito, agregarAlCarrito, eliminarDelCarrito, vaciarCarrito }}>
            {children}
        </CarritoContext.Provider>
    )
}