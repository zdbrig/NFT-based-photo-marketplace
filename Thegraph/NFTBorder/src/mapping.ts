import { BigInt, log } from "@graphprotocol/graph-ts"
import {
  NFTBorder,
  AddReputation,
  PhotoNFTCreated,withdrawNFT
} from "../generated/NFTBorder/NFTBorder"
import { AddedReputation,AllPhotoNFT,AllPhotoNFTBurned } from "../generated/schema"

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
  log.info('tx : ',[event.transaction.hash.toHex()])
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
  entity.addreseEmail=event.params.addresEmail;
  entity.seller=event.params.seller;
  entity.redevance=event.params.redevance;
  entity.timesTmp=event.block.timestamp;
  entity.blockNumber=event.block.number;
  entity.statusPhoto=event.params.statusPhoto;
  // Entities can be written to the store with `.save()`
  log.info('test ',[])
  entity.save()
}

export function handlewithdrawNFT(event: withdrawNFT): void {
  let entity = AllPhotoNFTBurned.load(event.transaction.hash.toHex())

  if (entity == null) {
    entity = new AllPhotoNFTBurned(event.transaction.hash.toHex())
    
  }
  entity.timesTmp=event.block.timestamp;
  entity.blockNumber=event.block.number;
  entity.photoNft=event.params.photoNFT;
  entity.status=event.params.status;
  entity.save()
}
