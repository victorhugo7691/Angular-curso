"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.MilenniumFalcon = void 0;
var base_ships_1 = require("./base-ships");
var MilenniumFalcon = /** @class */ (function (_super) {
    __extends(MilenniumFalcon, _super);
    function MilenniumFalcon() {
        var _this = _super.call(this, "hyperDrive") || this;
        _this.cargoContainers = 2;
        return _this;
    }
    MilenniumFalcon.prototype.jumpIntoHyperSpace = function () {
        if (Math.random() >= 0.5) {
            _super.prototype.jumpIntoHyperSpace.call(this);
        }
        else {
            console.log("Falhou na ida ao espaço");
        }
    };
    return MilenniumFalcon;
}(base_ships_1.Spacecraft));
exports.MilenniumFalcon = MilenniumFalcon;
