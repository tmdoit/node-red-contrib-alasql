rem 'npm test' must be run from the node-red-contrib-alasql install directory first!

echo "node-red run test flows from node-red-contrib-alasql"

rem Set any custom environment stuff here
rem set PORT=8081

rem link and Bring up node red
echo "symlink to this release of node-red-contrib-alasql"
echo "node-red -u ./test/flotsam/userdir ./test/flotsam/userdir/alafiletests.json"
npm link & node-red -u ./test/flotsam/userdir ./test/flotsam/userdir/alafiletests.json
