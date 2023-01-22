import inquirer from "inquirer";
import * as fs from "fs";
import * as tsConfigJSON from "./config/tsconfig.template.json" assert { type: "json" };

let project_dir = "";

export function name_of_project() {
  inquirer
    .prompt([{ type: "input", message: "Name Of Project >", name: "name" }])
    .then((answers) => {
      let dir = answers.name;
      project_dir = dir;

      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
      }

      fs.writeFile(project_dir + "/tsconfig.json", JSON.stringify(tsConfigJSON), function (err) {
        if (err) {
          return console.log(err);
        }
      });
    });
}

export function packages_required() {
    inquirer
        .prompt([{}])
        .then((answers) => {})
}
