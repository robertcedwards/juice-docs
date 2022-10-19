# _mintBestAvailableTier

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Contract: [`JBTiered721Delegate`](/dev/api/contracts/or-delegates/jbtiered721delegate)

<Tabs>
<TabItem value="Step by step" label="Step by step">

#### Definition

```
function _mintBestAvailableTier(
  uint256 _amount,
  address _beneficiary,
  bool _expectMint
) internal returns (uint256 leftoverAmount) { ... }
```

- Arguments:
  - `_amount` is a `uint256` which is the amount to base the mint on.
  - `_beneficiary` is the `address` to mint for.
  - `_expectMint` is a `bool` flag indicating if a mint was expected.
- The function is private to this contract.
- The function returns:
  - `leftoverAmount` which is the `uint256` amount leftover after the mint.

#### Body

</TabItem>

<TabItem value="Code" label="Code">

```
/** 
  @notice
  Mints a token in the best available tier.

  @param _amount The amount to base the mint on.
  @param _beneficiary The address to mint for.
  @param _expectMint A flag indicating if a mint was expected.

  @return  leftoverAmount The amount leftover after the mint.
*/
function _mintBestAvailableTier(
  uint256 _amount,
  address _beneficiary,
  bool _expectMint
) internal returns (uint256 leftoverAmount) {
  // Keep a reference to the token ID.
  uint256 _tokenId;

  // Keep a reference to the tier ID.
  uint256 _tierId;

  // Record the mint.
  (_tokenId, _tierId, leftoverAmount) = store.recordMintBestAvailableTier(_amount);

  // If there's no best tier, return or revert.
  if (_tokenId == 0) {
    // Make sure a mint was not expected.
    if (_expectMint) revert NOT_AVAILABLE();
    return leftoverAmount;
  }

  // Mint the tokens.
  _mint(_beneficiary, _tokenId);

  emit Mint(_tokenId, _tierId, _beneficiary, _amount - leftoverAmount, msg.sender);
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

