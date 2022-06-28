/*

Type annotation

let a:number = 1;
console.log(a)


let fullName :string = "shakeeb"; //this is a type anotation
fullName = "anwar"

let num:number;
num = 1;

const names:string[] = [];
names.push(11) //not acceptable
names.push("shakeeb")


*/
/*


functions


function sum(a:number,b:number):number{

    return a + b
}



 ma sa kuch nhi ho sakta
    return b? a+b : a
}

console.log(add("1","3"))
console.log(add("1"))




*/
/*

Tuples

let address : [number,string,number]
address = [1,"shakeeb",3]

*/
/*
Object


let person : {name:string}
person = {"name":"shakeeb"}

let anotherPerson : {name:string,age?:number} //? is a optional property
anotherPerson = {"name":"shakeeb","age":56}
anotherPerson = {"name":"shakeeb"}

*/
/*
Interface is datatype


interface Person{
    name:string;
    id:number;
    age:number;
}

let p:Person;
p={name:"shakeeb","id":3,"age":50}

interface Student{

    name:string;
    rollNo:number;
    age:number;
}

let p1 : Person | Student; //union means kisi ak defination sa match hona chaye
p1 = {name:"shakeeb","age":45,"rollNo":67}
p1 = {name:"shakeeb","age":45,id:56}
p1 = {name:"shakeeb","age":45,id:56,"rollNo":66}


let p2 : Person & Student //Intersection ab is ma dono ki property honi chaye
p2 = {name:"shakeeb","age":56,"id":5,"rollNo":66}

*/
/*


//Type alias (alias means ya ak shortcut ha ya bi interface bi tarha work karta magar ya itna deep nhi ha)

type Count = string | number;   // means sirf string aur number allow ha
let c:Count;
c = 1
c = "shakeeb"


type X = string & number; //never ya bi ak special datatype ha means string,number wager kuch bi nhi ja sakta ha
const n:[]=[] //bydefault array bi never type sa initialize hota ha




*/
/*

Js style

class Car{

    brand;
    constructor(brand){

        this.brand = brand;
    }

    getBrand(){

        console.log(this.brand)
    }
}

let c1 = new Car("Pejaro")
c1.getBrand()







// type script

//public
class CarX{


    constructor(public brand,public price){

    }

    getBrand(){

        console.log(this.brand)
    }
}

let c2 = new CarX("Pejaro",56999)
c2.getBrand()




//private (ab hum brand ko direct excess nhi kar sakta class ka instance sa huma class andar method bana ka isko excess karna honga)
class CarY{


    constructor(private brand){

    }

    getBrand(){

        console.log(this.brand)
    }
}

let c3 = new CarY("Pejaro")
c3.getBrand()

*/
/*
//implements

interface Icar{
    brand:string;
    model:string;
}


interface Icar2{

release :number;
}


class CarC implements Icar,Icar2{

    constructor(public brand,public model,public release){  //yaha ma property ko private nhi kar sakta agar private kardonga tu interface ko pata nhi chala ga ka humna implement kardiya ha ya nhi


    }
}


*/
/*
Generics

*/
function gen(a, b) {
    return [a, b];
}
console.log(gen("shakeeb", "anwar"));
console.log(gen(1, 2));
console.log(gen([1], [3]));
