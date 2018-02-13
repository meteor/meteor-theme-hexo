const shelljs = require("shelljs");
const {
  resolve: pathResolve,
  join: pathJoin,
} = require("path");
const { existsSync } = require("fs");
const assert = require("assert");

if (process.argv.length > 3 || process.argv.length < 2) {
  throw new Error("Invalid number of arguments. Either pass the npm " +
    "containing the name of the theme config, or pass nothing for default. " +
    "(e.g. meteor-hexo-config, apollo-hexo-config, etc.)");
}

const configPackage = process.argv[2] || "meteor-hexo-config";

console.log(`Running tests for the config package: ${configPackage}`);

const dirParent = pathResolve(__dirname, "..");
const dirThemeExample = pathResolve(__dirname, 'theme-example');

// Because Hexo gets lost in a circular loop when it ends up trying to
// test the theme that's in this own repository, we instead run `npm pack`
// on the root of this repository, which respects the `.npmignore` on the
// `tests` directory, and then install that into the test theme, thus
// avoiding `npm install` using a symlink to the parent directory and
// avoiding the loop.
const resultNpmPack = shelljs.exec(`npm pack ${dirParent}`, {
  silent: true, // Hush the confusing output from this command (a filename).
});
assert.strictEqual(resultNpmPack.code, 0,
  "An error occurred while npm-packing the theme.");

const npmPackPath = pathResolve(process.cwd(), resultNpmPack.stdout.trim());

shelljs.cd(dirThemeExample);

// We're going to use git-clean to ensure the test theme is in pristine
// condition, so we'll want to make sure we're not destroying any of the
// developers local changes.  If they have local changes, they'll want
// to stash them or commit them.
assert.strictEqual(
  shelljs.exec("git diff --exit-code -- .").code,
  0,
  "The 'theme-example' directory must not have uncommitted changes. " +
    "Please commit or stash your changes before continuing.");

// git-clean the test theme so it's in pristine condition, ensuring a
// proper test run.
assert.strictEqual(
  shelljs.exec("git clean -dfxq -- .").code,
  0,
  "An error occurred while cleaning the 'theme-example' directory.");

const skipPackageJsons = "--no-package-lock --no-save";

assert.strictEqual(
  shelljs.exec(`npm install ${skipPackageJsons}`).code,
  0,
  "An error occurred while running `npm install` in the 'theme-example'.");

// Install theme and configuration package, but don't save the
// changes, as that would cause local (and unnecessary) changes to the
// package.json and package-lock.json files.
//
// NOTE: Due to a 'bug?' in npm (https://github.com/npm/npm/issues/17927),
// the use of any other `npm install` commands after this will cause
// these two packages to be removed!
assert.strictEqual(
  shelljs.exec(`npm install ${skipPackageJsons} ${npmPackPath} ${configPackage}`).code,
  0,
  "An error occurred while installing npm packages for the 'theme-example'.");

// This is the expected path to the _config.yml in the config package.
const configPath = pathJoin("node_modules", configPackage, "_config.yml");

// Make sure that the config package we've just installed has exposed a
// _config.yml in the expected location.
assert.ok(
  existsSync(pathResolve(configPath)),
  "The _config.yml couldn't be found at: " + configPath);

const resultHexoGenerate =
  shelljs.exec(`npx hexo generate --config "${configPath},_config.yml"`);

if (resultHexoGenerate.code !== 0 || resultHexoGenerate.stderr) {
  throw new Error("The theme generation failed." +
    resultHexoGenerate.stderr);
}

process.exit(0);