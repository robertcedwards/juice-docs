# payParams

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Contract: [`JB721Delegate`](/dev/api/contracts/or-delegates/or-abstract/jb721delegate/)

Interface: [`IJBFundingCycleDataSource`](/dev/api/interfaces/ijbfundingcycledatasource)

<Tabs>
<TabItem value="Step by step" label="Step by step">

#### Definition

```
  function payParams(JBPayParamsData calldata _data)
    external
    view
    override
    returns (
      uint256 weight,
      string memory memo,
      JBPayDelegateAllocation[] memory delegateAllocations
    )
  { ... }
```

#### Body

</TabItem>

<TabItem value="Code" label="Code">

```
/**
  @notice 
  Part of IJBFundingCycleDataSource, this function gets called when the project receives a payment. It will set itself as the delegate to get a callback from the terminal.

  @param _data The Juicebox standard project payment data.

  @return weight The weight that tokens should get minted in accordance with.
  @return memo The memo that should be forwarded to the event.
  @return delegateAllocations The amount to send to delegates instead of adding to the local balance.
*/
function payParams(JBPayParamsData calldata _data)
  external
  view
  override
  returns (
    uint256 weight,
    string memory memo,
    JBPayDelegateAllocation[] memory delegateAllocations
  )
{
  // Forward the recieved weight and memo, and use this contract as a pay delegate.
  weight = _data.weight;
  memo = _data.memo;
  delegateAllocations = new JBPayDelegateAllocation[](1);
  delegateAllocations[0] = JBPayDelegateAllocation(this, 0);
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

