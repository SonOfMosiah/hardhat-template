import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-chai-matchers";
import "@nomiclabs/hardhat-solhint";
import "hardhat-docgen";
import "xdeployer";
import "hardhat-spdx-license-identifier";

import * as dotenv from "dotenv";
dotenv.config();

const config: HardhatUserConfig = {
    solidity: {
        version: "0.8.15",
        settings: {
            optimizer: {
                enabled: true,
                runs: 1000,
            },
            outputSelection: {
                "*": {
                    "*": ["storageLayout"],
                },
            },
        },
    },
    networks: {
        aurora: {
            url: process.env.AURORA_URL || "",
            accounts:
                process.env.PRIVATE_KEY !== undefined
                    ? [process.env.PRIVATE_KEY]
                    : [],
        },
        testnet: {
            url: process.env.TESTNET_URL || "",
            accounts:
                process.env.PRIVATE_KEY !== undefined
                    ? [process.env.PRIVATE_KEY]
                    : [],
        },
        hardhat: {
            forking: {
                url: process.env.AURORA_URL || "",
            },
        },
    },
    // xdeployer address: 0x13b0D85CcB8bf860b6b79AF3029fCA081AE9beF2
    // production networks: mainnet, bsc, optimism, arbitrum, polygon, heco, fantom, avalanche, gnosis, moonriver, moonbeam, celo, aurora, harmony, autobahn, fuse, cronos, evmos, boba
    // testnets: rinkeby, ropsten, kovan, goerli, sepolia, bscTestnet, arbitrumTetnet, mumbai, hecoTestnet, fantomTestnet, fuji, sokol, moonbaseAlpha, alfajores, auroraTestnet, spark, cronosTestnet, evmosTestnet, bobaTestnet
    xdeploy: {
        contract: process.env.CONTRACT_NAME,
        constructorArgsPath: process.env.CONTRACT_CONSTRUCTOR_ARGS_PATH,
        salt: process.env.SALT,
        signer: process.env.PRIVATE_KEY,
        networks: ["LIST_OF_NETWORKS"],
        rpcUrls: ["LIST_OF_RPCURLS"],
        // gasLimit: "GAS_LIMIT", // optional
    },
    docgen: {
        path: "./docs",
        clear: true,
        runOnCompile: true,
    },
    spdxLicenseIdentifier: {
        overwrite: true,
        runOnCompile: true,
    },
};

export default config;
