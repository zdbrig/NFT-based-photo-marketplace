import { BigInt,dataSource, log } from "@graphprotocol/graph-ts"
import {
    Approval,
    ApprovalForAll,Transfer
   } from "../generated/templates/PhotoNFT/PhotoNFT"
   import { mintPhotoNFT } from "../generated/schema"


export function handleApproval(event: Approval): void {} 
export function handleApprovalForAll(event: ApprovalForAll): void {}
export function handleTransfer(event: Transfer): void {
    let entity = mintPhotoNFT.load(event.transaction.hash.toHex())
    if(entity==null){
        entity=new mintPhotoNFT(event.transaction.hash.toHex())
    }
    let context=dataSource.context();
    let photoNFT=context.getString("photoNFT");
    log.error('photoNFT :{}',
    [
        photoNFT
    ]
   )
   entity.photoNft=photoNFT
    entity.from=event.params.from;
    entity.to=event.params.to;
    entity.tokenId=event.params.tokenId;


    entity.save()
}
