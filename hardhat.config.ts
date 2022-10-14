import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';
import '@nomicfoundation/hardhat-chai-matchers';
import '@nomiclabs/hardhat-solhint';
import 'hardhat-docgen';
import 'hardhat-spdx-license-identifier';

import { networks } from './hardhat.networks';

networks['hardhat'] = {
    forking: {
        url: process.env.MAINNET_RPC_URL || '',
    },
};

import * as dotenv from 'dotenv';
dotenv.config();

const config: HardhatUserConfig = {
    solidity: {
        version: '0.8.16',
        settings: {
            optimizer: {
                enabled: true,
                runs: 1000,
            },
            outputSelection: {
                '*': {
                    '*': ['storageLayout'],
                },
            },
        },
    },
    networks,
    docgen: {
        path: './docs',
        clear: true,
        runOnCompile: true,
    },
    spdxLicenseIdentifier: {
        overwrite: true,
        runOnCompile: true,
    },
};

export default config;
