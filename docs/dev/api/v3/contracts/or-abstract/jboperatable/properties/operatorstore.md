# operatorStore

Contract: [`JBOperatable`](/dev/api/v3/contracts/or-abstract/jboperatable/README.md)​‌

Interface: [`IJBOperatable`](/dev/api/v3/interfaces/ijboperatable.md)
**A contract storing operator assignments.**

#### Definition

```
/** 
  @notice 
  A contract storing operator assignments.
*/ 
IJBOperatorStore public immutable override operatorStore;
```

* Once set the value cannot be changed.
* The resulting view function can be accessed externally by anyone.
* The resulting function overrides a function definition from the [`IJBOperatable`](/dev/api/v3/interfaces/ijboperatable.md) interface.
