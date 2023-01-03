// Require libraries
const { ethers } = require("hardhat");
const { expect } = require("chai");

// main test purpose for the project MultiSignWallet
describe("MultiSign Wallet Tests", function () {
  // Global variables
  let multiSignContract;
  let accounts;
  let txIndex = 0;
  let numConfirmations = 2;
  let amount = ethers.utils.parseEther("1");
  const data = ethers.utils.hexZeroPad("0xab", 32); // ethers.utils.hexZeroPad(ethers.utils.hexlify(1), 32)

  let submitTx;
  let confirmTx;
  let revokeConfirmedTx;
  let executedTx;

  // Running this code before each test
  before(async function () {
    const Token = await ethers.getContractFactory("MultiSignWallet"); // Get contract reference
    accounts = await ethers.getSigners(); // Get accounts (Signers)
    multiSignContract = await Token.deploy(
      [accounts[0].address, accounts[1].address, accounts[2].address],
      numConfirmations
    ); // Deploy contract and hold his reference
    await multiSignContract.deployed(); // Waiting contract to be fully deployed
  });

  // All single Test cases should be written over here
  it("Number of confirmations required to execute transaction", async function () {
    const requiredConfirmations =
      await multiSignContract.numConfirmationsRequired();
    expect(numConfirmations).to.equal(requiredConfirmations);
  });

  it("Do not have permission to submit transaction", async function () {
    const wallet = await multiSignContract.connect(accounts[3].address);
    expect(await wallet.isOwner(accounts[3].address)).to.be.false;
    expect(wallet.submitTransaction(accounts[3].address, amount, data)).to.be
      .reverted;
  });

  it("Do not have permission to confirm transaction", async function () {
    expect(await multiSignContract.isOwner(accounts[3].address)).to.be.false;
    expect(multiSignContract.confirmTransaction(0)).to.be.reverted;
  });

  it("Do not have permission to revoke confirmed transaction", async function () {
    expect(await multiSignContract.isOwner(accounts[3].address)).to.be.false;
    expect(multiSignContract.revokeConfirmation(0)).to.be.reverted;
  });

  it("Do not have permission to execute transaction", async function () {
    expect(await multiSignContract.isOwner(accounts[3].address)).to.be.false;
    expect(multiSignContract.executeTransaction(0)).to.be.reverted;
  });

  it("Deposit Eth fund into smart contract from EOA", async function () {
    const before_deposit = await ethers.provider.getBalance(
      multiSignContract.address
    );
    const amountDeposit = { value: amount };
    await multiSignContract.depositEth(amountDeposit);
    const after_deposit = await ethers.provider.getBalance(
      multiSignContract.address
    );
    expect(after_deposit.gt(before_deposit)).to.equal(true);
  });

  it("Submitting transaction by the owner", async function () {
    const wallet = await multiSignContract.connect(accounts[0]);
    submitTx = await wallet.submitTransaction(
      accounts[5].address,
      amount,
      data
    );
    const [to, value, data_bytes, executed, numConfirmations] =
      await wallet.transactions(txIndex);
    expect(to).equal(accounts[5].address);
    expect(value).to.equal(amount);
    expect(data_bytes).to.equal(data);
    expect(executed).to.be.false;
    expect(numConfirmations).to.equal(0);
  });

  it("Event Submit owner transaction", async function () {
    await expect(submitTx)
      .to.emit(multiSignContract, "SubmitTransaction")
      .withArgs(accounts[0].address, 0, accounts[5].address, amount, data);
  });

  it("Confirming transaction of certain index by the owner", async function () {
    const wallet = await multiSignContract.connect(accounts[0]);
    const [, , , , numConfirmations_before] = await wallet.transactions(
      txIndex
    );
    confirmTx = await wallet.confirmTransaction(txIndex);
    const [, , , , numConfirmations_after] = await wallet.transactions(txIndex);

    expect(numConfirmations_after).to.equal(numConfirmations_before.add(1));
    expect(await wallet.isConfirmed(txIndex, accounts[0].address)).to.be.true;
  });

  it("Event Confirm owner transaction", async function () {
    await expect(confirmTx)
      .to.emit(multiSignContract, "ConfirmedTransaction")
      .withArgs(accounts[0].address, txIndex);
  });

  it("Revoke or down vote a confirmed transaction of certain index by the owner", async function () {
    const wallet = await multiSignContract.connect(accounts[0]);
    const [, , , , numConfirmations_before] = await wallet.transactions(
      txIndex
    );
    // transaction should be already confirmed
    expect(await wallet.isConfirmed(txIndex, accounts[0].address)).to.be.true;
    revokeConfirmedTx = await wallet.revokeConfirmation(txIndex);
    const [, , , , numConfirmations_after] = await wallet.transactions(txIndex);
    expect(await wallet.isConfirmed(txIndex, accounts[0].address)).to.be.false;
    expect(numConfirmations_after).to.equal(numConfirmations_before.sub(1));
  });

  it("Event Revoke owner transaction", async function () {
    await expect(revokeConfirmedTx)
      .to.emit(multiSignContract, "RevokeTransaction")
      .withArgs(accounts[0].address, txIndex);
  });

  it("Execute a confirmed transaction of a certain index by one owner", async function () {
    /* 
      This is not part of this test case | we simulate two confirmations from two differents accounts
      to make this test passed. Two because, previously we have revoked a confirmed Tx et the second
      one to meet two vote to execute transaction
    */
    // Begin
    const owner1 = await multiSignContract.connect(accounts[1]);
    owner1.confirmTransaction(txIndex); // Owner confirm Transaction
    const owner2 = await multiSignContract.connect(accounts[0]);
    owner2.confirmTransaction(txIndex);
    // End - We got two Confirmations of Tx

    const [, , , , numConfirmations] = await owner2.transactions(txIndex);
    expect(numConfirmations).to.gte(await owner2.numConfirmationsRequired());
    const [_to] = await owner2.transactions(txIndex); // Receiver account
    const to_balance_before = await ethers.provider.getBalance(_to);

    executedTx = await owner2.executeTransaction(txIndex);
    const [, _value, _data, _executed] = await owner2.transactions(txIndex);
    const to_balance_after = await ethers.provider.getBalance(_to);
    expect(to_balance_after).to.equal(to_balance_before.add(_value));
    expect(_data).to.equal(data);
    expect(_executed).to.be.true;
  });

  it("Event Execute owner transaction", async function () {
    await expect(executedTx)
      .to.emit(multiSignContract, "ExecuteTransaction")
      .withArgs(accounts[0].address, txIndex);
  });
});
