# _processPayment

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Contract: [`JBTiered721Delegate`](/dev/api/contracts/or-delegates/jbtiered721delegate)

<Tabs>
<TabItem value="Step by step" label="Step by step">

#### Definition

```
function _processPayment(JBDidPayData calldata _data) internal override { ... }
```

- Arguments:
  - `_data` is a [`JBDidPayData`](/dev/api/data-structures/jbdidpaydata) which contains the standard Juicebox project contribution data.
- The function is private to this contract.
- The function doesn't return anything.

#### Body

</TabItem>

<TabItem value="Code" label="Code">

```
/**
  @notice
  Mints for a given contribution to the beneficiary.

  @param _data The Juicebox standard project contribution data.
*/
function _processPayment(JBDidPayData calldata _data) internal override {
  // Normalize the currency.
  uint256 _value;
  if (_data.amount.currency == pricingCurrency) _value = _data.amount.value;
  else if (prices != IJBPrices(address(0)))
    _value = PRBMath.mulDiv(
      _data.amount.value,
      10**pricingDecimals,
      prices.priceFor(_data.amount.currency, pricingCurrency, _data.amount.decimals)
    );
  else return;

  // Keep a reference to the amount of credits the beneficiary already has.
  uint256 _credits = creditsOf[_data.beneficiary];

  // Set the leftover amount as the initial value, including any credits the beneficiary might already have.
  uint256 _leftoverAmount = _value + _credits;

  // Keep a reference to a flag indicating if a mint is expected from discretionary funds. Defaults to false, meaning to mint is not expected.
  bool _expectMintFromExtraFunds;

  // Keep a reference to the flag indicating if the transaction should revert if all provded funds aren't spent. Defaults to false, meaning only a minimum payment is enforced.
  bool _dontOverspend;

  // Skip the first 32 bytes which are used by the JB protocol to pass the paying project's ID when paying from a JBSplit.
  // Check the 4 bytes interfaceId to verify the metadata is intended for this contract.
  if (
    _data.metadata.length > 36 &&
    bytes4(_data.metadata[32:36]) == type(IJB721Delegate).interfaceId
  ) {
    // Keep a reference to the flag indicating if the transaction should not mint anything.
    bool _dontMint;

    // Keep a reference to the the specific tier IDs to mint.
    uint16[] memory _tierIdsToMint;

    // Decode the metadata.
    (, , _dontMint, _expectMintFromExtraFunds, _dontOverspend, _tierIdsToMint) = abi.decode(
      _data.metadata,
      (bytes32, bytes4, bool, bool, bool, uint16[])
    );

    // Don't mint if not desired.
    if (_dontMint) return;

    // Mint rewards if they were specified.
    if (_tierIdsToMint.length != 0)
      _leftoverAmount = _mintAll(_leftoverAmount, _tierIdsToMint, _data.beneficiary);
  }

  // If there are funds leftover, mint the best available with it.
  if (_leftoverAmount != 0) {
    _leftoverAmount = _mintBestAvailableTier(
      _leftoverAmount,
      _data.beneficiary,
      _expectMintFromExtraFunds
    );

    if (_leftoverAmount != 0) {
      // Make sure there are no leftover funds after minting if not expected.
      if (_dontOverspend) revert OVERSPENDING();

      // Increment the leftover amount.
      creditsOf[_data.beneficiary] = _leftoverAmount;
    } else if (_credits != 0) creditsOf[_data.beneficiary] = 0;
  } else if (_credits != 0) creditsOf[_data.beneficiary] = 0;
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

