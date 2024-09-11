let username: string = "Nagy Marcell";
let age: number = 19;
let driverLicense: boolean = true;

let data: Object = {
    username: "Kumpri",
    age: 21
}

interface IDriver {
    name: string,
    age: number,
    validDriverLicense: boolean,
    blackMarks: number,
    countryCode: 'H' | 'GB' | 'CH' | 'I'
}

interface IDriver {
    bloodAlcohol: number
}

let Marci: IDriver = {
    name: "Nagy Marcell",
    age: 19,
    validDriverLicense: true,
    blackMarks: 0,
    countryCode: 'H',
    bloodAlcohol: 0
}

type Car = {
    carType: string,
    isRollin: boolean,
}

type Airplane ={
    airPlaneNumber: number,
    isFlying: boolean
}

type Vehicle = Car | Airplane

let mustang: Vehicle = {
    carType: "muscle",
    isRollin: true
}