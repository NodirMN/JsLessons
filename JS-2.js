////////////Tanlash operatori SWICH

let h = 4
switch (h) {
    case 1:
        console.log('Yomon');
        break;
    case 2:
        console.log('Qoniqarsiz');
        break;
    case 3:
        console.log('Qoniqarli');
        break;
    case 4:
        console.log('Yaxshi');
        break;
    case 5:
        console.log('A`lo');
        break;
    default:
        console.log('Xatoik');
        break;
}


////////////////Pul
let som = 100000
let valyuta = 'dollar'

switch (valyuta) {
    case 'dollar':
        console.log(som/10600,'dollar');
        break;
    case 'rub':
        console.log(som/125,'rub');   
        break;
    case 'evro':
        console.log(som/12500,'evro');   
        break;
    default:
        console.log('Xatolik');
        break;
}
////////////Massiv pul
let pul = 100000
let val = 'evro'
let kurs = [10500, 125,12500]

switch (val) {
    case 'dollar':
        console.log(som/[0],'dollar');
        break;
    case 'rub':
        console.log(som/[1],'rub');   
        break;
    case 'evro':
        console.log(som/[2],'evro');   
        break;
    default:
        console.log('Xatolik');
        break;
}

/////////////Obyekt pul
let many = 100000
let valut = 'evro'
let kurss = {
    dollar:10500, 
    rub:125, 
    evro:12500
}

switch (val) {
    case 'dollar':
        console.log(som / kurss.dollar, 'dollar');
        break;
    case 'rub':
        console.log(som / kurss.rub, 'rub');
        break;
    case 'evro':
        console.log(som / kurss.evro, 'evro');
        break;
    default:
        console.log('Xatolik');
        break;
}