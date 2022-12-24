# Multisign Wallet

## Project tasks

1. Creating Project
2. Writing Smart Contract (In Solidity)
3. Compaling Project
4. Deploying Project
5. Writting Tests Cases with mocha and chai
6. Running Tests


### `1.` Creating Project

#### Creating template HardHat Project

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

- Installing HardHat toolbox
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

- Installing HardHat toolbox
```
npm install --save-dev "hardhat@^2.12.4" "@nomicfoundation/hardhat-toolbox@^2.0.0"
```
OR

```
npm install --save-dev @nomicfoundation/hardhat-toolbox
```

### `2.` Writing Smart Contract (In Solidity)
Create a solidity file into contract folder: Multisignwallet.sol


### `3.` Compaling Project

Before writting Tests Case, the project should be compile with the `npx` runner command
```
npx hardhat compile
```

### `4.` Deploying Project

After compiling the project, to be able to write tests, the Smart Contract should be deployed with this command
```
npx hardhat run scripts/deploy.js
```

### `5.` Writting Tests Cases with mocha and chai

Tests cases are writted using `mocha` and `chai`. Before writting tests, install them by the following commands
```
npm install mocha
npm install chai
```

### `6.` Running Tests

To run test, simple type the following command
```
npx hardhat test
```