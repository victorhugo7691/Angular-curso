"use strict";
exports.__esModule = true;
exports.Spacecraft = void 0;
var Spacecraft = /** @class */ (function () {
    function Spacecraft(propulsor) {
        this.propulsor = propulsor;
    }
    Spacecraft.prototype.jumpIntoHyperSpace = function () {
        console.log("Entrando no espa\u00E7o " + this.propulsor);
    };
    return Spacecraft;
}());
exports.Spacecraft = Spacecraft;
