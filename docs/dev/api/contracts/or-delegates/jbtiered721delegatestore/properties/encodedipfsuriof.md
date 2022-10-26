# encodedIPFSUriOf

Contract: [`JBTiered721DelegateStore`](/dev/api/contracts/or-delegates/jbtiered721delegatestore)

**When using this contract to manage token uri's, those are stored as 32bytes, based on IPFS hashes stripped down.**

#### Definition

```
/**
  @notice
  When using this contract to manage token uri's, those are stored as 32bytes, based on IPFS hashes stripped down.

  _nft The NFT contract to which the encoded upfs uri belongs.
  _tierId the ID of the tier
*/
mapping(address => mapping(uint256 => bytes32)) public override encodedIPFSUriOf;
```

- Arguments:
  - `_nft` is the `address` of the NFT contract to which the encoded upfs uri belongs.
  - `_tierId` is the `uint256` ID of the tier
- The resulting view function can be accessed externally by anyone.
- The resulting function overrides a function definition from the [`IJBTiered721DelegateStore`](/dev/api/interfaces/ijbtiered721delegatestore) interface.
