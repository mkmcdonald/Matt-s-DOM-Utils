SHELL = /bin/sh

LIBRARY = Library
BUILDS = Builds
UNCOMPRESSED = $(BUILDS)/Uncompressed
COMPRESSED = $(BUILDS)/Compressed

# head

LICENSE = $(LIBRARY)/license.js
UTILS = $(LIBRARY)/utils.js
METADATA = $(LIBRARY)/metadata.js


# modules

RAISE = $(LIBRARY)/raise.js
TYPES = $(LIBRARY)/types.js
IS = $(LIBRARY)/is.js
NODE = $(LIBRARY)/node.js
CREATE = $(LIBRARY)/create.js
CLASSES = $(LIBRARY)/classes.js
TRAVERSE = $(LIBRARY)/traverse.js
TEXT = $(LIBRARY)/text.js
SELECT = $(LIBRARY)/select.js

# build

HEAD_FILE = $(UNCOMPRESSED)/utils-head.js
HEAD_DEP = $(LICENSE) $(UTILS) $(METADATA)
MAKE_HEAD = cat $(HEAD_DEP) > $(HEAD_FILE);

COMPLETE_FILE = $(UNCOMPRESSED)/utils-complete.js
COMPLETE_DEP = $(HEAD_FILE) $(RAISE) $(TYPES) $(IS) $(NODE) $(CREATE)\
	$(CLASSES) $(TRAVERSE) $(TEXT) $(SELECT)
MAKE_COMPLETE = cat $(COMPLETE_DEP) > $(COMPLETE_FILE);

COPY_LIB = find $(LIBRARY) -name "*.js" -type f | xargs\
	cp -t $(UNCOMPRESSED);
MAKE_COMPRESS = $(COPY_LIB) ./compress.sh;

MAKE_CLEAN = find $(BUILDS) -type f | xargs rm -f;

all: complete compress
	@echo "--------------------";
	@echo "";
	@echo "BUILD COMPLETE";
	@echo "";

head:
	@echo "building utils-head.js";
	@$(MAKE_HEAD)
	@echo "utils-head.js built";

complete: head
	@echo "building utils-complete.js";
	@$(MAKE_COMPLETE)
	@echo "utils-complete.js built";

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

.PHONY: all head complete compress clean
