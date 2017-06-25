echo "node-red run test flows from node-red-contrib-alasql"

echo "Files root directory in test\flotsam\files"
cd test\flotsam\files

rem Set any custom environment stuff here
rem set PORT=8081

rem Bring up node red
node-red -u ..\userdir ..\userdir\alafiletests.json

rem Put us back to directory we started this bat file
cd ../../..
