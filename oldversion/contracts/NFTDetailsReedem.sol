pragma solidity ^0.5.16;
pragma experimental ABIEncoderV2;

import { NFTDetailsReedemStorages} from "./nft-data-reedem/commons/NFTDetailsReedemStorages.sol";
import { PhotoNFT } from "./PhotoNFT.sol";


/**
 * @notice - This is the storage contract for photoNFTs
 */
contract NFTDetailsReedem is NFTDetailsReedemStorages{

    address[] public photoAddresses;

    constructor() public {}
     event DetailsRedeem(  PhotoNFT photoNft ,string name,string city ,string firstLine ,string secondLine,string codePostal,string country);  

    /**
     * @notice - Save metadata of a photoNFT
     */
    function saveMetadataOfPhotoNFT(
        //address[] memory _photoAddresses, 
        PhotoNFT _photoNFT, 
        // string memory _photoNFTName, 
        string memory _name, 
        string memory _city, 
        string memory _firstLine, 
        string memory _secondLine,
        string memory _codePostal,
        string memory _country
       
       
    ) public returns (bool) {
      
       NFTDetailsReedem memory detailsReedem = NFTDetailsReedem ({


           photoNFT : _photoNFT,
      name: _name,
        city: _city,
         firstLine: _firstLine,
        
     codePostal:_codePostal,
        secondLine: _secondLine,
        country:_country
        });
        allDetailsReedem.push(detailsReedem);

 
emit DetailsRedeem(_photoNFT, _name, _city,  _firstLine, _codePostal, _secondLine, _country);    
    }

  

    


  

    function getPhotoByNFTAddress(PhotoNFT photoNFT) public view returns (NFTDetailsReedem memory _photo) {
        address PHOTO_NFT = address(photoNFT);

        /// Identify member's index
        uint photoIndex;
        for (uint i=0; i < allDetailsReedem.length; i++) {
            if (address (allDetailsReedem[i].photoNFT) == PHOTO_NFT) {
                photoIndex = i;
            }
        }

        NFTDetailsReedem memory detailsReedem= allDetailsReedem[photoIndex];
        return detailsReedem;
    }

    function getAllDetailsReedem() public view returns ( NFTDetailsReedem[] memory _detailsRedeem) {
        return allDetailsReedem;
    }

}
