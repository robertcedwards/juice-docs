# redemptionWeightOf

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Contract: [`JBTiered721DelegateStore`](/dev/api/contracts/or-delegates/jbtiered721delegatestore)

Interface: [`IJBTiered721DelegateStore`](/dev/api/interfaces/ijbtiered721delegatestore)

<Tabs>
<TabItem value="Step by step" label="Step by step">

#### Definition

```
function redemptionWeightOf(address _nft, uint256[] calldata _tokenIds)
  public
  view
  override
  returns (uint256 weight)
{ ... }
```

- Arguments:
  - `_nft` is the `address` of the NFT for which the redemption weight is being calculated.
  - `_tokenIds` is a `uint256[]` containing the IDs of the tokens to get the cumulative redemption weight of.
- The resulting function overrides a function definition from the [`IJBTiered721DelegateStore`](/dev/api/interfaces/ijbtiered721delegatestore) interface.
- The function returns:
  - `weight` is the weight as a `uint256`.

#### Body

</TabItem>

<TabItem value="Code" label="Code">

```
/**
  @notice
  The cumulative weight the given token IDs have in redemptions compared to the `totalRedemptionWeight`.

  @param _nft The NFT for which the redemption weight is being calculated.
  @param _tokenIds The IDs of the tokens to get the cumulative redemption weight of.

  @return weight The weight.
*/
function redemptionWeightOf(address _nft, uint256[] calldata _tokenIds)
  public
  view
  override
  returns (uint256 weight)
{
  // Get a reference to the total number of tokens.
  uint256 _numberOfTokenIds = _tokenIds.length;

  // Add each token's tier's contribution floor to the weight.
  for (uint256 _i; _i < _numberOfTokenIds; ) {
    weight += _storedTierOf[_nft][tierIdOfToken(_tokenIds[_i])].contributionFloor;

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

