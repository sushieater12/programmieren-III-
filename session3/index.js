const os = require("os")
let message = "die plattform ist "

function main(){
    console.log(message + os.platform())
}
main()