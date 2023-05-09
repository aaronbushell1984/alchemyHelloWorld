import { ethers } from "hardhat";

async function main() {
  const AlchemyHelloWorld = await ethers.getContractFactory("AlchemyHelloWorld");
  const alchemyHelloWorld = await AlchemyHelloWorld.deploy("Hello Alchemy World!");

  await alchemyHelloWorld.deployed();

  console.log(
    `AlchemyHelloWorld deployed to ${alchemyHelloWorld.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
