const fs = require("fs");
const core = require("@actions/core");
const exec = require("@actions/exec");
const tc = require("@actions/tool-cache");
const { formatWithOptions } = require("util");

const jpmRemote =
  "https://github.com/pkriens/setup-bnd/raw/master/jar/biz.aQute.jpm.jar";

async function setup() {
  try {
    const jpmLocal = await tc.downloadTool(jpmRemote);
    await exec.exec(`java -jar ${jpmLocal} -td init`);
    core.addPath("~/.jpm/bin");
  } catch (e) {
    console.log(e);
    core.setFailed(e);
  }
}

setup();
