#!/bin/bash

FULL="Builds/Uncompressed/";
MIN="Builds/Compressed/";
COMPRESSOR="yui-compressor.jar";

compress ()
{
	INPUT="$1.js";
	MIN_OUTPUT="${MIN}$1-min.js";
	if [ -f ${FULL}$INPUT ]; then
		java -jar ${COMPRESSOR} --type js --charset utf-8\
			-o ${MIN_OUTPUT} ${FULL}$INPUT;
		echo "$INPUT compressed";
	fi;
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
	LICENSE="${FULL}license.js";
	INPUT="${MIN}$NAME";
	if [ -f ${LICENSE} -a -f ${INPUT} ]; then
		cat $LICENSE $INPUT > "${MIN}temp";
		mv "${MIN}temp" $INPUT;
	fi;
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
		"raise"
		"types"
		"is"
		"node"
		"create"
		"classes"
		"traverse"
		"text"
		"ancestors"
		"select"
	);
	compress_parts "${PARTS[@]}";
}

begin_builds ()
{
	BUILDS=(
		"utils-head"
		"utils-complete"
		"utils-build"
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
