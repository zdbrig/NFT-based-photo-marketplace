// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class PhotoNFTOwnershipChanged extends ethereum.Event {
  get params(): PhotoNFTOwnershipChanged__Params {
    return new PhotoNFTOwnershipChanged__Params(this);
  }
}

export class PhotoNFTOwnershipChanged__Params {
  _event: PhotoNFTOwnershipChanged;

  constructor(event: PhotoNFTOwnershipChanged) {
    this._event = event;
  }

  get photoNFT(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get photoId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get ownerBeforeOwnershipTransferred(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get ownerAfterOwnershipTransferred(): Address {
    return this._event.parameters[3].value.toAddress();
  }
}

export class TradeStatusChange extends ethereum.Event {
  get params(): TradeStatusChange__Params {
    return new TradeStatusChange__Params(this);
  }
}

export class TradeStatusChange__Params {
  _event: TradeStatusChange;

  constructor(event: TradeStatusChange) {
    this._event = event;
  }

  get ad(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get status(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }
}

export class PhotoNFTMarketplace__getTradeResultTrade_Struct extends ethereum.Tuple {
  get seller(): Address {
    return this[0].toAddress();
  }

  get photoId(): BigInt {
    return this[1].toBigInt();
  }

  get photoPrice(): BigInt {
    return this[2].toBigInt();
  }

  get status(): Bytes {
    return this[3].toBytes();
  }
}

export class PhotoNFTMarketplace__tradesResult {
  value0: Address;
  value1: BigInt;
  value2: BigInt;
  value3: Bytes;

  constructor(value0: Address, value1: BigInt, value2: BigInt, value3: Bytes) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromFixedBytes(this.value3));
    return map;
  }
}

export class PhotoNFTMarketplace__reputationResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }
}

export class PhotoNFTMarketplace extends ethereum.SmartContract {
  static bind(address: Address): PhotoNFTMarketplace {
    return new PhotoNFTMarketplace("PhotoNFTMarketplace", address);
  }

  PHOTO_NFT_MARKETPLACE(): Address {
    let result = super.call(
      "PHOTO_NFT_MARKETPLACE",
      "PHOTO_NFT_MARKETPLACE():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_PHOTO_NFT_MARKETPLACE(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "PHOTO_NFT_MARKETPLACE",
      "PHOTO_NFT_MARKETPLACE():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getTrade(_photoId: BigInt): PhotoNFTMarketplace__getTradeResultTrade_Struct {
    let result = super.call(
      "getTrade",
      "getTrade(uint256):((address,uint256,uint256,bytes32))",
      [ethereum.Value.fromUnsignedBigInt(_photoId)]
    );

    return result[0].toTuple() as PhotoNFTMarketplace__getTradeResultTrade_Struct;
  }

  try_getTrade(
    _photoId: BigInt
  ): ethereum.CallResult<PhotoNFTMarketplace__getTradeResultTrade_Struct> {
    let result = super.tryCall(
      "getTrade",
      "getTrade(uint256):((address,uint256,uint256,bytes32))",
      [ethereum.Value.fromUnsignedBigInt(_photoId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTuple() as PhotoNFTMarketplace__getTradeResultTrade_Struct
    );
  }

  photoNFT(): Address {
    let result = super.call("photoNFT", "photoNFT():(address)", []);

    return result[0].toAddress();
  }

  try_photoNFT(): ethereum.CallResult<Address> {
    let result = super.tryCall("photoNFT", "photoNFT():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  photoNFTData(): Address {
    let result = super.call("photoNFTData", "photoNFTData():(address)", []);

    return result[0].toAddress();
  }

  try_photoNFTData(): ethereum.CallResult<Address> {
    let result = super.tryCall("photoNFTData", "photoNFTData():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  trades(param0: BigInt): PhotoNFTMarketplace__tradesResult {
    let result = super.call(
      "trades",
      "trades(uint256):(address,uint256,uint256,bytes32)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new PhotoNFTMarketplace__tradesResult(
      result[0].toAddress(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBytes()
    );
  }

  try_trades(
    param0: BigInt
  ): ethereum.CallResult<PhotoNFTMarketplace__tradesResult> {
    let result = super.tryCall(
      "trades",
      "trades(uint256):(address,uint256,uint256,bytes32)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new PhotoNFTMarketplace__tradesResult(
        value[0].toAddress(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBytes()
      )
    );
  }

  ownerPhoto(_photoNFT: Address): Address {
    let result = super.call("ownerPhoto", "ownerPhoto(address):(address)", [
      ethereum.Value.fromAddress(_photoNFT)
    ]);

    return result[0].toAddress();
  }

  try_ownerPhoto(_photoNFT: Address): ethereum.CallResult<Address> {
    let result = super.tryCall("ownerPhoto", "ownerPhoto(address):(address)", [
      ethereum.Value.fromAddress(_photoNFT)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  reputation(
    from: Address,
    to: Address,
    photoId: BigInt
  ): PhotoNFTMarketplace__reputationResult {
    let result = super.call(
      "reputation",
      "reputation(address,address,uint256):(uint256,uint256)",
      [
        ethereum.Value.fromAddress(from),
        ethereum.Value.fromAddress(to),
        ethereum.Value.fromUnsignedBigInt(photoId)
      ]
    );

    return new PhotoNFTMarketplace__reputationResult(
      result[0].toBigInt(),
      result[1].toBigInt()
    );
  }

  try_reputation(
    from: Address,
    to: Address,
    photoId: BigInt
  ): ethereum.CallResult<PhotoNFTMarketplace__reputationResult> {
    let result = super.tryCall(
      "reputation",
      "reputation(address,address,uint256):(uint256,uint256)",
      [
        ethereum.Value.fromAddress(from),
        ethereum.Value.fromAddress(to),
        ethereum.Value.fromUnsignedBigInt(photoId)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new PhotoNFTMarketplace__reputationResult(
        value[0].toBigInt(),
        value[1].toBigInt()
      )
    );
  }

  getReputationCount(photoId: BigInt): BigInt {
    let result = super.call(
      "getReputationCount",
      "getReputationCount(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(photoId)]
    );

    return result[0].toBigInt();
  }

  try_getReputationCount(photoId: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getReputationCount",
      "getReputationCount(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(photoId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _photoNFTData(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class CancelTradeCall extends ethereum.Call {
  get inputs(): CancelTradeCall__Inputs {
    return new CancelTradeCall__Inputs(this);
  }

  get outputs(): CancelTradeCall__Outputs {
    return new CancelTradeCall__Outputs(this);
  }
}

export class CancelTradeCall__Inputs {
  _call: CancelTradeCall;

  constructor(call: CancelTradeCall) {
    this._call = call;
  }

  get photoNFT(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _photoId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class CancelTradeCall__Outputs {
  _call: CancelTradeCall;

  constructor(call: CancelTradeCall) {
    this._call = call;
  }
}

export class OpenTradeCall extends ethereum.Call {
  get inputs(): OpenTradeCall__Inputs {
    return new OpenTradeCall__Inputs(this);
  }

  get outputs(): OpenTradeCall__Outputs {
    return new OpenTradeCall__Outputs(this);
  }
}

export class OpenTradeCall__Inputs {
  _call: OpenTradeCall;

  constructor(call: OpenTradeCall) {
    this._call = call;
  }

  get photoNFT(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _photoId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class OpenTradeCall__Outputs {
  _call: OpenTradeCall;

  constructor(call: OpenTradeCall) {
    this._call = call;
  }
}

export class OpenTradeWhenCreateNewPhotoNFTCall extends ethereum.Call {
  get inputs(): OpenTradeWhenCreateNewPhotoNFTCall__Inputs {
    return new OpenTradeWhenCreateNewPhotoNFTCall__Inputs(this);
  }

  get outputs(): OpenTradeWhenCreateNewPhotoNFTCall__Outputs {
    return new OpenTradeWhenCreateNewPhotoNFTCall__Outputs(this);
  }
}

export class OpenTradeWhenCreateNewPhotoNFTCall__Inputs {
  _call: OpenTradeWhenCreateNewPhotoNFTCall;

  constructor(call: OpenTradeWhenCreateNewPhotoNFTCall) {
    this._call = call;
  }

  get photoNFT(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _photoId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _photoPrice(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class OpenTradeWhenCreateNewPhotoNFTCall__Outputs {
  _call: OpenTradeWhenCreateNewPhotoNFTCall;

  constructor(call: OpenTradeWhenCreateNewPhotoNFTCall) {
    this._call = call;
  }
}

export class TransferOwnershipOfPhotoNFTCall extends ethereum.Call {
  get inputs(): TransferOwnershipOfPhotoNFTCall__Inputs {
    return new TransferOwnershipOfPhotoNFTCall__Inputs(this);
  }

  get outputs(): TransferOwnershipOfPhotoNFTCall__Outputs {
    return new TransferOwnershipOfPhotoNFTCall__Outputs(this);
  }
}

export class TransferOwnershipOfPhotoNFTCall__Inputs {
  _call: TransferOwnershipOfPhotoNFTCall;

  constructor(call: TransferOwnershipOfPhotoNFTCall) {
    this._call = call;
  }

  get _photoNFT(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _photoId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _buyer(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class TransferOwnershipOfPhotoNFTCall__Outputs {
  _call: TransferOwnershipOfPhotoNFTCall;

  constructor(call: TransferOwnershipOfPhotoNFTCall) {
    this._call = call;
  }
}

export class OwnerPhotoCall extends ethereum.Call {
  get inputs(): OwnerPhotoCall__Inputs {
    return new OwnerPhotoCall__Inputs(this);
  }

  get outputs(): OwnerPhotoCall__Outputs {
    return new OwnerPhotoCall__Outputs(this);
  }
}

export class OwnerPhotoCall__Inputs {
  _call: OwnerPhotoCall;

  constructor(call: OwnerPhotoCall) {
    this._call = call;
  }

  get _photoNFT(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class OwnerPhotoCall__Outputs {
  _call: OwnerPhotoCall;

  constructor(call: OwnerPhotoCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class BuyPhotoNFTCall extends ethereum.Call {
  get inputs(): BuyPhotoNFTCall__Inputs {
    return new BuyPhotoNFTCall__Inputs(this);
  }

  get outputs(): BuyPhotoNFTCall__Outputs {
    return new BuyPhotoNFTCall__Outputs(this);
  }
}

export class BuyPhotoNFTCall__Inputs {
  _call: BuyPhotoNFTCall;

  constructor(call: BuyPhotoNFTCall) {
    this._call = call;
  }

  get _photoNFT(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class BuyPhotoNFTCall__Outputs {
  _call: BuyPhotoNFTCall;

  constructor(call: BuyPhotoNFTCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class TransfertPhotoNFTCall extends ethereum.Call {
  get inputs(): TransfertPhotoNFTCall__Inputs {
    return new TransfertPhotoNFTCall__Inputs(this);
  }

  get outputs(): TransfertPhotoNFTCall__Outputs {
    return new TransfertPhotoNFTCall__Outputs(this);
  }
}

export class TransfertPhotoNFTCall__Inputs {
  _call: TransfertPhotoNFTCall;

  constructor(call: TransfertPhotoNFTCall) {
    this._call = call;
  }

  get _photoNFT(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransfertPhotoNFTCall__Outputs {
  _call: TransfertPhotoNFTCall;

  constructor(call: TransfertPhotoNFTCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class TransfertFromPhotoNFTCall extends ethereum.Call {
  get inputs(): TransfertFromPhotoNFTCall__Inputs {
    return new TransfertFromPhotoNFTCall__Inputs(this);
  }

  get outputs(): TransfertFromPhotoNFTCall__Outputs {
    return new TransfertFromPhotoNFTCall__Outputs(this);
  }
}

export class TransfertFromPhotoNFTCall__Inputs {
  _call: TransfertFromPhotoNFTCall;

  constructor(call: TransfertFromPhotoNFTCall) {
    this._call = call;
  }

  get seller(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get buyer(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _photoNFT(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class TransfertFromPhotoNFTCall__Outputs {
  _call: TransfertFromPhotoNFTCall;

  constructor(call: TransfertFromPhotoNFTCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class ReputationCall extends ethereum.Call {
  get inputs(): ReputationCall__Inputs {
    return new ReputationCall__Inputs(this);
  }

  get outputs(): ReputationCall__Outputs {
    return new ReputationCall__Outputs(this);
  }
}

export class ReputationCall__Inputs {
  _call: ReputationCall;

  constructor(call: ReputationCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get photoId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class ReputationCall__Outputs {
  _call: ReputationCall;

  constructor(call: ReputationCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }

  get value1(): BigInt {
    return this._call.outputValues[1].value.toBigInt();
  }
}
