import { BigInt } from "@graphprotocol/graph-ts"
import {
  PhotoNFTFactory,
  AddReputation,
  PhotoNFTCreated
} from "../generated/PhotoNFTFactory/PhotoNFTFactory"
import { AddedReputation,AllPhotoNFT } from "../generated/schema"

export function handleAddReputation(event: AddReputation): void {
  let entity = AddedReputation.load(event.transaction.hash.toHex())

  if (entity == null) {
    entity = new AddedReputation(event.transaction.hash.toHex())
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.tokenId = event.params.tokenId
  entity.reputationCount = event.params.reputationCount
  entity.timesTmp=event.block.timestamp;
  entity.blockNumber=event.block.number;

  // Entities can be written to the store with `.save()`
  entity.save()

 
}

export function handlePhotoNFTCreated(event: PhotoNFTCreated): void {
  let entity = AllPhotoNFT.load(event.transaction.hash.toHex())

  if (entity == null) {
    entity = new AllPhotoNFT(event.transaction.hash.toHex())
    
  }
  entity.owner = event.params.owner
  entity.photoNft = event.params.photoNFT
  entity.nftName=event.params.nftName;
  entity.nftSymbol=event.params.nftSymbol
  entity.ipfsHashOfPhoto=event.params.ipfsHashOfPhoto;
  entity.photoPrice=event.params.photoPrice;
  entity.timesTmp=event.block.timestamp;
  entity.blockNumber=event.block.number;
  entity.status="open";
  // Entities can be written to the store with `.save()`
  entity.save()
}
