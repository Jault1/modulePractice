import personName, {pet, greet} from "./name.js";
//All non-default exports needs to be destructured from the file.

console.log(personName);
console.log(pet.name, pet.breed);
greet("Monika");