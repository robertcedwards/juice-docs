# creditsOf

Contract: [`JBTiered721Delegate`](/dev/api/contracts/or-delegates/jbtiered721delegate)

**The amount that each address has paid that has not yet contribute to the minting of an NFT.**

#### Definition

```
/** 
  @notice
  The amount that each address has paid that has not yet contribute to the minting of an NFT. 

  _address The address to which the credits belong.
*/
mapping(address => uint256) public override creditsOf;
```

- `_address` is the `address` to which the credits belong.
