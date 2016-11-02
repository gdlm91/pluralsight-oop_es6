class Drone {

    constructor(id, name) { //Constructor
        console.log(`Constructing Drone with id: ${id}, name: ${name}`);
        this.id = id; //Publi Property
        this._name = name; //Private Property (convention, not really private)
    }

    static getCompany() { //Static Method. Won't work on Instance.
        console.log('in getCompany');
    }

    fly() { //Public Method
        console.log(`Drone ${this.id} is flying`);
    }

    get name() { //Getter.
        return this._name.toUpperCase();
    }

    set name(value) { //Setter
        this._name = value.toLowerCase();
        console.log(`Set ._name priperty to: ${this._name}`);
    }

}
Drone.maxHeight = 2000; //Static Property. Undefined for Instances

let drone = new Drone(1, "Flyer");
let drone2 = new Drone(2, "Twirl");

drone.fly();

console.log(drone2.name); //Using getter

drone.name = "MAXFlyer"; //Using setter