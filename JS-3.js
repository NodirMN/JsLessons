////Sikil for
let summa = 0
for(let a = 0; a<=10; a++){
    console.log('summa=' , summa, 'a=' , a);
        summa+=a
}
console.log(summa);

///// Juft son
let son = 1
for(let b = 2; b<=10; b+=2){
    console.log('on=' , son, 'b=' , b);
        son*=b
}
console.log(son);

//////Tekaris sonlar
for (let n = 10; n >0; n--) { /////10.9.8....
    console.log(n);
}

//////
let m = 13
let l = 3
for (let  h=l;h<m;h++){
    if (h==7){
        break
    }
    console.log(h);
}