echo "Starting node-red-contrib-alasql Test Suite"

rem Set any custom environment stuff here
rem set PORT=8081

rem link and bring up node-red-contrib-alasql test suite in node red
echo "Symlink to this release of node-red-contrib-alasql"
echo "node-red -u ./test/flotsam/userdir ./test/flotsam/userdir/alafiletests.json"
npm link & node-red -u .\test\flotsam\userdir .\test\flotsam\userdir\alafiletests.json
