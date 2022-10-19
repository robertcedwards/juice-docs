# _mintAll

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Contract: [`JBTiered721Delegate`](/dev/api/contracts/or-delegates/jbtiered721delegate)

<Tabs>
<TabItem value="Step by step" label="Step by step">

#### Definition

```
function _mintAll(
  uint256 _amount,
  uint16[] memory _mintTierIds,
  address _beneficiary
) internal returns (uint256 leftoverAmount) { ... }
```

- Arguments:
  - `_amount` is the `uint256` amount to base the mints on. All mints' price floors must fit in this amount.
  - `_mintTierIds` is a `uint16[]` of tier IDs that are intended to be minted.
  - `_beneficiary` is the `address` to mint for.
- The function is private to this contract.
- The function returns:
  - `leftoverAmount` the `uint256` amount leftover after the mint.

#### Body

</TabItem>

<TabItem value="Code" label="Code">

```
/** 
  @notice
  Mints a token in all provided tiers.

  @param _amount The amount to base the mints on. All mints' price floors must fit in this amount.
  @param _mintTierIds An array of tier IDs that are intended to be minted.
  @param _beneficiary The address to mint for.

  @return leftoverAmount The amount leftover after the mint.
*/
function _mintAll(
  uint256 _amount,
  uint16[] memory _mintTierIds,
  address _beneficiary
) internal returns (uint256 leftoverAmount) {
  // Keep a reference to the token ID.
  uint256[] memory _tokenIds;

  // Record the mint. The returned token IDs correspond to the tiers passed in.
  (_tokenIds, leftoverAmount) = store.recordMint(
    _amount,
    _mintTierIds,
    false // Not a manual mint
  );

  // Get a reference to the number of mints.
  uint256 _mintsLength = _tokenIds.length;

  // Keep a reference to the token ID being iterated on.
  uint256 _tokenId;

  // Loop through each token ID and mint.
  for (uint256 _i; _i < _mintsLength; ) {
    // Get a reference to the tier being iterated on.
    _tokenId = _tokenIds[_i];

    // Mint the tokens.
    _mint(_beneficiary, _tokenId);

    emit Mint(_tokenId, _mintTierIds[_i], _beneficiary, _amount, msg.sender);

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

