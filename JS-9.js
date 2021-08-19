//////////////Funksiya juft toq
let n = 15
let b = summa(n,'toq')

function summa(a=15,b){
    let sum = 0
    let start = (b=='toq') ? 1:2
for (let i = start; i<=a; i+=2){
    sum += i
    console.log(i);
}
return sum
}

console.log(n,'ga bolgan sonlar yeg`indisi', b);

///////////////////so'zi kotta qilish

function katta(soz){
    return soz.toUpperCase()
}
console.log(katta('salom hammaga'));


/////////////////////Palendirom

function palindrom(s) {
    let a = s.split('').reverse().join('')
    console.log('o`zgargan ->', a,'oldingi qiymat->', s);
    if (a.toLowerCase() == s.toLowerCase()){
        console.log('palindrom');
    }else{
        console.log('palindrom emas');
    }
    
}
palindrom('nodir')

//////////////////////////////Massivla bilan

function sumMas(mas){
    let sum = 0
    for(let i =0;i<mas.length;i++){
        sum += mas[i]
    }
    return sum
}
let massiv = [12,5,33,67,34]
let result = sumMas(massiv)
console.log(massiv);
console.log(result);

//////////////////// Random

function omadLatto(n){
    return  parseInt(Math.random()*n);
}
let arr = []
for (let i=0;i<7;i++){
    arr.push(omadLatto(36))
}
console.log(arr);


//////////////////////farngeyt

function f2c(f){
    return 5/9*(f-32)
}
console.log(f2c(125),'celcy');

//////////////////////dyum

function d2mm(d){
    return d*25.4
}
console.log(d2mm(15),'mm');

///////////////////mill km

function m2km(m){
    return m*1.609
}
console.log(m2km(130), 'km');