function erstelleMatrix(spalten, zeilen) {
    let matrix = []
    for (let i = 0; i < zeilen; i++) {
        let zeile = []
        for (let i = 0; i < spalten; i++) {
            zeile.push(0);
        }
        matrix.push(zeile);
    }
    return matrix;
}

function zeichneMatrix() {
    for (let zeile = 0; zeile < matrix.length; zeile++) {
        for (let spalte = 0; spalte < matrix.length; spalte++) {
            if (matrix[zeile][spalte] === 1) {
                fill(0, 100, 0);
            } else if (matrix[zeile][spalte] === 0) {
                fill(99, 82, 27)
            } else if (matrix[zeile][spalte] === 2) {
                fill(255, 0, 0)
            } else if (matrix[zeile][spalte] === 3) {
                fill(255, 255, 255)
            } else if (matrix[zeile][spalte] === 4) {
                fill(230, 181, 21)
            }
            let k = 500 / matrix.length;
            rect(spalte * k, zeile * k, k, k)
        }
    }
}


function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}


function inMatrix(koordinatenPaar) {
    // der überprüft, ob ein Koordinatenpaar [zeile,spalte]
    // in der Matrix ist?
    let zeile = koordinatenPaar[0];
    let spalte = koordinatenPaar[1];

    if (zeile > (matrix.length - 1) || zeile < 0) {
        return false;
    } else if (spalte > (matrix.length - 1) || spalte < 0) {
        return false;
    } else {
        return true;
    }
}

function löschObjekt(liste, zeile, spalte) {
    let index;
    for (let i = 0; i < liste.length; i++) {
        if (liste[i].zeile === zeile && liste[i].spalte === spalte) {
            index = i;
        };
    }
    return liste.splice(index, 1);
}

// function istGras(koordinatenPaar) {
//     let zeile = koordinatenPaar[0];
//     let spalte = koordinatenPaar[1];

//     // Ist an der stelle (zeile,spalte) in der Matrix gras (== 1)?
//     if (matrix[zeile][spalte] === 1) {
//         return true
//     }
//     if (matrix[zeile][spalte] === 0) {
//         return false
//     }
// }

function scanFeld(koordinatenPaar, farbcode) {
    let zeile = koordinatenPaar[0];
    let spalte = koordinatenPaar[1];

    // Ist an der stelle (zeile,spalte) in der Matrix gras (== 1)?
    if (matrix[zeile][spalte] === farbcode) {
        return true
    } else return false;
}

module.exports = {scanFeld,löschObjekt,randomNumber,inMatrix,zeichneMatrix,erstelleMatrix}