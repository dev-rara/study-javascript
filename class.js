class Notebook {
    constructor(name, price, company) {
        this.name = name
        this.price = price
        this.company = company
    }
}

const myNotebook = new Notebook('MacBook', 2000000, 'Apple')

console.log(myNotebook)
console.log(myNotebook.name)
console.log(myNotebook.price)
console.log(myNotebook.company)



class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }

    printInfo() {
        console.log(`상품명: ${this.name}, 가격: ${this.price}`)
    }
}

const notebook = new Product('MacBook', 2000000)
notebook.printInfo()



const computer = {
    name: 'Apple Macbook',
    price: 2000000,
    printInfo: function() {
        console.log(`상품명: ${this.name}, 가격: ${this.price}`)
    }
}

computer.printInfo()



class Cloth {
    constructor (color, size, price) {
        this.color = color
        this.size = size
        this.price = price
    }

    printInfo() {
        console.log(`색상: ${this.color}, 사이즈: ${this.size}, 가격: ${this.price}`)
    }
}

const shirts = new Cloth('Blue', 90, 20000)
const pants = new Cloth('Black', 'S', 40000)
shirts.printInfo()
pants.printInfo()