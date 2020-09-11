localStorage.setItem("nombre","hols") //Guarda los datos siempre
sessionStorage.setItem("nombre","hols"); //guarda los datos hasta que cierras el navegador

const producto = {
    nombre : "Monitor 24 plulgadas",
    precio : 300
}
const productoString = JSON.stringify( producto );

console.log(productoString)

localStorage.setItem("producto", productoString)

const meses = [
'enero','febrero','merzo'
]
const meseString = JSON.stringify(meses)
localStorage.setItem("meses", meseString)