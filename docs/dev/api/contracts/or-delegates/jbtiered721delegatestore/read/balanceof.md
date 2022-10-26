# balanceOf

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Contract: [`JBTiered721DelegateStore`](/dev/api/contracts/or-delegates/jbtiered721delegatestore)

Interface: [`IJBTiered721DelegateStore`](/dev/api/interfaces/ijbtiered721delegatestore)

<Tabs>
<TabItem value="Step by step" label="Step by step">

#### Definition

```
function balanceOf(address _nft, address _owner) public view override returns (uint256 balance) { ... }
```

- Arguments:
  - `_nft` is the `address` of the NFT to get a balance from.
  - `_owner` is the `address` to check the balance of.
- The resulting function overrides a function definition from the [`IJBTiered721DelegateStore`](/dev/api/interfaces/ijbtiered721delegatestore) interface.
- The function returns:
  - `balance` is the `uint256` number of tokens owned by the owner across all tiers.

#### Body

</TabItem>

<TabItem value="Code" label="Code">

```
/** 
  @notice 
  The total number of tokens owned by the given owner. 

  @param _nft The NFT to get a balance from.
  @param _owner The address to check the balance of.

  @return balance The number of tokens owners by the owner accross all tiers.
*/
function balanceOf(address _nft, address _owner) public view override returns (uint256 balance) {
  // Keep a reference to the greatest tier ID.
  uint256 _maxTierIdOf = maxTierIdOf[_nft];

  // Loop through all tiers.
  for (uint256 _i = _maxTierIdOf; _i != 0; ) {
    // Get a reference to the account's balance in this tier.
    balance += tierBalanceOf[_nft][_owner][_i];

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

