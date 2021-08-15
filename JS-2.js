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


let baholar = ['Yomon','Qoniqarsiz','Qoniqarli','Yahshi','A`lo']
if(b<=5 && b!==0){
    console.log(baholar[b-1])
}else{
    console.log('Xatolik');
}