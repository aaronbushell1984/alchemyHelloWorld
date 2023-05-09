import { ethers } from "ethers";
import contract from '../artifacts/contracts/AlchemyHelloWorld.sol/AlchemyHelloWorld.json';

const {
    SEPOLIA_API_KEY,
    SEPOLIA_API_URL,
    PRIVATE_KEY,
    SEPOLIA_CONTRACT_ADDRESS
} = process.env;

let alchemyHelloWorldContract: ethers.Contract;

if (!SEPOLIA_API_KEY) {
    throw new Error('API_KEY must be provided');
}

if (!SEPOLIA_API_URL) {
    throw new Error('API_KEY must be provided');
}

if (!PRIVATE_KEY) {
    throw new Error('PRIVATE_KEY must be provided');
}

if (!SEPOLIA_CONTRACT_ADDRESS) {
    throw new Error('CONTRACT_ADDRESS must be provided');
}

try {
    const alchemyProvider = new ethers.providers.JsonRpcProvider(SEPOLIA_API_URL, 'sepolia');
    const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);
    alchemyHelloWorldContract = new ethers.Contract(SEPOLIA_CONTRACT_ADDRESS, contract.abi, signer);
} catch (err) {
    console.log('Error:', (err as Error).message);
}

async function main() {
    const message = await alchemyHelloWorldContract.message();
    console.log('The OG message: ', message);

    console.log('Updating message...');
    const updateTx = await alchemyHelloWorldContract.update('Hello New World Order!');
    await updateTx.wait();

    const newMessage = await alchemyHelloWorldContract.message();
    console.log('The New Message: ', newMessage);
}

main().catch((err) => {
    console.log('Error:', (err as Error).message);
    process.exitCode = 1;
});

