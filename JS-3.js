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
    if (h==7){   ///6da o'chadi
        break
    }
    console.log(h);
}
///////

let p = 10
let j = 1
for (let f = j; f < p; f++) {
    if (f == 7) { ///7 yoq bolib ketadi
        continue
    }
    console.log(f);
}

////////////  Juft va Toq

let z = 23
for (let x=1;x<=z;x++)  ////{}-ishlasa bo'ladi
if(x%2==0)
    console.log('Juft',x);
else 
    console.log('Toq',x);
    
//////////////Shokolad
let narx = 22500
for(let ves =0.1; ves<=1;ves+=0.1){
    console.log(ves,'kg==>',narx*ves);
}

console.log('//////////////////////////');
///////////// Toq sonlar teskari
let cc = 4
let rr = 24
for(let ll=rr;ll>cc;ll--){
    console.log(ll);
}