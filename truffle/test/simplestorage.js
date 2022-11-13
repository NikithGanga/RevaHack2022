const SimpleStorage = artifacts.require("./SimpleStorage.sol");

// contract('SimpleStorage', () => {
//   it('should read newly written values', async() => {
//     const simpleStorageInstance = await SimpleStorage.deployed();
//     var value = (await simpleStorageInstance.read.call()).toNumber();

//     assert.equal(value, 0, "0 wasn't the initial value");

//     await simpleStorageInstance.write(1);
//     value = (await simpleStorageInstance.read.call()).toNumber();
//     assert.equal(value, 1, "1 was not written");

//     await simpleStorageInstance.write(2);
//     value = (await simpleStorageInstance.read.call()).toNumber();
//     assert.equal(value, 2, "2 was not written");
//   });
// });

contract("SimpleStorage", accounts => {
  it("...should store the value 89.", async () => {
    const simpleStorageInstance = await SimpleStorage.deployed();

    // Set value of 89
    await simpleStorageInstance.set(89, { from: accounts[0] });

    // Get stored value
    const storedData = await simpleStorageInstance.get.call();

    assert.equal(storedData, 89, "The value 89 was not stored.");
  });
});
