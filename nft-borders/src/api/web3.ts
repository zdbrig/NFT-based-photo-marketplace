import { unlockAccountImpl } from "./ethereum/unlockAccount"
import Web3 from "web3";
import store from "../redux/store";
import detailsReedem from "../contracts/NFTDetailsReedem.json";
import nftFactory from "../contracts/PhotoNFTFactory.json";
import withdrawNFT from "../contracts/NFTDetailsReedem.json";
import TruffleContract from "@truffle/contract";
//@ts-ignore
const detailsReedemContract = TruffleContract(detailsReedem);
//@ts-ignore
const nftFactoryContract = TruffleContract(nftFactory);
export async function unlockAccount() {
  return unlockAccountImpl();
}


export async function addDetailsRedeem(
  
  photoNFT:any,
   
   name:string,
   city:string, 
  firstLine:string, 
 secondLine:string,
  codePostal:string,
  country:string,
  addressEmail:string,
  account:any,
  callback: any 
) {
  const user = store.getState().user;
  console.log("user"+user.address + " account "+account)
  // @ts-ignore
  const { ethereum } = window;
  const web3 = new Web3(ethereum);

  try {
    const accounts = await web3.eth.getAccounts()
    console.log(accounts)
    detailsReedemContract .setProvider(web3.currentProvider);
    const detailsRe = await detailsReedemContract.at(
      "0x8eAC8e359FE0B6611DdB84Fa7E1499c113F46Ab6"
    );
    let detailsRetx = await detailsRe
      .saveMetadataOfPhotoNFT(photoNFT,name, city,firstLine, secondLine,codePostal,country ,addressEmail,{ from:accounts[0] })
      .then((prestx2: any) => {
      
        callback(null,prestx2);
      });
    
  } catch (error) {
    callback(error,null);
    console.log(error);
    console.log("error while read message");
  }
}

export async function withdrawNft(
  
  photoNFT:any,account:any,  callback: any 
) {
  const user = store.getState().user;
  console.log("user"+user.address + " account "+account)
  // @ts-ignore
  const { ethereum } = window;
  const web3 = new Web3(ethereum);

  try {
    const accounts = await web3.eth.getAccounts()
    nftFactoryContract.setProvider(web3.currentProvider);
    const detailsRe = await nftFactoryContract.at(
      "0x2f015cE10Cd76E4833c2A5e70894A9ff6f8fF6be"
    );
    console.log( accounts[0])
    let detailsRetx = await detailsRe
      .withdraw( photoNFT,{ from: accounts[0] })
      .then((prestx2: any) => {
      
        callback(null,prestx2);
      });
    
  } catch (error) {
    callback(error, null);
    console.log(error);
    console.log("error while read message");
  }
}