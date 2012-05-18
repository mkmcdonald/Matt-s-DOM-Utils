#!/bin/bash

compress ()
{
	FULL="Builds/Uncompressed/";
	MIN="Builds/Compressed/";
	INPUT="$1.js";
	OUTPUT="$1-min.js";
	yui-compressor --type js --charset utf-8\
		-o ${MIN}$OUTPUT ${FULL}$INPUT;
	echo "$INPUT compressed";
}

begin_compress ()
{
	FILES=${@};
	INDEX=0;
	while [ $INDEX -lt ${#FILES[@]} ]; do
		compress ${FILES[$INDEX]};
		INDEX=$[ $INDEX + 1 ];
	done
}

init ()
{
	FILES=(
		"utils-core"
		"utils-classes"
		"utils-traverse"
		"utils-select"
		"utils-all"
	);
	begin_compress ${FILES[@]};
}

init;
exit 0;
