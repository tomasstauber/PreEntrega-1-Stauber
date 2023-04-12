const productos = [
    {id: "1", nombre: "Carpa de cultivo", precio: 32000, img: "./img/carpa.jpg", cat: "1"},
    {id: "2", nombre: "Panel led 600w", precio: 53000, img : "./img/panelled.jpg", cat: "1"},
    {id: "3", nombre: "Maceta geotextil", precio: 2000, img: "./img/maceta.jpg", cat: "1"},
    {id: "4", nombre: "Timer analógico", precio: 2700, img: "./img/timer.jpg", cat: "1"},
    {id: "5", nombre: "Sistema de Riego Automático", precio: 23000, img: "./img/riegoauto.jpg", cat: "2"},
    {id: "6", nombre: "Filtros Libella 8mm", precio: 500, img: "./img/filtros.jpg", cat: "3"},
    {id: "7", nombre: "Papelillos Abadie x500", precio: 700, img: "./img/papelillo.jpg", cat: "3"},
    {id: "8", nombre: "Tabaco Red Field", precio: 2000, img: "./img/tabaco.jpg", cat: "3"}
];

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout( () => {
            resolve(productos);
        }, 2000)
    })
}