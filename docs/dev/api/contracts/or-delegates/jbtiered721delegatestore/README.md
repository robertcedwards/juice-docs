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
|[**`CleanTiers`**](events/cleantiers)|<ul><li>`address indexed nft`</li><li>`address caller`</li></ul>|

#### Properties

|Name|Definition|
|-|-|
|[**`maxTierIdOf`**](properties/maxtieridof)|**Params**<ul><li>`address _nft`</li></ul>**Returns**<ul><li>`uint256`</li></ul>|
|[**`tierBalanceOf`**](properties/tierbalanceof)|**Params**<ul><li>`address _nft`</li><li>`address _owner`</li><li>`uint256 _tierId`</li></ul>**Returns**<ul><li>`uint256`</li></ul>|
|[**`numberOfReservesMintedFor`**](properties/numberofreservesmintedfor)|**Params**<ul><li>`address _nft`</li><li>`uint256 _tierId`</li></ul>**Returns**<ul><li>`uint256`</li></ul>|
|[**`numberOfBurnedFor`**](properties/numberofburnedfor)|**Params**<ul><li>`address _nft`</li><li>`uint256 _tierId`</li></ul>**Returns**<ul><li>`uint256`</li></ul>|
|[**`defaultReservedTokenBeneficiaryOf`**](properties/defaultreservedtokenbeneficiaryof)|**Params**<ul><li>`address _nft`</li></ul>**Returns**<ul><li>`address`</li></ul>|
|[**`firstOwnerOf`**](properties/firstownerof)|**Params**<ul><li>`address _nft`</li><li>`uint256 _tokenId`</li></ul>**Returns**<ul><li>`address`</li></ul>|
|[**`baseUriOf`**](properties/baseuriof)|**Params**<ul><li>`address _nft`</li></ul>**Returns**<ul><li>`string`</li></ul>|
|[**`tokenUriResolverOf`**](properties/tokenuriresolverof)|**Params**<ul><li>`address _nft`</li></ul>**Returns**<ul><li>[`IJBTokenUriResolver`](/dev/api/interfaces/ijbtokenuriresolver)</li></ul>|
|[**`contractUriOf`**](properties/contracturiof)|**Params**<ul><li>`address _nft`</li></ul>**Returns**<ul><li>`string`</li></ul>|
|[**`encodedIPFSUriOf`**](properties/encodedipfsuriof)|**Params**<ul><li>`address _nft`</li><li>`uint256 _tierId`</li></ul>**Returns**<ul><li>`bytes32`</li></ul>|

#### Read

|Function|Definition|
|-|-|
|[**`tiers`**](read/tiers)|**Params**<ul><li>`address _nft`</li><li>`uint256 _startingId`</li><li>`uint256 _size`</li></ul>**Returns**<ul><li>[`JB721Tier[]`](/dev/api/data-structures/jb721tier) `memory _tiers`</li></ul>|
|[**`tier`**](read/tier)|**Params**<ul><li>`address _nft`</li><li>`uint256 _id`</li></ul>**Returns**<ul><li>[`JB721Tier`](/dev/api/data-structures/jb721tier) `memory`</li></ul>|
|[**`tierOfTokenId`**](read/tieroftokenid)|**Params**<ul><li>`address _nft`</li><li>`uint256 _tokenId`</li></ul>**Returns**<ul><li>[`JB721Tier`](/dev/api/data-structures/jb721tier) `memory`</li></ul>|
|[**`totalSupply`**](read/totalsupply)|**Params**<ul><li>`address _nft`</li></ul>**Returns**<ul><li>`uint256 supply`</li></ul>|
|[**`numberOfReservedTokensOutstandingFor`**](read/numberofreservedtokensoutstandingfor)|**Params**<ul><li>`address _nft`</li><li>`uint256 _tierId`</li></ul>**Returns**<ul><li>`uint256`</li></ul>|
|[**`votingUnitsOf`**](read/votingunitsof)|**Traits**<ul><li>`virtual`</li></ul>**Params**<ul><li>`address _nft`</li><li>`address _account`</li></ul>**Returns**<ul><li>`uint256 units`</li></ul>|
|[**`tierVotingUnitsOf`**](read/tiervotingunitsof)|**Traits**<ul><li>`virtual`</li></ul>**Params**<ul><li>`address _nft`</li><li>`address _account`</li><li>`uint256 _tierId`</li></ul>**Returns**<ul><li>`uint256`</li></ul>|
|[**`encodedTierIPFSUriOf`**](read/encodedtieripfsuriof)|**Params**<ul><li>`address _nft`</li><li>`uint256 _tokenId`</li></ul>**Returns**<ul><li>`bytes32`</li></ul>|
|[**`flagsOf`**](read/flagsof)|**Params**<ul><li>`address _nft`</li></ul>**Returns**<ul><li>[`JBTiered721Flags`](/dev/api/data-structures/jbtiered721flags) `memory`</li></ul>|
|[**`isTierRemoved`**](read/istierremoved)|**Params**<ul><li>`address _nft`</li><li>`uint256 _tierId`</li></ul>**Returns**<ul><li>`bool`</li></ul>|
|[**`balanceOf`**](read/balanceof)|**Params**<ul><li>`address _nft`</li><li>`address _owner`</li></ul>**Returns**<ul><li>`uint256 balance`</li></ul>|
|[**`redemptionWeightOf`**](read/redemptionweightof)|**Params**<ul><li>`address _nft`</li><li>`uint256[] calldata _tokenIds`</li></ul>**Returns**<ul><li>`uint256 weight`</li></ul>|
|[**`totalRedemptionWeight`**](read/totalredemptionweight)|**Params**<ul><li>`address _nft`</li></ul>**Returns**<ul><li>`uint256 weight`</li></ul>|
|[**`tierIdOfToken`**](read/tieridoftoken)|**Traits**<ul><li>`pure`</li></ul>**Params**<ul><li>`uint256 _tokenId`</li></ul>**Returns**<ul><li>`uint256`</li></ul>|
|[**`reservedTokenBeneficiaryOf`**](read/reservedtokenbeneficiaryof)|**Params**<ul><li>`address _nft`</li><li>`uint256 _tierId`</li></ul>**Returns**<ul><li>`address`</li></ul>|

#### Write

|Function|Definition|
|-|-|
|[**`recordAddTiers`**](write/recordaddtiers)|**Params**<ul><li>[`JB721TierParams[]`](/dev/api/data-structures/jb721tierparams) `memory _tiersToAdd`</li></ul>**Returns**<ul><li>`uint256[] memory tierIds`</li></ul>|
|[**`recordMintReservesFor`**](write/recordmintreservesfor)|**Params**<ul><li>`uint256 _tierId`</li><li>`uint256 _count`</li></ul>**Returns**<ul><li>`uint256[] memory tokenIds`</li></ul>|
|[**`recordSetDefaultReservedTokenBeneficiary`**](write/recordsetdefaultreservedtokenbeneficiary)|**Params**<ul><li>`address _beneficiary`</li></ul>|
|[**`recordTransferForTier`**](write/recordtransferfortier)|**Params**<ul><li>`uint256 _tierId`</li><li>`address _from`</li><li>`address _to`</li></ul>|
|[**`recordRemoveTierIds`**](write/recordremovetierids)|**Params**<ul><li>`uint256[] calldata _tierIds`</li></ul>|
|[**`recordMintBestAvailableTier`**](write/recordmintbestavailabletier)|**Params**<ul><li>`uint256 _amount`</li></ul>**Returns**<ul><li>`uint256 tokenId`</li><li>`uint256 tierId`</li><li>`uint256 leftoverAmount`</li></ul>|
|[**`recordMint`**](write/recordmint)|**Params**<ul><li>`uint256 _amount`</li><li>`uint16[] calldata _tierIds`</li><li>`bool _isManualMint`</li></ul>**Returns**<ul><li>`uint256[] memory tokenIds`</li><li>`uint256 leftoverAmount`</li></ul>|
|[**`recordBurn`**](write/recordburn)|**Params**<ul><li>`uint256[] memory _tokenIds`</li></ul>|
|[**`recordSetFirstOwnerOf`**](write/recordsetfirstownerof)|**Params**<ul><li>`uint256 _tokenId`</li><li>`address _owner`</li></ul>|
|[**`recordSetBaseUri`**](write/recordsetbaseuri)|**Params**<ul><li>`string calldata _uri`</li></ul>|
|[**`recordSetContractUri`**](write/recordsetcontracturi)|**Params**<ul><li>`string calldata _uri`</li></ul>|
|[**`recordSetTokenUriResolver`**](write/recordsettokenuriresolver)|**Params**<ul><li>[`IJBTokenUriResolver`](/dev/api/interfaces/ijbtokenuriresolver) `_resolver`</li></ul>|
|[**`recordFlags`**](write/recordflags)|**Params**<ul><li>[`JBTiered721Flags`](/dev/api/data-structures/jbtiered721flags) `calldata _flags`</li></ul>|
|[**`cleanTiers`**](write/cleantiers)|**Params**<ul><li>`address _nft`</li></ul>|
