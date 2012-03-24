SHELL = /bin/sh

LIBRARY = ./Library
UTILS = $(LIBRARY)/utils.js
ERRORS = $(LIBRARY)/errors.js
HOST = $(LIBRARY)/host.js
NODES = $(LIBRARY)/nodes.js
TRAVERSAL = $(LIBRARY)/traversal.js
CLASSES = $(LIBRARY)/classes.js

CORE_FILE = ./utils-core.js
CORE_DEP = $(UTILS) $(ERRORS) $(HOST) $(NODES)
MAKE_CORE = cat $(CORE_DEP) > $(CORE_FILE)

CLASSES_FILE = ./utils-classes.js
CLASSES_DEP = $(CORE_DEP) $(CLASSES)
MAKE_CLASSES = cat $(CLASSES_DEP) > $(CLASSES_FILE)

TRAVERSAL_FILE = ./utils-traversal.js
TRAVERSAL_DEP = $(CORE_DEP) $(TRAVERSAL)
MAKE_TRAVERSAL = cat $(TRAVERSAL_DEP) > $(TRAVERSAL_FILE)

ALL_FILE = ./utils-all.js
ALL_DEP = $(CORE_DEP) $(CLASSES) $(TRAVERSAL)
MAKE_ALL = cat $(ALL_DEP) > $(ALL_FILE)

CLEAN_DEP = $(CORE_FILE) $(CLASSES_FILE) $(TRAVERSAL_FILE)\
	$(ALL_FILE)
MAKE_CLEAN = rm -f $(CLEAN_DEP)

.PHONY: core
core:
	$(MAKE_CORE)

.PHONY: classes
classes:
	$(MAKE_CLASSES)

.PHONY: traversal
traversal:
	$(MAKE_TRAVERSAL)

.PHONY: all
all:
	$(MAKE_ALL)

.PHONY: clean
clean: 
	$(MAKE_CLEAN)
