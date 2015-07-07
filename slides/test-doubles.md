name: test-doubles-header
layout: true

# Test Doubles

---
template: test-doubles-header

*We replace a component on which the SUT depends with a "test-specific equivalent."*

## When to use it?

* **Neither the SUT nor its DOCs provide an observation point** for the SUT's indirect output.
* **A DOC does not provide the control point** to allow us to exercise the SUT with the necessary indirect inputs.
* **If we have Slow Tests** and we want to be able to run our tests more quickly and hence more often.

## Variations

* **Test Stub**
* **Mock Object**
* **Fake Object**

---
layout: true