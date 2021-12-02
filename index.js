
async function setup() {
    console.log("hello world");
}

module.exports = setup

if (require.main === module) {
  setup();
}
