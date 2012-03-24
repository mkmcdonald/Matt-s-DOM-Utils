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
        1. errors.js
        2. host.js;
        3. nodes.js;

        (independent modules)
        * classes.js;
        * traversal.js;

# Matt's DOM Utils (MDU)

*MDU* is a toolbox for the HTML DOM. By minimally wrapping the DOM,
it encourages—and nurtures—the growth of DOM skills.

## Features

### Errors

*MDU* provides error messages based upon the DOM 4 spec. Each
documented error type has a method provided to throw the
corresponding error.

---

### Host

*MDU* provides feature detection for host objects
to allow scripts to degrade where certain
features are not supported.

---

### Nodes

*MDU* provides comprehensive node utilities for every documented
`nodeType`. This includes general and type-specific tests along
with various wrapped methods of the `Node` interface.

---

### Classes

*MDU* provides a DOM Level 4 spec-compliant `classList`
implementation. This includes methods for testing, adding,
removing and retrieving class tokens.

See [./Tests/Classes](./Tests/Classes "Class Tests")
for examples.

---

### Traversal

*MDU*'s main focus is diverse DOM traversal. This includes
utilities for `childNodes`, `children` and text along with
more general methods of traversal.

See [./Tests/Traversal](./Tests/Traversal "Traversal Tests")
for examples.

---

## Attributions

### Creator

* [Matt McDonald](http://www.fortybelow.ca "fortybelow.ca");


### Inspiration

* [David Mark & My Library](http://www.cinsoft.net "cinsoft.net");


## Metadata

* Last edited on Friday March 23rd, 2012;
