import { unlockAccountImpl } from "./ethereum/unlockAccount"
import Web3 from "web3";
import store from "../redux/store";
import detailsReedem from "../contracts/NFTDetailsReedem.json";
import withdrawNFT from "../contracts/NFTDetailsReedem.json";
import TruffleContract from "@truffle/contract";
//@ts-ignore
const detailsReedemContract = TruffleContract(detailsReedem);
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
  callback: any 
) {
  const user = store.getState().user;
  console.log("user"+user.address)
  // @ts-ignore
  const { ethereum } = window;
  const web3 = new Web3(ethereum);

  try {
    detailsReedemContract .setProvider(web3.currentProvider);
    const detailsRe = await detailsReedemContract.at(
      "0x40C5B579431ADEee0256e18802601A2416a69535"
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

export async function withdrawNft(
  
  idToken:any,  callback: any 
) {
  const user = store.getState().user;
  console.log("user"+user.address)
  // @ts-ignore
  const { ethereum } = window;
  const web3 = new Web3(ethereum);

  try {
    detailsReedemContract .setProvider(web3.currentProvider);
    const detailsRe = await detailsReedemContract.at(
      "0x40C5B579431ADEee0256e18802601A2416a69535"
    );
    let detailsRetx = await detailsRe
      .withdraw( idToken,{ from: user.address })
      .then((prestx2: any) => {
      
        callback(true);
      });
    
  } catch (error) {
    callback(error, null);
    console.log(error);
    console.log("error while read message");
  }
}