import inquirer from "inquirer";
import * as fs from "fs";
import * as package_json_cli from "./config/package_json/package.cli.json" assert { type: "json" };
import * as package_json_api from "./config/package_json/package.api.json" assert { type: "json" };
import * as package_json_barebone from "./config/package_json/package.barebone.json" assert { type: "json" };
import { code_api } from "./config/typescript/index.api.js";
import { code } from "./config/typescript/index.bb.js";
import { code_cli } from "./config/typescript/index.cli.js";
import { project_dir } from "./prompt.js";
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
        let typescript_code = "";
        if (type === "CLI") {
            package_json = JSON.stringify(package_json_cli);
            typescript_code = code_cli;
            create_src_folder();
        }
        else if (type === "API") {
            package_json = JSON.stringify(package_json_api);
            typescript_code = code_api;
            create_src_folder();
        }
        else {
            package_json = JSON.stringify(package_json_barebone);
            typescript_code = code;
            create_src_folder();
        }
        fs.writeFileSync(project_dir + "/package.json", package_json);
        fs.writeFileSync(project_dir + "/src/index.ts", typescript_code);
        console.log("Project Created Successfully ;)");
        console.log("run: ");
        console.log("npm install");
    });
}
function create_src_folder() {
    const dir = `${project_dir}/src`;
    fs.mkdir(dir, (err) => {
        if (err) {
            console.log("Current Folder already exists...");
            return;
        }
    });
}
