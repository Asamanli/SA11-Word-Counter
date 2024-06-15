#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//to take sentence input from user
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a sentence:",
    },
]);
//to remove spaces from the sentence .trim is used and .split convert remaining items into a array 
let words = answers.sentence.trim().split(" ");
console.log(chalk.bold("\n -> Sentence Words:"));
//to show trimed sentence
console.log(words);
//to show total quantity of words
console.log(chalk.bold(`\n -> Word count: ${words.length}`));
//.length define arrays total value of words
