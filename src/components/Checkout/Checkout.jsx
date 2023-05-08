import './Checkout.css';
import { useState, useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { db } from '../../services/firebase/config';
import { collection, addDoc } from 'firebase/firestore';

const Checkout = () => {
    const { carrito, vaciarCarrito } = useContext(CarritoContext);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailCheck, setEmailCheck] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");
    const totalCompra = carrito.reduce((total, producto) => total + (producto.item.precio * producto.cantidad), 0);

    const handleForm = (e) => {
        e.preventDefault();
        if (!nombre || !apellido || !telefono || !email || !emailCheck) {
            setError("Debe completar todos los campos");
            return;
        }

        if (email !== emailCheck) {
            setError("Asegúrese que el mail sea el mismo");
            return;
        }

        const orden = {

            items: carrito.map((producto) => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad,
            })),
            total: carrito.reduce((total, producto) => total + producto.item.precio * producto.cantidad, 0),
            nombre,
            apellido,
            telefono,
            email
        };

        addDoc(collection(db, "ordenes"), orden)
            .then((docRef) => {
                setOrdenId(docRef.id);
                vaciarCarrito();
            })
            .catch((error) => {
                console.error("Ocurrió un error al generar la orden", error);
                setError("Ocurrió un error al generar la orden, intente nuevamente más tarde");
            })
    }

    return (
        <div>
            <h2>Checkout</h2>
            <form onSubmit={handleForm}>
                {carrito.map((producto) => (

                    <div key={producto.item.id}>
                        <p> {producto.item.nombre} X {producto.cantidad} </p>
                        <p> Precio: ${producto.item.precio} </p>
                    </div>
                ))
                }
                <div>
                    <p>El total de la compra es de $ {totalCompra} </p>
                </div>
                <div>
                    <label>Nombre</label>
                    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>

                <div>
                    <label>Apellido</label>
                    <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                </div>

                <div>
                    <label>Teléfono</label>
                    <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                </div>

                <div>
                    <label>Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div>
                    <label>Confirme su email</label>
                    <input type="email" value={emailCheck} onChange={(e) => setEmailCheck(e.target.value)} />
                </div>

                {error && <p> {error} </p>}
                <button type='submit'>Finalizar Compra</button>
            </form>
            {
                ordenId && (
                    <strong>Muchas gracias por tu compra! Este es tu número de orden: {ordenId} </strong>
                )
            }
        </div>
    )
}

export default Checkout