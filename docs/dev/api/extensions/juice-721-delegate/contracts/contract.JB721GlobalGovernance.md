# JB721GlobalGovernance
[Git Source](https://github.com/jbx-protocol/juice-721-delegate/blob/2d5cc8b5e5fa5f9438288f074222da0ada454156/contracts/JB721GlobalGovernance.sol)

**Inherits:**
[Votes](/dev/api/extensions/juice-721-delegate/contracts/abstract/contract.Votes.md), [JBTiered721Delegate](/dev/api/extensions/juice-721-delegate/contracts/contract.JBTiered721Delegate.md)


A tiered 721 delegate where each NFT can be used for on chain governance, with votes delegatable globally across all tiers.

*
Inherits from -
JBTiered721Delegate: The tiered 721 delegate.
Votes: A helper for voting balance snapshots.*


## Functions
### _getVotingUnits


The voting units for an account from its NFTs across all tiers. NFTs have a tier-specific preset number of voting units.


```solidity
function _getVotingUnits(address _account) internal view virtual override returns (uint256 units);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_account`|`address`|The account to get voting units for.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`units`|`uint256`|The voting units for the account.|


### _afterTokenTransferAccounting


handles the tier voting accounting


```solidity
function _afterTokenTransferAccounting(address _from, address _to, uint256 _tokenId, JB721Tier memory _tier)
    internal
    virtual
    override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_from`|`address`|The account to transfer voting units from.|
|`_to`|`address`|The account to transfer voting units to.|
|`_tokenId`|`uint256`|The id of the token for which voting units are being transferred.|
|`_tier`|`JB721Tier`|The tier the token id is part of|


