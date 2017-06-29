#!/bin/bash

echo "Starting node-red-contrib-alasql Test Suite"

# Set any custom environment stuff here
export PORT=8081

# Bring up test suite in node red
echo "node-red -u ./test/flotsam/userdir ./test/flotsam/userdir/alafiletests.json"
node-red -u ./test/flotsam/userdir ./test/flotsam/userdir/alafiletests.json
