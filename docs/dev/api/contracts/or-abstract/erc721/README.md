# ERC721

*Implementation of [ERC721](https://eips.ethereum.org/EIPS/eip-721) Non-Fungible Token Standard, including the Metadata extension, but not including the Enumerable extension, which is available separately as {ERC721Enumerable}.*

#### Traits

`abstract`

#### Code

https://github.com/jbx-protocol/juice-nft-rewards/blob/main/contracts/abstract/ERC721.sol

#### Addresses

Ethereum Mainnet: *Not deployed*

Goerli Testnet: *Not deployed*

#### Interfaces

|Name|Description|
|-|-|
|[**`IERC721`**](https://docs.openzeppelin.com/contracts/3.x/api/token/erc721#IERC721)|Required interface of an ERC721 compliant contract.|
|[**`IERC721Metadata`**](https://docs.openzeppelin.com/contracts/3.x/api/token/erc721#IERC721Metadata)|ERC-721 Non-Fungible Token Standard, optional metadata extension.|

#### Inheritance

|Contract|Description|
|-|-|
|[**`Context`**](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/Context.sol)|Provides information about the current execution context, including the sender of the transaction and its data.|
|[**`ERC165`**](https://docs.openzeppelin.com/contracts/4.x/api/utils#ERC165)|Implementation of the [`IERC165`](https://docs.openzeppelin.com/contracts/4.x/api/utils#IERC165) interface.|

#### Constructor

```
/**
 * @dev Initializes the contract by setting a `name` and a `symbol` to the token collection.
 */
constructor(string memory name_, string memory symbol_) {
  _name = name_;
  _symbol = symbol_;
}
```

- `name_` is the token's name.
- `symbol_` is the token's symbol.

#### Events

|Name|Data|
|-|-|
|[**`Transfer`**](.)|<ul><li>`address indexed from`</li><li>`address indexed to`</li><li>`uint256 indexed tokenId`</li></ul>|
|[**`Approval`**](.)|<ul><li>`address indexed owner`</li><li>`address indexed approved`</li><li>`uint256 indexed tokenId`</li></ul>|
|[**`ApprovalForAll`**](.)|<ul><li>`address indexed owner`</li><li>`address indexed operator`</li><li>`bool approved`</li></ul>|

#### Read

|Function|Definition|
|-|-|
|[**`supportsInterface`**](.)|**Traits**<ul><li>`virtual`</li></ul>**Params**<ul><li>`bytes4 interfaceId`</li></ul>**Returns**<ul><li>`bool`</li></ul>|
|[**`balanceOf`**](.)|**Traits**<ul><li>`virtual`</li></ul>**Params**<ul><li>`address owner`</li></ul>**Returns**<ul><li>`uint256 balance`</li></ul>|
|[**`ownerOf`**](.)|**Traits**<ul><li>`virtual`</li></ul>**Params**<ul><li>`uint256 tokenId`</li></ul>**Returns**<ul><li>`address`</li></ul>|
|[**`name`**](.)|**Traits**<ul><li>`virtual`</li></ul>**Returns**<ul><li>`string memory`</li></ul>|
|[**`symbol`**](.)|**Traits**<ul><li>`virtual`</li></ul>**Returns**<ul><li>`string memory`</li></ul>|
|[**`tokenURI`**](.)|**Traits**<ul><li>`virtual`</li></ul>**Params**<ul><li>`uint256 tokenId`</li></ul>**Returns**<ul><li>`string memory`</li></ul>|
|[**`_baseURI_`**](.)|**Traits**<ul><li>`virtual`</li></ul>**Returns**<ul><li>`string memory`</li></ul>|
|[**`getApproved`**](.)|**Traits**<ul><li>`virtual`</li></ul>**Params**<ul><li>`uint256 tokenId`</li></ul>**Returns**<ul><li>`address`</li></ul>|
|[**`isApprovedForAll`**](.)|**Traits**<ul><li>`virtual`</li></ul>**Params**<ul><li>`address owner`</li><li>`address operator`</li></ul>**Returns**<ul><li>`bool`</li></ul>|

#### Write

|Function|Definition|
|-|-|
|[**`approve`**](.)|**Traits**<ul><li>`virtual`</li></ul>**Params**<ul><li>`address to`</li><li>`uint256 tokenId`</li></ul>|
|[**`setApprovalForAll`**](.)|**Traits**<ul><li>`virtual`</li></ul>**Params**<ul><li>`address operator`</li><li>`bool approved`</li></ul>|
|[**`transferFrom`**](.)|**Traits**<ul><li>`virtual`</li></ul>**Params**<ul><li>`address from`</li><li>`address to`</li><li>`uint256 tokenId`</li></ul>|
|[**`safeTransferFrom`**](.)|**Traits**<ul><li>`virtual`</li></ul>**Params**<ul><li>`address from`</li><li>`address to`</li><li>`uint256 tokenId`</li></ul>|
|[**`safeTransferFrom`**](.)|**Traits**<ul><li>`virtual`</li></ul>**Params**<ul><li>`address from`</li><li>`address to`</li><li>`uint256 tokenId`</li><li>`bytes memory data`</li></ul>|
