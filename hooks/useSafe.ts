import { ethers } from "ethers";
import { useState, useEffect, useCallback } from 'react';
import { enableModule } from '../utils/enableSafeModule';
import { executeModule } from '../utils/executeSafeModule';
import SafeServiceClient, { SafeInfoResponse } from '@gnosis.pm/safe-service-client';
import EthersAdapter from  '@gnosis.pm/safe-ethers-lib';

// Loadidng, enabling and executing safe
const provider = new ethers.providers.Web3Provider(window.ethereum); 
const owner = provider.getSigner(0);
const signer = new ethers.Wallet(String(process.env.RINKEBY_MNEUMONIC), provider);
const ethAdapter = new EthersAdapter({
  ethers,
  signerOrProvider: owner,
});
const safeService = new SafeServiceClient({
  txServiceUrl: 'https://safe-transaction.rinkeby.gnosis.io',
  ethAdapter,
});

const ENABLE_MODULE_SIG = '0x610b59250000000000000000000000001a8cd04ad268b1dc580f6162083cedfc1a76818e';

export interface useSafeProps {
  safeAddress: string;
  userAddress: string;
}

// Executing safe
export const useSafe = ({ safeAddress, userAddress }: useSafeProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [safe, setSafe] = useState<SafeInfoResponse | null>(null);
  const [isCurrentUserAlreadySigned, setIsUserAlreadySigned] = useState<boolean>(false);
  const [hasReachedThreshold, setHasReachedThreshold] = useState<boolean>(false);

  const getSafeInfo = useCallback(async () => {
    setIsLoading(true);
    if (safeAddress) {
      const safeInfo = await safeService.getSafeInfo(safeAddress);
      setSafe(safeInfo);
    }
    setIsLoading(false);
  }, [safeAddress]);

  const checkIfWaitingForExecution = useCallback(async () => {
    if (safeAddress) {
      setIsLoading(true);
      const { threshold } = await safeService.getSafeInfo(safeAddress);
      const multisigTransactions = await safeService.getMultisigTransactions(safeAddress);
      const sameTransaction = multisigTransactions.results.find(
        ({ data: transactionItem }) => transactionItem === ENABLE_MODULE_SIG
      );
      const uniqueOwnersConfirmation = [...new Set(sameTransaction?.confirmations?.map(({ owner }) => owner))];
      const hasReached = uniqueOwnersConfirmation.length >= threshold;
      setHasReachedThreshold(hasReached);
      setIsLoading(false);
    }
  }, [safeAddress]);

  const checkIsSigned = useCallback(async () => {
    setIsLoading(true);
    const multisigTransactions = await safeService.getMultisigTransactions(safeAddress);
    const sameTransaction = multisigTransactions.results.find(
      ({ data: transactionItem }) => transactionItem === ENABLE_MODULE_SIG
    );
    const isSigned =
      sameTransaction?.confirmations?.some(
        ({ owner: ownerItem }) => ownerItem.toLowerCase() === userAddress.toLowerCase()
      ) || false;

    setIsUserAlreadySigned(isSigned);
    setIsLoading(false);
  }, [safeAddress, userAddress]);

  useEffect(() => {
    getSafeInfo();
  }, [getSafeInfo]);

  useEffect(() => {
    safeAddress && checkIsSigned();
  }, [userAddress, safe, safeAddress, checkIsSigned]);

  useEffect(() => {
    checkIfWaitingForExecution();
  }, [checkIfWaitingForExecution, safeAddress]);

  const enableSafeModule = async () => {
    setIsLoading(true);
    let { status } = await enableModule(safeAddress);
    setIsLoading(false);
    return { status };
  };

  const executeSafeModule = async () => {
    setIsLoading(true);
    const response = await executeModule(safeAddress);

    setIsLoading(false);
    return response;
  };

  const refetch = {
    waiting: checkIsSigned,
    success: () => {
      getSafeInfo();
      checkIsSigned();
    },
  };

  return {
    enableSafeModule,
    isLoading,
    safe,
    isCurrentUserAlreadySigned,
    refetch,
    hasReachedThreshold,
    executeSafeModule,
    checkIsSigned,
    checkIfWaitingForExecution,
  };
};

export default useSafe;
