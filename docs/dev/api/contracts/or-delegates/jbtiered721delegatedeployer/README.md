# JBTiered721DelegateDeployer

*Deploys a tier delegate.*

#### Code

https://github.com/jbx-protocol/juice-nft-rewards/blob/main/contracts/JBTiered721DelegateDeployer.sol

#### Addresses

Ethereum Mainnet: *Not deployed*

Goerli Testnet: *Not deployed*

#### Interfaces

|Name|Description|
|-|-|
|[**`IJBTiered721DelegateDeployer`**](/dev/api/interfaces/ijbtiered721delegatedeployer)|General interface for the methods in this contract that interact with the blockchain's state according to the protocol's rules.|

#### Constructor

```
constructor() {}
```

#### Events

|Name|Data|
|-|-|
|[`DelegateDeployed`](.)|<ul><li>`uint256 indexed projectId`</li><li>[`IJBTiered721Delegate`](/dev/api/interfaces/ijbtiered721delegate) `newDelegate`</li></ul>|

#### Write

|Function|Definition|
|-|-|
|[**`deployDelegateFor`**](.)|**Params**<ul><li>`uint256 _projectId`</li><li>[`JBDeployTiered721DelegateData`](/dev/api/data-structures/jbdeploytiered721delegatedata) `memory _deployTiered721DelegateData`</li></ul>**Returns**<ul><li>[`IJBTiered721Delegate`](/dev/api/interfaces/ijbtiered721delegate)</li></ul>|
