#!/bin/bash

/Users/yc/liuwei/project/nodejs/svgo/bin/svgo $1 --enable=removeRect,inlineStyles,removeFillNoneLw --disable=convertPathData,mergePaths --config '{ "plugins": [ { "inlineStyles": { "onlyMatchedOnce": false } }] }' -o $2
