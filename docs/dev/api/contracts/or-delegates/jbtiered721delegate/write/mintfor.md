# mintFor

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Contract: [`JBTiered721Delegate`](/dev/api/contracts/or-delegates/jbtiered721delegate)

Interface: [`IJBTiered721Delegate`](/dev/api/interfaces/ijbtiered721delegate)

<Tabs>
<TabItem value="Step by step" label="Step by step">

#### Definition

```
function mintFor(uint16[] memory _tierIds, address _beneficiary)
  public
  override
  onlyOwner
  returns (uint256[] memory tokenIds)
{ ... }
```

- Arguments:
  - `_tierIds` is a `uint16[]` containing the IDs of the tiers to mint from.
  - `_beneficiary` is the `address` to mint to. 
- The resulting function overrides a function definition from the [`IJBTiered721Delegate`](/dev/api/interfaces/ijbtiered721delegate) interface.
- The function returns:
  - `tokenIds` is a `uint256` containing the IDs of the newly minted tokens.

#### Body

</TabItem>

<TabItem value="Code" label="Code">

```
/** 
  @notice
  Manually mint NFTs from tiers.

  @param _tierIds The IDs of the tiers to mint from.
  @param _beneficiary The address to mint to. 

  @return tokenIds The IDs of the newly minted tokens.
*/
function mintFor(uint16[] memory _tierIds, address _beneficiary)
  public
  override
  onlyOwner
  returns (uint256[] memory tokenIds)
{
  // Record the mint. The returned token IDs correspond to the tiers passed in.
  (tokenIds, ) = store.recordMint(
    type(uint256).max, // force the mint.
    _tierIds,
    true // manual mint
  );

  // Keep a reference to the number of tokens being minted.
  uint256 _numberOfTokens = _tierIds.length;

  // Keep a reference to the token ID being iterated on.
  uint256 _tokenId;

  for (uint256 _i; _i < _numberOfTokens; ) {
    // Set the token ID.
    _tokenId = tokenIds[_i];

    // Mint the token.
    _mint(_beneficiary, _tokenId);

    emit Mint(_tokenId, _tierIds[_i], _beneficiary, 0, msg.sender);

    unchecked {
      ++_i;
    }
  }
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

