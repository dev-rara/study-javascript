const myArr = [1, 2, 3, 4, 5]

console.log(myArr)
console.log(myArr[0])
console.log(myArr[1])
console.log(myArr[2])
console.log(myArr[3])
console.log(myArr[4])



const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'navy', 'violet']
console.log(rainbowColors.length)
console.log(rainbowColors[rainbowColors.length - 1])

rainbowColors.push('ultraviolet')
console.log(rainbowColors)

rainbowColors.pop()
console.log(rainbowColors)

for (let i = 0; i < rainbowColors.length; i++) {
    console.log(rainbowColors[i])
}

for(const color of rainbowColors) {
    console.log(color)
}



const priceList = [1000, 2000, 5000, 7000, 10000, 9000, 3000, 15000, 20000, 17000]
let sum = 0

for(const price of priceList) {
    sum += price
}

let avg = sum / priceList.length
console.log(`합계: ${sum}`)
console.log(`가격: ${avg}`)