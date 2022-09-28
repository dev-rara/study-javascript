const shoesPrice = 40000
if(shoesPrice < 50000) {
    console.log('이 신발을 사겠습니다.')
} 

const capPrice = 40000
if(capPrice < 40000) {
    console.log('이 모자를 사겠습니다.')
} else if(capPrice <= 40000) {
    console.log('고민 좀 해볼게요...')
} else {
    console.log('너무 비싸네요!')
}


const distance = 2000
if(distance < 2000) {
    console.log('걸어가자')
} else if(distance >= 2 && distance < 5000) {
    console.log('택시를 타자')
} else {
    console.log('기차를 차자')
}