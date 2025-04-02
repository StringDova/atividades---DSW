export class User{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    printName(){
        console.log(this.name);
    }
    printAge() {
        console.log(this.age);
    }
}
export function printName(user){
    return(`User's name is ${user.name}`);
}
export function printAge(user){
    return(`User's age is ${user.age}`);
}