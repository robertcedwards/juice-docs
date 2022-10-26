# numberOfReservedTokensOutstandingFor

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Contract: [`JBTiered721DelegateStore`](/dev/api/contracts/or-delegates/jbtiered721delegatestore)

Interface: [`IJBTiered721DelegateStore`](/dev/api/interfaces/ijbtiered721delegatestore)

<Tabs>
<TabItem value="Step by step" label="Step by step">

#### Definition

```
function numberOfReservedTokensOutstandingFor(address _nft, uint256 _tierId)
  external
  view
  override
  returns (uint256)
{ ... }
```

- Arguments:
  - `_nft` is the `address` of the NFT to get a number of reserved tokens outstanding.
  - `_tierId` is the `uint256` ID of the tier to get a number of reserved tokens outstanding.
- The resulting function overrides a function definition from the [`IJBTiered721DelegateStore`](/dev/api/interfaces/ijbtiered721delegatestore) interface.
- The function returns:
  - The outstanding number of reserved tokens within the tier as a `uint256`.

#### Body

</TabItem>

<TabItem value="Code" label="Code">

```
/** 
  @notice
  The number of reserved tokens that can currently be minted within the tier. 

  @param _nft The NFT to get a number of reserved tokens outstanding.
  @param _tierId The ID of the tier to get a number of reserved tokens outstanding.

  @return The outstanding number of reserved tokens within the tier.
*/
function numberOfReservedTokensOutstandingFor(address _nft, uint256 _tierId)
  external
  view
  override
  returns (uint256)
{
  return _numberOfReservedTokensOutstandingFor(_nft, _tierId, _storedTierOf[_nft][_tierId]);
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

