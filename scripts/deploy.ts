import { ethers } from "hardhat";

async function main() {
  console.log("Deploying MediChain smart contract...");

  const MediChain = await ethers.getContractFactory("MediChain");
  const mediChain = await MediChain.deploy();

  await mediChain.waitForDeployment();

  console.log(`MediChain successfully deployed to: ${await mediChain.getAddress()}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
