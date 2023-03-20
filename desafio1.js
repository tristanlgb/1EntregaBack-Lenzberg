const objetos = [
    {
        tshirts: 5,
        shorts: 3,
        shoes: 2,
        backpacks: 1,
        sunglasses: 4
    },
    {
        tshirts: 2,
        pants: 6,
        jackets: 1,
        caps: 3,
        socks: 10
    }
]

const productos = [];

objetos.forEach(elemento =>{
    productos.push(...Object.keys(elemento))
})

const productosUnicos = productos.reduce((acc,item)=>{
    if(!acc.includes(item)){
        acc.push(item)
    }
    return acc;
}, [])

const cantProductos = []
objetos.forEach(elemento =>{
    cantProductos.push(...Object.values(elemento))
})

let totalProductos = cantProductos.reduce(function(a,b){return a + b },0)

console.log(productosUnicos); // Output: ['tshirts', 'shorts', 'shoes', 'backpacks', 'sunglasses', 'pants', 'jackets', 'caps', 'socks']
console.log(totalProductos); // Output: 34
