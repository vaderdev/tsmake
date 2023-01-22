import inquirer from "inquirer";
import * as fs from "fs";
import * as package_json_cli from "../config/package_json/package.cli.json" assert { type: "json" };
import * as package_json_api from "../config/package_json/package.api.json" assert { type: "json" };
import * as package_json_barebone from "../config/package_json/package.barebone.json" assert { type: "json" };
import { project_dir } from "../prompt.js"

export function project_type() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Type Of Project",
        name: "type",
        choices: ["CLI", "API", "Blank"],
      },
    ])
    .then(({ type }) => {
      let package_json = "";
      if (type === "CLI") {
        package_json = JSON.stringify(package_json_cli);
      } else if (type === "API") {
        package_json = JSON.stringify(package_json_api);
      } else {
        package_json = JSON.stringify(package_json_barebone);
      }
      
      fs.writeFileSync(project_dir + "/package.json", package_json);
    });
}