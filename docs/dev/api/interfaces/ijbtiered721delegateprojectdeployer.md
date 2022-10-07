# IJBTiered721DelegateProjectDeployer

#### Code

https://github.com/jbx-protocol/juice-nft-rewards/blob/main/contracts/interfaces/IJBTiered721DelegateProjectDeployer.sol

#### Definition

```
interface IJBTiered721DelegateProjectDeployer {
  function controller() external view returns (IJBController);

  function delegateDeployer() external view returns (IJBTiered721DelegateDeployer);

  function launchProjectFor(
    address _owner,
    JBDeployTiered721DelegateData memory _deployTieredNFTRewardDelegateData,
    JBLaunchProjectData memory _launchProjectData
  ) external returns (uint256 projectId);

  function launchFundingCyclesFor(
    uint256 _projectId,
    JBDeployTiered721DelegateData memory _deployTieredNFTRewardDelegateData,
    JBLaunchFundingCyclesData memory _launchFundingCyclesData
  ) external returns (uint256 configuration);

  function reconfigureFundingCyclesOf(
    uint256 _projectId,
    JBDeployTiered721DelegateData memory _deployTieredNFTRewardDelegateData,
    JBReconfigureFundingCyclesData memory _reconfigureFundingCyclesData
  ) external returns (uint256 configuration);
}
```
