#!/bin/bash

FULL="Builds/Uncompressed/";
MIN="Builds/Compressed/";

compress ()
{
	INPUT="$1.js";
	MIN_OUTPUT="${MIN}$1-min.js";
	yui-compressor --type js --charset utf-8\
		-o $MIN_OUTPUT ${FULL}$INPUT;
	echo "$INPUT compressed";
}

compress_parts ()
{
	PARTS="${@}";
	PART_INDEX=0;
	while [ $PART_INDEX -lt ${#PARTS[@]} ]; do
		compress ${PARTS[$PART_INDEX]};
		PART_INDEX=$[ $PART_INDEX + 1 ];
	done
}

add_license ()
{
	NAME="$1-min.js";
	INPUT="${MIN}$NAME";
	LICENSE="${FULL}license.js";
	cat $LICENSE $INPUT > "${MIN}temp";
	mv "${MIN}temp" $INPUT;
}

compress_builds ()
{
	BUILDS="${@}";
	BUILD_INDEX=0;
	while [ $BUILD_INDEX -lt ${#BUILDS[@]} ]; do
		compress ${BUILDS[$BUILD_INDEX]};
		add_license ${BUILDS[$BUILD_INDEX]};
		BUILD_INDEX=$[ $BUILD_INDEX + 1 ];
	done
}

begin_parts ()
{
	PARTS=(
		"utils"
		"metadata"
		"raise"
		"types"
		"helpers"
		"is"
		"node"
		"create"
		"classes"
		"traverse"
		"select"
	);
	compress_parts "${PARTS[@]}";
}

begin_builds ()
{
	BUILDS=(
		"utils-core"
		"utils-classes"
		"utils-traverse"
		"utils-select"
		"utils-all"
	);
	compress_builds "${BUILDS[@]}";
}

init ()
{
	begin_parts;
	begin_builds;
}

init;
exit 0;
