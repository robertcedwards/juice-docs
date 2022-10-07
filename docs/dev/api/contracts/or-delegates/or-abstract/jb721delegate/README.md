# JB721Delegate

*Delegate that offers project contributors NFTs upon payment and the ability to redeem NFTs for treasury assets.*

#### Code

https://github.com/jbx-protocol/juice-nft-rewards/blob/main/contracts/abstract/JB721Delegate.sol

#### Addresses

Ethereum Mainnet: *Not deployed*

Goerli Testnet: *Not deployed*

#### Interfaces

|Name|Description|
|-|-|
|[**`IJB721Delegate`**](.)|General interface for the methods in this contract that interact with the blockchain's state according to the protocol's rules.|
|[**`IJBFundingCycleDataSource`**](https://info.juicebox.money/dev/api/interfaces/ijbfundingcycledatasource/)|Allows this contract to be attached to a funding cycle to have its methods called during regular protocol operations.|
|[**`IJBPayDelegate`**](https://info.juicebox.money/dev/api/interfaces/ijbpaydelegate/)|Allows this contract to receive callbacks when a project receives a payment.|
|[**`IJBRedemptionDelegate`**](https://info.juicebox.money/dev/api/interfaces/ijbredemptiondelegate/)|Allows this contract to receive callbacks when a project receives a redemption.|

#### Inheritance

|Contract|Description|
|-|-|
|[**`ERC721`**](.)|Implementation of [ERC721](https://eips.ethereum.org/EIPS/eip-721) Non-Fungible Token Standard, including the Metadata extension, but not including the Enumerable extension, which is available separately as `ERC721Enumerable`.|

#### Constructor

```
/**
  @param _projectId The ID of the project this contract's functionality applies to.
  @param _directory The directory of terminals and controllers for projects.
  @param _name The name of the token.
  @param _symbol The symbol that the token should be represented by.
*/
constructor(
  uint256 _projectId,
  IJBDirectory _directory,
  string memory _name,
  string memory _symbol
) ERC721(_name, _symbol) {
  projectId = _projectId;
  directory = _directory;
}
```

- `_projectId` denotes the ID of the project this contract's functionality applies to.
- `_directory` is an `IJBDirectory` which denotes the directory of terminals and controllers for projects.
- `_name` is the name of the token.
- `_symbol` is the symbol that the token should be represented by.

#### Properties

|Name|Definition|
|-|-|
|[**`projectId`**](.)|**Traits**<ul><li>`immutable`</li></ul>**Returns**<ul><li>`uint256`</li></ul>|
|[**`directory`**](.)|**Traits**<ul><li>`immutable`</li></ul>**Returns**<ul><li>[`IJBDirectory`](/dev/api/interfaces/ijbdirectory/)</li></ul>|

#### Read

|Function|Definition|
|-|-|
|[**`payParams`**](.)|**Params**<ul><li>`JBPayParamsData calldata _data`</li></ul>**Returns**<ul><li>`uint256 weight`</li><li>`string memory memo`</li><li>`JBPayDelegateAllocation[] memory delegateAllocations`</li></ul>|
|[**`redeemParams`**](.)|**Params**<ul><li>`JBRedeemParamsData calldata _data`</li></ul>**Returns**<ul><li>`uint256 reclaimAmount,`</li><li>`string memory memo,`</li><li>`JBRedemptionDelegateAllocation[] memory delegateAllocations`</li></ul>|
|[**`supportsInterface`**](.)|**Params**<ul><li>`bytes4 _interfaceId`</li></ul>**Returns**<ul><li>`bool`</li></ul>|

#### Write

|Function|Definition|
|-|-|
|[**`didPay`**](.)|**Traits**<ul><li>`payable`</li><li>`virtual`</li></ul>**Params**<ul><li>`JBDidPayData calldata _data`</li></ul>|
|[**`didRedeem`**](.)|**Traits**<ul><li>`payable`</li><li>`virtual`</li></ul>**Params**<ul><li>`JBDidRedeemData calldata _data`</li></ul>|
