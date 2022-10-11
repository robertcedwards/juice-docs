# JBTiered721DelegateStore

*The contract that stores and manages the NFT's data.*

#### Code

https://github.com/jbx-protocol/juice-nft-rewards/blob/main/contracts/JBTiered721DelegateStore.sol

#### Addresses

Ethereum Mainnet: *Not deployed*

Goerli Testnet: *Not deployed*

#### Interfaces

|Name|Description|
|-|-|
|[**`IJBTiered721DelegateStore`**](/dev/api/interfaces/ijbtiered721delegatestore)|General interface for the methods in this contract that interact with the blockchain's state according to the protocol's rules.|

#### Events

|Name|Data|
|-|-|
|[**`CleanTiers`**](.)|<ul><li>`address indexed nft`</li><li>`address caller`</li></ul>|

#### Properties

|Name|Definition|
|-|-|
|[**`maxTierIdOf`**](.)|**Params**<ul><li>`address _nft`</li></ul>**Returns**<ul><li>`uint256`</li></ul>|
|[**`tierBalanceOf`**](.)|**Params**<ul><li>`address _nft`</li><li>`address _owner`</li><li>`uint256 _tierId`</li></ul>**Returns**<ul><li>`uint256`</li></ul>|
|[**`numberOfReservesMintedFor`**](.)|**Params**<ul><li>`address _nft`</li><li>`uint256 _tierId`</li></ul>**Returns**<ul><li>`uint256`</li></ul>|
|[**`numberOfBurnedFor`**](.)|**Params**<ul><li>`address _nft`</li><li>`uint256 _tierId`</li></ul>**Returns**<ul><li>`uint256`</li></ul>|
|[**`isTierRemoved`**](.)|**Params**<ul><li>`address _nft`</li><li>`uint256 _tierId`</li></ul>**Returns**<ul><li>`bool`</li></ul>|
|[**`defaultReservedTokenBeneficiaryOf`**](.)|**Params**<ul><li>`address _nft`</li></ul>**Returns**<ul><li>`address`</li></ul>|
|[**`firstOwnerOf`**](.)|**Params**<ul><li>`address _nft`</li><li>`uint256 _tokenId`</li></ul>**Returns**<ul><li>`address`</li></ul>|
|[**`baseUriOf`**](.)|**Params**<ul><li>`address _nft`</li></ul>**Returns**<ul><li>`string`</li></ul>|
|[**`tokenUriResolverOf`**](.)|**Params**<ul><li>`address _nft`</li></ul>**Returns**<ul><li>[`IJBTokenUriResolver`](/dev/api/interfaces/ijbtokenuriresolver)</li></ul>|
|[**`contractUriOf`**](.)|**Params**<ul><li>`address _nft`</li></ul>**Returns**<ul><li>`string`</li></ul>|
|[**`encodedIPFSUriOf`**](.)|**Params**<ul><li>`address _nft`</li><li>`uint256 _tierId`</li></ul>**Returns**<ul><li>`bytes32`</li></ul>|

#### Read

|Function|Definition|
|-|-|
|[**`tiers`**](.)|**Params**<ul><li>`address _nft`</li><li>`uint256 _startingId`</li><li>`uint256 _size`</li></ul>**Returns**<ul><li>[`JB721Tier[]`](/dev/api/data-structures/jb721tier) `memory _tiers`</li></ul>|
|[**`tier`**](.)|**Params**<ul><li>`address _nft`</li><li>`uint256 _id`</li></ul>**Returns**<ul><li>[`JB721Tier`](/dev/api/data-structures/jb721tier) `memory`</li></ul>|
|[**`tierOfTokenId`**](.)|**Params**<ul><li>`address _nft`</li><li>`uint256 _tokenId`</li></ul>**Returns**<ul><li>[`JB721Tier`](/dev/api/data-structures/jb721tier) `memory`</li></ul>|
|[**`totalSupply`**](.)|**Params**<ul><li>`address _nft`</li></ul>**Returns**<ul><li>`uint256 supply`</li></ul>|
|[**`numberOfReservedTokensOutstandingFor`**](.)|**Params**<ul><li>`address _nft`</li><li>`uint256 _tierId`</li></ul>**Returns**<ul><li>`uint256`</li></ul>|
|[**`votingUnitsOf`**](.)|**Traits**<ul><li>`virtual`</li></ul>**Params**<ul><li>`address _nft`</li><li>`address _account`</li></ul>**Returns**<ul><li>`uint256 units`</li></ul>|
|[**`tierVotingUnitsOf`**](.)|**Traits**<ul><li>`virtual`</li></ul>**Params**<ul><li>`address _nft`</li><li>`address _account`</li><li>`uint256 _tierId`</li></ul>**Returns**<ul><li>`uint256`</li></ul>|
|[**`encodedTierIPFSUriOf`**](.)|**Params**<ul><li>`address _nft`</li><li>`uint256 _tokenId`</li></ul>**Returns**<ul><li>`bytes32`</li></ul>|
|[**`flagsOf`**](.)|**Params**<ul><li>`address _nft`</li></ul>**Returns**<ul><li>[`JBTiered721Flags`](/dev/api/data-structures/jbtiered721flags) `memory`</li></ul>|


#### Write

|Function|Definition|
|-|-|
|||


