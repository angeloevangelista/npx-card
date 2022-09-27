#!/usr/bin/env node
// Using node to execute js

const boxen = require("boxen");
const chalk = require("chalk");

const data = {
  name: chalk.red("                          Angelo Evangelista"),
  work: `${chalk("         DevOps Engineer at")} ${chalk.yellowBright("Lad2Dev")}`,

  github: chalk.gray("https://github.com/") + chalk.green("angeloevangelista"),
  linkedin: chalk.gray("https://linkedin.com/in/") + chalk.green("angelo-evangelista-5474a2177"),
  email: chalk.green("angeloevan.ane@gmail.com"),
  skills: chalk.redBright("C#", "HTML", "CSS", "JS", "TS", "NodeJS", "ReactJs", "Angular", "Docker"),
  npx: chalk.red("npx @angeloevangelista/card"),

  labelWork: ("         "),
  labelGitHub: chalk.white.bold("        GitHub:"),
  labelLinkedIn: chalk.white.bold("      LinkedIn:"),
  labelEmail: chalk.white.bold("         Email:"),
  labelSkills: chalk.blue.bold("        Skills:"),
  labelCard: chalk.white.bold("          Card:")
};

const lines = [
  `${data.name}`,
  ``,
  `${data.labelWork}  ${data.work}`,
  ``,
  `${data.labelGitHub}  ${data.github}`,
  `${data.labelLinkedIn}  ${data.linkedin}`,
  `${data.labelEmail}  ${data.email}`,
  ``,
  `${data.labelSkills}  ${data.skills}`,
  ``,
  `${data.labelCard}  ${data.npx}`,
  ``,

  `${chalk.italic("                   Pull requests are always welcome.")}`,
  `${chalk.italic("                   Let's code together! 🚀")}`
];

const me = boxen(
  lines.join("\n"),
  {
    margin: 1,
    float: 'center',
    padding: 1,
    borderStyle: "round",
    borderColor: "black",
  }
);

console.log(me);
