import { useEffect } from 'react'
import { ethers } from 'ethers'
const hre = require("hardhat");
import Web3Modal from 'web3modal'
import { useEthersStore, INITIAL_STATE } from '../stores/ethersStore'
import { getChainDetails, isChainSupported } from '../utils/etherUtils'
import { showToast } from '../utils/toastUtils'
import { ErrorType } from '../types'

let web3Modal: Web3Modal

const useEthers = () => {
  const chainId = useEthersStore((state) => state.chainId)
  const setAddress = useEthersStore((state) => state.setAddress)
  const setEtherStore = useEthersStore((state) => state.setEtherStore)

  useEffect(() => {
    if (!web3Modal) {
      web3Modal = new Web3Modal({
        network: getChainDetails(chainId).network,
        cacheProvider: true,
      })

      if (web3Modal.cachedProvider) {
        onConnect()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onConnect = async () => {
    try {
      const walletProvider = await web3Modal.connect()

      const web3Provider = new ethers.providers.Web3Provider(walletProvider, 'any')
      const web3Network = await web3Provider.getNetwork()
      const accounts = await web3Provider.listAccounts()

      await subscribeWalletEvents(walletProvider, isChainSupported(web3Network.chainId))

      setEtherStore({
        provider: web3Provider,
        chainId: getChainDetails(web3Network.chainId).chainId,
        address: accounts[0],
      })
    } catch (e: unknown) {
      const typedError = e as ErrorType
      showToast(typedError.message, 'error')
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const subscribeWalletEvents = async (walletProvider: any, supportedNetwork: boolean) => {
    if (!walletProvider.on) return

    walletProvider.on('disconnect', onDisconnect)
    walletProvider.on('accountsChanged', async (accounts: string[]) => {
      if (supportedNetwork) {
        setAddress(accounts[0])
      } else {
        showToast('Unsupported chain, please switch network.', 'error')
      }
    })

    walletProvider.on('chainChanged', async () => {
      window.location.reload()
    })
  }

  const onDisconnect = async () => {
    await web3Modal.clearCachedProvider()
    setEtherStore(INITIAL_STATE)
  }

  return {
    onConnect,
    onDisconnect,
  }
}

export default useEthers
