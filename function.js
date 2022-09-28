function calculateAvg(price1, price2) {
    const sum = price1 + price2
    console.log(`두 상품의 가격 총합은 ${sum}입니다.`)
    const avg = sum / 2

    return avg
}

const priceA = 1000
const priceB = 2000
const avg1 = calculateAvg(priceA, priceB)
console.log(`A와 B의 평균 가격은 ${avg1}입니다.`)

const priceC = 2000
const priceD = 3000
const avg2 = calculateAvg(priceC, priceD)
console.log(`C와 D의 평균 가격은 ${avg2}입니다.`)



function getAverage(price1, price2, price3) {
    const sum = price1 + price2 + price3
    return sum / 3
}

const a = 1000
const b = 2000
const c = 3000
const avg = getAverage(a, b, c)
console.log(`평균가격: ${avg}`)

