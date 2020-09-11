const cliente = new Map() //guarda lista de datos con su llave y valor

cliente.set('nombre', 'karen');
cliente.set('tipo', 'premium')
cliente.set('saldo', 3000)

console.log(cliente)
console.log(cliente.size)
console.log(cliente.has('nombre'))
console.log(cliente.get('nombre'))//trae el valor de nombre
//cliente.clear()
cliente.delete('saldo')

const datos = [
    'dato 1', 'dato 2', 'dato 3', 'dato 4'
]
datos.forEach(dato => {

    console.log(dato)
    if(dato == 'dato 4'){
        console.log('saludo')
    }
})