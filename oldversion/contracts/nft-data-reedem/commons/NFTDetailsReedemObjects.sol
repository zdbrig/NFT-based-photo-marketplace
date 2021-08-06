pragma solidity ^0.5.0;

import { PhotoNFT } from "../../PhotoNFT.sol";


contract NFTDetailsReedemObjects {

    struct NFTDetailsReedem{  
        PhotoNFT photoNFT;
        string name;
        string city;
        string firstLine;
        string codePostal;
        string secondLine;
        string country;
        string addressEmail;
        
    }

}