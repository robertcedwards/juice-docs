# votingUnitsOf

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Contract: [`JBTiered721DelegateStore`](/dev/api/contracts/or-delegates/jbtiered721delegatestore)

Interface: [`IJBTiered721DelegateStore`](/dev/api/interfaces/ijbtiered721delegatestore)

<Tabs>
<TabItem value="Step by step" label="Step by step">

#### Definition

```
function votingUnitsOf(address _nft, address _account)
  external
  view
  virtual
  override
  returns (uint256 units)
{ ... }
```

- Arguments:
  - `_nft` is the `address` of the NFT to get voting units within.
  - `_account` is the `address` account to get voting units for.
- The resulting function overrides a function definition from the [`IJBTiered721DelegateStore`](/dev/api/interfaces/ijbtiered721delegatestore) interface.
- The function returns:
  - `units` is the voting units for the account as a `uint256`.

#### Body

</TabItem>

<TabItem value="Code" label="Code">

```
/**
  @notice
  The voting units for an account from its NFTs across all tiers. NFTs have a tier-specific preset number of voting units. 

  @param _nft The NFT to get voting units within.
  @param _account The account to get voting units for.

  @return units The voting units for the account.
*/
function votingUnitsOf(address _nft, address _account)
  external
  view
  virtual
  override
  returns (uint256 units)
{
  // Keep a reference to the greatest tier ID.
  uint256 _maxTierIdOf = maxTierIdOf[_nft];

  // Keep a reference to the balance being iterated on.
  uint256 _balance;

  // Loop through all tiers.
  for (uint256 _i = _maxTierIdOf; _i != 0; ) {
    // Get a reference to the account's balance in this tier.
    _balance = tierBalanceOf[_nft][_account][_i];

    if (_balance != 0)
      // Add the tier's voting units.
      units += _balance * _storedTierOf[_nft][_i].votingUnits;

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

