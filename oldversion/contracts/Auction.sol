pragma solidity >0.4.17 <0.8.0;

import "./PhotoNFTMarketplace.sol";

import { PhotoNFT } from "./PhotoNFT.sol";

/**
 * @title Auction Repository
 * This contracts allows auctions to be created for non-fungible tokens
 * Moreover, it includes the basic functionalities of an auction house
 */
contract Auction {
 

    // Mapping from auction index to user bids
    mapping(uint256 => Bid[]) public auctionBids;

    // Mapping from owner to a list of owned auctions
   uint64 public auctionId; // max is 18446744073709551615
   event AuctionBid( uint64 auctionId, address photoNft ,address _bidder, uint256 amount);
   event AuctionFinalized(address _owner, uint _auctionId,uint amountPhoto,address winer);
event AuctionCreated(address owner,uint64 auctionId, address photoId,
                      uint256 startingPrice, uint256 endingPrice, uint256 duration,uint64 startedAt,uint endingAuction,bool finalAuction);
  mapping (address => Auction) internal photoIdToAuction;
  mapping (uint64 => Auction) internal auctionIdToAuction;
enum Status { pending, active, finished }
  address PHOTO_NFT_MARKETPLACE;
   PhotoNFTMarketplace public photoNFTMarketplace;
   

    constructor(address _photoNFTMarketplace) public {
        
        PHOTO_NFT_MARKETPLACE = _photoNFTMarketplace;
    }
    // Bid struct to hold bidder and amount
    struct Bid {
        address payable from;
        uint256 amount;
    }

    // Auction struct which holds all the required info


     


     struct Auction {
      uint64 id;
      address payable owner;
      address photoId;
      uint128 startingPrice; // wei
      uint128 endingPrice; // wei
      uint64 duration; // seconds
      uint64 startedAt; // time
      address currentBidOwner;
      uint256 bidCount;
       bool active;
        bool finalized;
      
      

  }

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
          uint64(now),
          address(0),
          uint64(0),
          bool(true),
          bool(false)
     
         
        );
 uint64 endingAuction =( auction.startedAt + auction.duration);
      photoIdToAuction[_photoId] = auction;
      auctionIdToAuction[auctionId] = auction;

      emit AuctionCreated(
          address (auction.owner),
          uint64(auctionId),
          address(_photoId),
          uint256(auction.startingPrice),
          uint256(auction.endingPrice),
          uint256(auction.duration),
          uint64(auction.startedAt) ,
          uint64(endingAuction),
          bool(auction.finalized)

      );

      auctionId++;
  }
 function getCurrentBid(address _photoId) public  view returns(uint256, address) {
         Auction storage auction = photoIdToAuction[_photoId];
        uint64 auctionId_temp = auction.id;
        uint bidsLength = auctionBids[auctionId_temp].length;
        // if there are bids refund the last bid
        if( bidsLength > 0 ) {
            Bid memory lastBid = auctionBids[auctionId_temp][bidsLength - 1];
            return (lastBid.amount, lastBid.from);
        }
        return (0, address(0));
    }
 function bid(address _photoId) public payable {
       Auction storage auction = photoIdToAuction[_photoId];
         uint256 ethAmountSent = msg.value;
        uint64 auctionId_temp = auction.id;
         
    require(auction.owner != msg.sender); 
   
     require(isActive(auctionId_temp));
require(auction.active == true);
     uint bidsLength = auctionBids[auctionId_temp].length;
     
        uint256 tempAmount = auction.startingPrice;
       Bid memory lastBid;
if(ethAmountSent == auction.endingPrice){
    // insert bid 
        Bid memory newBid;
        newBid.from = msg.sender;
        newBid.amount = ethAmountSent;
        auctionBids[auctionId_temp].push(newBid);
      finalizeAuction(_photoId);

        }
        // there are previous bids
        if( bidsLength > 0 ) {
            lastBid = auctionBids[auctionId_temp][bidsLength - 1];
            tempAmount = lastBid.amount;
        }
            if( ethAmountSent < tempAmount ) revert(); 

        //refund the last bidder
        if( bidsLength > 0 ) {
            if(!lastBid.from.send(lastBid.amount)) {
                revert();
            }  
        }
            // insert bid 
        Bid memory newBid;
        newBid.from = msg.sender;
        newBid.amount = ethAmountSent;
        auctionBids[auctionId_temp].push(newBid);
        
       emit AuctionBid(auctionId_temp, _photoId, msg.sender, ethAmountSent);
    }

    event BidSuccess(address _from, uint _auctionId);
function isActive(uint64 index) public view returns (bool) { return getStatus(index) == Status.active; }
function isFinished(uint64 index) public view returns (bool) { return getStatus(index) == Status.finished; }
     
    
    function getStatus(uint64 index) public view returns (Status) {
        Auction storage auction = auctionIdToAuction[index];
        if (now < auction.startedAt) {
            return Status.pending;
        } else if (now < (auction.startedAt + auction.duration)) {
            return Status.active;
        } else if (now > (auction.startedAt + auction.duration)) {
            return Status.finished;
        }
        
    } 
  /**
    * @dev Guarantees msg.sender is owner of the given auction
    * @param _auctionId uint ID of the auction to validate its ownership belongs to msg.sender
    */
    modifier isOwner(uint64 _auctionId) {
        require(auctionIdToAuction[_auctionId].owner == msg.sender);
        _;
    }

    
   

       function cancelAuction(uint64 _auctionId) public isOwner(_auctionId) {
        Auction memory myAuction = auctionIdToAuction[_auctionId];
        uint bidsLength = auctionBids[_auctionId].length;

        // if there are bids refund the last bid
        // if( bidsLength > 0 ) {
            Bid memory lastBid = auctionBids[_auctionId][bidsLength - 1];
        //     if(!lastBid.from.send(lastBid.amount)) {
        //         revert();
        //     }
        // }

        // approve and transfer from this contract to auction owner
         PhotoNFTMarketplace instancePhotoNFTMarketplace = PhotoNFTMarketplace(PHOTO_NFT_MARKETPLACE);
          
            
        instancePhotoNFTMarketplace.approveAndTransfer(myAuction.owner, myAuction.owner, myAuction.photoId,lastBid.amount);
             auctionIdToAuction[_auctionId].active = false;
             
            emit AuctionCanceled(msg.sender, _auctionId);
        
    }// AuctionCanceled is fired when an auction is canceled
    event AuctionCanceled(address _owner, uint _auctionId);

     function finalizeAuction(address _photoId)public payable returns (bool) {
       Auction storage myAuction = photoIdToAuction[_photoId];
         uint64 auctionId =   myAuction.id;
        uint bidsLength = auctionBids[auctionId].length;

if(bidsLength == 0) {
            cancelAuction(auctionId);
        }else{
        
       

            // 2. the money goes to the auction owner
            Bid memory lastBid = auctionBids[auctionId][bidsLength - 1];
            // if(!myAuction.owner.send(lastBid.amount)) {
            //     revert();
            // }


            // approve and transfer from this contract to the bid winner 
myAuction.owner.send(lastBid.amount);
            PhotoNFTMarketplace instancePhotoNFTMarketplace = PhotoNFTMarketplace(PHOTO_NFT_MARKETPLACE);
          
        instancePhotoNFTMarketplace.approveAndTransfer(myAuction.owner, lastBid.from, myAuction.photoId,lastBid.amount);
                photoIdToAuction[_photoId].active = false;
                photoIdToAuction[_photoId].finalized = true;
                emit AuctionFinalized(msg.sender, auctionId,lastBid.amount,lastBid.from);
        }
        
    }

      function getAuctionByPhotoId(address _photoId) public view returns (
      uint64 id,
      address owner,
      address photoId,
      uint256 startingPrice,
      uint256 endingPrice,
      uint256 duration,
      uint256 startedAt,
        bool active,
        bool finalized
      
  ) {
      Auction storage auction = photoIdToAuction[_photoId];
      require(auction.startedAt > 0);
      return (
          auction.id,
          auction.owner,
          auction.photoId,
          auction.startingPrice,
          auction.endingPrice,
          auction.duration,
          auction.startedAt,
          auction.active,
          auction.finalized
      );
  }  

       
        }
        
       
    