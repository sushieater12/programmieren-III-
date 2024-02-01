const express = require("express")
const Gras = require("./classes/grasclass.js")
const Fresser = require("./classes/fresserclass.js")
const RasenDestroyer = require("./classes/rasen_destroyerclass.js")
const utils = require("./utils.js")
const app = express()
let interval

intervalID = setInterval(function () {
    updateGame()

}, 1000)

matrix = utils.erstelleMatrix(10, 10);
GrasArray = [];
RasenDestroyerArray = [];
fresserArray = [];
goldenArray = []


app.listen(3000, function () {
    console.log("der server läuft auf port 3000")
    //spiel startet

    initGame()
    console.log(matrix)
    updateGame()

})


function initGame() {

    GrasArray.push(new Gras(2, 2))
    GrasArray.push(new Gras(2, 3))
    // GrasArray.push(new Gras(25, 28))
    // GrasArray.push(new Gras(25, 24))
    // GrasArray.push(new Gras(25, 23))
    // GrasArray.push(new Gras(25, 22))
    // GrasArray.push(new Gras(26, 25))
    // GrasArray.push(new Gras(27, 25))
    // GrasArray.push(new Gras(28, 25))
    // GrasArray.push(new Gras(23, 25))
    // GrasArray.push(new Gras(24, 25))

    fresserArray.push(new Fresser(6, 6))

    RasenDestroyerArray.push(new RasenDestroyer(3, 3))


}
function updateGame() {
    console.log("update game")
   
    for (let i = 0; i < GrasArray.length; i++) {
        GrasArray[i].spielzug()
        console.log("gut")
    }
    for (let i = 0; i < RasenDestroyerArray.length; i++) {
        RasenDestroyerArray[i].spielzug()
    }
    for (let i = 0; i < fresserArray.length; i++) {
        fresserArray[i].spielzug()
    }
    for (let i = 0; i < goldenArray.length; i++) {
        goldenArray[i].spielzug()
    }
    // utils.zeichneMatrix();
    console.log(matrix)
}
