let username: string = "Nagy Marcell";
let age: number = 19;
let driverLicense: boolean = true;

let data: Object = {
    username: "Kumpri",
    age: 21
}

type Driver = {
    name: string,
    age: number,
    validDriverLicense: boolean,
    blackMarks: number,
    countryCode: 'H' | 'GB' | 'CH' | 'I'
}

let Marci: Driver = {
    name: "Nagy Marcell",
    age: 19,
    validDriverLicense: true,
    blackMarks: 0,
    countryCode: 'H'
}

