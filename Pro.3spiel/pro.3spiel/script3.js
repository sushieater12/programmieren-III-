let matrix = erstelleMatrix(100, 100);
let GrasArray = [];
let RasenDestroyerArray = [];
let fresserArray = [];
let goldenArray = []
function setup() {
    createCanvas(500, 500);
    frameRate(100)
    noStroke()

    GrasArray.push(new Gras(25, 26))
    GrasArray.push(new Gras(25, 27))
    GrasArray.push(new Gras(25, 28))
    GrasArray.push(new Gras(25, 24))
    GrasArray.push(new Gras(25, 23))
    GrasArray.push(new Gras(25, 22))
    GrasArray.push(new Gras(26, 25))
    GrasArray.push(new Gras(27, 25))
    GrasArray.push(new Gras(28, 25))
    GrasArray.push(new Gras(23, 25))
    GrasArray.push(new Gras(24, 25))

    fresserArray.push(new fresser(28, 27))

    RasenDestroyerArray.push(new RasenDestroyer(25, 25))

}

let i = 2
let z = 0;
function draw() {
    //console.log("funktioniert")
    if (z < i) {
        console.log(z);
        for (let i = 0; i < GrasArray.length; i++) {
            GrasArray[i].spielzug()
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
        zeichneMatrix();
    }
    z++;
    i++

}






