var SimpleStorage = artifacts.require("./Migrations.sol");

module.exports = function (deployer) {
  deployer.deploy(SimpleStorage);
};
