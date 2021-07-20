import {MilenniumFalcon} from './starfighters';
import {Spacecraft, ContainerShip} from './base-ships';
import * as _ from 'lodash'

console.log(_.pad("\nExemplo TypeScript\n", 80, "="));
let ship = new Spacecraft('hyperDrive');
ship.jumpIntoHyperSpace();

let falcon = new MilenniumFalcon();
falcon.jumpIntoHyperSpace();

let goodForTheJob = (ship: ContainerShip) => ship.cargoContainers > 2;
console.log(`O falcon é bom de trabalho?\n${goodForTheJob(falcon)? 'yes': 'no'}`);
