let Deutschland = "53 million"
let Hannover = "4 million"

console.log (Deutschland);
console.log (Hannover);

let isIsland = true;
console.log (typeof isIsland);

Isisland = "Deutschland"
console.log (typeof Isisland);

let language;
console.log (language);
console.log (typeof language);

const massMarks = 78;
const heightMarks = 1.69;
const massJohn = 92;
const heightJohn = 1.95; 

const BMIMark = massMarks / heightMarks ** 2; 
const BMIJohn = massJohn / heightJohn ** 2; 
const markHigherBMI = BMIMark > BMIJohn; 

console.log(BMIMark , BMIJohn, markHigherBMI);



const massMark = 95;
const heightMark = 1.88; 
const massJohn = 85;
const heightJohn = 1.76;
const BMIMark = massMark / heightMark ** 2; 
const BMIJohn = massJohn / heightJohn ** 2;
const markHigherBMI = BMIMark > BMIJohn; 

console.log(BMIMark, BMIJohn, markHigherBMI);




// in Deutschland Wohnen Leute :
const DeutschlandEinwohnerZahl = 84000000;

//Falls halb Personen verlassen Deutschland: 
const ifDeutschlandhalf = DeutschlandEinwohnerZahl / 2; 

//in Finland Wohnen Leute:
const FinlandEinwohnerZahl = 6000000;

//Deutschland oder Finland WohnerZahlen: 
const DeutschlandEinwohnerZahloderFinlandEinwohnerZahl = DeutschlandEinwohnerZahl > FinlandEinwohnerZahl;

//durschnittlichLand in die Welt 
const durchschnittlichLand = 33000000; 

//durschnittlichLand oder Deutschland
const deutschlandDurschnittlichLandoder = durchschnittlichLand > DeutschlandEinwohnerZahl; 

console.log(ifDeutschlandhalf, DeutschlandEinwohnerZahloderFinlandEinwohnerZahl, deutschlandDurschnittlichLandoder);



const massCem = 102;
const heightCem = 1.98;
const massCan = 78; 
const heightCan = 1.78;

const CemBMI = massCem / heightCem ** 2;
const CanBMI = massCan / heightCan ** 2; 

const CemBMIhigher = CemBMI > CanBMI; 

console.log(CemBMI, CanBMI, CemBMIhigher);


const markBMI = 26.87; 
const johnBMI = 27.44;

if (markBMI > johnBMI) {
    console.log ("Mark's BMI is higher than John's!");
} else {
    const higher = johnBMI > markBMI; 
    console.log ("John's BMI is higher than Mark's!");
}

const massCan = 78;
const heightCan = 1.69;
const massCem = 92;
const heightCem = 1.95;

const BMICan = massCan / heightCan ** 2; 
const BMICem = massCem / heightCem ** 2;
console.log(BMICem, BMICan);

if (BMICem > BMICan) {
    console.log(`Cem's BMI (${BMICem}) is higher than Can's (${BMICan})!`);
} else {
    console.log(`Can's BMI (${BMICan}) is higher than Cem's (${BMICem}) !`)
}

const averagepopulation = 33000000000; 
const DeutschlandEinwohner = 80000000000;

if (DeutschlandEinwohner > averagepopulation) {
    console.log("Deutschland's population is avobe average");
} else {
    console.log("Deutschland's population is below average");
}


const age = 15; 

if (age >= 18) {
    console.log ('Sarah can start driving license 🚗');
} else {
    const yearsLeft = 18 - age; 
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
} 

const average = 140; 
const deutschland = 83;

if (average < deutschland) {
    console.log (`Deutschland's population is avobe average`);
}   else {
    const populationLeft = average - deutschland;
    console.log (`Deutschland's population is below average. Deutschland need ${populationLeft} people`);
}

const money = 0;
if (money) {
    console.log("Don't spend it all 😃");
} else {
    console.log("You should get a job!");
}


let n = "9" - "5";
console.log(n);

let m = "19" - "13" + "17";
console.log(m);

let x = "19" - "13" + 17;
console.log(x);

let y = "123" < 57;
console.log(y);

let a = 5 + 6 + "4" + 9 - 4 - 2;
console.log(a);

   //22. 

   const age = "18";
   if (age === 18) console.log("You just became an adult :D (scrict");
   if (age == 18) console.log("You just became an adult :D (loose)");
   
   const favorite = Number(prompt("What's your favorite number"));
   console.log(favorite);
   console.log(typeof favorite);
   
   if (favorite === 23) { // 22 === 23 -> FALSE
   console.log("Cool! 23 is an amazing number")
   } else if (favorite === 7) {
       console.log("7 is also a cool number")
   } else if (favorite === 9) {
       console.log("9 is also a cool number")
   } else {
       console.log("Number is not 23 or 7 or 9")
   }
   
   if (favorite !== 23) console.log("Why not 23?");
   
   
   
   //23
   
   //24
   
   const hasDriverLicense = true; // A
   const hasGoodVision = false; // B 
   
   console.log(hasDriverLicense && hasGoodVision);
   console.log(hasDriverLicense || hasGoodVision);
   console.log(!hasDriverLicense)
   
   const isTired = false; // C 
   console.log(hasDriverLicense && hasGoodVision && !isTired);
   
   if (hasDriverLicense && hasGoodVision && isTired) {
       console.log("Sarah is able to drive!");
   } else {
       console.log("Someone else should drive...");
   }
   
   
   
   
   //Chalenge 3 
   
   const dolphinAverage = (96 + 108 + 89) / 3;
   console.log(dolphinAverage);
   
   const koalasAverage = (88+91+110) / 3;
   console.log(koalasAverage);
   
   if (dolphinAverage > koalasAverage) {
       console.log("Dolphins are wins")
   } else {
       console.log("Koalas are wins")
   }
   
   // BONUS 1 
   const scoreDolphins = (97 + 112 + 80) / 3;
   const scoreKoalas = (109 + 95 + 50) / 3;
   console.log(scoreDolphins, scoreKoalas);
   
   if (scoreDolphins > scoreKoalas && scoreDolphins >= 100 ) {
       console.log("Dolphins win the trophy");
   } else if   (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
      console.log("Koalas win the tropy");
   } else if (scoreDolphins === scoreKoalas >= 100) {
       console.log("Both win the tropy!");
   } else {
       console.log("No one wins the trophy");
   }
   
   
   //22 HA
   //const age = "18";
   //if (age === 18) console.log("You just became an adult :D (scrict");
   //if (age == 18) console.log("You just became an adult :D (loose)");
   
   //const favorite = Number(prompt("What's your favorite number"));
   //console.log(favorite);
   //console.log(typeof favorite);
   
   
   const numNeigbours = Number(prompt("How many neighbour countries does your country have ?"));
   
   if (numNeigbours == 3) console.log ("More than 1 border");
   
   const hasDriverLicense = true; // A
   const hasGoodVision = false; // B 
   
   console.log(hasDriverLicense && hasGoodVision);
   console.log(hasDriverLicense || hasGoodVision);
   console.log(!hasDriverLicense)
   
   const isTired = false; // C 
   console.log(hasDriverLicense && hasGoodVision && !isTired);
   
   if (hasDriverLicense && hasGoodVision && isTired) {
       console.log("Sarah is able to drive!");
   } else {
       console.log("Someone else should drive...");
   }
   
   
   const speakEnglish = false // A 
   const fünfzig = true // B 
   
   if (speakEnglish && fünfzig) {
       console.log("You should live n Deutschland");
   } else {
       console.log("Deutschland does not meet your criteria");
   }
   
   //The Switch Statement HA

   const language = "engilsh"

   switch (language) {
       case "chinese":
       case "mandarin":
           console.log("MOST number of native speakers");
           break;
       case "spanish":
           console.log("2nd place in number of native speakers");
           break;
       case "engilsh":
           console.log("3rd place");
           break;
       case "hindi":
           console.log("Number 4");
           break;
       case "arabic":
           console.log("5th most spoken language");
           break;
       default:
       console.log("Great language too :D")
       
   }


   //Challenge #4 

const bill = 275; 
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip} and the total value ${bill + tip}`);

const bill = 40; 
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip} and the total value ${bill + tip}`);

const bill = 430; 
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip} and the total value ${bill + tip}`);

