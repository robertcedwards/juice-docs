# projects

Contract: [`JBController`](/dev/api/v3/contracts/or-controllers/jbcontroller/README.md)​‌

Interface: [`IJBController`](/dev/api/v3/interfaces/ijbcontroller.md)

**Mints ERC-721's that represent project ownership and transfers.**

#### Definition

```
/** 
  @notice 
  Mints ERC-721's that represent project ownership and transfers.
*/ 
IJBProjects public immutable override projects;
```

* Once set the value cannot be changed.
* The resulting view function can be accessed externally by anyone.
* The resulting function overrides a function definition from the [`IJBController`](/dev/api/v3/interfaces/ijbcontroller.md) interface.
