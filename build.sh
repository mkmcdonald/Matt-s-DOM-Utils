MODULES=();
MODULE="";

FULL="Builds/Uncompressed"; 
MIN="Builds/Compressed"; 

ARGS=${@};
ARG="";

BUILD=();

function begin_modules ()
{
	MODULES=(
		"raise"
		"types"
		"is"
		"node"
		"create"
		"classes"
		"traverse"
		"text"
		"select"
	);
}

function add_module()
{
	INDEX=${#BUILD[@]};
	FILE="${FULL}/$1.js";
	if [ -f ${FILE} ]; then
		BUILD[${INDEX}]=${FILE};
	fi;
}

function dump_build
{
	OUTPUT="${FULL}/utils-build.js";
	cat ${BUILD[@]} > ${OUTPUT};
}

function create_module ()
{
	ARG=$1;
	for MODULE in ${MODULES[@]}; do
		if [ ${MODULE} == ${ARG} ]; then
			add_module ${ARG};
		fi;
	done;
	dump_build;
}

function create_build ()
{
	for ARG in ${ARGS[@]}; do
		create_module ${ARG};
	done;
}

function begin_build () {
	BUILD=(
		"${FULL}/utils-head.js"
	);
	create_build;
}

function init ()
{
	begin_modules;
	begin_build;
}

init;
exit 0;
