// Soru6: 1'den 10'a kadar olan sayıları sıra ile ve aralarında virgül olacak şekilde yazan bir uygulamayı for döngüsü ile yazınız. 1,2,3... 10
bosMetin = "";
for(let i = 1; i <= 10; i++){
    if(i != 10) {
        bosMetin += i + ", ";
    } else {
        bosMetin += i;
    }
}
console.log(bosMetin);