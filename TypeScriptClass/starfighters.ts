import {Spacecraft, ContainerShip} from './base-ships'

export class MilenniumFalcon extends Spacecraft implements ContainerShip{
    cargoContainers: number;
    constructor(){
        super("hyperDrive");
        this.cargoContainers = 2;
    }

    jumpIntoHyperSpace(){
        if(Math.random() >= 0.5){
            super.jumpIntoHyperSpace();
        }else{
            console.log("Falhou na ida ao espaço");
        }
    }
}