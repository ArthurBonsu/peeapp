import { chakra, Heading , Stack} from "@chakra-ui/react";

import { ethers } from 'ethers'
const hre = require("hardhat")
import { Button, ButtonProps, Flex, useDisclosure, AlertDialog,Alert,  AlertDialogBody,  AlertDialogCloseButton,  AlertDialogContent,
  AlertDialogFooter,  AlertDialogHeader,  AlertDialogOverlay,   UseDisclosureReturn, Select,FormErrorMessage, FormControl, FormLabel,
  NumberInput,NumberInputField, NumberIncrementStepper,NumberDecrementStepper,NumberInputStepper, Input,IconButton, AlertIcon, Grid,
    Box,  Text,  InputGroup,  InputRightAddon, FormHelperText,Wrap,  WrapItem, VisuallyHidden, VisuallyHiddenInput, Accordion,AccordionItem,AccordionButton,
    AccordionPanel, AccordionIcon } from '@chakra-ui/react'
    
import {RiArrowDownSLine} from 'react-icons/all'
import {  createSwapFormSchema, createSwapTransferFormSchema,  } from '../../validation'
  import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";
import { PlusSmIcon, MinusSmIcon } from '@heroicons/react/outline'
import { useFormContext, useFieldArray ,useForm} from 'react-hook-form'
import { CreateSwapTransferInput, CreateTransferInput, SimpleTokenList } from 'types'
import supportedNetworkOptions from '@constants/supportedNetworkOptions'
//STORES
import { useSwapStore  } from '@stores/ContextStores/useSwapStore'
import { useEthersStore  } from 'stores/ethersStore'
import { useSafeStore  } from 'stores/safeStore'
import { useHashTransactionStore  } from 'stores/transactionStore'
import { useUserStore  } from 'stores/userStore'



//HOOKS
import  useEthers   from 'hooks/useEthers'
import  useFetch   from 'hooks/useFetch'
import  useLoadSafe   from 'hooks/useLoadSafe'
import  useSafe   from 'hooks/useSafe'
import useSafeSdk   from 'hooks/useSafeSdk'
import useTransactions   from 'hooks/useTransactions'

import useSafeInfo from 'hooks/useSafe'
//Context 
import  useCrowdsourceContext   from 'context/useCrowdsourceContext'
import  useDaoContext   from 'context/useDaoContext'
import  useSwapContext   from 'context/useSwapContext'
import  useTransactionContext   from 'context/useTransactionContext'
import useTransferContext   from 'context/useTransferContext'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


import React,{ useCallback, useState, useEffect } from 'react' 
import { setValues } from 'framer-motion/types/render/utils/setters'
import Router from 'next/router'
import { useQuery } from 'react-query'
import queries from "@services/queries";




interface CreateSwapTransferFormProps {
    disclosure: UseDisclosureReturn
    onSubmit: (data: { recipients: Array<CreateSwapTransferInput> }) => void
    isLoading?: boolean
  }
interface SwapCardServiceProps{

  color:string,
  title: string,
  icon: {},
  subtitle: string 
  
}

 const ListOfTokens: SimpleTokenList[] = [

  { tokenname: 'TokenABC',
    symbol: 'ABC'
     },
  {  
    tokenname: 'TokenXYZ',
    symbol: 'XYZ',
   

  },
  
]



  // onchange handling, to post text

  // submission

 //const { tokenuri } = useQuery(`tokenuri}`, queries.getTokenUri('tokenuri'), {
 // enabled: !!tokenuri,
 // cacheTime: 100,
//})
// THE BEAUTIFUL DYNAMIC VIEW HERE CAN BE USED FOR OTHER NAVIGATION VIEW, RIGHT NOW WWE WANT ONLY ONE CARD
  /*
const TransactionDisplay = ({ color, title, icon , subtitle }) => (
  <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-white text-lg">{title}</h3>
      <p className="mt-1 text-white text-sm md:w-9/12">
        {subtitle}
      </p>
    </div>
  </div>
);

const SwapTransferService: React.FC<SwapCardServiceProps> = ({
   

  }) => {


    return (
      <div className="flex w-full justify-center items-center gradient-bg-services">
      <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
        <div className="flex-1 flex flex-col justify-start items-start">
          <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient ">
            Services that we
            <br />
            continue to improve
          </h1>
          <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
            The best choice for buying and selling your crypto assets, with the
            various super friendly services we offer
          </p>
        </div>
  
        <div className="flex-1 flex flex-col justify-start items-center">
          <SwapTransferService
            color="bg-[#2952E3]"
            title="Security gurantee"
            icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
            subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
          />
          <SwapTransferService
            color="bg-[#8945F8]"
            title="Best exchange rates"
            icon={<BiSearchAlt fontSize={21} className="text-white" />}
            subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
          />
          <SwapTransferService
            color="bg-[#F84550]"
            title="Fastest transactions"
            icon={<RiHeart2Fill fontSize={21} className="text-white" />}
            subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
          />
        </div>
      </div>
    </div>
  
);
    }
*/


const TransactionDisplay = ({ account, tokenAname, symbolA, tokenBname , symbolB,  amount,newamount, swaphash,from, to  }) => {
  return (
<Stack spacing={6}>
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
    <Heading as='h1' size='4xl' noOfLines={1}> View Transactions From user:  {account}   </Heading>
   <>
  <Text as='b'>First Token </Text>
  <br />
  <Button colorScheme='teal' variant='solid'>
    Button
  </Button>
  
  <Text as='i'>SYMB A</Text>
  <br />
  <Button colorScheme='teal' variant='solid'>
    Button
  </Button>
  <Text as='u'>Second Token</Text>
  <br />
  <Button colorScheme='teal' variant='solid'>
    Button
  </Button>
  <Text as='abbr'>SYMB B</Text>
  <br />
  <Button colorScheme='teal' variant='solid'>
    Button
  </Button>
  <Text as='cite'>Amount</Text>
  <br />
  <Button colorScheme='teal' variant='solid'>
    Button
  </Button>
  <Text as='del'>New Amount</Text>
  <br />
  <Button colorScheme='teal' variant='solid'>
    Button
  </Button>
  <Text as='em'>Transaction Hash</Text>
  <br />
  <Button colorScheme='teal' variant='solid'>
    Button
  </Button>
  <Text as='ins'>From Address</Text>
  <br />
  <Button colorScheme='teal' variant='solid'>
    Button
  </Button>
  <Text as='kbd'>To</Text>
  <Button colorScheme='teal' variant='solid'>
    Button
  </Button>
  <br />
  
</>
</Box>
    </Stack>
  )
}


const SwapTransfer:  React.FC<CreateSwapTransferInput> = ( {tokenAname, symbolA,tokenBname,symbolB, amount} :CreateSwapTransferInput) => {

   /*const schema = yup.object({
  symbol: yup.string().required(),
  tokenstring: yup.string().required(),
  decimals: yup.string().required(),
  logoUri: yup.string().required(),
  address: yup.string().required(),
}).required();
*/
const [isLoading, setIsLoading] = useState(false)
const [isSwapping, setIsSwapping] = useState(true)
const [isTyping, setIsTyping] = useState(true)  
const [transaction,setTransaction] = useState('')
const [token, setToken] = useState({})
const [value, setValue] = useState('')
const [_currentAccount, setCurrentAccount] = useState('')
const [tokenchosen, setTokenChosen] = useState(false);
const [isSubmitted, setIsSubmitted] = useState(false);
  

const schema = yup.object({
  tokenAname: yup.string().required(),
  symbolA: yup.string().required(), 
  tokenBname:yup.string().required(),
  symbolB: yup.string().required(),
  amount:yup.number().required(),
  
}).required();


const {
  register,
  handleSubmit,
  watch,
  // Read the formState before render to subscribe the form state through the Proxy
  formState: {  isDirty, isSubmitting, touchedFields, submitCount, errors },
} = useForm<CreateSwapTransferInput>(

  {  defaultValues: 
    {
      tokenAname:"Ethereum",
      symbolA:'ETH',
      tokenBname: "Solana",
      symbolB: 'SOL',
      amount: 0,
    },
    resolver: yupResolver(schema)
   
   } );

   const amountWatch = watch("amount")
const handleChange = (event) => { 
  isTyping
  setValue(event.target.value)
  !isTyping
  // Logic of token conversion must be here

}
const {  swapTKA ,swapTKX,transactionCount,connectWallet,transactions,currentAccount,sendTransaction,
  formData,accountsretrieved,origamount,newtokenamount} = useSwapContext();

  
  const { getDisclosureProps, getButtonProps } = useDisclosure()
const localDisclosure = useDisclosure()
  
const { isOpen, onOpen, onClose } = useDisclosure()
const {onConnect,  onDisconnect } = useEthers()
const buttonProps = getButtonProps()
const disclosureProps  = getDisclosureProps()

 // getting address and state of address
 const address = useEthersStore((state) => state.address)
 const provider = useEthersStore((state) => state.provider)
 const setAddress = useEthersStore((state) => state.setAddress)
 const setEtherStore = useEthersStore((state) => state.setEtherStore)
   
 const selectedSafe = useSafeStore((state) => state.selectedSafe)
 const isModuleEnabled = useSafeStore((state) => state.isModuleEnabled)
 const setIsModuleEnabled = useSafeStore((state) => state.setIsModuleEnabled)

   // Provider information to be provided
   const txhash  = useHashTransactionStore((state) => state.txhash)
   const txdata = useHashTransactionStore((state) => state.txdata)
   const logouri = useHashTransactionStore((state) => state.txlogoUri)
   const setHashTransaction = useHashTransactionStore((state) => state.setTransaction)
   const setHashTransactionData = useHashTransactionStore((state) => state.setTransactionData)
   const setHashTransactionTokenAmount = useHashTransactionStore((state) => state.setTransactionAmount)
   const setHashTransactionName = useHashTransactionStore((state) => state.setTransactionName)
   const setHashTransactionSymbol = useHashTransactionStore((state) => state.setTransactionSymbol)
   const setHashTransactionSigner = useHashTransactionStore((state) => state.setTransactionSigner)
   const setHashTransactionTxLogoUri = useHashTransactionStore((state) => state.setTransactionTxLogoUri)
   const walletAddress = useEthersStore((state) => state.address)
   const walletCheckSumAddress = walletAddress ? ethers.utils.getAddress(walletAddress) : ''

   setHashTransaction(txhash)       
   setHashTransactionData(txdata)   
   setHashTransactionTxLogoUri(logouri)
   setHashTransactionSymbol(symbolB)
const  onSubmit = async (tokenAname, symbolA,tokenBname,symbolB, amount   ) => {
 
  setIsLoading(true)


       connectWallet(); 
     setCurrentAccount(currentAccount);
    // console.log('Current Account' + currentAccount); 
    
     if(!tokenchosen){
      setIsLoading(true);
      swapTKA(amount);
     setIsLoading(false)
  
       }
      else{
      setIsLoading(true);
      swapTKX(amount);
        setIsLoading(false);           
    
      }
  

//getransaction

      return {origamount,newtokenamount, tokenAname, symbolA,tokenBname,symbolB, amount,  transactions, accountsretrieved, formData}
  }
   
 // const onError = (error) => {
 //   console.log("Error", error);
  //};
  
  return (
    <Box m="5">
      <form onSubmit={handleSubmit(()=> {onSubmit(tokenAname, symbolA,tokenBname,symbolB, amount)})}>
       
        <FormControl>
       
          <FormLabel htmlFor="tokenAname">Token A</FormLabel>
       
          <Select icon={<RiArrowDownSLine />} placeholder='Select Tokenname' id="tokenAname"  {...register("tokenAname") } >
             
             
          {ListOfTokens.map((item, index) => (
                <option key={item.tokenname} value={`ListOfTokens.${index}.tokenname`}>
                  {`ListOfTokens.${index}.tokenname`}
                </option>
                               
             )             
             )
          }
             </Select> 

           
           {errors && errors.tokenAname && (
            <FormHelperText color="red">
              {errors.tokenAname.message && errors.tokenAname.message}
            </FormHelperText>
          )}
        </FormControl>


        <FormControl>
          <FormLabel htmlFor="symbolA">Symbol A</FormLabel>
       
          <Select icon={<RiArrowDownSLine />} placeholder='Select Token Symbol' id="symbolA"  {...register("symbolA") } >
             
             
             {ListOfTokens.map((item, index) => (
                   <option key={item.symbol} value={`ListOfTokens.${index}.symbol`}>
                     {`ListOfTokens.${index}.symbol`}
                   </option>
                                  
                )             
                )
             }
                </Select> 
         
         
          {errors && errors.symbolA && (
            <FormHelperText color="red">
              {errors.symbolA.message && errors.symbolA.message}
            </FormHelperText>
          )}
        </FormControl>

    
        <FormControl>
          <FormLabel htmlFor="tokenBname">TokenB</FormLabel>
          <Select icon={<RiArrowDownSLine />} placeholder='Select Token Symbol' id="tokenBname"  {...register("tokenBname") } >
             
             
             {ListOfTokens.map((item, index) => (
                   <option key={item.tokenname} value={`ListOfTokens.${index}.tokenname`}>
                     {`ListOfTokens.${index}.tokenname`}
                   </option>
                                  
                )             
                )
             }
                </Select> 
          {errors && errors.tokenBname && (
            <FormHelperText color="red">
              {errors.tokenBname.message && errors.tokenBname.message}
            </FormHelperText>
          )}
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="symbolB">SymbolB</FormLabel>
          <Select icon={<RiArrowDownSLine />} placeholder='Select Token Symbol' id="symbolB"  {...register("symbolB") } >
             
             
             {ListOfTokens.map((item, index) => (
                   <option key={item.symbol} value={`ListOfTokens.${index}.symbol`}>
                     {`ListOfTokens.${index}.symbol`}
                   </option>
                                  
                )             
                )
             }
                </Select> 
          {errors && errors.symbolB && (
            <FormHelperText color="red">
              {errors.symbolB.message && errors.symbolB.message}
            </FormHelperText>
          )}
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="amount">Amount</FormLabel>

      <NumberInput  step={5} defaultValue={0} min={0} max={100}   >
  <NumberInputField />
  <NumberInputStepper {...register("tokenBname")}>
    <NumberIncrementStepper />
    <NumberDecrementStepper />
  </NumberInputStepper>
</NumberInput>

      {errors && errors.amount && (
            <FormHelperText color="red">
              {errors.amount.message && errors.amount.message}
            </FormHelperText>
          )}
        </FormControl>

        <Stack direction='column'> 
       <Wrap spacing={4}>
       <WrapItem>
      <Button colorScheme='pink'  onClick={()=> { 
      
          if(!tokenchosen){
            setTokenChosen(true); 
          }
          else {
            setTokenChosen(false);
          }
      }}>{!tokenchosen?  'ABC' : 'TKA'}</Button>
      </WrapItem>
   
       </Wrap>
       </Stack>

        
        <Button type="submit" colorScheme="blue">
          Submit
        </Button>
      </form>
      {!isSubmitting}? 
      <Accordion defaultIndex={[0]} allowMultiple>
      <AccordionItem>
    <h2>
      <AccordionButton>
      (<AccordionIcon />
      </AccordionButton>
      
    </h2>
    <AccordionPanel pb={4}>
    <TransactionDisplay 
    account ={accountsretrieved}
    tokenAname={transactions.tokenAname}
    symbolA={transactions.tokenBname}
    tokenBname={transactions.tokenBname}
    symbolB={transactions.symbolB}
    amount={transactions.amount}
    newamount={transactions.newamount}
    swaphash={transactions.swaphash}
    from={accountsretrieved}
    to={''}
    
    />

    </AccordionPanel>
  </AccordionItem>): (<Text> Transaction not complete</Text>)

  
</Accordion>
  
    </Box>
  
  
  
  );



}
 
export default SwapTransfer;