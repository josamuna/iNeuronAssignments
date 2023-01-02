# Multisign Wallet

## Project tasks

1. [Creating_Project](#CreatingProject)
2. [Writing Smart Contract (In Solidity)](#WrittingSC)
3. [Compaling Project](#CompilingProject)
4. [Writting Tests Cases with mocha and chai](#WrittingTestCases)
5. [Running Tests](#RunningTests)
6. [Generating Gas Report](#GasReport)
7. [Deploying Project](#DeployingProject)

### `1.` Creating Project

#### Creating template HardHat Projectn

- Initialize NodeJS Project

```
npm init
```

- Installing Hardhat

```
npm install --save-dev hardhat
```

- Creating Hardhat Project

```
npx hardhat
```

- Installing HardHat toolbox (To compile, run and test the code)

```
npm install --save-dev "hardhat@^2.12.4" "@nomicfoundation/hardhat-toolbox@^2.0.0"
```

OR

```
npm install --save-dev @nomicfoundation/hardhat-toolbox
```

#### Creating empty Hardhat Project

- Initialize NodeJS Project

```
npm init
```

- Creating Hardhat Project

```
npx hardhat
```

- Installing HardHat toolbox (To compile, run and test the code)

```
npm install --save-dev "hardhat@^2.12.4" "@nomicfoundation/hardhat-toolbox@^2.0.0"
```

OR

```
npm install --save-dev @nomicfoundation/hardhat-toolbox
```

### `2.` Writing Smart Contract (In Solidity)

Create a solidity file into contract folder: MultiSignWallet.sol

### `3.` Compaling Project

Before writting Tests Case, the project should be compile with the `npx` runner command

```
npx hardhat compile
```

### `4.` Writting Tests Cases with mocha and chai

Tests cases are writted using `mocha` and `chai`. If needed, install them by the following commands (`They are included by default into hardhat-toolbox`)

```
npm install mocha
npm install chai
```

To run test, ethers library should be used and referenced in the test file with this command

```
import { ethers } = require("hardhat");
```

Also, to be able to use `expect` assertion from `chai`, we have to import it from `chai` itself with this command

```
import { expect } = require("chai");
```

### `5.` Running Tests

To run test, simple type the following command

```
npx hardhat test
```

### `6.` Generating Gas Report

Gas report gives an overview of the cost of the project functions. To be able to get gas report, just run the required node install command `npm install hardhat-gas-reporter --save-dev` .It need to write the `hardhat-config.js` file with tis content

> Without Polygon optimization

```
gasReport {
    enabled: true,
    currency: "USD",
    noColors: true,
    outputFile: "gasReport.txt",
    coinmarketkap: <api_key>,
}
```

> With Polygon optimization

```
gasReport {
    enabled: true,
    currency: "USD",
    noColors: true,
    outputFile: "gasReport.txt",
    coinmarketkap: <api_key>,
    token: "matic"
}
```

### `7.` Deploying Project

After successfully passed all tests, the Smart Contract is able to be deployed in the HardHat local Blockchain with the command (`The file` **`scripts/deploy.js`** `should be edited as well`)

```
npx hardhat run scripts/deploy.js
```
