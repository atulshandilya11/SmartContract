import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from 'dotenv' 
dotenv.config()
const config: HardhatUserConfig = {
  solidity: "0.8.17",
    networks: {
    goerli: {
      url: process.env.PROVIDER_URL,
      accounts: [`${process.env.PRIVITE_KEY1}`]
    }
  }
};

export default config;
