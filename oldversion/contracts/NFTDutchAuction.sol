pragma solidity ^0.5.16;
pragma experimental ABIEncoderV2;
import "./PhotoNFTMarketplace.sol";


// interface IPhotoMarketPlace {
//     function  ownerPhoto (uint photoId ) external view returns (address) ;
//     function  transfertPhotoNFT (PhotoNFT _photoNFT ) external view returns (bool) ;
//     function transfertFromPhotoNFT(address seller , address buyer ,PhotoNFT _photoNFT) external view  returns (bool); 
// }

    

contract NFTDutchAuction {

  struct Auction {
      uint64 id;
      address seller;
      address photoId;
      uint128 startingPrice; // wei
      uint128 endingPrice; // wei
      uint64 duration; // seconds
      uint64 startedAt; // time
  }

  //ERC721 public NFTContract;
  

  uint64 public auctionId; // max is 18446744073709551615

  mapping (address => Auction) internal photoIdToAuction;
  mapping (uint64 => Auction) internal auctionIdToAuction;

//    address payable NFTMarketPlaceContract;
  // TODO: are arrays of structs even possible?
  //       use this for making auctions discoverable
  //mapping(address => Auction[]) internal ownerToAuction;
  //mapping(uint256 => uint256) internal auctionIdToOwnerIndex;

  event AuctionCreated(uint64 auctionId, address photoId,
                      uint256 startingPrice, uint256 endingPrice, uint256 duration);
  event AuctionCancelled(uint64 auctionId, address photoId);
  event AuctionSuccessful(uint64 auctionId, address photoId, uint256 totalPrice, address winner);

  //constructor(address _NFTAddress) public {
   //   NFTContract = ERC721(_NFTAddress);
 // }

//   constructor(address _NFTMarketPlaceAddress) public {
//       NFTMarketPlaceContract = _NFTMarketPlaceAddress;
//   }

  // return ether that is sent to this contract
    address PHOTO_NFT_MARKETPLACE;
   PhotoNFTMarketplace public photoNFTMarketplace;
   

    constructor(address _photoNFTMarketplace) public {
        
        PHOTO_NFT_MARKETPLACE = _photoNFTMarketplace;
    }
  function() external {}

  function createAuction(
      address _photoId, uint256 _startingPrice,
      uint256 _endingPrice, uint256 _duration) public {
      // check storage requirements
      require(_startingPrice < 340282366920938463463374607431768211455); // 128 bits
      require(_endingPrice < 340282366920938463463374607431768211455); // 128 bits
      require(_duration <= 18446744073709551615); // 64 bits

      require(_duration >= 1 minutes);
      PhotoNFTMarketplace instancePhotoNFTMarketplace = PhotoNFTMarketplace(PHOTO_NFT_MARKETPLACE);
      require(instancePhotoNFTMarketplace.ownerPhoto(_photoId) == msg.sender);

      Auction memory auction = Auction(
          uint64(auctionId),
          msg.sender,
          address(_photoId),
          uint128(_startingPrice),
          uint128(_endingPrice),
          uint64(_duration),
          uint64(now)
      );

      photoIdToAuction[_photoId] = auction;
      auctionIdToAuction[auctionId] = auction;

      emit AuctionCreated(
          uint64(auctionId),
          address(_photoId),
          uint256(auction.startingPrice),
          uint256(auction.endingPrice),
          uint256(auction.duration)
      );

      auctionId++;
  }

  function getAuctionByAuctionId(uint64 _auctionId) public view returns (
      uint64 id,
      address seller,
      address photoId,
      uint256 startingPrice,
      uint256 endingPrice,
      uint256 duration,
      uint256 startedAt
  ) {
      Auction storage auction = auctionIdToAuction[_auctionId];
      require(auction.startedAt > 0);
      return (
          auction.id,
          auction.seller,
          auction.photoId,
          auction.startingPrice,
          auction.endingPrice,
          auction.duration,
          auction.startedAt
      );
  }

  function getAuctionByPhotoId(address _photoId) public view returns (
      uint64 id,
      address seller,
      address photoId,
      uint256 startingPrice,
      uint256 endingPrice,
      uint256 duration,
      uint256 startedAt
  ) {
      Auction storage auction = photoIdToAuction[_photoId];
      require(auction.startedAt > 0);
      return (
          auction.id,
          auction.seller,
          auction.photoId,
          auction.startingPrice,
          auction.endingPrice,
          auction.duration,
          auction.startedAt
      );
  }

  function cancelAuctionByAuctionId(uint64 _auctionId) public {
      Auction storage auction = auctionIdToAuction[_auctionId];

      require(auction.startedAt > 0);
      require(msg.sender == auction.seller);

      delete auctionIdToAuction[_auctionId];
      delete photoIdToAuction[auction.photoId];

      emit AuctionCancelled(_auctionId, auction.photoId);
  }

  function cancelAuctionByPhotoId(address _photoId) public {
      Auction storage auction = photoIdToAuction[_photoId];

      require(auction.startedAt > 0);
      require(msg.sender == auction.seller);

      delete auctionIdToAuction[auction.id];
      delete photoIdToAuction[_photoId];

      emit AuctionCancelled(auction.id, auction.photoId);
  }

  function bid(address _photoId) public payable {
      Auction storage auction = photoIdToAuction[_photoId];
      require(auction.startedAt > 0);

      uint256 price = getCurrentPrice(auction);
      require(msg.value >= price);

      address  seller = auction.seller;
      uint64 auctionId_temp = auction.id;

      delete photoIdToAuction[_photoId];
      delete auctionIdToAuction[auction.id];

      if (price > 0) {
          uint256 sellerProceeds = price;
          address payable addressSeller = address(uint160(seller));
          addressSeller.transfer(sellerProceeds);
      }
       PhotoNFTMarketplace instancePhotoNFTMarketplace = PhotoNFTMarketplace(PHOTO_NFT_MARKETPLACE);
    instancePhotoNFTMarketplace.transfertFromPhotoNFT(seller, msg.sender, _photoId);

      emit AuctionSuccessful(auctionId_temp, _photoId, price, msg.sender);
  }

  function getCurrentPriceByAuctionId(uint64 _auctionId) public view returns (uint256) {
      Auction storage auction = auctionIdToAuction[_auctionId];
      return getCurrentPrice(auction);
  }

  function getCurrentPriceByPhotoId(address _photoId) public view returns (uint256) {
      Auction storage auction = photoIdToAuction[_photoId];
      return getCurrentPrice(auction);
  }

  function getCurrentPrice(Auction storage _auction) internal view returns (uint256) {
      require(_auction.startedAt > 0);
      uint256 secondsPassed = 0;

      secondsPassed = now - _auction.startedAt;

      if (secondsPassed >= _auction.duration) {
          return _auction.endingPrice;
      } else {
          int256 totalPriceChange = int256(_auction.endingPrice) - int256(_auction.startingPrice);

          int256 currentPriceChange = totalPriceChange * int256(secondsPassed) / int256(_auction.duration);

          int256 currentPrice = int256(_auction.startingPrice) + currentPriceChange;

          return uint256(currentPrice);
      }
  }
}
