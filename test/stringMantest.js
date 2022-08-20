const StringMan = artifacts.require("StringMan");
let stringman;

contract("Stringman", (accounts) => {
    beforeEach (async()=>{
   stringman = await StringMan.deployed();
    })


  it ("should return the length of the input string", async () => {
    let result = await stringman.calculateLength("Sigma", {from:accounts[0]})
    assert.equal(result.toNumber(),5), "The string length is correct"
  })   ;

  it ("concatenate the two inputs", async () => {
    let result = await stringman.concatenate("Thomas", "Shelby", {from:accounts[0]})
    assert.equal(result,"ThomasShelby", "The strings concatenate");
  })  
})