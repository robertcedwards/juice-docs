# encodedTierIPFSUriOf

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Contract: [`JBTiered721DelegateStore`](/dev/api/contracts/or-delegates/jbtiered721delegatestore)

Interface: [`IJBTiered721DelegateStore`](/dev/api/interfaces/ijbtiered721delegatestore)

<Tabs>
<TabItem value="Step by step" label="Step by step">

#### Definition

```
function encodedTierIPFSUriOf(address _nft, uint256 _tokenId)
  external
  view
  override
  returns (bytes32)
{ ... }
```

- Arguments:
  - `_nft` is the `address` of the NFT contract to which the encoded IPFS URI belongs.
  - `_tokenId` is the `uint256` ID of the token.
- The resulting function overrides a function definition from the [`IJBTiered721DelegateStore`](/dev/api/interfaces/ijbtiered721delegatestore) interface.
- The function returns:
  - The encoded IPFS URI as a `bytes32`.

#### Body

</TabItem>

<TabItem value="Code" label="Code">

```
/**
  @notice
  Resolves the encoded tier IPFS URI of the tier for the given token.

  @param _nft The NFT contract to which the encoded IPFS URI belongs.
  @param _tokenId the ID of the token.

  @return The encoded IPFS URI.
*/
function encodedTierIPFSUriOf(address _nft, uint256 _tokenId)
  external
  view
  override
  returns (bytes32)
{
  return encodedIPFSUriOf[_nft][tierIdOfToken(_tokenId)];
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

