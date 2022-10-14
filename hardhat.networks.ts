export const networks: {
    [name: string]: Network;
} = {};
const etherscan: Etherscan = {};

interface Etherscan {
    [apiKey: string]: ApiKey;
}

interface ApiKey {
    [network: string]: string;
}

interface Network {
    url?: string;
    chainId?: number;
    accounts?: string[];
    forking?: {
        url: string;
    };
}

function register(
    name: string,
    chainId: number,
    url: string,
    privateKey: string,
    etherscanNetworkName: string,
    etherscanKey: string
) {
    if (url && privateKey && etherscanKey) {
        networks[name] = {
            url,
            chainId,
            accounts: [privateKey],
        };
        etherscan.apiKey[etherscanNetworkName] = etherscanKey;
        console.log(`Network '${name}' registered`);
    } else {
        console.log(`Network '${name}' not registered`);
    }
}

register(
    'mainnet',
    1,
    process.env.MAINNET_RPC_URL!,
    process.env.MAINNET_PRIVATE_KEY!,
    'mainnet',
    process.env.MAINNET_ETHERSCAN_KEY!
);
register(
    'bsc',
    56,
    process.env.BSC_RPC_URL!,
    process.env.BSC_PRIVATE_KEY!,
    'bsc',
    process.env.BSC_ETHERSCAN_KEY!
);
register(
    'goerli',
    420,
    process.env.GOERLI_RPC_URL!,
    process.env.GOERLI_PRIVATE_KEY!,
    'goerli',
    process.env.GOERLI_ETHERSCAN_KEY!
);
register(
    'sepolia',
    11155111,
    process.env.SEPOLIA_RPC_URL!,
    process.env.SEPOLIA_PRIVATE_KEY!,
    'sepolia',
    process.env.SEPOLIA_ETHERSCAN_KEY!
);
register(
    'optimism',
    10,
    process.env.OPTIMISM_RPC_URL!,
    process.env.OPTIMISM_PRIVATE_KEY!,
    'optimisticEthereum',
    process.env.OPTIMISTIC_ETHERSCAN_KEY!
);
register(
    'polygon',
    137,
    process.env.POLYGON_RPC_URL!,
    process.env.POLYGON_PRIVATE_KEY!,
    'polygon',
    process.env.POLYGON_ETHERSCAN_KEY!
);
register(
    'arbitrum',
    42161,
    process.env.ARBITRUM_RPC_URL!,
    process.env.ARBITRUM_PRIVATE_KEY!,
    'arbitrumOne',
    process.env.ARBITRUM_ETHERSCAN_KEY!
);
register(
    'xdai',
    100,
    process.env.XDAI_RPC_URL!,
    process.env.XDAI_PRIVATE_KEY!,
    'xdai',
    process.env.XDAI_ETHERSCAN_KEY!
);
register(
    'avax',
    43114,
    process.env.AVAX_RPC_URL!,
    process.env.AVAX_PRIVATE_KEY!,
    'avalanche',
    process.env.AVAX_ETHERSCAN_KEY!
);
register(
    'fantom',
    250,
    process.env.FANTOM_RPC_URL!,
    process.env.FANTOM_PRIVATE_KEY!,
    'opera',
    process.env.FANTOM_ETHERSCAN_KEY!
);
register(
    'aurora',
    1313161554,
    process.env.AURORA_RPC_URL!,
    process.env.AURORA_PRIVATE_KEY!,
    'aurora',
    process.env.AURORA_ETHERSCAN_KEY!
);
// register('ropsten', 3, process.env.ROPSTEN_RPC_URL, process.env.ROPSTEN_PRIVATE_KEY);
// register('kovan-optimistic', 69, process.env.KOVAN_OPTIMISTIC_RPC_URL, process.env.KOVAN_OPTIMISTIC_PRIVATE_KEY);

module.exports = {
    networks,
    etherscan,
};
