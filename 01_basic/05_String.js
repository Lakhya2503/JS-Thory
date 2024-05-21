const name = "lakhan shinde"
const scoreOfMyGame = 3642

// console.log(name + scoreOfMyGame + " gamescore"); //this is not a good practices write the code

// console.log(`my name is ${name.toUpperCase()} and my game score is ${scoreOfMyGame}`); //this is right code method to write a code

const gameName = new String("SuperMario");
// console.log(gameName);
// console.log(gameName.length);
// console.log(gameName.charAt(6));
// console.log(gameName.indexOf('a'));

const ChangeGame = new String("Supermario")

// console.log(ChangeGame.toUpperCase());

const newGame = ChangeGame.substring(0 , 7)
// console.log(newGame);
const OtherGame = ChangeGame.slice(-10 , 5)
// console.log(OtherGame);


const newWar = new String("Land of War")

const alphaWar = newWar.split(" ")
// console.log(newWar);
// console.log(alphaWar);

const betaWar = " landofwar   " 
// console.log(betaWar.trim()); //use only left and right spaces (not in under the space (ex.=> "land of war" not in this this type use(ex.=> "  landofwar   " use this type means left-right spaces are remove))

const url = "https://lakhan@google%20hee.com"
const newurl = url.replace("%20","-")
// console.log(newurl);

const alphaUrl = url.includes("teams")
// console.log(alphaUrl); //question