# projectId

Contract: [`JBToken`](/dev/api/v3/contracts/jbtoken/README.md)​‌

Interface: [`IJBToken`](/dev/api/v3/interfaces/ijbtoken.md)

**The ID of the project that this token should be exclusively used for. Send 0 to support any project.**

#### Definition

```
/** 
  @notice
  The ID of the project that this token should be exclusively used for. Send 0 to support any project. 
*/
uint256 public immutable override projectId;
```

* Once set the value cannot be changed.
* The resulting view function can be accessed externally by anyone.
* The resulting function overrides a function definition from the [`IJBToken`](/dev/api/v3/interfaces/ijbtoken.md) interface.
