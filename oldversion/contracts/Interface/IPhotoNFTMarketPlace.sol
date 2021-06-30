pragma solidity ^0.5.16;


import { PhotoNFT } from "../PhotoNFT.sol";


interface IPhotoMarketPlace {
    function  ownerPhoto (uint photoId ) external view returns (address) ;
    function  transfertPhotoNFT (PhotoNFT _photoNFT ) external view returns (bool) ;
    function transfertFromPhotoNFT(address seller , address buyer ,PhotoNFT _photoNFT) external view  returns (bool); 
}