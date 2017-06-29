echo "Starting node-red-contrib-alasql Test Suite"

rem Set any custom environment stuff here
rem set PORT=8081

rem Bring up node-red in test suite
echo "node-red -u ./test/flotsam/userdir ./test/flotsam/userdir/alafiletests.json"
node-red -u .\test\flotsam\userdir .\test\flotsam\userdir\alafiletests.json
