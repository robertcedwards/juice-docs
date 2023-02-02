# IJBTiered721DelegateProjectDeployer
[Git Source](https://github.com/jbx-protocol/juice-721-delegate/blob/2d5cc8b5e5fa5f9438288f074222da0ada454156/contracts/interfaces/IJBTiered721DelegateProjectDeployer.sol)


## Functions
### controller


```solidity
function controller() external view returns (IJBController);
```

### delegateDeployer


```solidity
function delegateDeployer() external view returns (IJBTiered721DelegateDeployer);
```

### launchProjectFor


```solidity
function launchProjectFor(
    address _owner,
    JBDeployTiered721DelegateData memory _deployTieredNFTRewardDelegateData,
    JBLaunchProjectData memory _launchProjectData
) external returns (uint256 projectId);
```

### launchFundingCyclesFor


```solidity
function launchFundingCyclesFor(
    uint256 _projectId,
    JBDeployTiered721DelegateData memory _deployTieredNFTRewardDelegateData,
    JBLaunchFundingCyclesData memory _launchFundingCyclesData
) external returns (uint256 configuration);
```

### reconfigureFundingCyclesOf


```solidity
function reconfigureFundingCyclesOf(
    uint256 _projectId,
    JBDeployTiered721DelegateData memory _deployTieredNFTRewardDelegateData,
    JBReconfigureFundingCyclesData memory _reconfigureFundingCyclesData
) external returns (uint256 configuration);
```

