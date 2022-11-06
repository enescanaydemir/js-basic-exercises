// Soru8: Aşağıda tanımlı verilen f(x,y) fonksiyonunu klavyeden girilen x ve y değerleri için hesaplayınız.
// x>0, y<0 ise f(x,y) = 4x+2y+4
// x>0, y=0 ise f(x,y) = 2x-y+3
// x<0, y>0 ise f(x,y) = 3x+4y+3

let x = parseInt(prompt("x değerini giriniz"))
let y = parseInt(prompt("y değerini giriniz"))

if(x>0 && y<0) {
    console.log("f(x,y) = " + (4*x+2*y+4));
} else if(x>0 && y == 0) {
    console.log("f(x,y) = " + (2*x-y+3));
} else if(x<0 && y>0) {
    console.log("f(x,y) = " + (3*x+4*y+3));
} else {
    console.log("Lütfen x ve y değerlerini doğru giriniz...");
}
