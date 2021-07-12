import { BigInt } from "@graphprotocol/graph-ts"
import {
  PhotoNFTMarketplace,
  PhotoNFTOwnershipChanged,
  TradeStatusChange
} from "../generated/PhotoNFTMarketplace/PhotoNFTMarketplace"
import { photoNFTOwnership,tradeStatusChange } from "../generated/schema"

export function handlePhotoNFTOwnershipChanged(event: PhotoNFTOwnershipChanged): void {
  let entity = photoNFTOwnership.load(event.transaction.hash.toHex())
  if (entity == null){
    entity = new photoNFTOwnership(event.transaction.hash.toHex())
    
  }
  entity.adressPhotoNFT=event.params.photoNFT;
  entity.blockNumber=event.block.number;
  entity.timestamp=event.block.timestamp;
  entity.photoId=event.params.photoId;
  entity.ownerBeforeOwnershipTransferred=event.params.ownerBeforeOwnershipTransferred;
  entity.ownerAfterOwnershipTransferred=event.params.ownerAfterOwnershipTransferred
  entity.save()
  
}

export function handleTradeStatusChange(event: TradeStatusChange): void {
  
  let entity = tradeStatusChange.load(event.transaction.hash.toHex())
  if (entity == null){
    entity = new tradeStatusChange(event.transaction.hash.toHex())
    
  }
  entity.status=event.params.status;
  entity.address=event.params.ad;
  entity.timestamp=event.block.timestamp;
  entity.blockNumber=event.block.number;
  entity.save()
}
