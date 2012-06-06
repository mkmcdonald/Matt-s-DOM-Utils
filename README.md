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

        IRC: #mattsdomutils (FreeNode).

        Current Build Order:

        (core)
        1. utils.js
        2. raise.js
        3. types.js;
        4. is.js;
        5. can.js;
        6. helpers.js;
        7. node.js;
        8. create.js;

        (optional modules)
        * classes.js;
        * traverse.js;
        * select.js.

# Matt's DOM Utils (Utils)

*Utils* is a toolbox for the HTML DOM. By minimally wrapping the DOM,
it enables developers to learn about the API without the fog of heavy
abtractions.

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

### Can

*Utils* provides various capability tests for core features.

### Helpers

*Utils* provides public helper methods for common library tasks.
Most commonly, the module is used for array-like object
conversion.

### Node

*Utils* provides a set of wrappers for various methods of
of the `Node` interface. In particular, this includes
`Node::appendChild` and `Node::removeChild`.

See [./Tests/Node](./Tests/Node "Node Tests")
for examples.

### Create

*Utils* provides a set of wrappers for various methods of
creation. In particular, this includes `Node::createElement` and
`Node::createTextNode`.

See [./Tests/Create](./Tests/Create "Create Tests")
for examples.

---

## Optional Modules

### Classes

*Utils* provides a DOM Level 4 spec-style `Element::classList`
implementation. This includes methods for testing, adding,
removing and retrieving class tokens.

See [./Tests/Classes](./Tests/Classes "Class Tests")
for examples.

### Traverse

*Utils*'s main focus is diverse DOM traversal. This includes
utilities for `Node::childNodes`, `Node::children` and text along
with more general methods of traversal.

See [./Tests/Traverse](./Tests/Traverse "Traverse Tests")
for examples.

### Select

*Utils* provides a set of wrappers for various methods of
selection. This includes popular methods such as
`Document::getElementById`, `getElementsByTagName` and newer
methods such as `NodeSelector::querySelectorAll`.

See [./Tests/Select](./Tests/Select "Select Tests")
for examples.

---

## Builds

*Utils* provides a Makefile along with a custom server-side
builder.

### Makefile

*Utils* provides some simple options for build creation via
[./Makefile](./Makefile "Makefile").

#### Core

`make core` (exports to [./Builds/Uncompressed/utils-core.js](./Builds/Uncompressed/utils-core.js "Build File")).

#### Classes

`make classes` (exports to [./Builds/Uncompressed/utils-classes.js](./Builds/Uncompressed/utils-classes.js "Build File")).

#### Traverse

`make traverse` (exports to [./Builds/Uncompressed/utils-traverse.js](./Builds/Uncompressed/utils-traverse.js "Build File")).

#### All

`make all` or `make` (exports to [./Builds/Uncompressed/utils-all.js](./Builds/Uncompressed/utils-all.js "Build File")).

#### Minified

`make install` (runs all hard-coded builds through the YUI Compressor to [./Builds/Compressed](./Builds/Compressed "Compressed Directory")).

### Custom Builder

*Utils* provides a custom server-side builder to create
more flexible builds. This option allows one to
select multiple modules instead of the hard-coded
one-or-none-or-all Makefile approach.

#### Options

* Minfication
* Gzip

---

## Attributions

### Creator

* [Matt McDonald](http://www.fortybelow.ca "fortybelow.ca")


### Inspiration

* [David Mark & My Library](http://www.cinsoft.net "cinsoft.net")

### Analyses and Advice

* [Thomas "PointedEars" Lahn](http://www.pointedears.de "pointedears.de")


## Metadata

* Last edited on Tuesday, June 5th 2012
