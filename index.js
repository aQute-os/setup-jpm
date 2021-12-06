const fs = require("fs");
const core = require("@actions/core");
const exec = require("@actions/exec");
const tc = require("@actions/tool-cache");
const { formatWithOptions } = require("util");

const bndRemote =
  "https://github.com/pkriens/setup-bnd/raw/master/jar/biz.aQute.bnd.jar";

async function setup() {
  try {
    const bndLocal = await tc.downloadTool(bndRemote);
    await exec.exec(`java -jar ${bndLocal} version`);
    fs.mkdirSync(".bin");
    fs.writeFileSync(".bin/bnd", `#!/bin/sh\njava -jar ${bndLocal}\n`);
    fs.writeFileSync(".bin/bnd.bat", `java -jar ${bndLocal}\n`);
    fs.chmodSync(".bin/bnd", 0o777);
    core.addPath("./bin/");
  } catch (e) {
    console.log(e);
    core.setFailed(e);
  }
}

setup();
