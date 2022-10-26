# totalSupply

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Contract: [`JBTiered721DelegateStore`](/dev/api/contracts/or-delegates/jbtiered721delegatestore)

Interface: [`IJBTiered721DelegateStore`](/dev/api/interfaces/ijbtiered721delegatestore)

<Tabs>
<TabItem value="Step by step" label="Step by step">

#### Definition

```
function totalSupply(address _nft) external view override returns (uint256 supply) { ... }
```

- Arguments:
  - `_nft` is the `address` of the NFT to get a total supply of.
- The resulting function overrides a function definition from the [`IJBTiered721DelegateStore`](/dev/api/interfaces/ijbtiered721delegatestore) interface.
- The function returns:
  - The supply The total number of NFTs between all tiers as a `uint256`.

#### Body

</TabItem>

<TabItem value="Code" label="Code">

```
/** 
  @notice 
  The total supply of issued NFTs from all tiers.

  @param _nft The NFT to get a total supply of.

  @return supply The total number of NFTs between all tiers.
*/
function totalSupply(address _nft) external view override returns (uint256 supply) {
  // Keep a reference to the tier being iterated on.
  JBStored721Tier storage _storedTier;

  // Keep a reference to the greatest tier ID.
  uint256 _maxTierIdOf = maxTierIdOf[_nft];

  for (uint256 _i = _maxTierIdOf; _i != 0; ) {
    // Set the tier being iterated on.
    _storedTier = _storedTierOf[_nft][_i];

    // Increment the total supply with the amount used already.
    supply += _storedTier.initialQuantity - _storedTier.remainingQuantity;

    unchecked {
      --_i;
    }
  }
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

