# JBChainlinkV3PriceFeed

_Manages and normalizes price feeds._

#### Code

https://github.com/jbx-protocol/juice-contracts-v3/blob/main/contracts/JBChainlinkV3PriceFeed.sol

#### Addresses

Ethereum mainnet: [``](https://etherscan.io/address/)

Ethereum rinkeby: [``](https://rinkeby.etherscan.io/address/)

#### Interfaces

| Name                                             | Description                                                                                                                              |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| [**`IJBPriceFeed`**](/dev/api/interfaces/ijbpricefeed.md) | General interface for the methods in this contract that interact with the blockchain's state according to the protocol's rules. |

#### Constructor

```
/** 
  @param _feed The feed to report prices from.
*/
constructor(AggregatorV3Interface _feed) {
  feed = _feed;
}
```

* `_feed` is the feed to report prices from.

#### Properties

| Function                                                          | Definition                                                                                                                                                                                                |
| ----------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [**`feed`**](/dev/api/contracts/or-price-feeds/jbchainlinkv3pricefeed/properties/feed.md)                            | <p><strong>Returns</strong></p><ul><li><code>[AggregatorV3Interface](https://docs.chain.link/price-feeds-api-reference/)</code></li></ul> |

#### Read

| Function                                 | Definition                                                                                                                                                                                   |
| ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [**`currentPrice`**](/dev/api/contracts/or-price-feeds/jbchainlinkv3pricefeed/read/currentprice.md) | <p><strong>Params</strong></p><ul><li><code>uint256 _decimals</code></li></ul><p><strong>Returns</strong></p><ul><li><code>uint256 price</code></li></ul> |
