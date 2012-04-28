         ___      ___      _________       ___      ___
        |   \    /   |    |         \     |   |    |   |
        |    \  /    |    |    __    \    |   |    |   |
        |     \/     |    |   |  |   |    |   |    |   |
        |            |    |   |  |   |    |   |    |   |
        |   |\  /|   |    |   |__|   |    |    \__/    |
        |   | \/ |   |    |          /     \          /
        |___|    |___|    |_________/       \________/ 

        Matt's DOM Utils

        Description:

        A collection of widely-tested DOM utilities and modules
        that work in a maximal amount of environments.

        Contact:

        Matt McDonald
        [firstName.toLowerCase()@fortybelow.ca]
        http://www.fortybelow.ca

        Current Build Order:

        (core)
        1. utils.js
        2. raise.js
        3. helpers.js;
        4. types.js;
        5. is.js;
        6. can.js;
        7. node.js;
        8. create.js;

        (independent modules)
        * classes.js;
        * traverse.js;
        * select.js;

# Matt's DOM Utils (MDU)

*MDU* is a toolbox for the HTML DOM. By minimally wrapping the DOM,
it encourages—and nurtures—the growth of DOM skills.

## Features

### Raise

*MDU* provides error messages based upon the DOM 4 spec. Each
documented error type has a method provided to "raise" (throw) the
corresponding error.

---

### Helpers

*MDU* provides public helper methods for common library tasks.
Most commonly, the module is used for static array conversion.

---

### Types

*MDU* provides an object for every specified `nodeType` based
upon the DOM 4 spec;

---

### Is

*MDU* provides identification tests, This includes test for DOM
nodes as well as "host objects". Utilizing these tests allows
scripts to degrade gracefully.

---

### Can

*MDU* provides various capability tests.

---

### Node

*MDU* provides a set of wrappers for various methods of
of the `Node` interface. In particular, this includes
`appendChild` and `removeChild`.

---

### Create

*MDU* provides a set of wrappers for various methods of
creation. In particular, this includes `createElement` and
`createTextNode`.

See [./Tests/Create](./Tests/Create "Create Tests")
for examples.

---

### Classes

*MDU* provides a DOM Level 4 spec-style `classList`
implementation. This includes methods for testing, adding,
removing and retrieving class tokens.

See [./Tests/Classes](./Tests/Classes "Class Tests")
for examples.

---

### Traverse

*MDU*'s main focus is diverse DOM traversal. This includes
utilities for `childNodes`, `children` and text along with
more general methods of traversal.

See [./Tests/Traverse](./Tests/Traverse "Traverse Tests")
for examples.

---

### Select

*MDU* provides a set of wrappers for various methods of
selection. This includes popular methods such as `getElementById`,
`getElementsByTagName` and newer methods such as `querySelectorAll`.

---

## Attributions

### Creator

* [Matt McDonald](http://www.fortybelow.ca "fortybelow.ca");


### Inspiration

* [David Mark & My Library](http://www.cinsoft.net "cinsoft.net");


## Metadata

* Last edited on Friday, April 27th 2012;
