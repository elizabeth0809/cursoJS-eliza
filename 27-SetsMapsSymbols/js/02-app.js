const weakset = new WeakSet() //solo funciona con objetos

const cliente = {
    nombre: 'juan',
    saldo: 100
}

const nombre = 'juan';
weakset.add(cliente)
console.log(weakset.has(cliente)) //verifica que existe

console.log(weakset)