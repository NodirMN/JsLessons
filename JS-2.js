////Hafta kunlari

let day = 2
if (day==1){
    console.log('Dushanba');
}else if (day==2){
    console.log('Seshanba');
}
else if (day==3){
    console.log('Chorshanba');
}
else if (day==4){
    console.log('Payshanba');
}
else if (day==5){
    console.log('Juma');
}
else if (day==6){
    console.log('Shanba');
}
else if (day==7){
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
