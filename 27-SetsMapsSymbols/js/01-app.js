const carrito = new Set(); //crea una lista de valores sin duplicado
carrito.add('Camisa')
carrito.add('Camisa #1')
carrito.add('Camisa #2')
carrito.add('camisa')

carrito.forEach((producto, index) =>
{
    console.log(index)
}    
)
//carrito.clear() //esto elimina todo los elemtos
//carrito.delete('camisa')//elimina un elemento
//console.log(carrito.has('camisa1')) //verifica si existe un valor
console.log(carrito.size) //mide el tamaño del carrito
console.log (carrito)
