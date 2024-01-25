const LivingCreature  = require("./livingcreatureclass.js")
const utils = require("./utils.js")
module.exports = class RasenDestroyer extends LivingCreature{
    // zeile;
    // spalte;
    energie = 15;
    istGolden = false;

    constructor(z, s) {
        super(z,s)
        if (randomNumber(1, 100) === 69) {
            this.istGolden = true;
        }
        this.platziereSelbstInMatrix();
    };

    platziereSelbstInMatrix() {
        if (this.istGolden) {
            matrix[this.zeile][this.spalte] = 4;
        }
        matrix[this.zeile][this.spalte] = 2;
    };
    spielzug() {

        if (this.energie > 30) {
            this.platziereNeuenRasenDestroyer();
            this.energie = 15;
        } else if (this.energie > 0) {
            console.log("energie", this.energie)
            this.machSchritt();
        } else {
            matrix[this.zeile][this.spalte] = 0;
            löschObjekt(RasenDestroyerArray, this.zeile, this.spalte);
        }
    };
    platziereNeuenRasenDestroyer() {
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
        //         if (scanFeld(ausgewähltesFeld, 0)) {
        //             let zeile = ausgewähltesFeld[0];
        //             let spalte = ausgewähltesFeld[1];



        //             RasenDestroyerArray.push(new RasenDestroyer(zeile, spalte))

        //         }
        //     }
        // }
        let potentialPosition = super.findePositionFuerLebewesen(1);
        if(potentialPosition.length == 2){
            RasenDestroyerArray.push(new RasenDestroyer(potentialPosition[0], potentialPosition[1]));
        }
    }
    // gut

    machSchritt() {
        // 0 -> OBEN
        // 1 -> RECHTS
        // 2 -> LINKS
        // 3 -> UNTEN
        let richtung = randomNumber(0, 4);
        let benachbarteFelder = [
            [this.zeile - 1, this.spalte],
            [this.zeile, this.spalte - 1],
            [this.zeile + 1, this.spalte],
            [this.zeile, this.spalte + 1],
        ]
        if (this.istGolden === false) {
            for (let i = 0; i < 4; i++) {
                let j = (richtung + i) % 4
                let ausgewähltesFeld = benachbarteFelder[j];
                if (inMatrix(ausgewähltesFeld)) {
                    if (scanFeld(ausgewähltesFeld, 1)) {
                        matrix[this.zeile][this.spalte] = 0;
                        löschObjekt(GrasArray, ausgewähltesFeld[0], ausgewähltesFeld[1])
                        this.zeile = ausgewähltesFeld[0];
                        this.spalte = ausgewähltesFeld[1];
                        matrix[this.zeile][this.spalte] = 2;
                        this.energie++;
                        return;
                    }
                }
            }
        } else if (this.istGolden === true) {
            for (let i = 0; i < 4; i++) {
                let j = (richtung + i) % 4
                let ausgewähltesFeld = benachbarteFelder[j];
                if (inMatrix(ausgewähltesFeld)) {
                    if (scanFeld(ausgewähltesFeld, 1)) {
                        matrix[this.zeile][this.spalte] = 0;
                        löschObjekt(GrasArray, ausgewähltesFeld[0], ausgewähltesFeld[1])
                        this.zeile = ausgewähltesFeld[0];
                        this.spalte = ausgewähltesFeld[1];
                        matrix[this.zeile][this.spalte] = 4;
                        this.energie++;
                        return;


                    }

                }



            }

        };
        this.energie--;
    }
}
