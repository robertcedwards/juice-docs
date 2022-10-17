# redeemParams

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Contract: [`JB721Delegate`](/dev/api/contracts/or-delegates/or-abstract/jb721delegate/)

Interface: [`IJBFundingCycleDataSource`](/dev/api/interfaces/ijbfundingcycledatasource)

<Tabs>
<TabItem value="Step by step" label="Step by step">

#### Definition

```
function redeemParams(JBRedeemParamsData calldata _data)
  external
  view
  override
  returns (
    uint256 reclaimAmount,
    string memory memo,
    JBRedemptionDelegateAllocation[] memory delegateAllocations
  )
{ ... }
```

#### Body

</TabItem>

<TabItem value="Code" label="Code">

```
/**
  @notice 
  Part of IJBFundingCycleDataSource, this function gets called when a project's token holders redeem.

  @param _data The Juicebox standard project redemption data.

  @return reclaimAmount The amount that should be reclaimed from the treasury.
  @return memo The memo that should be forwarded to the event.
  @return delegateAllocations The amount to send to delegates instead of adding to the beneficiary.
*/
function redeemParams(JBRedeemParamsData calldata _data)
  external
  view
  override
  returns (
    uint256 reclaimAmount,
    string memory memo,
    JBRedemptionDelegateAllocation[] memory delegateAllocations
  )
{
  // Make sure fungible project tokens aren't being redeemed too.
  if (_data.tokenCount > 0) revert UNEXPECTED_TOKEN_REDEEMED();

  // Check the 4 bytes interfaceId and handle the case where the metadata was not intended for this contract
  if (
    _data.metadata.length < 4 || bytes4(_data.metadata[0:4]) != type(IJB721Delegate).interfaceId
  ) {
    revert INVALID_REDEMPTION_METADATA();
  }

  // Set the only delegate allocation to be a callback to this contract.
  delegateAllocations = new JBRedemptionDelegateAllocation[](1);
  delegateAllocations[0] = JBRedemptionDelegateAllocation(this, 0);

  // If redemption rate is 0, nothing can be reclaimed from the treasury
  if (_data.redemptionRate == 0) return (0, _data.memo, delegateAllocations);

  // Decode the metadata
  (, uint256[] memory _decodedTokenIds) = abi.decode(_data.metadata, (bytes4, uint256[]));

  // Get a reference to the redemption rate of the provided tokens.
  uint256 _redemptionWeight = _redemptionWeightOf(_decodedTokenIds);

  // Get a reference to the total redemption weight.
  uint256 _total = _totalRedemptionWeight();

  // Get a reference to the linear proportion.
  uint256 _base = PRBMath.mulDiv(_data.overflow, _redemptionWeight, _total);

  // These conditions are all part of the same curve. Edge conditions are separated because fewer operation are necessary.
  if (_data.redemptionRate == JBConstants.MAX_REDEMPTION_RATE)
    return (_base, _data.memo, delegateAllocations);

  // Return the weighted overflow, and this contract as the delegate so that tokens can be deleted.
  return (
    PRBMath.mulDiv(
      _base,
      _data.redemptionRate +
        PRBMath.mulDiv(
          _redemptionWeight,
          JBConstants.MAX_REDEMPTION_RATE - _data.redemptionRate,
          _total
        ),
      JBConstants.MAX_REDEMPTION_RATE
    ),
    _data.memo,
    delegateAllocations
  );
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

