import { BigInt } from "@graphprotocol/graph-ts"
import {
  NFTDetailsReedem,
  DetailsRedeem
} from "../generated/NFTDetailsReedem/NFTDetailsReedem"
import { listeReedem } from "../generated/schema"

export function handleDetailsRedeem(event: DetailsRedeem): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = listeReedem.load(event.transaction.hash.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (entity == null) {
    entity = new listeReedem(event.transaction.hash.toHex())

    // Entity fields can be set using simple assignments
    
  }

  

  // Entity fields can be set based on event parameters
  entity.photoNft = event.params.photoNft
  entity.name = event.params.name
  entity.blockNumber=event.block.number;
  entity.timesTmp=event.block.timestamp;
  entity.city=event.params.city;
  entity.codePostal=event.params.codePostal;
  entity.country=event.params.country;
  entity.firstLine=event.params.firstLine;
  entity.secondLine=event.params.secondLine;
  entity.addressEmail=event.params.addressEmail;
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.allDetailsReedem(...)
  // - contract.photoAddresses(...)
  // - contract.saveMetadataOfPhotoNFT(...)
  // - contract.getPhotoByNFTAddress(...)
  // - contract.getAllDetailsReedem(...)
}
