// Require libraries
const { ethers } = require("hardhat");
const { expect } = require("chai");

// main test purpose for the project MultiSignWallet
describe("MultiSign Wallet Tests", function () {
  // Global variables
  let multiSignContract;
  let accounts;

  // Running this code before each test
  before(async function () {
    const Token = await ethers.getContractFactory("MultiSignWallet"); // Get contract reference
    accounts = await ethers.getSigners(); // Get accounts (Signers)
    multiSignContract = await Token.deploy(
      [accounts[0].address, accounts[1].address, accounts[2].address],
      2
    ); // Deploy contract and hold his reference
    await multiSignContract.deployed(); // Waiting contract to be fully deployed
  });

  // All single Test cases should be written over here
  it("Event assigning owners to validate trasactions", async function () {});

  it("Submitting transaction by the owner", async function () {});

  it("Confirming transaction of certain index by the owner", async function () {});

  it("Revoke or down vote a confirmed transaction of certain index by the owner", async function () {});

  it("Execute transaction with only required confirmation by one owner", async function () {});

  it("Deposit Eth in the smart contract", async function () {});

  it("Event Submit owner transaction", async function () {});

  it("Event Confirm owner transaction", async function () {});

  it("Event Revoke owner transaction", async function () {});

  it("Event Execute owner transaction", async function () {});

  it("Event Deposit fund in to smart contract from EOA", async function () {});
});
