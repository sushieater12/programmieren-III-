//benachbarte felder //scanfeld //machschritt /7plaziereneueslivingcreature

class LivingCreature {
    
    constructor(z,s) {
        this.zeile = z;
        this.spalte = s;
    };

    platziereNeuesLivingCreature(begehrt) {
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
            let j = (richtung + i) % 4;
            let ausgewähltesFeld = benachbarteFelder[j];
            if (inMatrix(ausgewähltesFeld)) {
                if (scanFeld(ausgewähltesFeld, begehrt)) {
                    let zeile = ausgewähltesFeld[0];
                    let spalte = ausgewähltesFeld[1];



                    GrasArray.push(new Gras(zeile, spalte))

                }
            }
        }

    }


}