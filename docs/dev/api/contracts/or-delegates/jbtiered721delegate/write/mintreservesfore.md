# mintReservesFor

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Contract: [`JBTiered721Delegate`](/dev/api/contracts/or-delegates/jbtiered721delegate)

Interface: [`IJBTiered721Delegate`](/dev/api/interfaces/ijbtiered721delegate)

<Tabs>
<TabItem value="Step by step" label="Step by step">

#### Definition

```
  function mintReservesFor(JBTiered721MintReservesForTiersData[] memory _mintReservesForTiersData)
    external
    override
  { ... }
```

- Arguments:
  - `_mintReservesForTiersData` is a <code>[JBTiered721MintReservesForTiersData](/dev/api/data-structures/jbtiered721mintreservesfortiersdata)[]</code> which contains information about how many reserved tokens to mint for each tier.
- The resulting function overrides a function definition from the [`IJBTiered721Delegate`](/dev/api/interfaces/ijbtiered721delegate) interface.
- The function doesn't return anything.

#### Body

</TabItem>

<TabItem value="Code" label="Code">

```
/** 
  @notice
  Mint reserved tokens within the tier for the provided value.

  @param _mintReservesForTiersData Contains information about how many reserved tokens to mint for each tier.
*/
function mintReservesFor(JBTiered721MintReservesForTiersData[] memory _mintReservesForTiersData)
  external
  override
{
  // Keep a reference to the number of tiers there are to mint reserved for.
  uint256 _numberOfTiers = _mintReservesForTiersData.length;

  for (uint256 _i; _i < _numberOfTiers; ) {
    // Get a reference to the data being iterated on.
    JBTiered721MintReservesForTiersData memory _data = _mintReservesForTiersData[_i];

    // Mint for the tier.
    mintReservesFor(_data.tierId, _data.count);

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

