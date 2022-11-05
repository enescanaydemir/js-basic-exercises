// Soru2: Klavyeden kenarları girilen bir üçgenin çeşidini veren uygulama
const firstEdge = parseInt(prompt("write the first side"))
const secondEdge = parseInt(prompt("write the second side"))
const thirdEdge = parseInt(prompt("write the third side"))

if ((firstEdge == secondEdge) && (firstEdge == thirdEdge)) {
    console.log("This is an equilateral triangle");
} else if ((firstEdge == secondEdge) && (firstEdge != thirdEdge)) {
    console.log("This is an isosceles triangle");
} else {
    console.log("This isn't triangle!?!?!?WTF!?");
}