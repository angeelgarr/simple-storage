const _deploy_contracts = require("../migrations/2_deploy_contracts");

// instantiate contract with truffle artifacts
const SimpleStorage = artifacts.require("SimpleStorage");

contract("SimpleStorage contract funcitonality test", () => {
  it("Sets data property correctly", async () => {
    const simpleStorage = await SimpleStorage.deployed();
    const newData = "new data in simple storage contract";
    await simpleStorage.set(newData);
    assert((await simpleStorage.get()) === newData);
  });
});
