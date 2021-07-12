import { BigInt } from "@graphprotocol/graph-ts"
import {
  PhotoNFTMarketplace,
  PhotoNFTOwnershipChanged,
  TradeStatusChange
} from "../generated/PhotoNFTMarketplace/PhotoNFTMarketplace"
import { AllTransaction,TransactionPhotoNFTOwnershipChanged,TransactionTradeStatusChange } from "../generated/schema"

export function handlePhotoNFTOwnershipChanged(event: PhotoNFTOwnershipChanged): void {
  let entity = TransactionPhotoNFTOwnershipChanged.load(event.transaction.hash.toHex());
  if (entity == null) {
    entity = new TransactionPhotoNFTOwnershipChanged(event.transaction.hash.toHex());
  }
  let transactionHash = event.transaction.hash.toHexString();
  let transaction = AllTransaction.load(transactionHash);
  if (transaction === null) {
    transaction = new AllTransaction(transactionHash);
    transaction.blockNumber = event.block.number;
    transaction.timestamp = event.block.timestamp;
    transaction.tradeStatusChange = [];
    transaction.AllphotoNft = [];

  }
  let photoNFTList = transaction.AllphotoNft;
  let listPhotoNFT = new TransactionPhotoNFTOwnershipChanged(
    event.transaction.hash
      .toHexString()
      .concat("-")
      .concat(BigInt.fromI32(photoNFTList.length).toString())
  );

  listPhotoNFT.transaction = transaction.id;
  //  mashAdded.timestamp = transaction.timestamp;
  listPhotoNFT.photoId=event.params.photoId;
  listPhotoNFT.timestamp = event.block.timestamp;
  listPhotoNFT.blockNumber = event.block.number;
  transaction.blockNumber = event.block.number;
  transaction.timestamp = event.block.timestamp;
  transaction.adressPhotoNFT=event.params.photoNFT;
  transaction.photoId=event.params.photoId;
  transaction.ownerAfterOwnershipTransferred=event.params.ownerAfterOwnershipTransferred;
  transaction.ownerBeforeOwnershipTransferred=event.params.ownerBeforeOwnershipTransferred;
  transaction.typeEvent="Photo NFT Owner ship Changed";
  transaction.status=null;
  transaction.address=null;

  entity.adressPhotoNFT=event.params.photoNFT;
  entity.photoId=event.params.photoId;
  entity.ownerAfterOwnershipTransferred=event.params.ownerAfterOwnershipTransferred;
  entity.ownerBeforeOwnershipTransferred=event.params.ownerBeforeOwnershipTransferred;
  entity.timestamp = event.block.timestamp;
  entity.blockNumber = event.block.number;
  entity.transaction = transaction.id;
 
  photoNFTList.push(listPhotoNFT.id);
  transaction.AllphotoNft = photoNFTList;
  transaction.save();
  entity.save();
  
  
}

export function handleTradeStatusChange(event: TradeStatusChange): void {
  let entity = TransactionTradeStatusChange.load(event.transaction.hash.toHex());
  if (entity == null) {
    entity = new TransactionTradeStatusChange(event.transaction.hash.toHex());
  }
  let transactionHash = event.transaction.hash.toHexString();
  let transaction = AllTransaction.load(transactionHash);
  if (transaction === null) {
    transaction = new AllTransaction(transactionHash);
    transaction.blockNumber = event.block.number;
    transaction.timestamp = event.block.timestamp;
    transaction.tradeStatusChange = [];
    transaction.AllphotoNft = [];

  }
  let tradeStatus = transaction.tradeStatusChange;
  let listTradeStatus = new TransactionTradeStatusChange(
    event.transaction.hash
      .toHexString()
      .concat("-")
      .concat(BigInt.fromI32(tradeStatus.length).toString())
  );

  listTradeStatus.transaction = transaction.id;
  listTradeStatus.timestamp = event.block.timestamp;
  listTradeStatus.blockNumber = event.block.number;
  transaction.blockNumber = event.block.number;
  transaction.timestamp = event.block.timestamp;
  transaction.adressPhotoNFT=null;
  transaction.photoId=null;
  transaction.ownerAfterOwnershipTransferred=null;
  transaction.ownerBeforeOwnershipTransferred=null;
  transaction.typeEvent="trade status change";
  transaction.status=event.params.status;
  transaction.address=event.params.ad;

  entity.address=event.params.ad;
  entity.status=event.params.status;
  entity.timestamp = event.block.timestamp;
  entity.blockNumber = event.block.number;
  entity.transaction = transaction.id;
 
  tradeStatus.push(listTradeStatus.id);
  transaction.tradeStatusChange = tradeStatus;
  transaction.save();
  entity.save();

}
