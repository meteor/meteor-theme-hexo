const { promisify } = require("util");
const {
  resolve: pathResolve,
  join: pathJoin,
} = require("path");
const assert = require("assert");
const symlink = promisify(require("fs").symlink);

const {
  determineConfigsToTest,
  generateWithRepo,
  initiateTheme,
  removeSymlinkIfExists,
  writeFileIndex,
} = require("./utils.js");

const tmp = require("tmp-promise");

const gitRepoTestTheme = "https://github.com/meteor/theme-example.git";

// TODO: Write a separate config with:
// the root path set properly. (this will also help test root!)

(async function main() {
  const dirTheme = pathResolve(__dirname, "..");
  const configPackages = determineConfigsToTest();

  const dirOutRoot = await tmp.tmpName();
  const dirPublic = pathResolve(__dirname, "public");

  await removeSymlinkIfExists(dirPublic);

  console.log(
    `Running tests for the config package: ${configPackages.join(',')}`);

  // We'll establish a temporary directory for the repository which we're
  // going to clone.  This will be used for a base for each successive
  // hexo generation, though the directory will be thoroughly cleaned
  // before each run.
  const tempThemeDirHandle = await initiateTheme(gitRepoTestTheme);
  const tempThemeDirPath = tempThemeDirHandle.path;

  // For each config we're configured to test, generate the docs using
  // the test theme as a base.  The results will end up in `dirOutRoot`,
  // with one folder for each configuration.
  for (const configPackage of configPackages) {
    // The generated content should go into a subdirectory.
    const dirOut = pathJoin(dirOutRoot, configPackage);

    await generateWithRepo({
      dirTheme,
      repoPath: tempThemeDirPath,
      configPackage,
      dirOut,
    });
  }

  // Make a _very_ simple index.html page which links to the subdirectories.
  await writeFileIndex(configPackages, pathJoin(dirOutRoot, "index.html"));

  // Make the symlink from our known location, so it can be found easily.
  await symlink(dirOutRoot, dirPublic);
})();
