# AlaSQL and AlaFile node-red nodes

(c) 2016 Mathias Rangel Wulff & Andrey Gershun

Test system contributed by Kim McKinley (http://github.com/potofcoffee2go). 
Requests and comments are welcome to @potofcoffee2go.

## Test node-red-contrib-alasql

It is assumed that you already have [nodejs](//nodejs.org), [git](//git-scm.com)
and [node-red](//nodered.org) installed on your system.
node-red needs to have been installed with the -g global option 
`npm install node-red -g`.

The minimum development enviroment uses Node.js version: v4.7.3 and 
Node-RED version: v0.16.2. A higher level of Node.js (for example 6.x.x) is
recommended.

There are a set of node-red-contrib-alasql test flows that you can evaluate,
enjoy, and play around with. Basically, `alasql nodes` access javascript objects
as if they were a SQL database. The `ala file in/out` nodes transforms javascript
objects to .xlsx, .xls, .csv, etc. files.

The `advanced->alasql` node outputs node-red msg.payload resulting from SQL queries.

Perform the following to test the current release of *node-red-contrib-alasql*
using the provided flows - and against flows that you have already built from
a previous *node-red-contrib-alasql* release.

## Install node-red-contrib-alasql test suite
From a directory that you normally put node-red nodes into :

```
git clone https://github.com/PotOfCoffee2Go/node-red-contrib-alasql.git

```
which will create a *node-red-contrib-alasql* sub-directory.

**Todo: change when commited to production**
Switch to the The PotOfCoffee2Go (poc2go) is the latest and greatest release.
Note that if you are creating a workspace on Cloud9, OpenShift, etc. you may not
need to do the `cd node-red-contrib-alasql`

```
git checkout --track origin/poc2go

```
> Note that if you are creating a workspace on Cloud9, OpenShift, etc. you may
not need to do the `cd node-red-contrib-alasql` below. Regardless, will need to
do the `npm install` to bring in the dependencies of the nodes.

```
cd node-red-contrib-alasql
npm install

```

To bring the test system up, will need to do :

```
npm test
```

This will create a [flotsam](http://www.dictionary.com/browse/flotsam) directory
under the *test* sub-directory. Flotsam will contain all the stuff required by
node-red to come up.

*npm test* will display the commands require to bring up the test system. They
are different depending on if running on Linux or Windows (big suprise!). 
Copy and paste the command for the system which you are running.
```
To start node-red server for testing on Linux  : test/startup.sh
To start node-red server for testing on Windows: npm link & test\startup.bat & cd ..\..\..

```

