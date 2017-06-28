#!/bin/bash

# 'npm test' must be run from the node-red-contrib-alasql install directory first!


echo "symlink to this release of node-red-contrib-alasql"
npm link

# Set any custom environment stuff here
export PORT=8081

# Bring up node red
echo "node-red -u ./test/flotsam/userdir ./test/flotsam/userdir/alafiletests.json"
node-red -u ./test/flotsam/userdir ./test/flotsam/userdir/alafiletests.json
