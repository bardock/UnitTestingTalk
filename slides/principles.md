name: principles-header
layout: true

# Principles
---
template: principles-header

Qualities we'd like to see in a test

What makes these different from the goals is that there is more debate about them.

### Design for Testability

* Testing requirements are considered as the code is designed 

### Keep Tests Independent

* An Independent Test can be run by itself
* It sets up its own Fresh Fixture to put the SUT into a state that lets it verify the behavior it is testing

---
template: principles-header

### Isolate the SUT

* We can achieve this by designing our software so that each piece of depended-on software can be replaced with a Test Double using Dependency Injection

### Minimize Test Overlap

* We should structure our tests so that we have as few tests as possible depending on a particular piece of functionality

### Verify One Condition per Test

* There is a strong temptation to reuse the end state of one test condition as the starting state of the next by combining them into a single test

---
template: principles-header

### Test Concerns Separately

* Separate the concerns to different classes

### Write the Tests First

* Continues in next section ([TDD](./tdd.md))

---
layout: true