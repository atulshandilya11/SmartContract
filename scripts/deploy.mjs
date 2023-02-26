// import { ethers } from 'ethers';

// const { ethers } = require("hardhat");
import pkg from 'hardhat';
const { ethers } = pkg;

async function main() {
  // const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  // const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
  // const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;

  // const lockedAmount = ethers.utils.parseEther('1');

  const MyNft = await ethers.getContractFactory('MyNft');
  const MyNFT = await MyNft.deploy();

  await MyNFT.deployed();

  console.log(`MyNft deployed to ${MyNFT.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
