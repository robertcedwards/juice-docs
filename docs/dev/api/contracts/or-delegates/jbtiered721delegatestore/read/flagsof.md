# flagsOf

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Contract: [`JBTiered721DelegateStore`](/dev/api/contracts/or-delegates/jbtiered721delegatestore)

Interface: [`IJBTiered721DelegateStore`](/dev/api/interfaces/ijbtiered721delegatestore)

<Tabs>
<TabItem value="Step by step" label="Step by step">

#### Definition

```
function flagsOf(address _nft) external view override returns (JBTiered721Flags memory) { ... }
```

- Arguments:
  - `_nft` is the `address` of the NFT for which the flags apply.
- The resulting function overrides a function definition from the [`IJBTiered721DelegateStore`](/dev/api/interfaces/ijbtiered721delegatestore) interface.
- The function returns:
  - The flags as a [`JBTiered721Flags`](/dev/api/data-structures/jbtiered721flags).

#### Body

</TabItem>

<TabItem value="Code" label="Code">

```
/** 
  @notice
  Flags that influence the behavior of each NFT.

  @param _nft The NFT for which the flags apply.

  @return The flags.
*/
function flagsOf(address _nft) external view override returns (JBTiered721Flags memory) {
  return _flagsOf[_nft];
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

