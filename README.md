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
        http://www.fortybelow.ca/projects/JavaScript/Utils/

        Description:

        A collection of widely tested DOM utilities and modules
        that work in a maximal amount of environments.

        Contact:

        Matt McDonald
        ["Utils".toLowerCase();]@fortybelow.ca
        http://www.fortybelow.ca

        Twitter: @mattsdomutils.

        Current Build Order:

        (core)
        1. raise.js
        2. types.js;
        3. is.js;
        4. helpers.js;
        5. node.js;
        6. create.js;

        (optional modules)
        * classes.js;
        * traverse.js;
        * select.js.

# Matt's DOM Utils (Utils)

*Utils* is a toolbox for the HTML DOM. By minimally wrapping the DOM,
it enables developers to learn about the API without the fog of heavy
abstractions.

## License

*Utils* is licensed under the MIT License. In concordance with the
MIT License, use the provided source code under any scenario.

---

## Core Modules

### Raise

*Utils* provides error messages based upon the DOM 4 spec. Each
documented error type has a method provided to "raise" (throw) the
corresponding error.

### Types

*Utils* provides an object containing every specified `nodeType` based
upon the DOM 4 spec.

### Is

*Utils* provides identification tests. These include tests for
document tree node-like objects as well as "host objects". Utilizing
these tests allows scripts to degrade gracefully.

### Helpers

*Utils* provides public helper methods for common library tasks.
Most commonly, the module is used for array-like object
conversion.

### Node

*Utils* provides a set of wrappers for various methods of
of the `Node` interface. In particular, this includes
`Node::appendChild` and `Node::removeChild`.

See ./Tests/Node for examples.

### Create

*Utils* provides a set of wrappers for various methods of
creation. In particular, this includes `Node::createElement` and
`Node::createTextNode`.

See ./Tests/Create for examples.

---

## Optional Modules

### Classes

*Utils* provides a DOM Level 4 spec-style `Element::classList`
implementation. This includes methods for testing, adding,
removing and retrieving class tokens.

See ./Tests/Classes for examples.

### Traverse

*Utils*'s main focus is diverse DOM traversal. This includes
utilities for `Node::childNodes`, `Node::children` and text along
with more general methods of traversal.

See ./Tests/Traverse for examples.

### Select

*Utils* provides a set of wrappers for various methods of
selection. This includes popular methods such as
`Document::getElementById`, `getElementsByTagName` and newer
methods such as `NodeSelector::querySelectorAll`.

See ./Tests/Select for examples.

---

## Builds

*Utils* provides a Makefile along with a custom server-side
builder.

### Makefile

*Utils* provides some simple options for build creation via
./Makefile.

#### Core

`make core` (exports to ./Builds/Uncompressed/utils-core.js).

#### Classes

`make classes` (exports to ./Builds/Uncompressed/utils-classes.js).

#### Traverse

`make traverse` (exports to ./Builds/Uncompressed/utils-traverse.js).

#### Complete

`make complete` (exports to ./Builds/Uncompressed/utils-complete.js).

#### Minified

`make` (runs all hard-coded builds through the YUI Compressor to ./Builds/Compressed).

### Custom Builder

*Utils* provides a custom server-side builder to create
more flexible builds. This option allows one to
select multiple modules instead of the hard-coded
one-or-none-or-all Makefile approach.

The builder is located at: ./Download/index.html.

#### Options

* Minification

---

## Attributions

### Creator

* [Matt McDonald](http://www.fortybelow.ca "fortybelow.ca")


### Inspiration

* [David Mark & My Library](http://www.cinsoft.net "cinsoft.net")

### Analyses and Advice

* [Thomas "PointedEars" Lahn](http://www.pointedears.de "pointedears.de")


## Metadata

* Last edited on Monday, June 18th 2012
