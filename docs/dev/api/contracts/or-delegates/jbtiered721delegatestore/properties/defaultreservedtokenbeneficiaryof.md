# defaultReservedTokenBeneficiaryOf

Contract: [`JBTiered721DelegateStore`](/dev/api/contracts/or-delegates/jbtiered721delegatestore)

**The beneficiary of reserved tokens when the tier doesn't specify a beneficiary.**

#### Definition

```
/** 
  @notice
  The beneficiary of reserved tokens when the tier doesn't specify a beneficiary.

  _nft The NFT contract to which the reserved token beneficiary applies.
*/
mapping(address => address) public override defaultReservedTokenBeneficiaryOf;
```

- Arguments:
  - `_nft` is the `address` of the NFT contract to which the reserved token beneficiary applies.
- The resulting view function can be accessed externally by anyone.
- The resulting function overrides a function definition from the [`IJBTiered721DelegateStore`](/dev/api/interfaces/ijbtiered721delegatestore) interface.
