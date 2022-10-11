# JBTiered721Delegate

*Delegate that offers project contributors NFTs with tiered price floors upon payment and the ability to redeem NFTs for treasury assets based based on price floor.*

#### Code

https://github.com/jbx-protocol/juice-nft-rewards/blob/main/contracts/JBTiered721Delegate.sol

#### Addresses

Ethereum Mainnet: *Not deployed*

Goerli Testnet: *Not deployed*

#### Interfaces

|Name|Description|
|-|-|
|[**`IJBTiered721Delegate`**](/dev/api/interfaces/ijbtiered721delegate)|General interface for the methods in this contract that interact with the blockchain's state according to the protocol's rules.|
#### Inheritance

|Contract|Description|
|-|-|
|[**`JB721Delegate`**](/dev/api/contracts/or-delegates/or-abstract/jb721delegate/)|Delegate that offers project contributors NFTs upon payment and the ability to redeem NFTs for treasury assets.|
|[**`Votes`**](/dev/api/contracts/or-delegates/or-abstract/votes/)|Customized implementation of OpenZeppelin's [IVotes](https://docs.openzeppelin.com/contracts/4.x/api/governance#Votes)|
|[**`Ownable`**](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol)|Contract module which provides a basic access control mechanism, where there is an account (an owner) that can be granted exclusive access to specific functions.|

#### Constructor

```
/**
  @param _projectId The ID of the project this contract's functionality applies to.
  @param _directory The directory of terminals and controllers for projects.
  @param _name The name of the token.
  @param _symbol The symbol that the token should be represented by.
  @param _fundingCycleStore A contract storing all funding cycle configurations.
  @param _baseUri A URI to use as a base for full token URIs.
  @param _tokenUriResolver A contract responsible for resolving the token URI for each token ID.
  @param _contractUri A URI where contract metadata can be found. 
  @param _pricing The tier pricing according to which token distribution will be made. Must be passed in order of contribution floor, with implied increasing value.
  @param _store A contract that stores the NFT's data.
  @param _flags A set of flags that help define how this contract works.
*/
constructor(
  uint256 _projectId,
  IJBDirectory _directory,
  string memory _name,
  string memory _symbol,
  IJBFundingCycleStore _fundingCycleStore,
  string memory _baseUri,
  IJBTokenUriResolver _tokenUriResolver,
  string memory _contractUri,
  JB721PricingParams memory _pricing,
  IJBTiered721DelegateStore _store,
  JBTiered721Flags memory _flags
) JB721Delegate(_projectId, _directory, _name, _symbol) EIP712(_name, '1') {
  fundingCycleStore = _fundingCycleStore;
  store = _store;
  pricingCurrency = _pricing.currency;
  pricingDecimals = _pricing.decimals;
  prices = _pricing.prices;

  // Store the base URI if provided.
  if (bytes(_baseUri).length != 0) _store.recordSetBaseUri(_baseUri);

  // Set the contract URI if provided.
  if (bytes(_contractUri).length != 0) _store.recordSetContractUri(_contractUri);

  // Set the token URI resolver if provided.
  if (_tokenUriResolver != IJBTokenUriResolver(address(0)))
    _store.recordSetTokenUriResolver(_tokenUriResolver);

  // Record adding the provided tiers.
  if (_pricing.tiers.length > 0) _store.recordAddTiers(_pricing.tiers);

  // Set the flags if needed.
  if (
    _flags.lockReservedTokenChanges ||
    _flags.lockVotingUnitChanges ||
    _flags.lockManualMintingChanges ||
    _flags.pausable
  ) _store.recordFlags(_flags);
}
```

#### Events

|Name|Data|
|-|-|
|[**`RemoveTier`**](.)|<ul><li>`uint256 indexed tierId`</li><li>`address caller`</li></ul>|
|[**`AddTier`**](.)|<ul><li>`uint256 indexed tierId`</li><li>[`JB721TierParams`](/dev/api/data-structures/jb721tierparams) `data`</li><li>`address caller`</li></ul>|
|[**`SetDefaultReservedTokenBeneficiary`**](.)|<ul><li>`address indexed beneficiary`</li><li>`address caller`</li></ul>|
|[**`SetBaseUri`**](.)|<ul><li>`string indexed baseUri`</li><li>`address caller`</li></ul>|
|[**`SetContractUri`**](.)|<ul><li>`string indexed contractUri`</li><li>`address caller`</li></ul>|
|[**`SetTokenUriResolver`**](.)|<ul><li>[`IJBTokenUriResolver`](/dev/api/interfaces/ijbtokenuriresolver) `indexed newResolver`</li><li>`address caller`</li></ul>|
|[**`MintReservedToken`**](.)|<ul><li>`uint256 indexed tokenId`</li><li>`uint256 indexed tierId`</li><li>`address indexed beneficiary`</li><li>`address caller`</li></ul>|
|[**`Mint`**](.)|<ul><li>`uint256 indexed tokenId`</li><li>`uint256 indexed tierId`</li><li>`address indexed beneficiary`</li><li>`uint256 totalAmountContributed`</li><li>`address caller`</li></ul>|
|[**`DelegateChanged`**](.)|<ul><li>`address indexed delegator`</li><li>`address indexed fromDelegate`</li><li>`address indexed toDelegate`</li></ul>|
|[**`TierDelegateVotesChanged`**](.)|<ul><li>`address indexed delegate`</li><li>`uint256 indexed tierId`</li><li>`uint256 previousBalance`</li><li>`uint256 newBalance`</li><li>`address callre`</li></ul>|

#### Properties

|Name|Definition|
|-|-|
|[**`store`**](.)|**Traits**<ul><li>`immutable`</li></ul>**Returns**<ul><li>[`IJBTiered721DelegateStore`](/dev/api/interfaces/ijbtiered721delegatestore)</li></ul>|
|[**`fundingCycleStore`**](.)|**Traits**<ul><li>`immutable`</li></ul>**Returns**<ul><li>[`IJBFundingCycleStore`](/dev/api/interfaces/ijbfundingcyclestore)</li></ul>|
|[**`prices`**](.)|**Traits**<ul><li>`immutable`</li></ul>**Returns**<ul><li>[`IJBPrices`](/dev/api/interfaces/ijbprices)</li></ul>|
|[**`pricingCurrency`**](.)|**Traits**<ul><li>`immutable`</li></ul>**Returns**<ul><li>`uint256`</li></ul>|
|[**`pricingDecimals`**](.)|**Traits**<ul><li>`immutable`</li></ul>**Returns**<ul><li>`uint256`</li></ul>|
|[**`creditsOf`**](.)|**Params**<ul><li>`address _address`</li></ul>**Returns**<ul><li>`uint256`</li></ul>|

#### Read

|Function|Definition|
|-|-|
|[**`balanceOf`**](.)|**Params**<ul><li>`address _owner`</li></ul>**Returns**<ul><li>`uint256 balance`</li></ul>|
|[**`firstOwnerOf`**](.)|**Params**<ul><li>`uint256 _tokenId`</li></ul>**Returns**<ul><li>`address`</li></ul>|
|[**`tokenURI`**](.)|**Params**<ul><li>`uint256 _tokenId`</li></ul>**Returns**<ul><li>`string memory`</li></ul>|
|[**`contractURI`**](.)|**Returns**<ul><li>`string memory`</li></ul>|
|[**`getTierDelegate`**](.)|**Params**<ul><li>`address _account`</li><li>`uint256 _tier`</li></ul>**Returns**<ul><li>`address`</li></ul>|
|[**`getTierVotes`**](.)|**Params**<ul><li>`address _account`</li><li>`uint256 _tier`</li></ul>**Returns**<ul><li>`uint256`</li></ul>|
|[**`getPastTierVotes`**](.)|**Params**<ul><li>`address _account`</li><li>`uint256 _tier`</li><li>`uint256 _blockNumber`</li></ul>**Returns**<ul><li>`uint256`</li></ul>|
|[**`getTierTotalVotes`**](.)|**Params**<ul><li>`uint256 _tier`</li></ul>**Returns**<ul><li>`uint256`</li></ul>|
|[**`getPastTierTotalVotes`**](.)|**Params**<ul><li>`uint256 _tier`</li><li>`uint256 _blockNumber`</li></ul>**Returns**<ul><li>`uint256`</li></ul>|
|[**`supportsInterface`**](.)|**Params**<ul><li>`bytes4 _interfaceId`</li></ul>**Returns**<ul><li>`bool`</li></ul>|

#### Write

|Function|Definition|
|-|-|
|[**`mintReservesFor`**](.)|**Params**<ul><li>[`JBTiered721MintReservesForTiersData[]`](/dev/api/data-structures/jbtiered721mintreservesfortiersdata) `memory _mintReservesForTiersData`</li></ul>|
|[**`mintFor`**](.)|**Traits**<ul><li>[`onlyOwner`](.)</li></ul>**Params**<ul><li>[`JBTiered721MintReservesForTiersData[]`](/dev/api/data-structures/jbtiered721mintreservesfortiersdata) `memory _mintForTiersData`</li></ul>|
|[**`adjustTiers`**](.)|**Traits**<ul><li>[`onlyOwner`](.)</li></ul>**Params**<ul><li>[`JB721TierParams[]`](/dev/api/data-structures/jb721tierparams) `calldata _tiersToAdd`</li><li>`uint256[] calldata _tierIdsToRemove`</li></ul>|
|[**`setDefaultReservedTokenBeneficiary`**](.)|**Traits**<ul><li>[`onlyOwner`](.)</li></ul>**Params**<ul><li>`address _beneficiary`</li></ul>|
|[**`setBaseUri`**](.)|**Traits**<ul><li>[`onlyOwner`](.)</li></ul>**Params**<ul><li>`string memory _baseUri`</li></ul>|
|[**`setContractUri`**](.)|**Traits**<ul><li>[`onlyOwner`](.)</li></ul>**Params**<ul><li>`string calldata _contractUri`</li></ul>|
|[**`setTokenUriResolver`**](.)|**Traits**<ul><li>[`onlyOwner`](.)</li></ul>**Params**<ul><li>[`IJBTokenUriResolver`](/dev/api/interfaces/ijbtokenuriresolver) `_tokenUriResolver`</li></ul>|
|[**`mintReservesFor`**](.)|**Params**<ul><li>`uint256 _tierId`</li><li>`uint256 _count`</li></ul>|
|[**`mintFor`**](.)|**Traits**<ul><li>[`onlyOwner`](.)</li></ul>**Params**<ul><li>`uint16[] memory _tierIds`</li><li>`address _beneficiary`</li></ul>**Returns**<ul><li>`uint256[] memory tokenIds`</li></ul>|
|[**`setTierDelegate`**](.)|**Traits**<ul><li>`virtual`</li></ul>**Params**<ul><li>`address _delegatee`</li><li>`uint256 _tierId`</li></ul>|
