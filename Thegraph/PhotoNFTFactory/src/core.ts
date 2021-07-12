/* eslint-disable prefer-const */
import {
    log,
    BigInt,
    BigDecimal,
    store,
    Address,
  } from "@graphprotocol/graph-ts";
  import {
    AddedReputation,
    AllPhotoNFT
  } from "../generated/schema";
  import {
    Approval,
    ApprovalForAll,
    Transfer
  } from "../generated/templates/PhotoNFT/PhotoNFT";

  export function handleTransfer(event: Transfer): void {
      
  }
  export function handleApproval(event: Approval): void {}
  export function handleApprovalForAll(event: ApprovalForAll): void {}

