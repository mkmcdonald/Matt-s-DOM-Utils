SHELL = /bin/sh

LIBRARY = Library
BUILDS = Builds
UNCOMPRESSED = $(BUILDS)/Uncompressed
COMPRESSED = $(BUILDS)/Compressed

# core

UTILS = $(LIBRARY)/utils.js
RAISE = $(LIBRARY)/raise.js
TYPES = $(LIBRARY)/types.js
HELPERS = $(LIBRARY)/helpers.js
IS = $(LIBRARY)/is.js
CAN = $(LIBRARY)/can.js
NODE = $(LIBRARY)/node.js
CREATE = $(LIBRARY)/create.js

# additional modules

TRAVERSE = $(LIBRARY)/traverse.js
CLASSES = $(LIBRARY)/classes.js
SELECT = $(LIBRARY)/select.js

ALL_FILE = $(UNCOMPRESSED)/utils-all.js
ALL_DEP = $(CORE_DEP) $(CLASSES) $(TRAVERSE) $(SELECT)
MAKE_ALL = cat $(ALL_DEP) > $(ALL_FILE);

CORE_FILE = $(UNCOMPRESSED)/utils-core.js
CORE_DEP = $(UTILS) $(RAISE) $(TYPES) $(HELPERS) $(IS) $(CAN)\
	$(NODE) $(CREATE)
MAKE_CORE = cat $(CORE_DEP) > $(CORE_FILE);

CLASSES_FILE = $(UNCOMPRESSED)/utils-classes.js
CLASSES_DEP = $(CORE_DEP) $(CLASSES)
MAKE_CLASSES = cat $(CLASSES_DEP) > $(CLASSES_FILE);

TRAVERSE_FILE = $(UNCOMPRESSED)/utils-traverse.js
TRAVERSE_DEP = $(CORE_DEP) $(TRAVERSE)
MAKE_TRAVERSE = cat $(TRAVERSE_DEP) > $(TRAVERSE_FILE);

SELECT_FILE = $(UNCOMPRESSED)/utils-select.js
SELECT_DEP = $(CORE_DEP) $(SELECT)
MAKE_SELECT = cat $(SELECT_DEP) > $(SELECT_FILE);

MAKE_INSTALL = ./compress.sh;

MAKE_CLEAN = find $(UNCOMPRESSED) -type f | xargs rm -f;

MAKE_UNINSTALL = find $(COMPRESSED) -type f | xargs rm -f;

all: core classes traverse select
	@echo "building utils-all.js";
	@$(MAKE_ALL)
	@echo "utils-all.js built";

install:
	@echo "compressing builds";
	@$(MAKE_INSTALL)
	@echo "builds compressed";

uninstall:
	@echo "removing compressed builds";
	@$(MAKE_UNINSTALL);
	@echo "compressed builds removed";

core:
	@echo "building utils-core.js";
	@$(MAKE_CORE)
	@echo "utils-core.js built";

classes:
	@echo "building utils-classes.js";
	@$(MAKE_CLASSES)
	@echo "utils-classes.js built";

traverse:
	@echo "building utils-traverse.js";
	@$(MAKE_TRAVERSE)
	@echo "utils-traverse.js built";

select:
	@echo "building utils-select.js";
	@$(MAKE_SELECT)
	@echo "utils-select.js built";

clean: 
	@echo "removing builds";
	@$(MAKE_CLEAN)
	@echo "builds removed";

.PHONY: all install uninstall core classes traverse select clean
