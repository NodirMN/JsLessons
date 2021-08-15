            /////////// Tiplar//////////

    console.log('Nodir');//string - satirli tip
    console.log(13)//integer - butun son
    console.log(3.6);//float - haqiqiy son
    console.log(true);//boolean -mantiqiy tip
    console.log(null);//nul - nul
    console.log({title:'Nodir',bdate:1994}); // Obyekt tip kaliti qiymati //
    console.log(['Nodir', 'Aziz', 'Begzod']); // massiv array-deb etiladi


                ////////// Ozgaruvchilar///////

            
    let a = 13
    let human = 'Ali'
    console.log('Ismi:',human,'Yosh:',a);
    console.log('   Ismi:' +human+ '   Yosh:' +a);
    console.log(`   Ismi: ${human}  Yosh:${a+1} `);

    ///Massiv 
    let people = ['Nodir', 'Aziz', 'Begzod']
    console.log(people); 
    console.log(people[2]);

    ////Obyekt
    let men = {
        men: 'Nodir',
        bdate: 1994,
        age: null
    }
    console.log(men.men); //holasa bunaqa
    men.age = 27 // maydonga null ga qiymat
    console.log(men);
    console.log(men['bdate']);///holasa massivdaka murojat

        //////Matematik ammalr qisa bo'ladi
    let sona = 4
    let sonb = 5

    console.log('Natija:',sona+sonb);
    console.log('Natija:',sona*sonb);
    console.log('Natija:',sona/sonb);
    console.log('Natija:',sona-sonb);
    console.log('Natija:',sona%sonb);

       /// Vazifa olma////
    
let olmaNarxi = 5000, olmaKg=3
let olxoriNarxi = 3000, olxoriKg=1.5
let nokNarxi = 12000, nokKg =4
let umumiy = olmaKg*olmaNarxi+olxoriNarxi*olxoriKg+nokKg*nokNarxi
console.log('Umuniy summa:', umumiy, 'so`m');


            ///Shart aperatori//if//

let yosh = 16
if(yosh>=18){
    console.log('Voyaga yetgan');
}else{
    console.log('Voyaga yetmagan');
}


        //////Vazifa///////
let dastur = 'Go'
if(dastur ==  'Python'){
    console.log('Django');
}
else if(dastur ==  'JavaScript'){
    console.log('Vue');
}else if(dastur == 'PHP'){
    console.log('Laravel');
}else{
console.log('Bunday dastur yo`q');
}


/////ikkalasi teng
let sonA = 12   //qiymat bor 
let sonB = '122' //qiymat bor :) false yozssa ten emaas chiqadi == teng === tengmas chiqadi
if(sonA=sonB){
    console.log('Teng');
}else{
    console.log('Teng emas');
}

///////qoldiq karrali
let p = 14

if(p%2 == 0){
    console.log('2ga karrali');
}else if(p%3 == 0){
    console.log('3ga karrali');
}else if (p%5 == 0){
    console.log('5ga karrali');
}else{
    console.log('Notog`ri qiymat berilgan');
}

/////////// va - &&
let m = 15

if(m%2 == 0 && m%3 == 0){
    console.log('2ga va 3 ga karrali');
}else if ( m%3 == 0 && m%5 == 0){
    console.log('3ga va 5ga karrali');
} else if (m%2 == 0  && m%5 ==0){
    console.log('2ga va 5ga karrali');
}else {
    console.log('Noto`g`ri qiymat')
}

///////////////  yoki-||

let f = 9
if(f%2 == 0 || f%3 == 0){
    console.log('2ga yoki 3ga karrali');
}else if (f%4 == 0 || f%5 == 0){
    console.log('4ga yoki 5 ga karrali');
}else{
    console.log('Noto`g`ri qiymat');
}
/*
                true && true ---> true  ****&&Kak ko'paytiruv
                true && false ---> false
                false && true ---> false
                false && false ---> false


                true || true ---> true  ****||Kak qo'shish
                true || false ---> true
                false || true ---> true
                false || false ---> false



*/
////Hafta kunlari

let day = 0
if (day == 1) {
    console.log('Dushanba');
} else if (day == 2) {
    console.log('Seshanba');
} else if (day == 3) {
    console.log('Chorshanba');
} else if (day == 4) {
    console.log('Payshanba');
} else if (day == 5) {
    console.log('Juma');
} else if (day == 6) {
    console.log('Shanba');
} else if (day == 7) {
    console.log('Yakshanba');
} else {
    console.log('Bunday hafta yo`q');
}
//yoki bunaqa qilib yozsa bo'ladi
let weekDays = ['Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma', 'Shanba', 'Yakshanba']
if (day <= 7 && day !== 0) {
    console.log(weekDays[day - 1]); // massivdan -1 qilib olib tashash kere
} else {
    console.log('Bunday hafta yo`q');
}

////Baxolar
let b = 2

if (b == 1) {
    console.log('Yomon');
} else if (b == 2) {
    console.log('Qoniqarsiz');
} else if (b == 3) {
    console.log('Qoniqarli');
} else if (b == 4) {
    console.log('Yaxshi');
} else if (b == 5) {
    console.log('A`lo');
} else {
    console.log('1dan 5gacham bahoni tanlang');
}

//////////////Oy

let baholar = ['Yomon', 'Qoniqarsiz', 'Qoniqarli', 'Yahshi', 'A`lo']
if (b <= 5 && b !== 0) {
    console.log(baholar[b - 1])
} else {
    console.log('Xatolik');
}

let month = 2
if (month == 1) {
    console.log('Yanvar', 31);
} else if (month == 2) {
    console.log('Fevral', 28);
} else if (month == 3) {
    console.log('Mart', 31);
} else if (month == 4) {
    console.log('Aprel', 30);
} else if (month == 5) {
    console.log('May', 31);
} else if (month == 6) {
    console.log('Iyun', 30);
} else if (month == 7) {
    console.log('Iyul', 31);
} else if (month == 8) {
    console.log('Avgust', 31);
} else if (month == 9) {
    console.log('Sentabr', 30);
} else if (month == 10) {
    console.log('Oktabr', 31);
} else if (month == 11) {
    console.log('Noyabr', 30);
} else if (month == 12) {
    console.log('Dekabr', 31);
} else {
    console.log('Xatolik');
}


///////Amal bajaring
let t = 60
let s = 5
let amal = 2

if (amal == 1) {
    console.log(t + s);
} else if (amal == 2) {
    console.log(t / s);
} else if (amal == 3) {
    console.log(t - s);
} else if (amal == 4) {
    console.log(t * s);
} else if (amal == 5) {
    console.log(t % s);
} else {
    console.log('Xatolik');
}