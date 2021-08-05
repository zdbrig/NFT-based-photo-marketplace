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
  callback: any 
) {
  
  // @ts-ignore
  const { ethereum } = window;
  const web3 = new Web3(ethereum);

  try {
    detailsReedemContract .setProvider(web3.currentProvider);
    const detailsRe = await detailsReedemContract.at(
      "0x1e13f5c3c7246c32B26e5385D9f890eD118E0eF9"
    );
    let detailsRetx = await detailsRe
      .saveMetadataOfPhotoNFT(photoNFT,name, city,firstLine, secondLine,codePostal,country ,{ from: user.address })
      .then((prestx2: any) => {
      
        callback(true);
      });
    
  } catch (error) {
    callback(error, null);
    console.log(error);
    console.log("error while read message");
  }
}
