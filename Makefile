SHELL = /bin/sh

LIBRARY = ./Library

# core

UTILS = $(LIBRARY)/utils.js
RAISE = $(LIBRARY)/raise.js
HELPERS = $(LIBRARY)/helpers.js
TYPES = $(LIBRARY)/types.js
IS = $(LIBRARY)/is.js
CAN = $(LIBRARY)/can.js
NODES = $(LIBRARY)/nodes.js
CREATE = $(LIBRARY)/create.js

# additional modules

TRAVERSE = $(LIBRARY)/traverse.js
CLASSES = $(LIBRARY)/classes.js
SELECT = $(LIBRARY)/select.js

MAKE_DEFAULT = $(MAKE_ALL);\
	$(MAKE_CORE);\
	$(MAKE_CLASSES);\
	$(MAKE_TRAVERSE);\
	$(MAKE_SELECT)

ALL_FILE = ./utils-all.js
ALL_DEP = $(CORE_DEP) $(CLASSES) $(TRAVERSE) $(SELECT)
MAKE_ALL = cat $(ALL_DEP) > $(ALL_FILE)

CORE_FILE = ./utils-core.js
CORE_DEP = $(UTILS) $(RAISE) $(TYPES) $(HELPERS) $(IS) $(CAN)\
	$(NODES) $(CREATE)
MAKE_CORE = cat $(CORE_DEP) > $(CORE_FILE)

CLASSES_FILE = ./utils-classes.js
CLASSES_DEP = $(CORE_DEP) $(CLASSES)
MAKE_CLASSES = cat $(CLASSES_DEP) > $(CLASSES_FILE)

TRAVERSE_FILE = ./utils-traverse.js
TRAVERSE_DEP = $(CORE_DEP) $(TRAVERSE)
MAKE_TRAVERSE = cat $(TRAVERSE_DEP) > $(TRAVERSE_FILE)

SELECT_FILE = ./utils-select.js
SELECT_DEP = $(CORE_DEP) $(SELECT)
MAKE_SELECT = cat $(SELECT_DEP) > $(SELECT_FILE)

CLEAN_DEP = $(CORE_FILE) $(CLASSES_FILE) $(TRAVERSE_FILE)\
	$(SELECT_FILE) $(ALL_FILE)
MAKE_CLEAN = rm -f $(CLEAN_DEP)

.PHONY: all core classes traverse select

.DEFAULT: all core classes traverse select
	$(MAKE_DEFAULT)

all: core classes traverse select
	$(MAKE_ALL)

core:
	$(MAKE_CORE)

classes:
	$(MAKE_CLASSES)

traverse:
	$(MAKE_TRAVERSE)

select:
	$(MAKE_SELECT)

.PHONY: clean

clean: 
	$(MAKE_CLEAN)
