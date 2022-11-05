// Soru3: Klavyeden girilen vize ve final notlarına göre öğrencinin dersi geçip geçmediğini söyleyen bir uygulama yazınız.
// (Geçme notu: 50, vizenin %40'ı, finalin %60'ı geçerlidir.)
const vize = parseInt(prompt("Vize notunuzu giriniz"));
const final = parseInt(prompt("Final notunuzu giriniz"));
const vizeOrt = ((vize * 40) / 100);
const finalOrt = ((final * 60) / 100);
const genelOrt = (finalOrt + vizeOrt);

console.log(`Not Ortalamanız: ${genelOrt}`);

if(genelOrt >= 50){
    console.log("Dersten geçtiniz...");
}else{
    console.log("Dersten kaldınız...");
}