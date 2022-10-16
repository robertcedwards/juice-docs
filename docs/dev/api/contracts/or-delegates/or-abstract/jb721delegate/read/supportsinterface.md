# supportsInterface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Contract: [`JB721Delegate`](/dev/api/contracts/or-delegates/or-abstract/jb721delegate/)

Interface: [`IERC165`](https://docs.openzeppelin.com/contracts/2.x/api/introspection#IERC165)

<Tabs>
<TabItem value="Step by step" label="Step by step">

#### Definition

```
function supportsInterface(bytes4 _interfaceId)
  public
  view
  virtual
  override(ERC721, IERC165)
  returns (bool)
{ ... }
```

#### Body

</TabItem>

<TabItem value="Code" label="Code">

```
/**
  @notice
  Indicates if this contract adheres to the specified interface.

  @dev
  See {IERC165-supportsInterface}.

  @param _interfaceId The ID of the interface to check for adherance to.
*/
function supportsInterface(bytes4 _interfaceId)
  public
  view
  virtual
  override(ERC721, IERC165)
  returns (bool)
{
  return
    _interfaceId == type(IJB721Delegate).interfaceId ||
    _interfaceId == type(IJBFundingCycleDataSource).interfaceId ||
    _interfaceId == type(IJBPayDelegate).interfaceId ||
    _interfaceId == type(IJBRedemptionDelegate).interfaceId ||
    super.supportsInterface(_interfaceId);
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

