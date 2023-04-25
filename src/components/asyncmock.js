const productos = [
    { id: "1", nombre: "Carpa de cultivo", precio: 32000, stock: 14, img: "../img/carpa.jpg", desc: "Carpa de cultivo realizada en material refractante y tela ultra resistente. Medidas 80x80x180cm Cuenta con 6 mangas de ventilación y soportes para accesorios", cat: "cultivo" },
    { id: "2", nombre: "Panel led 600w", precio: 53000, stock: 9, img: "../img/panelled.jpg", desc: "Lámpara de cultivo de espectro completo. Potencia 600w. Lámparas Samsung", cat: "cultivo" },
    { id: "3", nombre: "Maceta geotextil", precio: 2000, stock: 11, img: "../img/maceta.jpg", desc: "Maceta geotextil 100% poliester. Capacidad de 10 litros", cat: "cultivo" },
    { id: "4", nombre: "Timer analógico", precio: 2700, stock: 13, img: "../img/timer.jpg", desc: "Timer analógico, formato 24hs. Potencia máxima 2500w", cat: "sistemasautomaticos" },
    { id: "5", nombre: "Sistema de Riego Automático", precio: 23000, stock: 10, img: "../img/riegoauto.jpg", desc: "Sistema de riego automático para cultivos de hasta 25 macetas. Caudal máximo 2500l/h. Conectividad y control remoto wifi.", cat: "sistemasautomaticos" },
    { id: "6", nombre: "Filtros Libella 8mm", precio: 500, stock: 20, img: "../img/filtros.jpg", desc: "Filtros regulares Libella, Great Value x200u, medidas: 8x15mm", cat: "parafernalia" },
    { id: "7", nombre: "Papelillos Abadie x500", precio: 700, stock: 15, img: "../img/papelillo.jpg", desc: "Papel de armar Abadie x500 hojas, papel ultra fino de combustión lenta, hechos de goma de acacia natural", cat: "parafernalia" },
    { id: "8", nombre: "Tabaco Red Field", precio: 2000, stock: 22, img: "../img/tabaco.jpg", desc: "Tabaco negro Red Field x500gr, blend de Virginia y American Tobacco", cat: "parafernalia" }
];

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 200)
    })
}

export const getProdDetail = (id) => {
    return new Promise(resolve => {
        setInterval(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 200)
    })
}

export const getProdCat = (cat) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const categoriaProd = productos.filter(prod => prod.cat === cat);
            resolve(categoriaProd);
        }, 150);
    })
}