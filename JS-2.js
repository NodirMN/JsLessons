////Hafta kunlari

let day = 0
if (day==1){
    console.log('Dushanba');
}else if (day == 2){
    console.log('Seshanba');
}
else if (day==3){
    console.log('Chorshanba');
}
else if (day==4){
    console.log('Payshanba');
}
else if (day == 5){
    console.log('Juma');
}
else if (day == 6){
    console.log('Shanba');
}
else if (day == 7){
    console.log('Yakshanba');
}else{
console.log('Bunday hafta yo`q');
}
//yoki bunaqa qilib yozsa bo'ladi
let weekDays = ['Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma', 'Shanba', 'Yakshanba']
if (day<=7 && day!==0){
    console.log(weekDays[day-1]);// massivdan -1 qilib olib tashash kere
}else {
    console.log('Bunday hafta yo`q');
}

////Baxolar
let b = 2

if (b == 1){
    console.log('Yomon');
}else if(b == 2){
    console.log('Qoniqarsiz');
}
else if(b == 3){
    console.log('Qoniqarli');
}
else if(b == 4){
    console.log('Yaxshi');
}
else if(b == 5){
    console.log('A`lo');
}else{
    console.log('1dan 5gacham bahoni tanlang');
}

//////////////Oy

let baholar = ['Yomon','Qoniqarsiz','Qoniqarli','Yahshi','A`lo']
if(b<=5 && b!==0){
    console.log(baholar[b-1])
}else{
    console.log('Xatolik');
}

let month = 2
if(month==1){
    console.log('Yanvar',31);
}else if(month==2){
    console.log('Fevral',28);
}
else if(month==3){
    console.log('Mart',31);
}
else if(month==4){
    console.log('Aprel',30);
}
else if(month==5){
    console.log('May',31);
}
else if(month==6){
    console.log('Iyun',30);
}
else if(month==7){
    console.log('Iyul',31);
}
else if(month==8){
    console.log('Avgust',31);
}
else if(month==9){
    console.log('Sentabr',30);
}
else if(month==10){
    console.log('Oktabr',31);
}
else if(month==11){
    console.log('Noyabr',30);
}
else if(month==12){
    console.log('Dekabr',31);
}else{
    console.log('Xatolik');
}


///////Amal bajaring
let t = 60
let s = 5
let amal = 2

if(amal == 1){
    console.log(t+s);
}else if(amal==2){
    console.log(t/s) ;
}else if(amal==3){
    console.log(t-s);
}else if(amal==4){
    console.log(t*s);
} else if (amal == 5) {
    console.log(t % s);
}else{
    console.log('Xatolik');
}


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
        break;
}
