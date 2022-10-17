# Votes


*This is a base abstract contract that tracks voting units, which are a measure of voting power that can be transferred, and provides a system of vote delegation, where an account can delegate its voting units to a sort of "representative" that will pool delegated voting units from different accounts and can then use it to vote in decisions. In fact, voting units _must_ be delegated in order to count as actual votes, and an account has to delegate those votes to itself if it wishes to participate in decisions and does not have a trusted representative.*

*This contract is often combined with a token contract such that voting units correspond to token units. For an example, see [`ERC721Votes`](https://docs.openzeppelin.com/contracts/4.x/api/token/erc721#ERC721Votes).*

*The full history of delegate votes is tracked on-chain so that governance protocols can consider votes as distributed at a particular block number to protect against flash loans and double voting. The opt-in delegate system makes the cost of this history tracking optional.*

*When using this module the derived contract must implement `_getVotingUnits` (for example, make it return `ERC721-balanceOf`), and can use `_transferVotingUnits` to track a change in the distribution of those units (in the previous example, it would be included in `ERC721-_beforeTokenTransfer`).*

#### Traits

`abstract`

#### Code

https://github.com/jbx-protocol/juice-nft-rewards/blob/main/contracts/abstract/Votes.sol

#### Addresses

Ethereum Mainnet: *Not deployed*

Goerli Testnet: *Not deployed*

#### Interfaces

|Name|Description|
|-|-|
|[**`IVotes`**](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/governance/utils/IVotes.sol)|Common interface for `ERC20Votes`, `ERC721Votes`, and other `Votes`-enabled contracts.|

#### Inheritance

|Contract|Description|
|-|-|
|[**`EIP712`**](https://eips.ethereum.org/EIPS/eip-712)|A procedure for hashing and signing of typed structured data as opposed to just bytestrings.|

#### Events

|Name|Data|
|-|-|
|[**`DelegateChanged`**](.)|<ul><li>`address indexed delegator`</li><li>`address indexed fromDelegate`</li><li>`address indexed toDelegate`</li></ul>|
|[**`DelegateVotesChanged`**](.)|<ul><li>`address indexed delegate`</li><li>`uint256 previousBalance`</li><li>`uint256 newBalance`</li></ul>|

#### Read

|Function|Definition|
|-|-|
|[**`getVotes`**](.)|**Traits**<ul><li>`virtual`</li></ul>**Params**<ul><li>`address account`</li></ul>**Returns**<ul><li>`uint256`</li></ul>|
|[**`getPastVotes`**](.)|**Traits**<ul><li>`virtual`</li></ul>**Params**<ul><li>`address account`</li><li>`uint256 blockNumber`</li></ul>**Returns**<ul><li>`uint256`</li></ul>|
|[**`getPastTotalSupply`**](.)|**Traits**<ul><li>`virtual`</li></ul>**Params**<ul><li>`uint256 blockNumber`</li></ul>**Returns**<ul><li>`uint256`</li></ul>|
|[**`delegates`**](.)|**Traits**<ul><li>`virtual`</li></ul>**Params**<ul><li>`address account`</li></ul>**Returns**<ul><li>`address`</li></ul>|
|[**`nonces`**](.)|**Traits**<ul><li>`virtual`</li></ul>**Params**<ul><li>`address owner`</li></ul>**Returns**<ul><li>`uint256`</li></ul>|
|[**`DOMAIN_SEPARATOR`**](.)|**Returns**<ul><li>`bytes32`</li></ul>|

#### Write

|Function|Definition|
|-|-|
|[**`delegate`**](.)|**Traits**<ul><li>`virtual`</li></ul>**Params**<ul><li>`address delegatee`</li></ul>|
|[**`delegateBySig`**](.)|**Traits**<ul><li>`virtual`</li></ul>**Params**<ul><li>`address delegatee`</li><li>`uint256 nonce`</li><li>`uint256 expiry`</li><li>`uint8 v`</li><li>`bytes32 r`</li><li>`bytes32 s`</li></ul>|
