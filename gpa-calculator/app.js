// Soru3: Klavyeden girilen vize ve final notlarına göre öğrencinin dersi geçip geçmediğini söyleyen bir uygulama yazınız.
// (Geçme notu: 50, vizenin %40'ı, finalin %60'ı geçerlidir.)
const vize = parseInt(prompt("Vize notunuzu giriniz", "50"));
const final = parseInt(prompt("Final notunuzu giriniz", "50"));
const genelOrt = vize * 0.4 + final * 0.6;

console.log(`Not Ortalamanız: ${genelOrt}`);

if(genelOrt >= 50){
    console.log("Dersten geçtiniz...");
}else{
    console.log("Dersten kaldınız...");
}