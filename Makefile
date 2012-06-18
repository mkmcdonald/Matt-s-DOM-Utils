SHELL = /bin/sh

LIBRARY = Library
BUILDS = Builds
UNCOMPRESSED = $(BUILDS)/Uncompressed
COMPRESSED = $(BUILDS)/Compressed

# core

LICENSE = $(LIBRARY)/license.js
UTILS = $(LIBRARY)/utils.js
METADATA = $(LIBRARY)/metadata.js
RAISE = $(LIBRARY)/raise.js
TYPES = $(LIBRARY)/types.js
IS = $(LIBRARY)/is.js
HELPERS = $(LIBRARY)/helpers.js
NODE = $(LIBRARY)/node.js
CREATE = $(LIBRARY)/create.js

# additional modules

CLASSES = $(LIBRARY)/classes.js
TRAVERSE = $(LIBRARY)/traverse.js
SELECT = $(LIBRARY)/select.js

CORE_DEP = $(LICENSE) $(UTILS) $(METADATA) $(RAISE) $(TYPES) $(IS)\
	$(HELPERS) $(NODE) $(CREATE)

COMPLETE_FILE = $(UNCOMPRESSED)/utils-complete.js
COMPLETE_DEP = $(CORE_DEP) $(CLASSES) $(TRAVERSE) $(SELECT)
MAKE_COMPLETE = cat $(COMPLETE_DEP) > $(COMPLETE_FILE);

CORE_FILE = $(UNCOMPRESSED)/utils-core.js
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

COPY_LIB = find $(LIBRARY) -name "*.js" -type f | xargs\
	cp -t $(UNCOMPRESSED);
MAKE_COMPRESS = $(COPY_LIB) ./compress.sh;

MAKE_CLEAN = find $(BUILDS) -type f | xargs rm -f;

all: core classes traverse select complete compress
	@echo "--------------------";
	@echo "";
	@echo "ALL BUILDS COMPLETE";
	@echo "";

complete:
	@echo "building utils-complete.js";
	@$(MAKE_COMPLETE)
	@echo "utils-complete.js built";

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

compress:
	@echo "--------------------";
	@echo "";
	@echo "COMPRESSING BUILDS";
	@echo "";
	@$(MAKE_COMPRESS)
	@echo "";
	@echo "BUILDS COMPRESSED";
	@echo "";

clean: 
	@echo "all builds queued for deletion";
	@$(MAKE_CLEAN)
	@echo "all builds deleted";

.PHONY: all install uninstall core classes traverse select compress clean
