require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.6",

  gasReporter: {
    enabled: true,
    currency: "USD",
    noColors: true,
    outputFile: "gasReportFile.txt",
    coinmarketcap: "807ae37f-4bab-4572-b60c-a2baae6e5a74",
    token: "matic",
  },
};
