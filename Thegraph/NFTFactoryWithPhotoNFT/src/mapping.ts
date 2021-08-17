import { BigInt, log,dataSource, DataSourceContext } from "@graphprotocol/graph-ts"
import {
  PhotoNFTFactory,
  AddReputation,
  PhotoNFTCreated
} from "../generated/PhotoNFTFactory/PhotoNFTFactory"
import { ExampleEntity,AllPhotoNFT} from "../generated/schema"
import { PhotoNFT } from "../generated/templates"

export function handleAddReputation(event: AddReputation): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (entity == null) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.tokenId = event.params.tokenId
  entity.reputationCount = event.params.reputationCount

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
  entity.addreseEmail=event.params.addresEmail;
  entity.seller=event.params.seller;
  entity.redevance=event.params.redevance;
  entity.timesTmp=event.block.timestamp;
  entity.blockNumber=event.block.number;
  entity.status="open";
  // Show an error if there is already an indexed Market Maker with the same ID
  log.error('Trying to index a "photonft" address that is already indexed: {}',
  [
    event.params.photoNFT.toHexString()
  ]
 )
let context=new DataSourceContext();
context.setString("photoNFT",event.params.photoNFT.toHexString())
  // Entities can be written to the store with `.save()`
  entity.save()
  PhotoNFT.createWithContext(event.params.photoNFT,context)
}
