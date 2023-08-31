
import { dateAtTime,  timeAgo,   dateFormat, DateType } from '@utils/formatDate'
import { useState } from 'react'
import { RiEmotionNormalLine } from 'react-icons/ri'
  
      
      export type TokenSet ={
        ETH: string
        BTC: string 
        XRP : string 
      }
     
      export type TransactionDesc = {
        timestamp: string
        transaction_type: string       
        token: string 
        amount: string
       
      
    }
      
    export type TokenTypeOptions = Record<string, string>

     export interface GroupedRows  {
        count: number 
        tokenlists: TransactionDesc[]
        date: string 
        tokensettaken : TokenSet

     }

     const tokentype: Record<string, 'ETH' | 'BTC' | 'XRP'> = {
      ETH: 'ETH',
      BTC: 'BTC',
      XRP: 'XRP',
    }
  
     
    export  type  GroupedSheetEntery  = Record<string, TransactionDesc[]>
     export type setRowItem = Record<string, TransactionDesc> 
      
    export  const datedTransactions = Array<TransactionDesc>();
  let groupSheet: GroupedSheetEntery;
  let key:string;
    const usePortFolioContext = () => {

        const mapKeygetter = ( ) => {
      const groupsheetkeys = Object.keys(groupSheet);
       groupsheetkeys.map ((item, index) => {
       key = item; 
      })
      
        }
 
   const getMaxtimestampToken = () => {
    let maxtimestamp; let timeoftimestamp: string;      
       
        const listoftimestamp = groupSheet[key];
        const maximumtimestamp =   listoftimestamp.reduce((prevtransaction, curtransaction) => {
          timeoftimestamp = maximumtimestamp.timestamp;
          return  maxtimestamp=    prevtransaction['timestamp'] > curtransaction['timestamp'] ? prevtransaction :  curtransaction ;
        });

                
        return timeoftimestamp;
      }
       
      const getMaxtimestampPerToken = (tokentypeselected: string ) => {
        let maxtimestamp; let timeoftimestamp: string;      
                   
            const listoftimestamp = groupSheet[key];
          const selectedTokens =   listoftimestamp.filter(({ token }) => token === tokentypeselected);
            const maximumtimestamp =   selectedTokens.reduce((prevtransaction, curtransaction) => {
              timeoftimestamp = maximumtimestamp.timestamp;
              return  maxtimestamp=    prevtransaction['timestamp'] > curtransaction['timestamp'] ? prevtransaction :  curtransaction ;
            });
    
            return timeoftimestamp;
          }
       

        const selectTokenType =(tokenexpected:string) => {
          const tokenoptions: TokenSet = { ETH:"ETH", BTC: "BTC", XRP: "XRP" }
          const tokentypeselected = Object.keys(tokenoptions).filter((tokenexpected) => tokenoptions[tokenexpected])[0]
          return   tokentypeselected
      }
                
        const getAllTokenOfParticularType = (tokenchoice: string ) => {
   
        const chosentokentype = selectTokenType(tokenchoice); 
        const tokensofXType = groupSheet[key]
        .filter(({ token }) => token === tokentype[chosentokentype])
         return tokensofXType; 
         }
             // get All with token 
         const getLatestTokenOfType = (tokenchoice: string) => {
          const newtime = getMaxtimestampPerToken(tokenchoice);
       
         const alltokensoftype =  getAllTokenOfParticularType(tokenchoice);
         alltokensoftype.find(({ timestamp }) => timestamp === newtime)[0]
            return alltokensoftype[0];
         }
   
                   
         const getLatestTokenOfAllThreeTypes = () => {
          const BTCLatestToken = getLatestTokenOfType('BTC');
          const ETHLatestToken = getLatestTokenOfType('ETH');
          const XRPLatestToken = getLatestTokenOfType('XRP');
          
           return {BTCLatestToken, ETHLatestToken, XRPLatestToken } 
         }
         const getPortFolioValueOfTokenofAllThreeTypes = () => 
         {
           const BTCPVOfParticularToken = getPortFolioValueOfSpecifiedToken('BTC');
                   const ETHVOfParticularToken = getPortFolioValueOfSpecifiedToken('ETH');
                   const XRPVOfParticularToken = getPortFolioValueOfSpecifiedToken('XRP');
           
         return  {BTCPVOfParticularToken, ETHVOfParticularToken, XRPVOfParticularToken}  ;
         }
     
         const getWithdrawnAmountOfTokenType  = (token: string ) => 
         {
          let withdrawnvalue = 0;  
        const alltokens = groupSheet[key];
        const selectedTokens =   alltokens.filter(({ token }) => token === token)
      const transactiontypeset =      selectedTokens.filter(({ transaction_type}) => transaction_type === 'WITHDRAWAL')
      const sum = selectedTokens.reduce((summation , currentamount) => {
        withdrawnvalue =   withdrawnvalue + Number(currentamount.amount);
    
            return  summation;
      })

       return withdrawnvalue; 
      }
           
        
      const getDepositedAmountOfTokenType  = (token: string ) => 
      {
        let depositvalue = 0;  
       
        const alltokens = groupSheet[key];
        const selectedTokens =   alltokens.filter(({ token }) => token === token)
        const transactiontypeset = selectedTokens.filter(({ transaction_type}) => transaction_type === 'DEPOSIT')
        const sum = selectedTokens.reduce((summation , currentamount) => {
        depositvalue =   depositvalue + Number(currentamount.amount);
    
            return  summation;
      })

       return depositvalue; 
   }
    //specified token LP
   
    const getPortFolioValueOfSpecifiedToken = (token: string) => 
   {
     const withdrawalamount = getWithdrawnAmountOfTokenType( token);
     const depositedamount   = getDepositedAmountOfTokenType(token); 
      const balancedamount = withdrawalamount > depositedamount? withdrawalamount - depositedamount : depositedamount -withdrawalamount ;
     
  return  {balancedamount, withdrawalamount, depositedamount}  ;
}


        //getLatestTokenOfAllThreeTypes
        //getPortfolioPerToken     

          const getPortFolioWithDate = (date: DateType, tokenstring: string ) => 
          {        
             const dateset = dateAtTime(date);
            const alltokens = groupSheet[key];

            const selectedTokens =   alltokens.filter(({ token }) => token  === tokenstring)
            selectedTokens.forEach((transactions) => {
             
              const datefromTimestamp =   dateAtTime(transactions.timestamp);
              if (dateset  == datefromTimestamp){
                 datedTransactions.push(transactions);
                return datedTransactions; 
              }
            });
              return datedTransactions;
           
            }



              const getDatedWithdrawnAmountOfTokenType  = (date: DateType, token: string ) => 
              {

               let withdrawnvalue = 0;  
             const datedtokens = getPortFolioWithDate(date, token); 
             const selectedTokens =   datedtokens.filter(({ token }) => token === token)
           const transactiontypeset =      selectedTokens.filter(({ transaction_type}) => transaction_type === 'WITHDRAWAL')
           const sum = selectedTokens.reduce((summation , currentamount) => {
             withdrawnvalue =   withdrawnvalue + Number(currentamount.amount);
         
                 return  summation;
           });
      
            return withdrawnvalue; 
           }
                
             
           const getDatedDepositedAmountOfTokenType  = (date: DateType,token: string ) => 
           {
             let depositvalue = 0;  
            
             const datedtokens = getPortFolioWithDate(date, token); 
             const selectedTokens =   datedtokens.filter(({ token }) => token === token)
           const transactiontypeset =      selectedTokens.filter(({ transaction_type}) => transaction_type === 'DEPOSIT')
           const sum = selectedTokens.reduce((summation , currentamount) => {
             depositvalue =   depositvalue + Number(currentamount.amount);
         
                 return  summation;
           });
      
            return depositvalue; 
        }
               //dated portfolio with token
        const getDatedPortFolioValueOfTokenType = (date: DateType, token: string) => 
        {
          const datedwithdrawalamount = getDatedWithdrawnAmountOfTokenType( date,token);
          const dateddepositedamount   = getDatedDepositedAmountOfTokenType(date, token); 
           const datedbalancedamount = datedwithdrawalamount > dateddepositedamount? datedwithdrawalamount - dateddepositedamount : dateddepositedamount -datedwithdrawalamount ;
          
       return  {datedbalancedamount, datedwithdrawalamount, dateddepositedamount} ;
      }
        // All three types
      const getDatedPortFolioValueOfAllThreeTypes = (date: DateType) => 
      { 
        const BTCDatedPV = getDatedPortFolioValueOfTokenType(date,'BTC');
        const ETHDatedPV = getDatedPortFolioValueOfTokenType(date,'ETH');
        const XRPDatedPV = getDatedPortFolioValueOfTokenType(date, 'XRP');
        
     return  {BTCDatedPV, ETHDatedPV, XRPDatedPV} ;
    }
  
  return {mapKeygetter, getMaxtimestampToken,  getMaxtimestampPerToken,  selectTokenType,
  getAllTokenOfParticularType,  getLatestTokenOfType,  getLatestTokenOfAllThreeTypes,
  getWithdrawnAmountOfTokenType,  getDepositedAmountOfTokenType,  getPortFolioValueOfSpecifiedToken,
  getPortFolioWithDate,  getDatedWithdrawnAmountOfTokenType,  getDatedDepositedAmountOfTokenType,
  getDatedPortFolioValueOfTokenType,getDatedPortFolioValueOfAllThreeTypes, getPortFolioValueOfTokenofAllThreeTypes
  } 
 }
  
  export default usePortFolioContext
       

  


  


     