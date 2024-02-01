const LivingCreature  = require("./livingcreatureclass.js")
const utils = require("../utils.js")
module.exports = class Gras extends LivingCreature {
    // zeile;
    // spalte;
    energie = 0;
    constructor(z, s) {
        super(z, s);
        this.platziereSelbstInMatrix();
    };


    spielzug() {
        if (this.energie > 3) {
            this.platziereNeuesGras();
            this.energie = 0;
        } else {
            this.energie++;
        }
    };


    platziereNeuesGras() {
        // scan deine umgebung, und schau ob du um dich herum 
        // ein freies Feld findest.
        // wenn du ein freies feld findest, dann platziere auf diesem Feld
        // ein neues Grasobjekt. 
        // 0 -> OBEN
        // 1 -> RECHTS
        // 2 -> LINKS
        // 3 -> UNTEN

        // let richtung = randomNumber(0, 4);
        // let benachbarteFelder = [
        //     [this.zeile - 1, this.spalte],
        //     [this.zeile, this.spalte - 1],
        //     [this.zeile + 1, this.spalte],
        //     [this.zeile, this.spalte + 1],
        // ]


        // for (let i = 0; i < 4; i++) {
        //     let j = (richtung + i) % 4;
        //     let ausgewähltesFeld = benachbarteFelder[j];
        //     if (inMatrix(ausgewähltesFeld)) {
        //         if (scanFeld(ausgewähltesFeld,0)) {
        //             let zeile = ausgewähltesFeld[0];
        //             let spalte = ausgewähltesFeld[1];

        //             GrasArray.push(new Gras(zeile, spalte))
        //             return;

        //     }
        //     }

        // }
        let potentialPosition = super.findePositionFuerLebewesen(0);
        if(potentialPosition.length == 2){
            GrasArray.push(new Gras(potentialPosition[0], potentialPosition[1]));
        }
    }

    platziereSelbstInMatrix() {
        matrix[this.zeile][this.spalte] = 1;
    };

}


