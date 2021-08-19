///////////////Eng uzun so'z topsih

let text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis deleniti obcaecati distinctio? magni cupiditate aspernatur placeat vel porro blanditiis unde, laboriosam, modi exercitationem ipsa facilis eveniet repellat. Debitis, accusamus repellendus.'
let restText = text
let masText = restText.replaceAll(',','').replaceAll(',','').replaceAll('?','').split(' ')
let max = 0
let index = 0 
for(let i=0; i<masText.length; i++){
    if (masText[i].length>max){
        max = masText[i].length
        index = i
    }
}
console.log('eng uzun so`z',masText[index], '--> uzunligi', max,'turgan o`rni >>', index);

for(let i = 0;i<masText.length;i++){
    if(10==masText[i].length){       ////nechi qiymat bersa shuncha so'z topib beradi
        console.log(masText[i]);
    }
}

/////////////////////////////////////////////