import { defineConfig } from "vite";
import chalk from "chalk";

const pkg = require("./package.json");

(function() {
    console.clear();
    console.log(chalk.bgHex("#001AFF").bold(`\n        \n  Velt  \n        \n`));
    console.log(`${ chalk.greenBright(`> Using ${ pkg.name } with version ${ pkg.version }`) }`);
    console.log(`${ chalk.greenBright(`> ${ pkg.description }`) }\n`);
})();

export default defineConfig({
  server: {
    open: './index.html',
    port: 3000,
    host: "0.0.0.0"
  }
});