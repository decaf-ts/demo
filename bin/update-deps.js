import {execSync} from "child_process";
import { fileURLToPath } from "url";
import fs from "fs";
import path from "path";

const command = "npm run update-dependencies";
const dirname = path.dirname(fileURLToPath(import.meta.url));
const angularAppsDir = path.join(dirname, "../angular");

const libs = fs.readdirSync(angularAppsDir).filter(file => {
    const isDirectory = fs.statSync(path.join(angularAppsDir, file)).isDirectory();
    if(isDirectory)
        return file;
});

console.log(`running ${command} in root folder`);
execSync(command, {
    env: process.env,
    stdio: "inherit"
})

libs.forEach(l => {
    try {
        execSync(command, {
            cwd: path.join(process.cwd(), `angular/${l}`),
            env: process.env,
            stdio: "inherit"
        })
    } catch (e){
        process.exit(1)
    }
})
