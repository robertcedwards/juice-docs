# tier

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Contract: [`JBTiered721DelegateStore`](/dev/api/contracts/or-delegates/jbtiered721delegatestore)

Interface: [`IJBTiered721DelegateStore`](/dev/api/interfaces/ijbtiered721delegatestore)

<Tabs>
<TabItem value="Step by step" label="Step by step">

#### Definition

```
function tier(address _nft, uint256 _id) external view override returns (JB721Tier memory) { ... }
```

- Arguments:
  - `_nft` is the `address` of the NFT to get a tier within.
  - `_id` is the `uint256` ID of the tier to get. 
- The resulting function overrides a function definition from the [`IJBTiered721DelegateStore`](/dev/api/interfaces/ijbtiered721delegatestore) interface.
- The function returns:
  - The tier as a [`JB721Tier`](/dev/api/data-structures/jb721tier).

#### Body

</TabItem>

<TabItem value="Code" label="Code">

```
/** 
  @notice
  Return the tier for the specified ID. 

  @param _nft The NFT to get a tier within.
  @param _id The ID of the tier to get. 

  @return The tier.
*/
function tier(address _nft, uint256 _id) external view override returns (JB721Tier memory) {
  // Get the stored tier.
  JBStored721Tier memory _storedTier = _storedTierOf[_nft][_id];

  return
    JB721Tier({
      id: _id,
      contributionFloor: _storedTier.contributionFloor,
      lockedUntil: _storedTier.lockedUntil,
      remainingQuantity: _storedTier.remainingQuantity,
      initialQuantity: _storedTier.initialQuantity,
      votingUnits: _storedTier.votingUnits,
      reservedRate: _storedTier.reservedRate,
      reservedTokenBeneficiary: reservedTokenBeneficiaryOf(_nft, _id),
      encodedIPFSUri: encodedIPFSUriOf[_nft][_id],
      allowManualMint: _storedTier.allowManualMint
    });
}
```

</TabItem>

<TabItem value="Errors" label="Errors">

|String|Description|
|-|-|
|**``**||

</TabItem>

<TabItem value="Bug bounty" label="Bug bounty">

</TabItem>
</Tabs>

