import inquirer from "inquirer";
import * as fs from "fs";
import * as ts_config_json from "./config/tsconfig.template.json" assert { type: "json" };
import * as package_json_cli from "./config/package_json/package.cli.json" assert { type: "json" };
import * as package_json_api from "./config/package_json/package.api.json" assert { type: "json" };
import * as package_json_barebone from "./config/package_json/package.barebone.json" assert { type: "json" };

let project_dir = "";

export function create_project() {
  inquirer
    .prompt([{ type: "input", message: "Name Of Project >", name: "name" }])
    .then((answers) => {
      let dir = answers.name;
      project_dir = dir;

      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
      }

      fs.writeFile(
        project_dir + "/tsconfig.json",
        JSON.stringify(ts_config_json),
        function (err) {
          if (err) {
            return console.log(err);
          }
        }
      );

      if (project_dir != "") {
        packages_required();
      }
    });
}

function packages_required() {
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
