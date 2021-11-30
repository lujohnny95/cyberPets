import inquirer from "inquirer";
//import { Pet } from "./pets.js";

//cyber pets:
let pet 

const init = () => {
    
    let petChoice = [
        {
        //pet choice
            type: "list",
            name: "pet choice",
            message: "Choose your pet: ",
            choices: ["Cat", "Dog", "Rabbit"],
        },
        //pet name
        {
            type: "input",
            name: "pet name",
            message: "Give your pet a name: "
        }
    ]
    
    
    const gameOn = async () => {
        let response = await inquirer.prompt(petChoice)
        console.log(response)
    }
    
    gameOn()
    
    
    const gameLoop = () => {
        let action = [
            {
                type: "list",
                name: "action",
                message: "What do you want to do?",
                choices: ["feed", "drink", "play", "rest", "potty", "wash"]
            }
        ] 
        .then((action) => {
            console.table(action)
        })
     
        .then(() => gameLoop())
    }
    
}


let day = 1;

//show the current status of the pet:
//function - console.log(hunger, this)

const gameLoop = () => {
    
}

gameOn = true;
while (gameOn) {
    let morningAction = ("Its morning, what would you like to?")

    //outcome and changes in pet's needs:
    if (morningAction == "some function") {
        console.log("the outcome");
    }
    let afternoonAction = ("Its morning, what would you like to?")

    //outcome and changes in pet's needs:
    if (afternoonAction == "some function") {
        console.log("the outcome");
    }
    let eveningAction = ("Its morning, what would you like to?")

    //outcome and changes in pet's needs:
    if (eveningAction == "some function") {
        console.log("the outcome");
    }
}
