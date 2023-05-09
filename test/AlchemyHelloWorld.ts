import { expect } from "chai";
import hre from "hardhat";

describe("AlchemyHelloWorld", () => {
    it('should be deployed', async () => {
        const AlchemyHelloWorld = await hre.ethers.getContractFactory("AlchemyHelloWorld");
        const alchemyHelloWorld = await AlchemyHelloWorld.deploy("Hello Alchemy World!");
        expect(alchemyHelloWorld).to.not.be.null;
    });
});
