interface Person {
    name: string;
    age: number
}

const person: Person = {
    name: "John",
    age: 30
}


interface Shape {
    width: number;
    height: number;
}

interface Color {
    color: string;
}

type ColorShape = Shape & Color

let square: ColorShape = {
    width: 10,
    height: 10,
    color: "red"
}

interface Dictionary {
    [key: string]: number
}


const dict: Dictionary = {
    "Eins": 1,
    "Zwei": 2,
}


interface Person {
    name: string;
    age: number;
    phone?: string;
}


const newPerson: Person = {
    name: "John",
    age: 30
}

const personWithPhone: Person = {
    name: "Jane",
    age: 25,
    phone: "555-555-5555"
}

interface Bankaccount {
    readonly accountNumber: number;
    balance: number;
}

let account: Bankaccount = {
    accountNumber: 123123123123,
    balance: 0
}



export { }