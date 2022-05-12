export default class User{
    constructor(name, age){
        this.name = name
        this.age = age
    }
}

export function printUser(user){
    alert(`User name: ${user.name}. User age: ${user.age} `)
}

export const CONSTANS = "A";