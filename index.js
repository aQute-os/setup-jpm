const fs = require("fs");
const core = require("@actions/core");
const exec = require("@actions/exec");
const tc = require("@actions/tool-cache");

const bndRemote =
  "https://github.com/pkriens/setup-bnd/raw/master/jar/biz.aQute.bnd.jar";

async function setup() {
  try {
    try {
      fs.unlinkSync(bndLocal);
    } catch (e) {
      // ignore
    }
    const bndLocal = await tc.downloadTool(bndRemote);
    await exec.exec(`java -jar ${bndLocal} buildtool`);
  } catch (e) {
    console.log(e);
    core.setFailed(e);
  }
}

setup();
