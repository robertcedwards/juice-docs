# _reservedTokenBeneficiaryOf

Contract: [`JBTiered721DelegateStore`](/dev/api/contracts/or-delegates/jbtiered721delegatestore)

**An optional beneficiary for the reserved token of a given tier.**

#### Definition

```
/**
  @notice
  An optional beneficiary for the reserved token of a given tier.

  _nft The NFT contract to which the reserved token beneficiary belongs.
  _tierId the ID of the tier.
*/
mapping(address => mapping(uint256 => address)) internal _reservedTokenBeneficiaryOf;
```

- Arguments:
  - `_nft` is the `address` of the NFT contract to which the reserved token beneficiary belongs.
  - `_tierId` is the `uint256` ID of the tier.
- The resulting view function is private to this contract.
