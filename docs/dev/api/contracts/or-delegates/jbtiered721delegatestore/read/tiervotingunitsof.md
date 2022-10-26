# tierVotingUnitsOf

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Contract: [`JBTiered721DelegateStore`](/dev/api/contracts/or-delegates/jbtiered721delegatestore)

Interface: [`IJBTiered721DelegateStore`](/dev/api/interfaces/ijbtiered721delegatestore)

<Tabs>
<TabItem value="Step by step" label="Step by step">

#### Definition

```
function tierVotingUnitsOf(
  address _nft,
  address _account,
  uint256 _tierId
) external view virtual override returns (uint256) { ... }
```

- Arguments:
  - `_nft` is the `address` of the NFT to get voting units within.
  - `_account` is the account `address` to get voting units for.
  - `_tierId` is the `uint256` ID of the tier to get voting units for.
- The resulting function overrides a function definition from the [`IJBTiered721DelegateStore`](/dev/api/interfaces/ijbtiered721delegatestore) interface.
- The function returns:
  - The voting units for the account as a `uint256`.

#### Body

</TabItem>

<TabItem value="Code" label="Code">

```
/**
  @notice
  The voting units for an account from its NFTs across all tiers. NFTs have a tier-specific preset number of voting units. 

  @param _nft The NFT to get voting units within.
  @param _account The account to get voting units for.
  @param _tierId The ID of the tier to get voting units for.

  @return The voting units for the account.
*/
function tierVotingUnitsOf(
  address _nft,
  address _account,
  uint256 _tierId
) external view virtual override returns (uint256) {
  // Get a reference to the account's balance in this tier.
  uint256 _balance = tierBalanceOf[_nft][_account][_tierId];

  if (_balance == 0) return 0;

  // Add the tier's voting units.
  return _balance * _storedTierOf[_nft][_tierId].votingUnits;
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

