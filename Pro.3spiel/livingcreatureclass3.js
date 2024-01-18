//benachbarte felder //scanfeld //machschritt /7plaziereneueslivingcreature

class LivingCreature {

    constructor(z, s) {
        this.zeile = z;
        this.spalte = s;
    };

    // Erfolg: [x, y] // nicht gefunden: []
    findePositionFuerLebewesen(farbCode) {
        // scan deine umgebung, und schau ob du um dich herum 
        // ein freies Feld findest.
        // wenn du ein freies feld findest, dann platziere auf diesem Feld
        // ein neues objekt. 
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
            let indexRand = (richtung + i) % 4;
            let ausgewähltesFeld = benachbarteFelder[indexRand];
            if (inMatrix(ausgewähltesFeld) && scanFeld(ausgewähltesFeld, farbCode)) {
                // if (scanFeld(ausgewähltesFeld, farbCode)) {
                return ausgewähltesFeld;    
                // let zeile = ausgewähltesFeld[0];
                // let spalte = ausgewähltesFeld[1];



                //     GrasArray.push(new Gras(zeile, spalte))
                //     return

                // }
            }else{
                return [];
            }
        }

    }


}