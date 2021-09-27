const products = [
    {id: 1, name: "Body de niña", description: "Body para beba super canchero", price: '$ 500', stock: 20,img: '../images/body-nena.png'},
    {id: 2, name: "Jardinero de niña", description: "Jardinero para beba super canchero", price: '$ 1500',stock: 18, img: '../images/jardinero-nena.png'},
    {id: 3, name: "Pantalón de niña", description: "Pantalón para beba super canchero", price: '$ 1200', stock: 22,img: '../images/pantalon-nena.png'},
    {id: 4, name: "Short de niña", description: "Short para beba super canchero", price: '$ 600', stock: 10,img: '../images/short-nena.png'},
    {id: 5, name: "Short de niña", description: "Short para beba super canchero", price: '$ 700', stock: 12,img: '../images/short-nena2.png'},
    {id: 6, name: "Short de niña", description: "Short para beba super canchero", price: '$ 550', stock: 12,img: '../images/short-nena3.png'},
    {id: 7, name: "Vestido", description: "Vestido para beba super canchero", price: '$ 800', stock: 17,img: '../images/vestido.png'},
    {id: 8, name: "Vestido", description: "Vestido para beba super canchero", price: '$ 900', stock: 18, img: '../images/vestido2.png'},
    {id: 9, name: "Body de niño", description: "Body para bebe super canchero", price: '$ 600', stock: 16, img: '../images/body-nene.png'},
    {id: 10, name: "Body de niño", description: "Body para bebe super canchero", price: '$ 700', stock: 15,img: '../images/body-nene2.png'},
    {id: 11, name: "Conjunto de niño", description: "Conjunto para bebe super canchero", price: '$ 900', stock: 20,img: '../images/conjunto-nene.png'},
    {id: 12, name: "Conjunto de niño", description: "Conjunto para bebe super canchero", price: '$ 600', stock: 16,img: '../images/conjunto-nene2.png'},
    {id: 13, name: "Remera de niño", description: "Remera para bebe super canchero", price: '$ 500', stock: 13,img: '../images/remera-nene.png'},
    {id: 14, name: "Remera de niño", description: "Remera para bebe super canchero", price: '$ 600', stock: 18,img: '../images/remera-nene2.png'},
    {id: 15, name: "Short de niño", description: "Short para bebe super canchero", price: '$ 500',stock: 19, img: '../images/short-bebe.png'},
    {id: 16, name: "Short de niño", description: "Short para bebe super canchero", price: '$ 600',stock: 20, img: '../images/short-nene.png'},
    {id: 17, name: "Short de niño", description: "Short para bebe super canchero", price: '$ 700', stock: 17,img: '../images/short-nene2.png'},
]

export const getCategories = () => [
    {id:'celular',description:'Celular'},
    {id:'tablet',description:'Tablet'},
    {id:'notebook',description:'Notebook'}
]

export const getProducts = (category) => {    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            category ? resolve(products.filter(prod =>prod.category === category)) : resolve(products)
        }, 1000)        
    })
}

export const getProductById = (id) => {    
    return new Promise((resolve, reject) => {
        const product = products.find(prod => Number(prod.id) === Number(id))
        setTimeout(() => resolve(product), 1000)
    })
}

