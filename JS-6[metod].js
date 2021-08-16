/////////Metod

//push

let oxiri = [22,33,44,56,71,12,32]
oxiri.push('Nodir') //Oxiridan qoshadi
console.log(oxiri);

//unshift

let boshi = [22,33,44,56,71,12,32]
boshi.unshift('Shox') //Boshidan o'chiradi
console.log(boshi);

//pop

let ochiradioxiridan = [22,33,44,56,71,12,32]
ochiradioxiridan.pop() //Oxiridan o'chiradi yulib oladi
console.log(ochiradioxiridan);

//shift
let boshidanochirish  = [22, 33, 44, 56, 71, 12, 32]
boshidanochirish.shift() //Boshidan ochiradi
console.log(boshidanochirish);

//splice
let xjochirish = [22, 33, 44, 56, 71, 12, 32]
xjochirish.splice(1,4) // 1dan 4 nechtasini o'chirish
console.log(xjochirish);