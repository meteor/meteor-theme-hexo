const assert = require("assert");
const { promisify } = require("util");
const exists = promisify(require("fs").exists);
const lstat = promisify(require("fs").lstat);
const mkdtemp = promisify(require("fs").mkdtemp);
const readFile = promisify(require("fs").readFile);
const rename = promisify(require("fs").rename);
const symlink = promisify(require("fs").symlink);
const unlink = promisify(require("fs").unlink);
const writeFile = promisify(require("fs").writeFile);

const copy = promisify(require("fs-extra").copy);
const remove = promisify(require("fs-extra").remove);

const tmp = require("tmp-promise");
const yaml = require("js-yaml");

const {
  join: pathJoin,
  relative: pathRelative,
} = require("path");

function determineConfigsToTest() {
  if (process.argv.length > 3 || process.argv.length < 2) {
    throw new Error("Invalid number of arguments. Either pass the npm " +
      "containing the name of the theme config, or pass nothing for default. " +
      "(e.g. meteor-hexo-config, apollo-hexo-config, etc.)");
  }

  const toTest = [];

  if (process.argv[2]) {
    toTest.push(process.argv[2]);
  }

  require("./configsToTest.json")
    .forEach(config => toTest.push(config));

  if (! toTest.length) {
    toTest.push("meteor-hexo-config");
  }

  return toTest;
}

async function generateWithRepo({ dirTheme, repoPath, configPackage, dirOut }) {
  const git = require("simple-git/promise");
  const shelljs = require("shelljs");

  console.log("Processing test config for: " + configPackage);

  // Wipe any local changes in our repository clean, aggressively.
  // It's a temporary directory, so nothing that we need to worry about.
  await git(repoPath).checkout(".");
  await git(repoPath).raw(["clean", "-d", "-f", "-n", "-x"]);
  shelljs.cd(repoPath);

  // Install dependencies _and_ our additional configuration package.
  assert.strictEqual(
    shelljs.exec(`npm install -D ${configPackage}`).code,
    0,
    `An error occurred while installing the '${configPackage}' npm package.`);

  // Make the symlink, rather than using npm install --link.
  await symlink(
    dirTheme,
    pathJoin("node_modules", "meteor-theme-hexo"));

  // This is the expected path to the _config.yml in the config package.
  const configPath = pathJoin("node_modules", configPackage, "_config.yml");

  // These should all be relative to the current directory.
  const configFiles = [];

  // Make sure that the config package we've just installed has exposed a
  // _config.yml in the expected location.
  assert.ok(
    await exists(configPath),
    "The _config.yml couldn't be found at: " + configPath);
  configFiles.push(configPath);

  assert.ok(
    await exists("_config.yml"),
    "The test theme's _config.yml was not found.");
  configFiles.push("_config.yml");

  const additionalConfigPath = "_theme_test_additional.yml";

  await writeFile(additionalConfigPath, yaml.safeDump({
    public_dir: pathRelative(process.cwd(), dirOut),
    root: "/" + configPackage,
  }));

  // Add our special config overrides onto the array of configs to be used
  // by the Hexo generation script.
  configFiles.push(additionalConfigPath);

  // Run the hexo generation with all of our desired configs.
  const resultHexoGenerate =
    shelljs.exec(`npx hexo generate --config "${configFiles.join(',')}"`);

  if (resultHexoGenerate.code !== 0 || resultHexoGenerate.stderr) {
    throw new Error("The theme generation failed." +
      resultHexoGenerate.stderr);
  }
}

async function putInPlace(source, dest) {
  // We'll try to do this as atomically as possible.
  // Symlinks might have been another way to go here, but Netlify doesn't
  // support symlinks for the public directory to publish (likely due to
  // Go preventing it by default to avoid cycles).

  const makeTempDir = () => mkdtemp(pathJoin(dest, "..", ".temp-"));
  const tempDest = await makeTempDir();

  await copy(source, tempDest);

  // If we need to move an old directory out of the way, use a temp
  const tempOld = await exists(dest) && await makeTempDir();
  if (tempOld) {
    await rename(dest, tempOld);
  }

  await rename(tempDest, dest);

  // We don't need to wait for the old directory to get removed.
  if (tempOld) {
    remove(tempOld);
  }
}

async function writeFileIndex(configFiles, destinationPath) {
  const makeLink = (file) => `<li><a href="${file}">${file}</a></li>`;
  const links = configFiles.map(makeLink).join("\n");
  const output = `
    <!DOCTYPE html>
    <html>
    <body>
      <ul>
      ${links}
      </ul>
    </body>
    </html>
  `;

  await writeFile(destinationPath, output);
}

async function initiateTheme(repo) {
  const git = require("simple-git/promise");

  const tempDirHandle = await tmp.dir();
  await git().clone(repo, tempDirHandle.path);
  return tempDirHandle;
}

module.exports = {
  determineConfigsToTest,
  generateWithRepo,
  initiateTheme,
  putInPlace,
  writeFileIndex,
};