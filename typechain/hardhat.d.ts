/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "OwnableUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OwnableUpgradeable__factory>;
    getContractFactory(
      name: "Initializable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Initializable__factory>;
    getContractFactory(
      name: "ERC20Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Upgradeable__factory>;
    getContractFactory(
      name: "IERC20MetadataUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20MetadataUpgradeable__factory>;
    getContractFactory(
      name: "IERC20Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Upgradeable__factory>;
    getContractFactory(
      name: "ContextUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ContextUpgradeable__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "FileToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FileToken__factory>;
    getContractFactory(
      name: "FileTokenUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FileTokenUpgradeable__factory>;
    getContractFactory(
      name: "FileTokenUpgradeableV2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FileTokenUpgradeableV2__factory>;
    getContractFactory(
      name: "GnosisSafeGetAddresses",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GnosisSafeGetAddresses__factory>;
    getContractFactory(
      name: "Greeter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Greeter__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IFileToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IFileToken__factory>;
    getContractFactory(
      name: "Power",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Power__factory>;
    getContractFactory(
      name: "TokenABC",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TokenABC__factory>;
    getContractFactory(
      name: "TokenBTC",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TokenBTC__factory>;
    getContractFactory(
      name: "TokenETH",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TokenETH__factory>;
    getContractFactory(
      name: "TokenSwap",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TokenSwap__factory>;
    getContractFactory(
      name: "TokenXYZ",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TokenXYZ__factory>;

    getContractAt(
      name: "OwnableUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OwnableUpgradeable>;
    getContractAt(
      name: "Initializable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Initializable>;
    getContractAt(
      name: "ERC20Upgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20Upgradeable>;
    getContractAt(
      name: "IERC20MetadataUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20MetadataUpgradeable>;
    getContractAt(
      name: "IERC20Upgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Upgradeable>;
    getContractAt(
      name: "ContextUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ContextUpgradeable>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "IERC20Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "FileToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FileToken>;
    getContractAt(
      name: "FileTokenUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FileTokenUpgradeable>;
    getContractAt(
      name: "FileTokenUpgradeableV2",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FileTokenUpgradeableV2>;
    getContractAt(
      name: "GnosisSafeGetAddresses",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GnosisSafeGetAddresses>;
    getContractAt(
      name: "Greeter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Greeter>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "IERC20Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: "IFileToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IFileToken>;
    getContractAt(
      name: "Power",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Power>;
    getContractAt(
      name: "TokenABC",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TokenABC>;
    getContractAt(
      name: "TokenBTC",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TokenBTC>;
    getContractAt(
      name: "TokenETH",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TokenETH>;
    getContractAt(
      name: "TokenSwap",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TokenSwap>;
    getContractAt(
      name: "TokenXYZ",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TokenXYZ>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
