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

///////////a ni b ga b resga berish O'rin almashtirish

let a = 2
let b = 5
console.log('a=',a, 'b=',b);
let res = a
    a = b
    b = res
    console.log('a=', a, 'b=', b);

//////////////////////// joy almashtirish

let humans = ['Nodir', 'Begzod', 'Sherzod','Aziz']
console.log(humans);
let rezhumans = humans[0]
humans[0] = humans[humans.length-1]
humans[humans.length-1] = rezhumans
console.log(humans);

console.log('xxxxxxxxxxxxxxxxxxxxxxx');

/////////////////Juft toq Massiv

let arr = [2,33,44,35,26,7,8,9,10,11,12,13,14,15]
let juft = []
let toq = []
for(let index=0;index<arr.length;index++){
    if(arr[index]%2 == 0){
        juft.push(arr[index])
    }else{
        toq.push(arr[index])
    }
}
console.log('Juftlardan iborat massiv', juft);
console.log('Toqlardan iborat massiv', toq);

console.log('xxxxxxxxxxxxxxxxx');

/////////////////Massiv eng ko'p qaytarilgan son o'chirish

let massiv = [2, 33, 44, 35, 26, 7, 8, 9, 10,2,2,11, 12, 13, 14, 15]
let i =  0

while(i<massiv.length){
    if(massiv[i]%2==0)
    console.log(massiv[i]);
    massiv.splice(i,1)
    i++
}
console.log(massiv);