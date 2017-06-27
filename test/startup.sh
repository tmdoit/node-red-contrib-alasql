#!/bin/bash

echo "node-red run test flows from node-red-contrib-alasql"

echo "symlink to this release of node-red-contrib-alasql"
npm link

echo ""
echo "Files root directory in test/flotsam/files"
cd test/flotsam/files

# Set any custom environment stuff here
export PORT=8081

# Bring up node red
echo "node-red -u ../userdir ../userdir/alafiletests.json"
node-red -u ../userdir ../userdir/alafiletests.json
