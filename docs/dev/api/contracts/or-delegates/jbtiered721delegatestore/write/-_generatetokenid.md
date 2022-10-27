# _generateTokenId

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Contract: [`JBTiered721DelegateStore`](/dev/api/contracts/or-delegates/jbtiered721delegatestore)

**Finds the token ID and tier given a contribution amount.**

<Tabs>
<TabItem value="Step by step" label="Step by step">

#### Definition

```
function _generateTokenId(uint256 _tierId, uint256 _tokenNumber)
  internal
  pure
  returns (uint256 tokenId)
{ ... }
```

- Arguments:
  - `_tierId` is the `uint256` ID of the tier to generate an ID for.
  - `_tokenNumber` is the `uint256` number of the token in the tier.
- The view function is private to the contract.
- The view function does not modify or reference state variables outside the function.
- The function returns:
  - `tokenId` is the `uint256` ID of the token.

#### Body

</TabItem>

<TabItem value="Code" label="Code">

```
/** 
  @notice
  Finds the token ID and tier given a contribution amount. 

  @param _tierId The ID of the tier to generate an ID for.
  @param _tokenNumber The number of the token in the tier.

  @return tokenId The ID of the token.
*/
function _generateTokenId(uint256 _tierId, uint256 _tokenNumber)
  internal
  pure
  returns (uint256 tokenId)
{
  // The tier ID in the first 16 bits.
  tokenId = _tierId;

  // The token number in the rest.
  tokenId |= _tokenNumber << 16;
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

