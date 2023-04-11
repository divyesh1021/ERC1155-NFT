// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract NFT is ERC1155,Ownable{

    uint256[] public supplies = [10,100,1000,10000];
    uint256[] public minted = [0,0,0,0];
    uint256[] public TokenRate = [0.01 ether, 0.02 ether ,0.03 ether ,0.04 ether];
    mapping(address => uint256) public Totalbal;
    mapping(uint=>string) private _tokenURIs;

    constructor() ERC1155("https://bafybeiab66pge3pvqwoki6d4vxkkfwno2tynleop5ffwu6kviypuukeway.ipfs.nftstorage.link/metadata/{id}.json"){
        _mint(msg.sender,1,1,"");
        _mint(msg.sender,2,1,"");
        _mint(msg.sender,3,1,"");
        _mint(msg.sender,4,1,"");
    }

    function AddnewToken(uint256 tokenId,uint256 totalSupply, uint256 Price ,string memory tokenURI) public onlyOwner{
        require(tokenId > supplies.length,"This token id is alredy exists");
        _mint(msg.sender,tokenId,1,"");
        _setTokenURI(tokenId,tokenURI);
        supplies.push(totalSupply);
        uint256 mint = totalSupply-totalSupply;
        minted.push(mint);
        uint256 rate = Price;
        TokenRate.push(rate);
    }


    function uri(uint tokenId) override public view returns(string memory){
        return(
            string(abi.encodePacked(
                "https://bafybeickrgyoos6563p6hfvkvnxutxyk4pnbztp3hn7wjc3zdkqqz2375u.ipfs.nftstorage.link/metadata/",
                Strings.toString(tokenId),
                ".json"
            ))
        );
    }   

    function _setTokenURI(uint256 tokenId,string memory tokenURI) public onlyOwner{
        _tokenURIs[tokenId] = tokenURI;
    }

    function tokenURI(uint tokenId) public view returns(string memory){
        return _tokenURIs[tokenId];
    }

    function mintNft(uint256 _id,uint256 _amount) public payable {
        require(_id <= supplies.length,"This token is not available");
        uint256 index = _id - 1 ;
        require(msg.value == TokenRate[index]*_amount,"Not enough ether value");
        require(minted[index] + _amount<=supplies[index],"Out of token limit");
        require(Totalbal[msg.sender]+_amount <= 10,"Don't mint then 10 NFT on this account");
        _mint(msg.sender,_id,_amount,"");
        minted[index] += _amount;
        Totalbal[msg.sender] += _amount;
    }

    function Token_length() view public returns(uint){
        return supplies.length;
    }
    

    function Withdraw() public onlyOwner{
        require(address(this).balance > 0,"Contract balance is 0");
        payable(owner()).transfer(address(this).balance);
    }

    function Contract_Owner() public view returns(address){
        return owner();
    }
    
    function Contract_balance() public view returns(uint){
        return(address(this).balance);
    } 
}


// 0x73aeb03a2817cEFcFB26101F093D7EE177b1dFFA

// 0x82C2cf14150Bc885fE30AEe7480AC2cdc4eA9600

// 0x27F36aA9c0E582689Cb167a619d653ce20929a44