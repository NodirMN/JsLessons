//////////Massiv uzunligi
let humans = ['Nodir','Begzod','Sherzod']

console.log(humans.length); //massiv uzunligi length
for(let index = 0; index<humans.length; index++){
        console.log(humans[index]);
}

///////////massiv uzumnligi length

let numb = [22,33,32,12,5,6,78,]
for (let qs=0; qs<numb.length; qs++){
    console.log(numb[qs]);
}

/////////massiv qo'shish

let mat = [22, 33, 32, 12, 5, 6, 78, ]
let son = 0
for (let lson=0; lson<mat.length; lson++){
    son+=mat[lson]
    console.log(mat[lson],son);
}

//////////////////////massiv juft ko'paytmasi

console.log('////////////////');
let sonlar = [3,7,6,12,8]
let sons = 1
for (let index=0; index<sonlar.length; index++){
    if(sonlar[index]%2==0){
        console.log(sonlar[index],sons);
        sons*=mat[index]
    }
} 


//////// Karra jadval


let n = 3
for (let f=2; f<=10;f++){
    console.log(f +'Karra jadvali');
    for (let x=2;x<=10;x++){
        console.log(f+"*"+x+'='+x*f);
    }
    console.log('');
}

//////////////O'rta arifmetik

let massa = [22,112,1,2,3,45,]
let rr = 0
let summa = 0
while (rr<massa.length){
    console.log(massa[rr]);
    summa = summa +massa[rr]
    rr++
}
console.log('summa',summa);
let average = summa/massa.length
console.log('Masssiv elementlari o`rtacha qiymati',average)
for(rr=0;rr<massa.length;rr++){
    if(massa[rr]<average){
        console.log(massa[rr]);///for bilan yozilgani
    }
}
//////////Son boluvchilari

let j = 32
for (let d=1;d<=j;d++){
    if (j%d==0){
        console.log(d);
    }
}