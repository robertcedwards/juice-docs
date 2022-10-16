# IJB721Delegate

#### Code

https://github.com/jbx-protocol/juice-nft-rewards/blob/main/contracts/interfaces/IJB721TieredGovernance.sol

#### Definition

```
interface IJB721TieredGovernance is IJBTiered721Delegate {
  event TierDelegateChanged(
    address indexed delegator,
    address indexed fromDelegate,
    address indexed toDelegate,
    uint256 tierId,
    address caller
  );

  event TierDelegateVotesChanged(
    address indexed delegate,
    uint256 indexed tierId,
    uint256 previousBalance,
    uint256 newBalance,
    address callre
  );

  event DelegateChanged(
    address indexed delegator,
    address indexed fromDelegate,
    address indexed toDelegate
  );

  function getTierDelegate(address _account, uint256 _tier) external view returns (address);

  function getTierVotes(address _account, uint256 _tier) external view returns (uint256);

  function getPastTierVotes(
    address _account,
    uint256 _tier,
    uint256 _blockNumber
  ) external view returns (uint256);

  function getTierTotalVotes(uint256 _tier) external view returns (uint256);

  function getPastTierTotalVotes(uint256 _tier, uint256 _blockNumber)
    external
    view
    returns (uint256);

  function setTierDelegate(address _delegatee, uint256 _tierId) external;

  function setTierDelegates(JBTiered721SetTierDelegatesData[] memory _setTierDelegatesData)
    external;
```
