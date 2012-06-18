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

*Utils* is licensed under the GNU Lesser General Public License
(LGPL). In concordance with the LGPL, the following tasks must be undertaken
to use *Utils*:

1. Give prominent notice with each copy of [your project] that [*Utils*]
is used in it and that [*Utils*] and its use are covered by [the LGPL];

2. Accompany [your project] with a copy of the GNU GPL and [the LGPL];

3. [If your project] displays copyright notices during execution, include the
copyright notice for [*Utils*] among these notices, as well as a
reference directing the user to the copies of the GNU GPL and [the LGPL];

4. Do one of the following:

	1. Convey [modifications of *Utils*] under the terms
	of [the LGPL], and [your project's source code] in a form suitable
	for, and under terms that permit, the user to recombine or relink 
	[your project] with [your build of *Utils*] to produce
	[a fork of your project], in the manner specified by section 6 of
	the GNU GPL for conveying Corresponding Source.

	2. Use a suitable shared library mechanism for linking with [*Utils*].
	A suitable mechanism is one that:

		1. uses at run time a copy of [*Utils*] already present on the
		user's computer system;

		2. will operate properly with a modified version of [*Utils*]
		that is interface-compatible with [your build of *Utils*].

5. If you use option [4.1], [build instructions] must accompany
[modifications of *Utils*] and [your project's source code].
If you use option [4.2], you must provide [build instructions] in the manner
specified by section 6 of the GNU GPL for conveying Corresponding Source.

### Summation

In short, mention *Utils* in a README file; mention its protection
under the LGPL; store copies of the GPL and LGPL in your project's repository;
and link to build instructions for *Utils* (a link to the repository
will suffice).

#### Example

[inside README.md]

> Foobar uses *Utils* for DOM traversal; *Utils* is protected
under the LGPL 3.0, which is a derivative of the GPL 3.0. For more, see [*Utils*.info].

[inside *Utils*.info]

> *Utils* is protected by the LGPL 3.0, which is a derivative of the GPL
3.0. Copies have been stored at the following links: [link to LGPL] and
[link to GPL]. Build instructions can be found at the following link:
[link to *Utils*].

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

#### Complete

`make complete` (exports to [./Builds/Uncompressed/utils-complete.js](./Builds/Uncompressed/utils-complete.js "Build File")).

#### Minified

`make` (runs all hard-coded builds through the YUI Compressor to [./Builds/Compressed](./Builds/Compressed "Compressed Directory")).

### Custom Builder

*Utils* provides a custom server-side builder to create
more flexible builds. This option allows one to
select multiple modules instead of the hard-coded
one-or-none-or-all Makefile approach.

The builder is located at: [./Download/index.html](./Download/index.html "Builder Page").

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

* Last edited on Friday, June 15th 2012
