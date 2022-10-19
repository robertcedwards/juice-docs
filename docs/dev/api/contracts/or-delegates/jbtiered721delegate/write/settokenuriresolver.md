# setTokenUriResolver

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Contract: [`JBTiered721Delegate`](/dev/api/contracts/or-delegates/jbtiered721delegate)

Interface: [`IJB721Delegate`](/dev/api/interfaces/ijb721delegate)

<Tabs>
<TabItem value="Step by step" label="Step by step">

#### Definition

```
function setTokenUriResolver(IJBTokenUriResolver _tokenUriResolver) external override onlyOwner { ... }
```

- Arguments:
  - `_tokenUriResolver` is an [`IJBTokenUriResolver `](/dev/api/interfaces/ijbtokenuriresolver) which is the new URI resolver.
- The resulting function overrides a function definition from the [`IJB721Delegate`](/dev/api/interfaces/ijb721delegate) interface.
- The function doesn't return anything.

#### Body

</TabItem>

<TabItem value="Code" label="Code">

```
/**
  @notice
  Set a token URI resolver.

  @dev
  Only the contract's owner can set the token URI resolver.

  @param _tokenUriResolver The new URI resolver.
*/
function setTokenUriResolver(IJBTokenUriResolver _tokenUriResolver) external override onlyOwner {
  // Store the new value.
  store.recordSetTokenUriResolver(_tokenUriResolver);

  emit SetTokenUriResolver(_tokenUriResolver, msg.sender);
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

