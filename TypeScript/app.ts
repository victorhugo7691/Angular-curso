let message: string = "Help";
console.log(message);

let episode: number = 4;
console.log("Esse é o episodio" + episode);
episode++;
console.log("O proximo episodio é " + episode);

//tipo any
let palavra
palavra =  "Ola mundo";
console.log(palavra);

let isEnoughtToBeat = function( parsecs: number): boolean {
    return parsecs < 12;
}
let distance = 14;
console.log(`A distancia ${distance} é suficiente para o Falcon? ${isEnoughtToBeat(distance) ? 'Yes':'No' }`);

function inc (speed: number, inc: number = 1) : number{
    return speed + inc;
}

console.log(`inc (5,1) = ${inc(5,1)}`);
console.log(`inc (5) = ${inc(5)}`);