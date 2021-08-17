///O'sish bo'yicha tartiblash

let mas = [55,44,2,3,43,51,22,37,83]
console.log(mas);
for(let i=0; i<mas.length;i++){
        for(let j=0;j<mas.length;j++){
            if(mas[i]<mas[j]){   /// > qisa pasayish tartibi bilan
                let res = mas[i]
                mas[i] = mas[j]
                mas[j] = res
            }
        }
}
console.log(mas);


//Massivi eng katta elementi

let massiv = [55, 44, 2, 3, 43, 51, 22, 37, 83]
let max = massiv[0]

for(let index=1;index<massiv.length;index++){
    if (max<massiv[index]){
        max = massiv[index]
    }
}
console.log('Massiv eng akatta elementi:',max);

//////////////////eng kichik elementi
let massi = [55, 44, 2, 3, 43, 51, 22, 37, 83]
let maxi = massi[0]
let maxiindex = 0
let maximin = massi[0]
let maximinindex = 0
for (let inde = 1; inde < massi.length; inde++) {
    if (maxi < massi[inde]) {
        maxi = massi[inde]
        maxiindex = inde
    }
    if (maximin > massi[inde]) {
        maximin = massi[inde]
        maximinindex = inde
    }
    
}
console.log('Massiv eng katta elementi:', maxi);
console.log('Massiv eng kichik elementi:', maximinindex);


/////////////////////Text ichidagi unli hariflar va  sozlar soni

let text = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores voluptatum quasi aperiam corporis maiores voluptates dicta distinctio incidunt sunt, tempora, officia in. Tempore velit ex deleniti rem? Saepe, voluptatibus consectetur!'
let son = 0
let soz = 0 /// sozlar soni
for(let s=0;s<text.length;s++){
    if (text[s] == 'a' || text[s] == 'o' || text[s] == 'u' || text[s] == 'e'){
    son++
    }
    if (text[s]==' '){
        soz++
    }
}
soz++
console.log('So`zlar soni:',soz);
console.log('Unli hariflar:',son);

/////////////////////////

let tex = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores voluptatum quasi aperiam corporis maiores voluptates dicta distinctio incidunt sunt, tempora, officia in. Tempore velit ex deleniti rem? Saepe, voluptatibus consectetur!'
console.log(tex.length);
console.log(tex.toUpperCase()); ///Kott harif
console.log(tex.toLowerCase()); //Kichkina harif qilib beradi

console.log(tex.replace('el', '77')); // 1rinchis almashtirish 2chisi qaysi zo'z yoki son
console.log(tex.replaceAll('el', '77')) //hamsini o'zgartiri beradi
console.log(tex.split(' ')) //massiv qib beradi ' ' ichiga luboy sinvol qisa 
onsole.log(tex.indexOf(''))//yozgan harifi yoki so`zi topib beradi




/////stringga qaytarsa bo'adi

let text_mas = ["Lorem", "ipsum", "dolor", "sit", "amet", "consectetur,", "adipisicing", "elit.", "Asperiores", "voluptatum", "quasi", "aperiam", "corporis", "maiores", "voluptates", "dicta", "distinctio", "incidunt", "sunt,", "tempora,", "officia", "in.", "Tempore", "velit", "ex", "deleniti", "rem?", "Saepe,", "voluptatibus", "consectetur!"]
console.log(text_mas.join(' ')); //qoshib beradi


/////So'z teskarisi

let names = 'Nodir'
console.log(names.split('').reverse().join('')); //oson usuli

let revName = ''
for(let si=names.length-1;si>=0;si--){
    revName += names[si]
}
console.log(names);
console.log(revName);

////////////////  xarif almashtirish
let lat = {
    'a' : 'a',
    'b' : 'б',
    's' : 'с',
    'h' : 'x',
    'l' : 'л'
}
let zapas = text
for(let tt=0;tt<zapas.length;tt++){
    if(lat[zapas[tt]]){
        zapas = zapas.replaceAll(zapas[tt],lat[zapas[tt]])
    }
}

console.log();