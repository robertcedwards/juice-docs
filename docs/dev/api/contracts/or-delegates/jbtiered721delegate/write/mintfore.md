# mintFor

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Contract: [`JBTiered721Delegate`](/dev/api/contracts/or-delegates/jbtiered721delegate)

Interface: [`IJBTiered721Delegate`](/dev/api/interfaces/ijbtiered721delegate)

<Tabs>
<TabItem value="Step by step" label="Step by step">

#### Definition

```
function mintFor(JBTiered721MintForTiersData[] memory _mintForTiersData)
  external
  override
  onlyOwner
{
```

- Arguments:
  - `_mintForTiersData` is a <code>[JBTiered721MintForTiersData](/dev/api/data-structures/jbtiered721mintfortiersdata)[]</code> which contains information about how who to mint tokens for from each tier.
- The resulting function overrides a function definition from the [`IJBTiered721Delegate`](/dev/api/interfaces/ijbtiered721delegate) interface.
- The function doesn't return anything.

#### Body

</TabItem>

<TabItem value="Code" label="Code">

```
/** 
  @notice
  Mint tokens within the tier for the provided beneficiaries.

  @param _mintForTiersData Contains information about how who to mint tokens for from each tier.
*/
function mintFor(JBTiered721MintForTiersData[] memory _mintForTiersData)
  external
  override
  onlyOwner
{
  // Keep a reference to the number of beneficiaries there are to mint for.
  uint256 _numberOfBeneficiaries = _mintForTiersData.length;

  for (uint256 _i; _i < _numberOfBeneficiaries; ) {
    // Get a reference to the data being iterated on.
    JBTiered721MintForTiersData memory _data = _mintForTiersData[_i];

    // Mint for the tier.
    mintFor(_data.tierIds, _data.beneficiary);

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

