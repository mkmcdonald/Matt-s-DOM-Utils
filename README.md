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

        A collection of widely tested DOM modules that work in a
        maximal amount of environments.

        Contact:

        Matt McDonald
        ["Utils".toLowerCase();]@fortybelow.ca
        http://www.fortybelow.ca

        Twitter: @mattsdomutils.
        IRC: #mattsdomutils (irc://irc.freenode.net)

        Current Build Order:

        (optional modules)
        * raise.js
        * types.js;
        * is.js;
        * node.js;
        * create.js;
        * classes.js;
        * traverse.js;
        * text.js;
        * select.js.

# Matt's DOM Utils (Utils)

*Utils* is a toolbox for the HTML DOM. By minimally wrapping the DOM,
it enables developers to learn about the API without the fog of heavy
abstractions.

## License

*Utils* is licensed under the MIT License. In concordance with the
MIT License, use the provided source code under any scenario.

---

## Optional Modules

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

### Text

*Utils* provides a DOM Level 4 spec-style `Node::textContent`
implementation. This includes methods for getting and setting text.

See ./Tests/Text for examples.

### Select

*Utils* provides a set of wrappers for various methods of
selection. This includes popular methods such as
`Document::getElementById`, `getElementsByTagName` and newer
methods such as `NodeSelector::querySelectorAll`.

See ./Tests/Select for examples.

---

## Builds

*Utils* provides a Makefile for initial set-up.

### Makefile

*Utils* provides some simple options for build creation via
./Makefile.

#### Head

`make head` (exports to ./Builds/Uncompressed/utils-head.js).
This contains the license and global variables.

#### Complete

`make complete` (exports to ./Builds/Uncompressed/utils-complete.js).

#### Minified

`make compress` (runs all hard-coded builds through the YUI Compressor
to ./Builds/Compressed).

#### All

`make` or `make all` will run all of the above options.

### Custom Builds

*Utils* provides multiple options for custom builds.

#### Command-line

`./build.sh [modules]` will pass the specified modules to the
build script and will then export the result to
./Builds/Uncompressed/utils-build.js.

##### Example

`./build.sh traverse text`

#### Server-side

A server-side builder is located at the project site, which
provides an easy way to string together files for those
who cannot or do not wish to run command-line code.

---

## Attributions

### Creator

* [Matt McDonald](http://www.fortybelow.ca "fortybelow.ca")


### Inspiration

* [David Mark & My Library](http://www.cinsoft.net "cinsoft.net")

### Analyses and Advice

* [Thomas "PointedEars" Lahn](http://www.pointedears.de "pointedears.de")


## Metadata

* Last edited on Sunday, June 24th 2012
