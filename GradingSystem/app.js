// Soru9: 100'lük sistemde verilen notları harfli sistemde gösteren bir uygulama yazılacak.
let note = parseInt(prompt("Lütfen notu giriniz"))

if (note > 0 && note < 35) {
    console.log("FF");
} else if(note > 35 && note < 45) {
    console.log("DD");
} else if(note > 45 && note < 50) {
    console.log("DC");
} else if(note > 50 && note < 55) {
    console.log("CC");
} else if(note > 55 && note < 63) {
    console.log("CB");
} else if(note > 63 && note < 71) {
    console.log("BB");
} else if(note > 71 && note < 80) {
    console.log("BA");
} else if(note > 80 && note < 100) {
    console.log("AA");
} else {
    console.log("Geçerli bir not giriniz...");
}