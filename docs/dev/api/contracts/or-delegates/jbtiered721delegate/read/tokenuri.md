# tokenURI

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Contract: [`JBTiered721Delegate`](/dev/api/contracts/or-delegates/jbtiered721delegate)

Interface: [`IERC721Metadata`](https://docs.openzeppelin.com/contracts/3.x/api/token/erc721#IERC721Metadata)

<Tabs>
<TabItem value="Step by step" label="Step by step">

#### Definition

```
function tokenURI(uint256 _tokenId) public view override returns (string memory) { ... }
```

- Arguments:
  `_tokenId` is the `uint256` ID of the token to get the tier URI for. 
- The resulting function overrides a function definition from the [`IERC721Metadata`](https://docs.openzeppelin.com/contracts/3.x/api/token/erc721#IERC721Metadata) interface.
- The function returns:
  - The `string` token URI corresponding with the tier or the tokenUriResolver URI.

#### Body

</TabItem>

<TabItem value="Code" label="Code">

```
/** 
  @notice
  The metadata URI of the provided token ID.

  @dev
  Defer to the tokenUriResolver if set, otherwise, use the tokenUri set with the token's tier.

  @param _tokenId The ID of the token to get the tier URI for. 

  @return The token URI corresponding with the tier or the tokenUriResolver URI.
*/
function tokenURI(uint256 _tokenId) public view override returns (string memory) {
  // A token without an owner doesn't have a URI.
  if (_owners[_tokenId] == address(0)) return '';

  // Get a reference to the URI resolver.
  IJBTokenUriResolver _resolver = store.tokenUriResolverOf(address(this));

  // If a token URI resolver is provided, use it to resolve the token URI.
  if (address(_resolver) != address(0)) return _resolver.getUri(_tokenId);

  // Return the token URI for the token's tier.
  return
    JBIpfsDecoder.decode(
      store.baseUriOf(address(this)),
      store.encodedTierIPFSUriOf(address(this), _tokenId)
    );
}

/** 
  @notice
  Returns the URI where contract metadata can be found. 

  @return The contract's metadata URI.
*/
function contractURI() external view override returns (string memory) {
  return store.contractUriOf(address(this));
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

