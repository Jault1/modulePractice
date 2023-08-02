# modulePractice

ES6 Modules
ES6 modules need a package.json file in order to use the modularization. This is to help identify that the folder is a package for an application.

// The whole point of modules is to compartmentalize pieces of code. It creates a cleaner code (program).

//===========================

CREATE package.json
npm init // hit "Enter" for the multiple prompts. After which, a package.json file will be created.

//===========================

AFTER creating the package.json file, you need to add a couple pieces.
 - add the type:module property to make the app know that it uses ES6 modules. 
 - Also add a start script to run the application.
 See example below. Make sure to pay attenction to the commas.

...
  "main": "index.js",
  "type": "module", 
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js" 
  },
...

THEN you can proceed with your TWO JavaScript files for import and export.

//===========================

CREATE a file named name.js and paste this code in:
//This is the EXPORT that will be imported into your MAIN code.

//Exporting files
//name.js
const personName = "Brandon";

export const pet = {
    name: "Cheddar",
    species: "cat",
    breed: "Bengal / Persian",
    color: "orange"
};

export const greet = (name) => {
    console.log(`Hello from name.js, ${name}!`);
}

// The default export is the export that is seen by the importing file without the need for destructuring.
export default personName;

//===========================

FINALLY create your IMPORT javascript file which is where your main code lives:
//Importing files
//index.js
import personName, {pet, greet} from "./name.js";
//All non-default exports needs to be destructured from the file.

console.log(personName);
console.log(pet.name, pet.breed);
greet("Monika");

//===========================

Running a package
To run the package, the start script of package.json is needed, and to run the script, the command npm run <scriptName> is used.

Ex. npm run start // 'start' is the key name you added to your package.json above.
//===========================
