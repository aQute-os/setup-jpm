const core = require('@actions/core');
const exec = require('@actions/exec');
const tc = require('@actions/tool-cache');

async function setup() {
  try {
    await tc.downloadTool('https://repo1.maven.org/maven2/biz/aQute/bnd/biz.aQute.jpm.run/3.5.0/biz.aQute.jpm.run-3.5.0.jar', 'jpm.jar');
    await exec.exec("java -jar jpm.jar init");
  } catch (e) {
    console.log(e);
    core.setFailed(e);
  }
}

module.exports = setup

if (require.main === module) {
  setup();
}
