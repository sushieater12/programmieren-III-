






class fresser extends LivingCreature {
    zeile;
    spalte;
    energie = 150;
    constructor(z, s) {
        super(z, s)
        this.platziereSelbstInMatrix();
    };
    platziereSelbstInMatrix() {
        matrix[this.zeile][this.spalte] = 3;
    };
    spielzug() {

        if (this.energie > 1000) {
            this.platziereNeuenfresser();
            this.energie = 500;
        } else if (this.energie > 0) {
            this.machSchritt();
        } else {
            matrix[this.zeile][this.spalte] = 0;
            löschObjekt(fresserArray, this.zeile, this.spalte);
        }
    };
    platziereNeuenfresser() {
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

        //             
        //             return;
        //         }
        //     }

        // }
        let potentialPosition = super.findePositionFuerLebewesen(0);
        if (potentialPosition.length == 2) {
            fresserArray.push(new fresser(potentialPosition[0], potentialPosition[1]));
        };
    }
    platziereSelbstInMatrix() {
        matrix[this.zeile][this.spalte] = 2;
    };





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

        for (let i = 0; i < 4; i++) {
            let j = (richtung + i) % 4
            let ausgewähltesFeld = benachbarteFelder[j];
            if (inMatrix(ausgewähltesFeld)) {
                if (scanFeld(ausgewähltesFeld, 2)) {
                    console.log("yummy ")
                    matrix[this.zeile][this.spalte] = 0;
                    löschObjekt(RasenDestroyerArray, ausgewähltesFeld[0], ausgewähltesFeld[1])
                    this.zeile = ausgewähltesFeld[0];
                    this.spalte = ausgewähltesFeld[1];
                    matrix[this.zeile][this.spalte] = 3;
                    this.energie += 30
                    return;


                } else if (scanFeld(ausgewähltesFeld, 1)) {
                    matrix[this.zeile][this.spalte] = 0;
                    löschObjekt(GrasArray, ausgewähltesFeld[0], ausgewähltesFeld[1])
                    this.zeile = ausgewähltesFeld[0];
                    this.spalte = ausgewähltesFeld[1];
                    matrix[this.zeile][this.spalte] = 3;
                    return;

                } else if (scanFeld(ausgewähltesFeld, 4)) {
                    matrix[this.zeile][this.spalte] = 0;
                    löschObjekt(goldenArray, ausgewähltesFeld[0], ausgewähltesFeld[1])
                    this.zeile = ausgewähltesFeld[0];
                    this.spalte = ausgewähltesFeld[1];
                    matrix[this.zeile][this.spalte] = 3;
                    this.energie += 1000
                    return;

                }

            }
        }
        this.energie--;
    };


}
