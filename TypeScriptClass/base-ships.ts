class Spacecraft{
    constructor(public propulsor: string){}

    jumpIntoHyperSpace(){
        console.log(`Entrando no espaço ${this.propulsor}`);
    }
}

interface ContainerShip{
    cargoContainers: number;
}

export {Spacecraft, ContainerShip}