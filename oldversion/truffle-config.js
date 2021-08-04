require("dotenv").config();

const HDWalletProvider = require("@truffle/hdwallet-provider"); // @notice - Should use new module.
const mnemonic = process.env.MNEMONIC;

module.exports = {
    networks: {
        ropsten: {
            provider: () =>
                new HDWalletProvider(
                    mnemonic,
                    "https://ropsten.infura.io/v3/" + process.env.INFURA_KEY
                ),
            network_id: "3",
            gas: 4712388,
            //gas: 4465030,          // Original
            //gasPrice: 5000000000,  // 5 gwei (Original)
            //gasPrice: 10000000000, // 10 gwei
            gasPrice: 100000000000, // 100 gwei
            skipDryRun: true, // Skip dry run before migrations? (default: false for public nets)
        },
        kovan: {
            networkCheckTimeout: 1000000,
            provider: () =>
                new HDWalletProvider(
                    mnemonic,
                   // "https://kovan.infura.io/v3/" + process.env.INFURA_KEY
                  "https://kovan.infura.io/v3/7bbcfc57507b43118e076c41019e69d8" 
                ),
            network_id: 42, // Ropsten's id
            gas: 5500000, // Ropsten has a lower block limit than mainnet
            confirmations: 2, // # of confs to wait between deployments. (default: 0)
            timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
            skipDryRun: true, // Skip dry run before migrations? (default: false for public nets )
        },
        rinkeby: {
            provider: () =>
                new HDWalletProvider(
                    mnemonic,
                    "https://rinkeby.infura.io/v3/" + process.env.INFURA_KEY
                ),
            network_id: 4,
            gas: 6000000, // 2 times than before
            gasPrice: 5000000000, // 5 gwei,
            skipDryRun: true, // Skip dry run before migrations? (default: false for public nets)
            //from: process.env.DEPLOYER_ADDRESS
        },
        goerli: {
            provider: () =>
                new HDWalletProvider(
                    mnemonic,
                    "https://goerli.infura.io/v3/" + process.env.INFURA_KEY
                ),
            network_id: 5,
            gas: 7500000,
            gasPrice: 5000000000, // 5 gwei,
            skipDryRun: true, // Skip dry run before migrations? (default: false for public nets)
            //from: process.env.DEPLOYER_ADDRESS
        },
        // main ethereum network(mainnet)
        live: {
            provider: () =>
                new HDWalletProvider(
                    mnemonic,
                    "https://mainnet.infura.io/v3/" + process.env.INFURA_KEY
                ),
            network_id: 1,
            gas: 5500000,
            gasPrice: 2000000000, // 2 gwei
        },
        local: {
            host: "127.0.0.1",
            port: 8545,
            network_id: "*",
            skipDryRun: true,
            gasPrice: 5000000000,
        },
    },
    compilers: {
        solc: {
            //version: "0.5.16",  /// Final version of solidity-v0.5.x
            settings: {
                optimizer: {
                    enabled: true,
                    runs: 200,
                },
            },
        },
    },
};
