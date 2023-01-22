import inquirer from "inquirer";
import * as fs from "fs";
import * as ts_config_json from "./config/tsconfig.template.json" assert { type: "json" };
import { project_type } from './generator.js';
export let project_dir = "";
export function create_project() {
    inquirer
        .prompt([{ type: "input", message: "Name Of Project >", name: "name" }])
        .then((answers) => {
        let dir = answers.name;
        project_dir = dir;
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }
        fs.writeFile(project_dir + "/tsconfig.json", JSON.stringify(ts_config_json), function (err) {
            if (err) {
                return console.log(err);
            }
        });
        if (project_dir != "") {
            project_type();
        }
    });
}
