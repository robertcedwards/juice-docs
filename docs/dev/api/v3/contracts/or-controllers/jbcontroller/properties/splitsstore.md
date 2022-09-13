# splitsStore

Contract: [`JBController`](/dev/api/v3/contracts/or-controllers/jbcontroller/README.md)​‌

Interface: [`IJBController`](/dev/api/v3/interfaces/ijbcontroller.md)

**The contract that stores splits for each project.**

#### Definition

```
/** 
  @notice 
  The contract that stores splits for each project.
*/
IJBSplitsStore public immutable splitsStore;
```

* Once set the value cannot be changed.
* The resulting view function can be accessed externally by anyone.
* The resulting function overrides a function definition from the [`IJBController`](/dev/api/v3/interfaces/ijbcontroller.md) interface.
