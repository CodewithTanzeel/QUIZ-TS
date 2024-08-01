import inquirer from "inquirer";

async function AskQuestion() {
  const answers = await inquirer.prompt([
    {
      type: "list",
      name: "question1",
      choices: ["10 times more","100 times more","100 times less","10 times less" ],
      message:
        "The penetration power of alpha particle as compared to beta particle is?",
    },
    {
      type: "list",
      name: "question2",
      choices: ["Fast counting","Extremely fast counting","Slow counting","All situations"],
      message: "Geiger counter is suitable for ?",
    },
    {
      type: "list",
      name: "question3",
      choices: [" ZnS","Barium platinocyanide","Calcium tungstate","All of above"],
      message: "An alpha particle can produce fluorescence in ?",
    },
    {
      type: "list",
      name: "question4",
      choices: ["Energy", " Charge", "Mass", "Momentum"],
      message:"Pair production cannot take place in a vacuum as  is not conserved ?",
    },
  ])//Consider each object is simply mutiple choice question in real life !!!

  const marks = 10;
  const fail = 0;
  if (answers.question1 === "100 times more") {
    console.log("Answer is correct");
  } else
    () => {
      console.log("Answer is not correct");
    };
  if (answers.question2 === "Slow counting") {
    console.log("Answer is correct");
  } else {
    console.log("Answer is not correct");
  }
  if (answers.question3 === "All of above") {
    console.log("Answer is correct");
  } else {
    console.log("Answer is not correct");
  }
  if (answers.question4 === "Mass" ) {
    console.log("Answer is correct");
  } else {
    console.log("Answer is not correct");
  }
}
AskQuestion();
