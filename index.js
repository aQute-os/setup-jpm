const fs = require("fs");
const core = require("@actions/core");
const exec = require("@actions/exec");
const tc = require("@actions/tool-cache");

async function setup() {
  try {
    try {
      fs.unlinkSync("jpm.jar");
    } catch (e) {
      console.log("oops " + e);
    }
    const jpm = await tc.downloadTool(
      "https://repo1.maven.org/maven2/biz/aQute/bnd/biz.aQute.jpm.run/3.5.0/biz.aQute.jpm.run-3.5.0.jar",
      "jpm.jar"
    );
    await exec.exec("java -jar jpm.jar -B bin init");
    await exec.exec(
      "bin/jpm install -f https://github.com/pkriens/setup-bnd/raw/master/jar/biz.aQute.bnd.jar"
    );
    core.addPath("bin");
  } catch (e) {
    console.log(e);
    core.setFailed(e);
  }
}

setup();
