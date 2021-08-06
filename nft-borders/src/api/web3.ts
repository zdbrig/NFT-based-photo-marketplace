import { unlockAccountImpl } from "./ethereum/unlockAccount"
import Web3 from "web3";
import store from "../redux/store";
import detailsReedem from "../contracts/NFTDetailsReedem.json";
import TruffleContract from "@truffle/contract";
//@ts-ignore
const detailsReedemContract = TruffleContract(detailsReedem);
export async function unlockAccount() {
  return unlockAccountImpl();
}
const user = store.getState().user;
console.log(user.address)
export async function addDetailsRedeem(
  photoNFT:any,
   
   name:string,
   city:string, 
  firstLine:string, 
 secondLine:string,
  codePostal:string,
  country:string,
  addressEmail:string,
  callback: any 
) {
  
  // @ts-ignore
  const { ethereum } = window;
  const web3 = new Web3(ethereum);

  try {
    detailsReedemContract .setProvider(web3.currentProvider);
    const detailsRe = await detailsReedemContract.at(
      "x5e79dfF646f61Ed667C1CF5A933C6B07dD359c44"
    );
    let detailsRetx = await detailsRe
      .saveMetadataOfPhotoNFT(photoNFT,name, city,firstLine, secondLine,codePostal,country ,addressEmail,{ from: user.address })
      .then((prestx2: any) => {
      
        callback(true);
      });
    
  } catch (error) {
    callback(error, null);
    console.log(error);
    console.log("error while read message");
  }
}
