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
		echo "adding $1.js to build";
	fi;
}

function create_module ()
{
	ARG=$1;
	for MODULE in ${MODULES[@]}; do
		if [ ${MODULE} == ${ARG} ]; then
			add_module ${ARG};
		fi;
	done;
}

function dump_build
{
	OUTPUT="${FULL}/utils-build.js";
	cat ${BUILD[@]} > ${OUTPUT};
	echo "--------------------";
	echo "";
	echo "BUILD COMPLETE";
	echo "";
	echo "build sent to ${FULL}/utils-build.js";
}

function create_build ()
{
	echo "--------------------";
	echo "";
	echo "ADDING MODULES";
	echo "";
	for ARG in ${ARGS[@]}; do
		create_module ${ARG};
	done;
	dump_build;
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
