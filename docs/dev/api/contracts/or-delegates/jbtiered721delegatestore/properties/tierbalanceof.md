# tierBalanceOf

Contract: [`JBTiered721DelegateStore`](/dev/api/contracts/or-delegates/jbtiered721delegatestore)

**Each account's balance within a specific tier.**

#### Definition

```
/** 
  @notice
  Each account's balance within a specific tier.

  _nft The NFT contract to which the tier balances belong.
  _owner The address to get a balance for. 
  _tierId The ID of the tier to get a balance within.
*/
mapping(address => mapping(address => mapping(uint256 => uint256))) public override tierBalanceOf;
```

- Arguments:
  - `_nft` is the `address` of the NFT contract to which the tier balances belong.
  - `_owner` is the `address` to get a balance for. 
  - `_tierId` is the `uint256` ID of the tier to get a balance within.
- The resulting view function can be accessed externally by anyone.
- The resulting function overrides a function definition from the [`IJBTiered721DelegateStore`](/dev/api/interfaces/ijbtiered721delegatestore) interface.
