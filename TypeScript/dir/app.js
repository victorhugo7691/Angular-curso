var message = "Help";
console.log(message);
var episode = 4;
console.log("Esse é o episodio" + episode);
episode++;
console.log("O proximo episodio é " + episode);
//tipo any
var palavra;
palavra = "Ola mundo";
console.log(palavra);
var isEnoughtToBeat = function (parsecs) {
    return parsecs < 12;
};
var distance = 14;
console.log("A distancia " + distance + " \u00E9 suficiente para o Falcon? " + (isEnoughtToBeat(distance) ? 'Yes' : 'No'));
var call = function (name) { return console.log("Voce copiou " + name); };
call('JOAOZINHO');
function inc(speed, inc) {
    if (inc === void 0) { inc = 1; }
    return speed + inc;
}
console.log("inc (5,1) = " + inc(5, 1));
console.log("inc (5) = " + inc(5));
