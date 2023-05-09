import "@nomicfoundation/hardhat-toolbox";
import dotenv from 'dotenv';
dotenv.config();
import "hardhat-gas-reporter";


const {
    GOERLI_API_URL,
    SEPOLIA_API_URL,
    PRIVATE_KEY,
    COIN_MARKET_CAP_API_KEY,
    ETHERSCAN_API_KEY
} = process.env

module.exports = {
    solidity: "0.8.0",
    gasReporter: {
        enabled: true,
        currency: 'GBP',
        coinmarketcap: COIN_MARKET_CAP_API_KEY,
        token: 'ETH',
    },
    defaultNetwork: "hardhat",
    optimizer: {
        enabled: true,
    },
    networks: {
        hardhat: {},
        goerli: {
            url: GOERLI_API_URL,
            accounts: [`0x${PRIVATE_KEY}`]
        },
        sepolia: {
            url: SEPOLIA_API_URL,
            accounts: [`0x${PRIVATE_KEY}`]
        },
    },
    etherscan: {
        apiKey: ETHERSCAN_API_KEY
    },
}