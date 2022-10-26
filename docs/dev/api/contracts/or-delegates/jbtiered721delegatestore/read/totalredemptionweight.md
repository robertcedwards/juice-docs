# totalRedemptionWeight

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Contract: [`JBTiered721DelegateStore`](/dev/api/contracts/or-delegates/jbtiered721delegatestore)

Interface: [`IJBTiered721DelegateStore`](/dev/api/interfaces/ijbtiered721delegatestore)

<Tabs>
<TabItem value="Step by step" label="Step by step">

#### Definition

```
function totalRedemptionWeight(address _nft) public view override returns (uint256 weight) { ... }
```

- Arguments:
  - `_nft` is the `address` of the NFT for which the redemption weight is being calculated.
- The resulting function overrides a function definition from the [`IJBTiered721DelegateStore`](/dev/api/interfaces/ijbtiered721delegatestore) interface.
- The function returns:
  - `weight` is the total weight as a `uint256`.

#### Body

</TabItem>

<TabItem value="Code" label="Code">

```
/**
  @notice
  The cumulative weight that all token IDs have in redemptions.

  @param _nft The NFT for which the redemption weight is being calculated.

  @return weight The total weight.
*/
function totalRedemptionWeight(address _nft) public view override returns (uint256 weight) {
  // Keep a reference to the greatest tier ID.
  uint256 _maxTierIdOf = maxTierIdOf[_nft];

  // Keep a reference to the tier being iterated on.
  JBStored721Tier memory _storedTier;

  // Add each token's tier's contribution floor to the weight.
  for (uint256 _i; _i < _maxTierIdOf; ) {
    // Keep a reference to the stored tier.
    _storedTier = _storedTierOf[_nft][_i + 1];

    // Add the tier's contribution floor multiplied by the quantity minted.
    weight +=
      (_storedTier.contributionFloor *
        (_storedTier.initialQuantity - _storedTier.remainingQuantity)) +
      _numberOfReservedTokensOutstandingFor(_nft, _i, _storedTier);

    unchecked {
      ++_i;
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

