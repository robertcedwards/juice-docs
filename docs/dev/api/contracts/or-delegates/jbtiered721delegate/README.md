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
|[**`Ownable`**](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol)|Contract module which provides a basic access control mechanism, where there is an account (an owner) that can be granted exclusive access to specific functions.|

#### Constructor

```
constructor() {
  _codeOrigin = address(this);
}

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
function initialize(
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
) public override {
  // Make the original un-initializable.
  require(address(this) != _codeOrigin);
  // Stop re-initialization.
  require(address(store) == address(0));

  // Initialize the sub class.
  JB721Delegate._initialize(_projectId, _directory, _name, _symbol);

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

  // Transfer ownership to the initializer.
  _transferOwnership(msg.sender);
}
```

#### Events

|Name|Data|
|-|-|
|[**`RemoveTier`**](events/removetier)|<ul><li>`uint256 indexed tierId`</li><li>`address caller`</li></ul>|
|[**`AddTier`**](events/addtier)|<ul><li>`uint256 indexed tierId`</li><li>[`JB721TierParams`](/dev/api/data-structures/jb721tierparams) `data`</li><li>`address caller`</li></ul>|
|[**`SetDefaultReservedTokenBeneficiary`**](events/setdefaultreservedtokenbeneficiary)|<ul><li>`address indexed beneficiary`</li><li>`address caller`</li></ul>|
|[**`SetBaseUri`**](events/setbaseuri)|<ul><li>`string indexed baseUri`</li><li>`address caller`</li></ul>|
|[**`SetContractUri`**](events/setcontracturi)|<ul><li>`string indexed contractUri`</li><li>`address caller`</li></ul>|
|[**`SetTokenUriResolver`**](events/settokenuriresolver)|<ul><li>[`IJBTokenUriResolver`](/dev/api/interfaces/ijbtokenuriresolver) `indexed newResolver`</li><li>`address caller`</li></ul>|
|[**`MintReservedToken`**](events/mintreservedtoken)|<ul><li>`uint256 indexed tokenId`</li><li>`uint256 indexed tierId`</li><li>`address indexed beneficiary`</li><li>`address caller`</li></ul>|
|[**`Mint`**](events/mint)|<ul><li>`uint256 indexed tokenId`</li><li>`uint256 indexed tierId`</li><li>`address indexed beneficiary`</li><li>`uint256 totalAmountContributed`</li><li>`address caller`</li></ul>|

#### Properties

|Name|Definition|
|-|-|
|[**`store`**](properties/store)|**Traits**<ul><li>`immutable`</li></ul>**Returns**<ul><li>[`IJBTiered721DelegateStore`](/dev/api/interfaces/ijbtiered721delegatestore)</li></ul>|
|[**`fundingCycleStore`**](properties/fundingcyclestore)|**Traits**<ul><li>`immutable`</li></ul>**Returns**<ul><li>[`IJBFundingCycleStore`](/dev/api/interfaces/ijbfundingcyclestore)</li></ul>|
|[**`prices`**](properties/prices)|**Traits**<ul><li>`immutable`</li></ul>**Returns**<ul><li>[`IJBPrices`](/dev/api/interfaces/ijbprices)</li></ul>|
|[**`pricingCurrency`**](properties/pricingcurrency)|**Traits**<ul><li>`immutable`</li></ul>**Returns**<ul><li>`uint256`</li></ul>|
|[**`pricingDecimals`**](properties/pricingdecimals)|**Traits**<ul><li>`immutable`</li></ul>**Returns**<ul><li>`uint256`</li></ul>|
|[**`creditsOf`**](properties/creditsof)|**Params**<ul><li>`address _address`</li></ul>**Returns**<ul><li>`uint256`</li></ul>|

#### Read

|Function|Definition|
|-|-|
|[**`firstOwnerOf`**](read/firstownerof)|**Params**<ul><li>`uint256 _tokenId`</li></ul>**Returns**<ul><li>`address`</li></ul>|
|[**`balanceOf`**](read/balanceof)|**Params**<ul><li>`address _owner`</li></ul>**Returns**<ul><li>`uint256 balance`</li></ul>|
|[**`tokenURI`**](read/tokenuri)|**Params**<ul><li>`uint256 _tokenId`</li></ul>**Returns**<ul><li>`string memory`</li></ul>|
|[**`contractURI`**](read/contracturi)|**Returns**<ul><li>`string memory`</li></ul>|
|[**`supportsInterface`**](read/supportsinterface)|**Params**<ul><li>`bytes4 _interfaceId`</li></ul>**Returns**<ul><li>`bool`</li></ul>|

#### Write

|Function|Definition|
|-|-|
|[**`mintReservesFor`**](write/mintreservesfore)|**Params**<ul><li>[`JBTiered721MintReservesForTiersData[]`](/dev/api/data-structures/jbtiered721mintreservesfortiersdata) `memory _mintReservesForTiersData`</li></ul>|
|[**`mintFor`**](write/mintfor)|**Traits**<ul><li>[`onlyOwner`](.)</li></ul>**Params**<ul><li>[`JBTiered721MintReservesForTiersData[]`](/dev/api/data-structures/jbtiered721mintreservesfortiersdata) `memory _mintForTiersData`</li></ul>|
|[**`adjustTiers`**](write/adjusttiers)|**Traits**<ul><li>[`onlyOwner`](.)</li></ul>**Params**<ul><li>[`JB721TierParams[]`](/dev/api/data-structures/jb721tierparams) `calldata _tiersToAdd`</li><li>`uint256[] calldata _tierIdsToRemove`</li></ul>|
|[**`setDefaultReservedTokenBeneficiary`**](write/setdefaultreservedtokenbeneficiary)|**Traits**<ul><li>[`onlyOwner`](.)</li></ul>**Params**<ul><li>`address _beneficiary`</li></ul>|
|[**`setBaseUri`**](write/setbaseuri)|**Traits**<ul><li>[`onlyOwner`](.)</li></ul>**Params**<ul><li>`string memory _baseUri`</li></ul>|
|[**`setContractUri`**](write/setcontracturi)|**Traits**<ul><li>[`onlyOwner`](.)</li></ul>**Params**<ul><li>`string calldata _contractUri`</li></ul>|
|[**`setTokenUriResolver`**](write/settokenuriresolver)|**Traits**<ul><li>[`onlyOwner`](.)</li></ul>**Params**<ul><li>[`IJBTokenUriResolver`](/dev/api/interfaces/ijbtokenuriresolver) `_tokenUriResolver`</li></ul>|
|[**`mintReservesFor`**](write/mintreservesfor)|**Params**<ul><li>`uint256 _tierId`</li><li>`uint256 _count`</li></ul>|
|[**`mintFor`**](write/mintfor)|**Traits**<ul><li>[`onlyOwner`](.)</li></ul>**Params**<ul><li>`uint16[] memory _tierIds`</li><li>`address _beneficiary`</li></ul>**Returns**<ul><li>`uint256[] memory tokenIds`</li></ul>|
