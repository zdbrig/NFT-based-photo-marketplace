// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class photoNFTOwnership extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save photoNFTOwnership entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save photoNFTOwnership entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("photoNFTOwnership", id.toString(), this);
  }

  static load(id: string): photoNFTOwnership | null {
    return store.get("photoNFTOwnership", id) as photoNFTOwnership | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get adressPhotoNFT(): Bytes {
    let value = this.get("adressPhotoNFT");
    return value.toBytes();
  }

  set adressPhotoNFT(value: Bytes) {
    this.set("adressPhotoNFT", Value.fromBytes(value));
  }

  get photoId(): BigInt {
    let value = this.get("photoId");
    return value.toBigInt();
  }

  set photoId(value: BigInt) {
    this.set("photoId", Value.fromBigInt(value));
  }

  get ownerBeforeOwnershipTransferred(): Bytes {
    let value = this.get("ownerBeforeOwnershipTransferred");
    return value.toBytes();
  }

  set ownerBeforeOwnershipTransferred(value: Bytes) {
    this.set("ownerBeforeOwnershipTransferred", Value.fromBytes(value));
  }

  get ownerAfterOwnershipTransferred(): Bytes {
    let value = this.get("ownerAfterOwnershipTransferred");
    return value.toBytes();
  }

  set ownerAfterOwnershipTransferred(value: Bytes) {
    this.set("ownerAfterOwnershipTransferred", Value.fromBytes(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}

export class tradeStatusChange extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save tradeStatusChange entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save tradeStatusChange entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("tradeStatusChange", id.toString(), this);
  }

  static load(id: string): tradeStatusChange | null {
    return store.get("tradeStatusChange", id) as tradeStatusChange | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): BigInt {
    let value = this.get("address");
    return value.toBigInt();
  }

  set address(value: BigInt) {
    this.set("address", Value.fromBigInt(value));
  }

  get status(): Bytes {
    let value = this.get("status");
    return value.toBytes();
  }

  set status(value: Bytes) {
    this.set("status", Value.fromBytes(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}

export class addReputation extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save addReputation entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save addReputation entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("addReputation", id.toString(), this);
  }

  static load(id: string): addReputation | null {
    return store.get("addReputation", id) as addReputation | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get count(): BigInt {
    let value = this.get("count");
    return value.toBigInt();
  }

  set count(value: BigInt) {
    this.set("count", Value.fromBigInt(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get reputationCount(): BigInt {
    let value = this.get("reputationCount");
    return value.toBigInt();
  }

  set reputationCount(value: BigInt) {
    this.set("reputationCount", Value.fromBigInt(value));
  }

  get timesTmp(): BigInt {
    let value = this.get("timesTmp");
    return value.toBigInt();
  }

  set timesTmp(value: BigInt) {
    this.set("timesTmp", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }
}

export class photoNFTCreated extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save photoNFTCreated entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save photoNFTCreated entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("photoNFTCreated", id.toString(), this);
  }

  static load(id: string): photoNFTCreated | null {
    return store.get("photoNFTCreated", id) as photoNFTCreated | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get photoNft(): Bytes {
    let value = this.get("photoNft");
    return value.toBytes();
  }

  set photoNft(value: Bytes) {
    this.set("photoNft", Value.fromBytes(value));
  }

  get nftName(): string {
    let value = this.get("nftName");
    return value.toString();
  }

  set nftName(value: string) {
    this.set("nftName", Value.fromString(value));
  }

  get nftSymbol(): string {
    let value = this.get("nftSymbol");
    return value.toString();
  }

  set nftSymbol(value: string) {
    this.set("nftSymbol", Value.fromString(value));
  }

  get photoPrice(): BigInt {
    let value = this.get("photoPrice");
    return value.toBigInt();
  }

  set photoPrice(value: BigInt) {
    this.set("photoPrice", Value.fromBigInt(value));
  }

  get ipfsHashOfPhoto(): string {
    let value = this.get("ipfsHashOfPhoto");
    return value.toString();
  }

  set ipfsHashOfPhoto(value: string) {
    this.set("ipfsHashOfPhoto", Value.fromString(value));
  }

  get timesTmp(): BigInt {
    let value = this.get("timesTmp");
    return value.toBigInt();
  }

  set timesTmp(value: BigInt) {
    this.set("timesTmp", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get status(): string {
    let value = this.get("status");
    return value.toString();
  }

  set status(value: string) {
    this.set("status", Value.fromString(value));
  }
}
