let greetings: string ="Swetha Thangamani";

let mynum = 6
greetings.toUpperCase();

console.log(greetings);

//number -->primitive datatypes below code is better practices and type inference 
let userId: number =234567.3

userId.toFixed()

//boolean 
let isLoggedIn:boolean=true

isLoggedIn.valueOf()


//any --> Typescript also has a special type,any that you can use whenever you dont want a particular value to cause typechecking errors
//dont use any unnecessarily

let hero : string;
function getHero(){
    return "thor"
}

hero=getHero()

export{}
