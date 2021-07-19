import {MilenniumFalcon} from './starfighters';
import {Spacecraft, ContainerShip} from './base-ships';

let ship = new Spacecraft('hyperDrive');
ship.jumpIntoHyperSpace();

let falcon = new MilenniumFalcon();
falcon.jumpIntoHyperSpace();

let goodForTheJob = (ship: ContainerShip) => ship.cargoContainers > 2;
console.log(`O falcon é bom de trabalho? ${goodForTheJob(falcon)? 'yes': 'no'}`);
