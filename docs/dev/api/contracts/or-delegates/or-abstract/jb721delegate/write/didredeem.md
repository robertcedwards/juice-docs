# didRedeem

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Contract: [`JB721Delegate`](/dev/api/contracts/or-delegates/or-abstract/jb721delegate/)

Interface: [`IJBRedemptionDelegate`](/dev/api/interfaces/ijbredemptiondelegate)

<Tabs>
<TabItem value="Step by step" label="Step by step">

#### Definition

```
function didRedeem(JBDidRedeemData calldata _data) external payable virtual override { ... }
```

- Arguments:
  - `_data` is the Juicebox standard [`JBPayParamsData`](/dev/api/data-structures/jbpayparamsdata) project payment data.
- The resulting function overrides a function definition from the [`IJBRedemptionDelegate`](/dev/api/interfaces/ijbredemptiondelegate) interface.
- The function doesn't return anything.

#### Body

</TabItem>

<TabItem value="Code" label="Code">

```
/**
  @notice
  Part of IJBRedeemDelegate, this function gets called when the token holder redeems. It will burn the specified NFTs to reclaim from the treasury to the _data.beneficiary.

  @dev
  This function will revert if the contract calling is not one of the project's terminals.

  @param _data The Juicebox standard project redemption data.
*/
function didRedeem(JBDidRedeemData calldata _data) external payable virtual override {
  // Make sure the caller is a terminal of the project, and the call is being made on behalf of an interaction with the correct project.
  if (
    msg.value != 0 ||
    !directory.isTerminalOf(projectId, IJBPaymentTerminal(msg.sender)) ||
    _data.projectId != projectId
  ) revert INVALID_REDEMPTION_EVENT();

  // Check the 4 bytes interfaceId and handle the case where the metadata was not intended for this contract
  if (
    _data.metadata.length < 4 || bytes4(_data.metadata[0:4]) != type(IJB721Delegate).interfaceId
  ) revert INVALID_REDEMPTION_METADATA();

  // Decode the metadata.
  (, uint256[] memory _decodedTokenIds) = abi.decode(_data.metadata, (bytes4, uint256[]));

  // Get a reference to the number of token IDs being checked.
  uint256 _numberOfTokenIds = _decodedTokenIds.length;

  // Keep a reference to the token ID being iterated on.
  uint256 _tokenId;

  // Iterate through all tokens, burning them if the owner is correct.
  for (uint256 _i; _i < _numberOfTokenIds; ) {
    // Set the token's ID.
    _tokenId = _decodedTokenIds[_i];

    // Make sure the token's owner is correct.
    if (_owners[_tokenId] != _data.holder) revert UNAUTHORIZED();

    // Burn the token.
    _burn(_tokenId);

    unchecked {
      ++_i;
    }
  }

  // Call the hook.
  _didBurn(_decodedTokenIds);
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

