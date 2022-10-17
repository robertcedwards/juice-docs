# IJB721Delegate

#### Code

https://github.com/jbx-protocol/juice-nft-rewards/blob/main/contracts/interfaces/IJB721Delegate.sol

#### Definition

```
interface IJB721Delegate {
  event SetBaseUri(string indexed baseUri, address caller);

  event SetContractUri(string indexed contractUri, address caller);

  event SetTokenUriResolver(IJBTokenUriResolver indexed newResolver, address caller);

  function projectId() external view returns (uint256);

  function directory() external view returns (IJBDirectory);

  function setBaseUri(string memory _baseUri) external;

  function setContractUri(string calldata _contractMetadataUri) external;

  function setTokenUriResolver(IJBTokenUriResolver _tokenUriResolver) external;
}
```
