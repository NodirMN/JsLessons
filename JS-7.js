///O'rin almashtirib o'sish bo'yicha tartiblash

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