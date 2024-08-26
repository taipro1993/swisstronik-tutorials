require("@nomicfoundation/hardhat-toolbox");

const PRIVATE_KEY = "d5fb2ba951e6986ec4215cb527327a0cebd789841cfa39890d852513c36671aa";
// Remember to use the private key of a testing account
// For better security practices, it's recommended to use npm i dotenv for storing secret variables

module.exports = {
  defaultNetwork: "swisstronik",
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: [`0x` + `${PRIVATE_KEY}`],
    },
  },
};

// prepare a trash wallet, no coins, export its privatekey

// 0xdE80649897c07871A338f8DAa80d898457c72A4F,0xd5fb2ba951e6986ec4215cb527327a0cebd789841cfa39890d852513c36671aa
// Using your main wallet, send some SWTR to this wallet

// cd Contract_deployment_hardhat
// npm install
// npx hardhat compile
// npx hardhat run scripts/deploy.js
// 0xe97219657aaaA2d44186498667DA5348c45966eE ==> Please fill it in the contract section in the dashboard.
// https://github.com/taipro1993/swisstronik-tutorials/tree/main/Contract_deployment%20_hardhat ===> next line

// npx hardhat run scripts/getMessage.js
// npx hardhat run scripts/setMessage.js

// ok, we have completed the task simply
// now update it to your github
// git add .