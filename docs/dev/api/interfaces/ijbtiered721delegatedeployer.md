# IJBTiered721DelegateDeployer

#### Code

https://github.com/jbx-protocol/juice-nft-rewards/blob/main/contracts/interfaces/IJBTiered721DelegateDeployer.sol

#### Definition

```
interface IJBTiered721DelegateDeployer {
  event DelegateDeployed(
    uint256 indexed projectId,
    IJBTiered721Delegate newDelegate,
    JB721GovernanceType governanceType
  );

  function deployDelegateFor(
    uint256 _projectId,
    JBDeployTiered721DelegateData memory _deployTieredNFTRewardDelegateData
  ) external returns (IJBTiered721Delegate delegate);
}
```
