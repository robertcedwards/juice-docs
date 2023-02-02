# JBDeployTiered721DelegateData
[Git Source](https://github.com/jbx-protocol/juice-721-delegate/blob/2d5cc8b5e5fa5f9438288f074222da0ada454156/contracts/structs/JBDeployTiered721DelegateData.sol)


```solidity
struct JBDeployTiered721DelegateData {
    IJBDirectory directory;
    string name;
    string symbol;
    IJBFundingCycleStore fundingCycleStore;
    string baseUri;
    IJBTokenUriResolver tokenUriResolver;
    string contractUri;
    address owner;
    JB721PricingParams pricing;
    address reservedTokenBeneficiary;
    IJBTiered721DelegateStore store;
    JBTiered721Flags flags;
    JB721GovernanceType governanceType;
}
```

