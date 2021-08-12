pragma solidity ^0.5.16;
pragma experimental ABIEncoderV2;

import { SafeMath } from "./openzeppelin-solidity/contracts/math/SafeMath.sol";
import { Strings } from "./libraries/Strings.sol";
import { PhotoNFTFactoryStorages } from "./photo-nft-factory/commons/PhotoNFTFactoryStorages.sol";
import { PhotoNFT } from "./PhotoNFT.sol";
import { PhotoNFTMarketplace } from "./PhotoNFTMarketplace.sol";
import { PhotoNFTData } from "./PhotoNFTData.sol";


/**
 * @notice - This is the factory contract for a NFT of photo
 */
contract PhotoNFTFactory is PhotoNFTFactoryStorages {
     event withdrawNFT (PhotoNFT photoNFT,string status);
    using SafeMath for uint256;
    using Strings for string;    

    address[] public photoAddresses;
    address PHOTO_NFT_MARKETPLACE;

    PhotoNFTMarketplace public photoNFTMarketplace;
    PhotoNFTData public photoNFTData;

    constructor(PhotoNFTMarketplace _photoNFTMarketplace, PhotoNFTData _photoNFTData) public {
        photoNFTMarketplace = _photoNFTMarketplace;
        photoNFTData = _photoNFTData;
        PHOTO_NFT_MARKETPLACE = address(photoNFTMarketplace);
    }

    /**
     * @notice - Create a new photoNFT when a seller (owner) upload a photo onto IPFS
     */
    function createNewPhotoNFT(string memory nftName, string memory nftSymbol, uint photoPrice, string memory ipfsHashOfPhoto, string memory addresEmail,uint redevance) public returns (bool) {
        address owner = msg.sender;  
        /// [Note]: Initial owner of photoNFT is msg.sender
        address seller = msg.sender;
        string memory tokenURI = getTokenURI(ipfsHashOfPhoto);  /// [Note]: IPFS hash + URL
        PhotoNFT photoNFT = new PhotoNFT(owner, nftName, nftSymbol, tokenURI, photoPrice, addresEmail, redevance, seller);
        photoAddresses.push(address(photoNFT));

        /// Save metadata of a photoNFT created
        photoNFTData.saveMetadataOfPhotoNFT(photoAddresses, photoNFT,  nftSymbol, msg.sender, photoPrice, ipfsHashOfPhoto, addresEmail,redevance, seller);
        photoNFTData.updateStatus(photoNFT, "Open");
        string memory statusPhoto="mint";
        photoNFTData.updateStatusPhoto(photoNFT, statusPhoto);
        

        emit PhotoNFTCreated(msg.sender, photoNFT, nftName, nftSymbol, photoPrice, ipfsHashOfPhoto, addresEmail,redevance,seller,statusPhoto);
    }

function withdraw(PhotoNFT photoNFT) public {
    string memory status="burn";
    photoNFTData.updateStatusPhoto(photoNFT,status);
    emit withdrawNFT (photoNFT, status);
}


    ///-----------------
    /// Getter methods
    ///-----------------
    function baseTokenURI() public pure returns (string memory) {
        return "https://ipfs.io/ipfs/";
    }

    function getTokenURI(string memory _ipfsHashOfPhoto) public view returns (string memory) {
        return Strings.strConcat(baseTokenURI(), _ipfsHashOfPhoto);
    }

}
