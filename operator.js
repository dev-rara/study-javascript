//문자열 붙이기
console.log('My' + ' car')
console.log('1' + 2)          //3이 아닌 12가 출력
console.log(1 + 2)            //3이 출력

let price = 200000
console.log('이 신발의 가격은 ' + price + '원 입니다.')   
console.log(`이 신발의 가격은 ${price}원 입니다.`)        //위와 같은 문구 출력



//산술 연산자
console.log(2 + 1)     //3출력
console.log(2 - 1)     //1출력
console.log(2 * 3)     //6출력
console.log(4 / 2)     //2출력
console.log(10 % 3)    //1출력(10을 3으로 나눈 나머지)
console.log(10 ** 2)   //100출력(10의 2제곱)



//증감 연산자
let count = 1
const preIncrement = ++count
console.log(`count: ${count}, preIncrement: ${preIncrement}`)     //2, 2 출력


let postCount = 1
const postIncrement = postCount++
console.log(`postCount: ${postCount}, postIncrement: ${postIncrement}`)    //2, 1 출력



//대입 연산자
const shirtsPrice = 100000
const pantsPrice = 80000
let totalPrice = 0

totalPrice += shirtsPrice
console.log(totalPrice)         //100000 출력

totalPrice += pantsPrice
console.log(totalPrice)         //180000 출력

totalPrice -= shirtsPrice
console.log(totalPrice)         //80000 출력