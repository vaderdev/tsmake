import chalk from "chalk";
import inquirer from "inquirer";
import gradient from "gradient-string";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import { createSpinner } from "nanospinner";

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function title() {
  const rainbowTitle = chalkAnimation.rainbow("TSMake");

  await sleep();
  rainbowTitle.stop();
  console.log(`
        Fast Typescript Project Generator.
    `);
}

await title();
