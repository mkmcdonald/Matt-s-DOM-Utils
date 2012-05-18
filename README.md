         ___      ___  ___________  ___________  ___        _________
        |   |    |   ||           ||           ||   |      |         |
        |   |    |   ||___     ___||___     ___||   |      |    _____|
        |   |    |   |    |   |        |   |    |   |      |   |_____
        |   |    |   |    |   |        |   |    |   |      |         |
        |   |    |   |    |   |        |   |    |   |      |_____    |
        |    \__/    |    |   |     ___|   |___ |   |_____  _____|   |
         \          /     |   |    |           ||         ||         |
          \________/      |___|    |___________||_________||_________|


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
        3. types.js;
        4. helpers.js;
        5. is.js;
        6. can.js;
        7. node.js;
        8. create.js;

        (optional modules)
        * classes.js;
        * traverse.js;
        * select.js.

# Matt's DOM Utils (Utils)

*Utils* is a toolbox for the HTML DOM. By minimally wrapping the DOM,
it encourages—and nurtures—the growth of DOM skills.

## Core Modules

### Raise

*Utils* provides error messages based upon the DOM 4 spec. Each
documented error type has a method provided to "raise" (throw) the
corresponding error.

### Types

*Utils* provides an object for every specified `nodeType` based
upon the DOM 4 spec

### Helpers

*Utils* provides public helper methods for common library tasks.
Most commonly, the module is used for static array conversion.

### Is

*Utils* provides identification tests, This includes test for DOM
nodes as well as "host objects". Utilizing these tests allows
scripts to degrade gracefully.

### Can

*Utils* provides various capability tests.

### Node

*Utils* provides a set of wrappers for various methods of
of the `Node` interface. In particular, this includes
`appendChild` and `removeChild`.

See [./Tests/Node](./Tests/Node "Node Tests")
for examples.

### Create

*Utils* provides a set of wrappers for various methods of
creation. In particular, this includes `createElement` and
`createTextNode`.

See [./Tests/Create](./Tests/Create "Create Tests")
for examples.

---

## Optional Modules

### Classes

*Utils* provides a DOM Level 4 spec-style `classList`
implementation. This includes methods for testing, adding,
removing and retrieving class tokens.

See [./Tests/Classes](./Tests/Classes "Class Tests")
for examples.

### Traverse

*Utils*'s main focus is diverse DOM traversal. This includes
utilities for `childNodes`, `children` and text along with
more general methods of traversal.

See [./Tests/Traverse](./Tests/Traverse "Traverse Tests")
for examples.

### Select

*Utils* provides a set of wrappers for various methods of
selection. This includes popular methods such as `getElementById`,
`getElementsByTagName` and newer methods such as `querySelectorAll`.
j
See [./Tests/Select](./Tests/Select "Select Tests")
for examples.

---

## Attributions

### Creator

* [Matt McDonald](http://www.fortybelow.ca "fortybelow.ca")


### Inspiration

* [David Mark & My Library](http://www.cinsoft.net "cinsoft.net")


## Metadata

* Last edited on Thursday, May 17th 2012
