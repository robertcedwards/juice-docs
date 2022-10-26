# reservedTokenBeneficiaryOf

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Contract: [`JBTiered721DelegateStore`](/dev/api/contracts/or-delegates/jbtiered721delegatestore)

Interface: [`IJBTiered721DelegateStore`](/dev/api/interfaces/ijbtiered721delegatestore)

<Tabs>
<TabItem value="Step by step" label="Step by step">

#### Definition

```
function reservedTokenBeneficiaryOf(address _nft, uint256 _tierId)
  public
  view
  override
  returns (address)
{ ... }
```

- Arguments:
  - `_nft` is the `address` of the NFT to get the reserved token beneficiary within.
  - `_tierId` is the `uint256` ID of the tier to get a reserved token beneficiary of.
- The resulting function overrides a function definition from the [`IJBTiered721DelegateStore`](/dev/api/interfaces/ijbtiered721delegatestore) interface.
- The function returns:
  - The reserved token benficiary `address`.

#### Body

</TabItem>

<TabItem value="Code" label="Code">

```
/** 
  @notice
  The reserved token beneficiary for each tier. 

  @param _nft The NFT to get the reserved token beneficiary within.
  @param _tierId The ID of the tier to get a reserved token beneficiary of.

  @return The reserved token benficiary.
*/
function reservedTokenBeneficiaryOf(address _nft, uint256 _tierId)
  public
  view
  override
  returns (address)
{
  // Get the stored reserved token beneficiary.
  address _storedReservedTokenBeneficiaryOfTier = _reservedTokenBeneficiaryOf[_nft][_tierId];

  // If the tier has a beneficiary return it.
  if (_storedReservedTokenBeneficiaryOfTier != address(0))
    return _storedReservedTokenBeneficiaryOfTier;

  // Return the default.
  return defaultReservedTokenBeneficiaryOf[_nft];
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

