const productos = [
    { id: "1", nombre: "Carpa de cultivo", precio: 32000, img: "../img/carpa.jpg", cat: "cultivo" },
    { id: "2", nombre: "Panel led 600w", precio: 53000, img: "../img/panelled.jpg", cat: "cultivo" },
    { id: "3", nombre: "Maceta geotextil", precio: 2000, img: "../img/maceta.jpg", cat: "cultivo" },
    { id: "4", nombre: "Timer analógico", precio: 2700, img: "../img/timer.jpg", cat: "cultivo" },
    { id: "5", nombre: "Sistema de Riego Automático", precio: 23000, img: "../img/riegoauto.jpg", cat: "sistemasautomaticos" },
    { id: "6", nombre: "Filtros Libella 8mm", precio: 500, img: "../img/filtros.jpg", cat: "parafernalia" },
    { id: "7", nombre: "Papelillos Abadie x500", precio: 700, img: "../img/papelillo.jpg", cat: "parafernalia" },
    { id: "8", nombre: "Tabaco Red Field", precio: 2000, img: "../img/tabaco.jpg", cat: "parafernalia" }
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